import { sendLeadConfirmation, sendAdminNotification } from '../../lib/resend';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;
      
      // Validate required fields
      if (!data.email || !data.fullName) {
        return res.status(400).json({ 
          message: 'Full name and email are required', 
          success: false 
        });
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        return res.status(400).json({ 
          message: 'Invalid email format', 
          success: false 
        });
      }

      // Send confirmation email to user
      const confirmationResult = await sendLeadConfirmation(
        data.email,
        data.fullName
      );

      // Prepare admin notification data
      const adminData = {
        fullName: data.fullName,
        email: data.email,
        investment: data.investment || 'N/A',
        timeline: data.timeline || 'N/A',
        businessType: Array.isArray(data.businessType) 
          ? data.businessType.join(', ') 
          : (data.businessType || 'N/A'),
        preferredContact: data.preferredContact || 'N/A',
      };

      // Send admin notification (non-blocking)
      const adminResult = await sendAdminNotification('lead', adminData);

      // Log results for debugging
      console.log('Lead form submission:', data);
      console.log('Confirmation email sent:', confirmationResult.success);
      console.log('Admin notification sent:', adminResult.success);

      // Return success even if emails fail (to not break user experience)
      if (!confirmationResult.success) {
        console.error('Failed to send confirmation email:', confirmationResult.error);
      }
      if (!adminResult.success) {
        console.error('Failed to send admin notification:', adminResult.error);
      }

      res.status(200).json({ 
        message: 'Lead received successfully', 
        success: true 
      });
    } catch (error) {
      console.error('Error processing lead form:', error);
      res.status(500).json({ 
        message: 'Internal server error', 
        success: false 
      });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

