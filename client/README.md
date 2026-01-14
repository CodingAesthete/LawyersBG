# README

This is a professional law firm website built with React, Vite, and Tailwind CSS.

## Features

- **Multi-language Support**: Bulgarian and English translations using i18next
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **SEO Optimized**: Helmet for meta tags and structured data
- **Modern UI**: Framer Motion animations and smooth transitions
- **Professional Layout**: Clean and modern design for law firm services

## Folder Structure

```
LawFirm/
├── api/
│   ├── controllers/
│   │   └── lawyer.controller.js
│   ├── routes/
│   │   └── lawyer.route.js
│   └── index.js
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   └── Header.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── PracticeAreas.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   ├── assets/
│   │   │   └── images/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── i18n.js
│   │   ├── main.css
│   │   ├── App.css
│   │   └── index.css
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── eslint.config.js
│   └── package.json
├── package.json
└── .gitignore
```

## Installation

1. Clone the repository
2. Install root dependencies: `npm install`
3. Install client dependencies: `npm install --prefix client`

## Development

Start the development server:
```bash
npm run dev
```

This runs both the backend (Node.js) and frontend (Vite) in development mode.

## Building

Build for production:
```bash
npm run build
```

## Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm run build` - Build for production

## Technologies

- **Frontend**: React, Vite, Tailwind CSS
- **Internationalization**: i18next, react-i18next
- **Animations**: Framer Motion
- **SEO**: React Helmet Async
- **Icons**: React Icons
- **Router**: React Router DOM
- **Backend**: Express.js, Node.js
- **Database**: MongoDB (Mongoose)

## Pages

- **Home** - Introduction to the law firm
- **Services** - List of legal services offered
- **Practice Areas** - Specialized legal practice areas
- **About** - Information about the firm
- **Contact** - Contact information and details

## License

ISC
