# SLV Cargo Movers - Portfolio Website

A modern, responsive portfolio website for SLV Cargo Movers, a logistics and cargo transportation company. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js 15 for optimal performance
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Interactive Components**: Smooth animations and transitions using Framer Motion
- **Contact Form**: Functional contact form for quote requests
- **Service Showcase**: Detailed service pages with pricing and features

## Pages

- **Home**: Hero section, services overview, company stats, and call-to-action
- **About**: Company history, mission, vision, team, and core values
- **Services**: Detailed service descriptions with pricing and features
- **Contact**: Contact form, company information, and FAQ section

## Services Offered

- **Air Freight**: Fast and reliable air cargo services
- **Road Transport**: Comprehensive road transportation solutions
- **Sea Freight**: Cost-effective sea freight services
- **Warehousing**: Secure warehousing facilities with inventory management

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans and Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd slv-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── ServiceCard.tsx
└── types/
    └── index.ts
```

## Customization

### Colors
The website uses a custom color scheme defined in `globals.css`:
- Primary Orange: `#f97316` (orange-500)
- Dark Orange: `#ea580c` (orange-600)
- Navy Blue: `#1e293b` (navy-900)
- Light Navy: `#334155` (navy-800)

### Content
- Update company information in the respective page components
- Modify service details in the services page
- Customize contact information in the contact page
- Update team member information in the about page

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms
The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Build Commands

```bash
# Development
npm run dev

# Production Build
npm run build

# Start Production Server
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact:
- Email: info@slvcargo.com
- Phone: +91 98765 43210
