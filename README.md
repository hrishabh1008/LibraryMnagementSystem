# Library Management System

A modern web application for managing a library's book collection. This application allows users to browse books, view book details, add new books, and more. The system provides an intuitive interface for librarians and users to interact with the library's digital catalog.

## Features

- **Home Page**: Welcome screen with featured books, latest additions, and quick navigation to all sections
- **Browse Books**: View all books in the library with advanced search, filter options, and sorting capabilities
- **Book Details**: Detailed view of individual books including title, author, genre, publication date, ISBN, and availability status
- **Add Books**: Comprehensive form to add new books to the library with validation and image upload
- **About Page**: Information about the library system, its mission, and services
- **Contact Page**: Interactive contact form for users to reach out with queries or suggestions
- **Error Handling**: Custom error pages with helpful navigation options
- **Responsive Design**: Fully responsive design that works seamlessly on desktop, tablet, and mobile devices

## Technologies Used

### Frontend
- **React 19**: Modern UI library for building responsive and interactive user interfaces
- **React Router 7**: Advanced client-side routing with dynamic route matching
- **Redux Toolkit**: Efficient state management with simplified setup and immutable updates
- **TailwindCSS 4**: Utility-first CSS framework for rapid UI development with customizable design system

### Development Tools
- **Vite**: Fast, modern frontend build tool with instant server start and hot module replacement
- **ESLint**: Code linting and quality control with customized rule configuration
- **JSX/JavaScript**: Modern JavaScript with JSX for component-based UI development
- **Git**: Version control for collaborative development

## Project Structure

```
Library Management System
│
├── public/                  # Static assets and public files
│   └── index.html           # Main HTML file
│
├── src/                     # Source code
│   ├── components/          # Reusable UI components
│   │   ├── NavBar.jsx       # Navigation component
│   │   └── ...              # Other components
│   │
│   ├── pages/               # Main application pages
│   │   ├── HomePage.jsx     # Welcome page
│   │   ├── BrowseBooks.jsx  # List of all books
│   │   ├── BooksDetails.jsx # Detailed book view
│   │   ├── AddBooks.jsx     # Form to add books
│   │   ├── About.jsx        # About page
│   │   ├── Contact.jsx      # Contact form
│   │   └── Error.jsx        # Error page
│   │
│   ├── redux/               # Redux state management
│   │   ├── bookSlice.js     # Book state slice
│   │   └── store.js         # Redux store configuration
│   │
│   ├── utils/               # Utility functions and helpers
│   │
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Entry point with router setup
│   └── index.css            # Global styles
│
├── .gitignore               # Git ignore file
├── eslint.config.js         # ESLint configuration
├── index.html               # Root HTML file
├── package.json             # Project dependencies and scripts
├── package-lock.json        # Locked dependencies
├── README.md                # Project documentation
└── vite.config.js           # Vite configuration
```

## Application Flow

```
User Entry
    │
    ▼
Home Page ──────┐
    │           │
    ▼           ▼
Browse Books    About/Contact
    │           │
    ▼           │
Book Details    │
    │           │
    ▼           │
Add Books ◄─────┘
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Build for production:
   ```
   npm run build
   ```
5. Preview the production build:
   ```
   npm run preview
   ```

## Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Environment Setup
1. Fork and clone the repository
2. Navigate to the project directory
3. Install dependencies
4. Start the development server

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- React team for the amazing library
- Vite team for the fast build tool
- TailwindCSS for the styling framework
