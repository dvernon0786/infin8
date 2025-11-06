export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    
    // Validate email
    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Valid email is required' });
    }

    // In production, you would:
    // 1. Validate email format
    // 2. Add to newsletter service (Mailchimp, HubSpot, etc.)
    // 3. Send confirmation email
    // 4. Handle errors appropriately

    console.log('Newsletter subscription:', email);

    res.status(200).json({ message: 'Subscription successful', success: true });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

