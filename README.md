# Ranga & Company - Tax Consultancy Website

A modern, SEO-optimized website for Ranga & Company, a tax consultancy firm based in Jodhpur, Rajasthan.

## Features

- **SEO Optimized**: Complete meta tags, structured data, sitemap, and robots.txt
- **Mobile Responsive**: Fully responsive design that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **Accessibility**: WCAG compliant with proper focus states and semantic HTML

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rangaco
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # SEO sitemap
│   └── robots.ts           # SEO robots.txt
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services grid
│   ├── WhyChooseUs.tsx     # Features section
│   ├── IncomeTaxSection.tsx # Income tax services
│   ├── GSTSection.tsx      # GST services
│   ├── AuditSection.tsx    # Audit services
│   ├── ComplianceSection.tsx # Compliance services
│   ├── Testimonial.tsx     # Client testimonial
│   ├── FAQ.tsx             # FAQ section
│   ├── Footer.tsx          # Footer with links
│   └── StructuredData.tsx  # JSON-LD structured data
```

## SEO Features

- **Meta Tags**: Complete Open Graph, Twitter Cards, and standard meta tags
- **Structured Data**: JSON-LD markup for better search engine understanding
- **Sitemap**: Automatic XML sitemap generation
- **Robots.txt**: Proper crawling instructions
- **Canonical URLs**: Prevents duplicate content issues
- **Schema Markup**: Rich snippets for local business

## Customization

### Colors
The website uses a consistent color scheme:
- Primary Green: `#22c55e` (green-500)
- Primary Blue: `#2563eb` (blue-600)
- Text Gray: `#374151` (gray-700)
- Background: `#ffffff` (white)

### Content
Update the content in each component file to match your business:
- Contact information in `Footer.tsx`
- Services in `Services.tsx`
- Company details in `layout.tsx`

### SEO
Update SEO settings in `layout.tsx`:
- Replace `your-google-verification-code` with actual Google verification
- Update `metadataBase` URL to your domain
- Modify meta descriptions and keywords

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Performance Optimization

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting by route
- **Minification**: Automatic CSS and JS minification
- **Caching**: Optimized caching headers

## Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Focus States**: Visible focus indicators
- **Alt Text**: Proper image descriptions
- **ARIA Labels**: Screen reader support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email kr@rangaco.com or call +91 9829021030.

---

Built with ❤️ for Ranga & Company
