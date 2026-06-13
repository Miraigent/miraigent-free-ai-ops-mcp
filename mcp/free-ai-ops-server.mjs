#!/usr/bin/env node

const serverInfo = { name: 'miraigent-free-ai-ops-mcp', version: '0.1.9' };

const tools = [
  {
    name: 'human_review_gate',
    description: 'Decide whether an AI draft should be sent, reviewed, or stopped.',
    inputSchema: {
      type: 'object',
      properties: {
        draftType: { type: 'string' },
        audience: { type: 'string' },
        riskFlags: { type: 'array', items: { type: 'string' } },
        reviewOwner: { type: 'string' },
        sendMode: { type: 'string' }
      }
    }
  },
  {
    name: 'faq_candidate_review',
    description: 'Review whether an inquiry pattern should become a public FAQ, internal FAQ, human-review rule, or rejection.',
    inputSchema: {
      type: 'object',
      properties: {
        inquiryPattern: { type: 'string' },
        frequency: { type: 'string' },
        responseCost: { type: 'string' },
        riskLevel: { type: 'string' },
        currentAnswer: { type: 'string' }
      }
    }
  },
  {
    name: 'ai_safe_crm_note',
    description: 'Structure a CRM note by separating customer facts, AI suggestions, human decisions, and next actions.',
    inputSchema: {
      type: 'object',
      properties: {
        rawNoteSummary: { type: 'string' },
        channel: { type: 'string' },
        containsPersonalData: { type: 'boolean' },
        nextAction: { type: 'string' },
        owner: { type: 'string' }
      }
    }
  },
  {
    name: 'prompt_risk_review',
    description: 'Review an AI prompt or task before it is used in operations.',
    inputSchema: {
      type: 'object',
      properties: {
        operation: { type: 'string' },
        promptSummary: { type: 'string' },
        dataTypes: { type: 'array', items: { type: 'string' } },
        customerFacing: { type: 'boolean' },
        riskLevel: { type: 'string' }
      }
    }
  }
];

function textContent(value) {
  return [{ type: 'text', text: JSON.stringify(value, null, 2) }];
}

function normalizeRisk(value) {
  return String(value || 'medium').toLowerCase();
}

function callTool(name, args = {}) {
  if (name === 'human_review_gate') {
    const flags = Array.isArray(args.riskFlags) ? args.riskFlags.map(String) : [];
    const riskText = flags.join(' ').toLowerCase();
    const highRisk = riskText.match(/legal|medical|payment|refund|contract|personal|privacy|complaint|public/);
    const sendMode = String(args.sendMode || '').toLowerCase();
    const gateStatus = highRisk ? 'stop' : sendMode.includes('auto') || flags.length ? 'review_required' : 'auto_ok';
    const decisionNote =
      gateStatus === 'stop'
        ? 'Stop before sending. Assign a human owner and confirm the source policy or data-handling rule.'
        : gateStatus === 'review_required'
          ? 'Human review is required before this draft can be sent.'
          : 'Light review is enough if the source facts and tone are current.';
    return {
      tool: name,
      gateStatus,
      reviewOwner: args.reviewOwner || 'human reviewer',
      decisionNote,
      checklist: [
        'Confirm the draft does not include private customer data.',
        'Confirm the source FAQ or policy is current.',
        'Confirm the audience and send mode are appropriate.',
        'Log the final human decision before sending.'
      ],
      logFields: ['draft_type', 'audience', 'risk_flags', 'review_owner', 'gate_status', 'decision_note'],
      nextLogRow: {
        draft_type: args.draftType || 'unspecified draft',
        audience: args.audience || 'unspecified audience',
        risk_flags: flags.join('; ') || 'none',
        review_owner: args.reviewOwner || 'human reviewer',
        gate_status: gateStatus,
        decision_note: decisionNote
      },
      boundary: 'This tool is a review helper. It does not send messages.'
    };
  }

  if (name === 'faq_candidate_review') {
    const risk = normalizeRisk(args.riskLevel);
    const status = risk === 'high' ? 'human_review_rule' : risk === 'medium' ? 'internal_faq' : 'public_faq_candidate';
    return {
      tool: name,
      recommendedStatus: status,
      faqOutline: {
        questionPattern: args.inquiryPattern || 'Describe the repeated question pattern.',
        answerScope: args.currentAnswer ? 'Review and simplify the current answer.' : 'Draft a short answer outline before publication.',
        owner: 'FAQ reviewer'
      },
      reviewSignals: {
        frequency: args.frequency || 'unknown',
        responseCost: args.responseCost || 'unknown',
        riskLevel: risk
      },
      boundary: 'Separate public FAQ, internal FAQ, and human-review rules before automation.'
    };
  }

  if (name === 'ai_safe_crm_note') {
    return {
      tool: name,
      crmNote: {
        channel: args.channel || 'unknown',
        customerFacts: args.rawNoteSummary || 'Add factual summary only.',
        aiSuggestion: 'Keep AI suggestions separate from confirmed facts.',
        humanDecision: 'Add the final human decision here.',
        nextAction: args.nextAction || 'Define next action.',
        owner: args.owner || 'owner required'
      },
      maskingChecklist: args.containsPersonalData
        ? ['Mask names if not needed.', 'Remove contact details before AI use.', 'Avoid copying raw private text into external tools.']
        : ['Confirm no personal data is included.', 'Keep synthetic examples in public issues.'],
      logFields: ['channel', 'customer_facts', 'ai_suggestion', 'human_decision', 'next_action', 'owner'],
      boundary: 'This tool structures notes. It is not an anonymizer and does not store data.'
    };
  }

  if (name === 'prompt_risk_review') {
    const dataTypes = Array.isArray(args.dataTypes) ? args.dataTypes.map(String) : [];
    const risk = normalizeRisk(args.riskLevel);
    const dataText = dataTypes.join(' ').toLowerCase();
    const sensitiveData = dataText.match(/name|email|phone|address|payment|medical|legal|contract|personal|customer/);
    const shouldStop = risk === 'high' || (args.customerFacing && sensitiveData);
    return {
      tool: name,
      operation: args.operation || 'unspecified operation',
      recommendation: shouldStop ? 'stop_before_ai_use' : args.customerFacing ? 'human_review_required' : 'review_checklist_required',
      riskFlags: [
        ...(args.customerFacing ? ['customer_facing'] : []),
        ...(sensitiveData ? ['sensitive_data_possible'] : []),
        ...(risk === 'high' ? ['high_risk'] : [])
      ],
      checklist: [
        'Rewrite the prompt as a short task summary before sending it to AI.',
        'Remove private customer data unless a reviewed policy allows it.',
        'Confirm whether the output can affect a customer, payment, contract, or complaint.',
        'Keep a human review note for the final decision.'
      ],
      saferNextStep: shouldStop
        ? 'Stop and define a human-reviewed data handling rule before using this prompt.'
        : 'Run the prompt only after documenting data handling and human review expectations.',
      boundary: 'This tool is a prompt risk helper. It is not legal advice and does not call an AI API.'
    };
  }

  throw new Error('Unknown tool: ' + name);
}

function handle(request) {
  if (request.method === 'initialize') {
    return {
      protocolVersion: '2024-11-05',
      capabilities: { tools: {} },
      serverInfo
    };
  }

  if (request.method === 'tools/list') {
    return { tools };
  }

  if (request.method === 'tools/call') {
    const params = request.params || {};
    return { content: textContent(callTool(params.name, params.arguments || {})) };
  }

  throw new Error('Unsupported method: ' + request.method);
}

let buffer = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', (chunk) => {
  buffer += chunk;
  const lines = buffer.split('\n');
  buffer = lines.pop() || '';
  for (const line of lines) {
    if (!line.trim()) continue;
    const request = JSON.parse(line);
    try {
      const result = handle(request);
      process.stdout.write(JSON.stringify({ jsonrpc: '2.0', id: request.id, result }) + '\n');
    } catch (error) {
      process.stdout.write(JSON.stringify({ jsonrpc: '2.0', id: request.id, error: { code: -32000, message: error.message } }) + '\n');
    }
  }
});
