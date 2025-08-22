export default function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  return res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    platform: 'Vercel',
    message: 'Land Deal Analyzer API is running!',
    endpoints: {
      health: '/api/health',
      webhook: '/api/analyze-deal',
      batch: '/api/batch-analyze'
    }
  });
}
