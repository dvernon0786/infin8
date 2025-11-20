# Infin8 - E-2 Visa Platform

A Next.js platform helping investors from treaty countries navigate the E-2 visa process.

## Getting Started

### Prerequisites
- Node.js 14.x or higher
- npm 6.x or higher

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
   - Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
   - Fill in your Resend API key and configuration (see [Resend Setup](#resend-email-service-setup) below)

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/pages` - Next.js pages and API routes
- `/pages/api` - API endpoints (contact, subscribe, lead-form)
- `/components` - React components
- `/lib` - Utility modules (email functions)
- `/public` - Static assets (images, PDFs)
- `/styles` - Global CSS styles

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Features

- E-2 visa eligibility checking
- Business matching and recommendations
- Country-specific visa information
- Resource library and guides
- Partner network connections
- Email notifications via Resend

## Resend Email Service Setup

This project uses [Resend](https://resend.com) for sending transactional emails (contact form confirmations, newsletter subscriptions, lead form notifications).

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev
RESEND_ADMIN_EMAILS=scott@infin8automation.com,engagehubonline@gmail.com
```

### Configuration

1. **RESEND_API_KEY**: Get your API key from the [Resend Dashboard](https://resend.com/api-keys)
   - For production, this is already configured in Vercel environment variables

2. **RESEND_FROM_EMAIL**: The email address used as the sender
   - Default: `onboarding@resend.dev` (Resend's default email)
   - Update this to your verified domain email (e.g., `noreply@yourdomain.com`) after domain verification

3. **RESEND_ADMIN_EMAILS**: Comma-separated list of admin email addresses that receive notifications
   - Used for contact form submissions, lead form submissions, and newsletter subscriptions
   - Example: `admin1@example.com,admin2@example.com`

### Email Functionality

The following emails are automatically sent:

- **Contact Form**: Confirmation email to user + notification to admins
- **Newsletter Subscription**: Welcome email to subscriber + notification to admins
- **Lead Form**: Confirmation email to user + notification to admins with lead details

### Domain Verification

For production use, you'll need to verify your domain in the Resend dashboard:
1. Go to [Resend Domains](https://resend.com/domains)
2. Add your domain
3. Add the required DNS records
4. Update `RESEND_FROM_EMAIL` to use your verified domain email address

