# Law Firm Website Project

A complete, full-featured law firm website built with React and Node.js.

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd LawFirm
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install client dependencies
   npm install --prefix client
   ```

3. **Add images**
   
   Place the following images in `client/src/assets/images/`:
   - `logo.png` - Law firm logo (recommended: 150x150px)
   - `languages-icon.png` - Language toggle icon (recommended: 50x50px)
   - `courthouse.jpg` - Courthouse/building image (recommended: 600x400px)
   - `team.jpg` - Team photo (recommended: 600x400px)
   - `office.jpg` - Office interior photo (recommended: 600x400px)
   - `about.jpg` - About section image (recommended: 600x400px)
   - `contact.jpg` - Contact page image (recommended: 600x400px)

4. **Start development server**
   ```bash
   npm run dev
   ```
   
   The application will start on `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm start` - Start production server
- `npm run build` - Build for production
- `npm run lint --prefix client` - Run ESLint checks

## Project Structure

```
LawFirm/
├── api/                          # Backend API
│   ├── controllers/
│   │   └── lawyer.controller.js  # API controllers
│   ├── routes/
│   │   └── lawyer.route.js       # API routes
│   └── index.js                  # Express app setup
│
├── client/                       # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── Header.jsx        # Navigation header
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx          # Homepage
│   │   │   ├── Services.jsx      # Services listing
│   │   │   ├── PracticeAreas.jsx # Legal practice areas
│   │   │   ├── About.jsx         # About the firm
│   │   │   └── Contact.jsx       # Contact page
│   │   │
│   │   ├── assets/
│   │   │   └── images/           # Place your images here
│   │   │
│   │   ├── App.jsx               # Main app component
│   │   ├── main.jsx              # App entry point
│   │   ├── i18n.js               # i18next configuration
│   │   ├── main.css              # Global styles
│   │   ├── App.css               # App styles
│   │   └── index.css             # Index styles
│   │
│   ├── public/                   # Static assets
│   ├── index.html                # HTML template
│   ├── vite.config.js            # Vite configuration
│   ├── tailwind.config.js         # Tailwind CSS config
│   ├── postcss.config.js          # PostCSS config
│   ├── eslint.config.js           # ESLint config
│   └── package.json
│
├── package.json                  # Root package.json
└── .gitignore
```

## Features

### ✨ Frontend Features
- **Responsive Design** - Mobile-first, works on all screen sizes
- **Multi-language Support** - Bulgarian and English
- **SEO Optimized** - Meta tags, structured data, proper titles
- **Smooth Animations** - Framer Motion transitions
- **Modern UI** - Tailwind CSS for styling
- **Icon Support** - React Icons for beautiful icons

### 🔧 Backend Features
- **Express.js Server** - RESTful API
- **MongoDB Integration** - Ready for data persistence
- **API Routes** - Lawyer/consultation endpoints
- **Static File Serving** - Built-in production build serving

## Customization

### Change Colors
Edit `client/tailwind.config.js` and modify the theme colors. The current theme uses blue as the primary color.

### Update Content
All text is in `client/src/i18n.js`. Update translations there to change page content.

### Add More Pages
1. Create a new file in `client/src/pages/YourPage.jsx`
2. Add route in `client/src/App.jsx`
3. Add navigation link in `client/src/components/Header.jsx`
4. Add translations in `client/src/i18n.js`

### Replace Images
Simply replace the image files in `client/src/assets/images/` with your own while keeping the same filenames.

## Technologies Used

### Frontend
- **React 18** - UI library
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS
- **React Router** - Client-side routing
- **i18next** - Internationalization
- **Framer Motion** - Animations
- **React Helmet Async** - SEO meta tags
- **React Icons** - Icon library

### Backend
- **Express.js** - Web framework
- **Node.js** - Runtime environment
- **Mongoose** - MongoDB ODM
- **Nodemon** - Development tool
- **dotenv** - Environment variables

## API Endpoints

- `GET /api/lawyer/all` - Get all lawyers
- `GET /api/lawyer/:id` - Get single lawyer
- `POST /api/lawyer/consultation` - Create consultation request
- `POST /api/lawyer/contact` - Send contact message

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

- Lazy loading for images
- Code splitting with React Router
- Production build optimization
- SEO meta tags on all pages

## Environment Variables

Create a `.env` file in the root if needed:
```
NODE_ENV=development
PORT=3000
```

## Troubleshooting

### Port already in use
If port 3000 is already in use, modify the port in `api/index.js`:
```javascript
app.listen(3001, () => { ... })
```

### Images not loading
Make sure images are placed in `client/src/assets/images/` with the correct filenames as referenced in the component imports.

### Translations not working
Check that `client/src/i18n.js` is properly imported in `client/src/main.jsx`

## Deployment

### Build for Production
```bash
npm run build
```

This creates a `client/dist` folder with optimized production files.

### Deploy to Server
Copy the entire project to your server and run:
```bash
npm install
npm install --prefix client
npm run build
npm start
```

## License

ISC

## Support

For issues or questions, please create an issue in the repository.

---

**Happy coding! 🚀**
