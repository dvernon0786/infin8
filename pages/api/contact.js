export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    // Integrate with HubSpot API or save lead data here
    // Placeholder: console.log(data);

    // In production, you would:
    // 1. Validate the data
    // 2. Save to database or send to HubSpot/CRM
    // 3. Send confirmation email
    // 4. Handle errors appropriately

    console.log('Contact form submission:', data);

    res.status(200).json({ message: 'Lead received', success: true });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

