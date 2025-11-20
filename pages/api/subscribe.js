import { sendNewsletterConfirmation, sendAdminNotification } from '../../lib/resend';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { email } = req.body;
      
      // Validate email
      if (!email || !email.includes('@')) {
        return res.status(400).json({ 
          message: 'Valid email is required', 
          success: false 
        });
      }

      // Basic email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          message: 'Invalid email format', 
          success: false 
        });
      }

      // Send welcome email to subscriber
      const confirmationResult = await sendNewsletterConfirmation(email);

      // Send admin notification (non-blocking)
      const adminResult = await sendAdminNotification('newsletter', { email });

      // Log results for debugging
      console.log('Newsletter subscription:', email);
      console.log('Welcome email sent:', confirmationResult.success);
      console.log('Admin notification sent:', adminResult.success);

      // Return success even if emails fail (to not break user experience)
      if (!confirmationResult.success) {
        console.error('Failed to send welcome email:', confirmationResult.error);
      }
      if (!adminResult.success) {
        console.error('Failed to send admin notification:', adminResult.error);
      }

      res.status(200).json({ 
        message: 'Subscription successful', 
        success: true 
      });
    } catch (error) {
      console.error('Error processing newsletter subscription:', error);
      res.status(500).json({ 
        message: 'Internal server error', 
        success: false 
      });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

