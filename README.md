# SLV Cargo Movers - Portfolio Website

A modern, responsive portfolio website for S L V Cargo Movers and Packers, a logistics and cargo transportation company based in Bangalore, India. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js 15 for optimal performance
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Interactive Components**: Smooth animations and transitions using Framer Motion
- **Contact Form**: Functional contact form for quote requests integrated with Formspree
- **Service Showcase**: Detailed service pages with pricing and features
- **WhatsApp Integration**: Floating action button for quick contact

## Pages

- **Home**: Hero section, services overview, company stats, client testimonials, and call-to-action
- **About**: Company history, mission, clients, team, and awards
- **Services**: Detailed service descriptions with pricing, features, coverage area, and process
- **Contact**: Contact form, company information, and office details

## Services Offered

- **Logistics**: End-to-end logistics management with domestic, city-focused coverage
- **Cargo Movers**: Safe, timely cargo movement with professional handling and tracking
- **Packers**: Professional packing services using quality materials for secure transit
- **End-to-End Delivery**: Complete door-to-door delivery service handling everything from pickup to final delivery
- **Freight Movers**: Efficient freight moving services for commercial and industrial shipments

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Poppins (headings), Montserrat (body), Open Sans (alternative)

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

4. Open [http://localhost:3000](http://localhost:3000) in your browser (or specified port)

## Project Structure

```
slv-portfolio/
├── components/           # Reusable React components
│   ├── AnimatedCounter.tsx
│   ├── Button.tsx
│   ├── Cover.tsx
│   ├── FloatingActionButton.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── RippleBackground.tsx
│   ├── ScrollProgress.tsx
│   ├── ServiceCard.tsx
│   └── TestimonialsCarousel.tsx
├── public/               # Static assets
│   ├── 1.png            # Company logo
│   ├── final.png        # Hero section image
│   ├── favicon2.jpeg    # Favicon
│   ├── intro-video.mp4  # Intro video
│   └── logofinalfinal.png
├── src/
│   └── app/
│       ├── about/       # About page
│       ├── contact/     # Contact page
│       ├── services/    # Services page
│       ├── globals.css  # Global styles and CSS variables
│       ├── layout.tsx   # Root layout with metadata
│       └── page.tsx     # Home page
├── types/               # TypeScript type definitions
│   └── index.ts
├── next.config.ts       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## Customization

### Colors
The website uses a custom color scheme defined in `src/app/globals.css`:
- Primary Orange: `#FF7A00` (orange-500)
- Dark Orange: `#EA580C` (orange-600)
- Navy Blue: `#001F3F` (navy-900)
- Light Navy: `#334155` (navy-800)

### Content
- Update company information in the respective page components
- Modify service details in the services page
- Customize contact information in the contact page
- Update team member information in the about page
- Edit client testimonials in the home page

## Company Information

- **Company Name**: S L V Cargo Movers and Packers
- **Address**: SAHAKARNAGAR, BANGALORE-560092
- **Phone**: +91 9901389430
- **Email**: slvcargomoverss@gmail.com
- **Website**: www.slvcargo.in
- **Working Hours**: 9 AM to 6 PM (Office Hours)

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
- Email: slvcargomoverss@gmail.com
- Phone: +91 9901389430
