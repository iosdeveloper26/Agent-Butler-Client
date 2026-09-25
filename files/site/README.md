# Personal Homepage

A clean, modern personal homepage inspired by GitHub's design aesthetic. This homepage is fully customizable and easy to maintain.

## Features

- Modern GitHub-style dark theme
- Fully responsive design (mobile, tablet, desktop)
- Smooth scrolling and animations
- Easy to customize with your personal information
- No external dependencies (pure HTML, CSS, JavaScript)

## How to Customize

### 1. Personal Information (index.html)

Open `index.html` and update the following sections:

**Profile Section:**
- Replace `Your Name` with your actual name
- Update the bio text with your own tagline
- Change the profile image by adding your photo to the `images/` folder

**About Section:**
- Edit the paragraph to describe yourself and your interests

**Skills Section:**
- Modify the skill items to match your expertise
- Add or remove skill items as needed

**Projects Section:**
- Update project titles, descriptions, and links
- Add more project cards by copying the `.project-card` div structure

**Contact Section:**
- Replace placeholder URLs with your actual social media profiles
- Update the email address with your contact email

### 2. Profile Picture

Place your profile picture in the `images/` folder and name it `profile.jpg` (or update the filename in `index.html`).

### 3. Colors and Styling (css/style.css)

To change the color scheme, modify the CSS variables at the top of `style.css`:

```css
:root {
    --bg-primary: #0d1117;       /* Main background color */
    --bg-secondary: #161b22;     /* Card background color */
    --bg-tertiary: #21262d;      /* Hover state background */
    --text-primary: #c9d1d9;     /* Main text color */
    --text-secondary: #8b949e;   /* Secondary text color */
    --accent-color: #58a6ff;     /* Links and highlights */
    --accent-hover: #1f6feb;     /* Hover state for accents */
    --border-color: #30363d;     /* Border color */
}
```

### 4. Adding More Sections

To add a new section, copy this template in `index.html`:

```html
<section class="your-section-name">
    <h2>Section Title</h2>
    <p>Your content here</p>
</section>
```

## File Structure

```
sites/site/
├── index.html          # Main HTML file
├── css/
│   ├── normalize.css   # CSS reset for cross-browser consistency
│   └── style.css       # Main stylesheet
├── js/
│   └── script.js       # JavaScript for animations and interactions
├── images/
│   └── README.txt      # Instructions for adding images
└── README.md           # This file
```

## Viewing Your Homepage

Simply open `index.html` in any modern web browser to view your homepage locally.

## Publishing Your Homepage

You can host this homepage on:

1. **GitHub Pages**: Push to a repository and enable GitHub Pages
2. **Netlify**: Drag and drop the entire folder
3. **Vercel**: Connect your repository
4. **Any web hosting service**: Upload the files via FTP

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Feel free to use this template for your personal homepage. No attribution required.