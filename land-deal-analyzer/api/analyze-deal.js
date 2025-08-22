export default function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Webhook-Signature');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  // Basic response for testing
  return res.status(200).json({
    success: true,
    message: 'Land Deal Analyzer webhook is working!',
    received: req.body || {},
    timestamp: new Date().toISOString(),
    endpoint: 'analyze-deal'
  });
}
