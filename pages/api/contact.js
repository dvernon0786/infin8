import { sendContactConfirmation, sendAdminNotification } from '../../lib/resend';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;
      
      // Validate required fields
      if (!data.email || !data.name) {
        return res.status(400).json({ 
          message: 'Name and email are required', 
          success: false 
        });
      }

      // Send confirmation email to user
      const confirmationResult = await sendContactConfirmation(
        data.email,
        data.name
      );

      // Send admin notification (non-blocking - don't fail if this fails)
      const adminData = {
        name: data.name,
        email: data.email,
        phone: data.phone || 'N/A',
        country: data.country || 'N/A',
        message: data.question || data.message || 'N/A',
      };
      
      const adminResult = await sendAdminNotification('contact', adminData);

      // Log results for debugging
      console.log('Contact form submission:', data);
      console.log('Confirmation email sent:', confirmationResult.success);
      console.log('Admin notification sent:', adminResult.success);

      // Return success even if emails fail (to not break user experience)
      // But log errors for debugging
      if (!confirmationResult.success) {
        console.error('Failed to send confirmation email:', confirmationResult.error);
      }
      if (!adminResult.success) {
        console.error('Failed to send admin notification:', adminResult.error);
      }

      res.status(200).json({ 
        message: 'Message received successfully', 
        success: true 
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      res.status(500).json({ 
        message: 'Internal server error', 
        success: false 
      });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

