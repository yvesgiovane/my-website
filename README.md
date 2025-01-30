# My Website

This project is a simple website built with HTML, CSS, and JavaScript. It includes a landing page and an about page, along with reusable components and utility functions.

## Project Structure

```
my-website
├── src
│   ├── assets
│   │   ├── css
│   │   │   └── styles.c<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About - Yves Giovane Photography</title>
    <link rel="stylesheet" href="styles/style.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="index.html">Home</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section class="about">
        <h2>About Yves Giovane</h2>
        <img src="assets/img/profile.jpg" alt="Yves Giovane" class="profile-img">
        <p>Hello! I'm Yves, a passionate photographer focusing on commercial and creative photography. Welcome to my online portfolio.</p>
    </section>

    <footer>
        <p>&copy; 2025 Yves Giovane. All rights reserved.</p>
        <p><a href="https://www.instagram.com/yvesgiovane">Instagram</a></p>
    </footer>
</body>
</html>ss
│   │   ├── js
│   │   │   └── scripts.js
│   │   └── images
│   ├── components
│   │   └── header.html
│   ├── pages
│   │   ├── index.html
│   │   └── about.html
│   └── utils
│       └── helpers.js
├── package.json
├── .gitignore
└── README.md
```

## Features

- **Responsive Design**: The website is designed to be responsive and works well on various devices.
- **Reusable Components**: The header component can be reused across different pages.
- **Interactivity**: JavaScript is used to add interactivity to the website.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-website
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Open the `index.html` file in your browser to view the website.

## License

This project is licensed under the MIT License.
# Yves Giovane Photography Website

This is a simple photography website for Yves Giovane.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed on your machine:
- A modern web browser (e.g., Chrome, Firefox, Safari)
- [Node.js](https://nodejs.org/) (for managing dependencies, if needed)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/my-website.git
   cd my-website   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>About - Yves Giovane Photography</title>
       <link rel="stylesheet" href="styles/style.css">
   </head>
   <body>
       <header>
           <nav>
               <ul>
                   <li><a href="portfolio.html">Portfolio</a></li>
                   <li><a href="index.html">Home</a></li>
                   <li><a href="contact.html">Contact</a></li>
               </ul>
           </nav>
       </header>
   
       <section class="about">
           <h2>About Yves Giovane</h2>
           <img src="assets/img/profile.jpg" alt="Yves Giovane" class="profile-img">
           <p>Hello! I'm Yves, a passionate photographer focusing on commercial and creative photography. Welcome to my online portfolio.</p>
       </section>
   
       <footer>
           <p>&copy; 2025 Yves Giovane. All rights reserved.</p>
           <p><a href="https://www.instagram.com/yvesgiovane">Instagram</a></p>
       </footer>
   </body>
   </html>