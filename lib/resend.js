import { Resend } from 'resend';

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// Get configuration from environment variables
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
const ADMIN_EMAILS = process.env.RESEND_ADMIN_EMAILS 
  ? process.env.RESEND_ADMIN_EMAILS.split(',').map(email => email.trim())
  : [];

/**
 * Generic email sending function
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email address
 * @param {string} options.subject - Email subject
 * @param {string} options.html - HTML email content
 * @param {string} [options.text] - Plain text email content (optional)
 * @returns {Promise<Object>} Resend API response
 */
export async function sendEmail({ to, subject, html, text }) {
  try {
    const data = await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject,
      html,
      text,
    });
    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Send confirmation email to user after contact form submission
 * @param {string} userEmail - User's email address
 * @param {string} userName - User's name
 * @returns {Promise<Object>} Result object
 */
export async function sendContactConfirmation(userEmail, userName = 'there') {
  const subject = 'Thank you for contacting Infin8';
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${subject}</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #00AA44;">Thank you for contacting Infin8!</h1>
        <p>Hi ${userName},</p>
        <p>We've received your message and our team will get back to you as soon as possible. We typically respond within 24 hours.</p>
        <p>In the meantime, feel free to explore our automation services and resources.</p>
        <p>Best regards,<br>The Infin8 Team</p>
      </body>
    </html>
  `;
  const text = `Thank you for contacting Infin8!\n\nHi ${userName},\n\nWe've received your message and our team will get back to you as soon as possible. We typically respond within 24 hours.\n\nBest regards,\nThe Infin8 Team`;

  return await sendEmail({
    to: userEmail,
    subject,
    html,
    text,
  });
}

/**
 * Send welcome/confirmation email to new newsletter subscribers
 * @param {string} userEmail - Subscriber's email address
 * @returns {Promise<Object>} Result object
 */
export async function sendNewsletterConfirmation(userEmail) {
  const subject = 'Welcome to Infin8 Newsletter!';
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${subject}</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #00AA44;">Welcome to Infin8!</h1>
        <p>Thank you for subscribing to our newsletter!</p>
        <p>You'll now receive updates about:</p>
        <ul>
          <li>Latest automation service features</li>
          <li>Business growth tips and insights</li>
          <li>Special offers and promotions</li>
          <li>Industry news and updates</li>
        </ul>
        <p>We're excited to have you on board!</p>
        <p>Best regards,<br>The Infin8 Team</p>
      </body>
    </html>
  `;
  const text = `Welcome to Infin8!\n\nThank you for subscribing to our newsletter! You'll now receive updates about our latest automation service features, business growth tips, special offers, and industry news.\n\nBest regards,\nThe Infin8 Team`;

  return await sendEmail({
    to: userEmail,
    subject,
    html,
    text,
  });
}

/**
 * Send confirmation email to user after lead form submission
 * @param {string} userEmail - User's email address
 * @param {string} userName - User's name
 * @returns {Promise<Object>} Result object
 */
export async function sendLeadConfirmation(userEmail, userName = 'there') {
  const subject = 'Thank you for your interest in Infin8';
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${subject}</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #00AA44;">Thank you for your interest!</h1>
        <p>Hi ${userName},</p>
        <p>We've received your information and one of our team members will reach out to you shortly to discuss how we can help automate and grow your business.</p>
        <p>In the meantime, feel free to check out our resources and learn more about our $1,000/month automation service.</p>
        <p>Best regards,<br>The Infin8 Team</p>
      </body>
    </html>
  `;
  const text = `Thank you for your interest in Infin8!\n\nHi ${userName},\n\nWe've received your information and one of our team members will reach out to you shortly to discuss how we can help automate and grow your business.\n\nBest regards,\nThe Infin8 Team`;

  return await sendEmail({
    to: userEmail,
    subject,
    html,
    text,
  });
}

/**
 * Send admin notification email for new submissions
 * @param {string} type - Type of submission ('contact', 'lead', 'newsletter')
 * @param {Object} data - Submission data
 * @returns {Promise<Object>} Result object
 */
export async function sendAdminNotification(type, data) {
  if (ADMIN_EMAILS.length === 0) {
    console.warn('No admin emails configured. Skipping admin notification.');
    return { success: false, error: 'No admin emails configured' };
  }

  let subject, html, text;

  switch (type) {
    case 'contact':
      subject = 'New Contact Form Submission - Infin8';
      html = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${subject}</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #00AA44;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${data.name || 'N/A'}</p>
            <p><strong>Email:</strong> ${data.email || 'N/A'}</p>
            <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
            <p><strong>Message:</strong></p>
            <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${data.message || 'N/A'}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </body>
        </html>
      `;
      text = `New Contact Form Submission\n\nName: ${data.name || 'N/A'}\nEmail: ${data.email || 'N/A'}\nPhone: ${data.phone || 'N/A'}\nMessage: ${data.message || 'N/A'}\nSubmitted: ${new Date().toLocaleString()}`;
      break;

    case 'lead':
      subject = 'New Lead Form Submission - Infin8';
      html = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${subject}</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #00AA44;">New Lead Form Submission</h2>
            ${Object.entries(data).map(([key, value]) => `
              <p><strong>${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</strong> ${value || 'N/A'}</p>
            `).join('')}
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </body>
        </html>
      `;
      text = `New Lead Form Submission\n\n${Object.entries(data).map(([key, value]) => `${key}: ${value || 'N/A'}`).join('\n')}\nSubmitted: ${new Date().toLocaleString()}`;
      break;

    case 'newsletter':
      subject = 'New Newsletter Subscription - Infin8';
      html = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${subject}</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #00AA44;">New Newsletter Subscription</h2>
            <p><strong>Email:</strong> ${data.email || 'N/A'}</p>
            <p><strong>Subscribed:</strong> ${new Date().toLocaleString()}</p>
          </body>
        </html>
      `;
      text = `New Newsletter Subscription\n\nEmail: ${data.email || 'N/A'}\nSubscribed: ${new Date().toLocaleString()}`;
      break;

    default:
      return { success: false, error: 'Invalid notification type' };
  }

  // Send to all admin emails
  const results = [];
  for (const adminEmail of ADMIN_EMAILS) {
    const result = await sendEmail({
      to: adminEmail,
      subject,
      html,
      text,
    });
    results.push({ email: adminEmail, ...result });
  }

  // Return success if at least one email was sent successfully
  const hasSuccess = results.some(r => r.success);
  return {
    success: hasSuccess,
    results,
  };
}

