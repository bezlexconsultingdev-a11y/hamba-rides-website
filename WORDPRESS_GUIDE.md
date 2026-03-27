# Hamba Rides Website - WordPress Integration Guide

## 🌐 Website Overview

This is a professional, modern marketing website for Hamba Rides with:
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ South African flag-inspired branding
- ✅ Smooth animations and interactions
- ✅ SEO-friendly structure
- ✅ Contact form
- ✅ Download app sections
- ✅ Pricing tables
- ✅ Feature showcases

---

## 🚀 How to View Locally

### Start the Local Server:

```bash
cd website
node server.js
```

Then open your browser and visit: **http://localhost:3000**

---

## 📋 How to Copy to WordPress

### Method 1: Copy HTML Sections (Recommended)

1. **Open the website** in your browser (http://localhost:3000)
2. **Right-click** on the page → **View Page Source**
3. **Copy sections** you want:
   - Hero Section (lines 30-100)
   - Features Section (lines 102-150)
   - Pricing Section (lines 200-280)
   - etc.

4. **In WordPress:**
   - Go to **Pages** → **Add New** or edit existing page
   - Switch to **HTML/Code Editor** (not Visual Editor)
   - Paste the HTML section
   - Add the CSS to **Appearance** → **Customize** → **Additional CSS**

### Method 2: Use as Full Page Template

1. **Create a new WordPress page template:**
   - Go to **Appearance** → **Theme Editor**
   - Create new file: `page-hamba.php`
   - Copy entire `index.html` content
   - Wrap with WordPress template tags:

```php
<?php
/*
Template Name: Hamba Rides Landing
*/
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <!-- Copy head content from index.html -->
</head>
<body>
    <!-- Copy body content from index.html -->
    <?php wp_footer(); ?>
</body>
</html>
```

2. **Add CSS:**
   - Copy entire `styles.css` content
   - Paste into **Appearance** → **Customize** → **Additional CSS**
   - OR create a child theme and add as separate CSS file

3. **Add JavaScript:**
   - Copy `script.js` content
   - Add to **Appearance** → **Theme Editor** → **Footer** (footer.php)
   - Wrap in `<script>` tags before `</body>`

### Method 3: Use Page Builder (Elementor/Divi)

1. **Install Elementor or Divi**
2. **Create sections manually** using the builder
3. **Copy text and styling** from the HTML
4. **Add custom CSS** for exact styling

---

## 📁 File Structure

```
website/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive features
├── server.js           # Local development server
└── WORDPRESS_GUIDE.md  # This file
```

---

## 🎨 Customization Guide

### Change Colors

In `styles.css`, update CSS variables:

```css
:root {
    --color-green: #007749;    /* Primary color */
    --color-yellow: #FFB81C;   /* Accent color */
    --color-red: #E03C31;      /* Error/alert */
    --color-blue: #001489;     /* Secondary */
}
```

### Change Text Content

Edit `index.html` directly:
- Hero title: Line 46-49
- Features: Lines 102-150
- Pricing: Lines 200-280
- Contact info: Lines 350-380

### Add Your Logo

Replace the emoji logo (🚗) with an image:

```html
<!-- Replace this: -->
<span class="logo-icon">🚗</span>

<!-- With this: -->
<img src="your-logo.png" alt="Hamba Rides" class="logo-icon">
```

### Update Contact Information

In `index.html`, find the contact section (around line 350):

```html
<a href="mailto:support@hambarides.co.za">support@hambarides.co.za</a>
<a href="tel:+27123456789">+27 12 345 6789</a>
```

---

## 🔧 WordPress Plugins Recommended

### For Better Integration:

1. **Elementor** - Page builder for easy editing
2. **WPForms** - Better contact forms
3. **Yoast SEO** - SEO optimization
4. **WP Rocket** - Performance optimization
5. **Smush** - Image optimization

---

## 📱 Sections Included

### 1. Navigation Bar
- Fixed top navigation
- Mobile-responsive menu
- Smooth scroll links

### 2. Hero Section
- Large headline with gradient text
- Call-to-action buttons
- Stats display (50K+ riders, 5K+ drivers, 4.8★ rating)
- Phone mockup with floating cards

### 3. Features Section
- 6 feature cards:
  - Real-Time Tracking
  - Secure Payments
  - Safety First
  - Rating System
  - Affordable Pricing
  - Proudly South African

### 4. How It Works
- 3-step process
- Visual step indicators
- Clear descriptions

### 5. Pricing Section
- 3 pricing tiers:
  - Economy (R8/km)
  - Comfort (R12/km) - Featured
  - XL (R15/km)

### 6. Driver Section
- "Drive with Hamba" call-to-action
- 4 key benefits
- Driver image

### 7. Download Section
- App Store button
- Google Play button

### 8. Contact Section
- Contact form
- Contact details
- Social media links

### 9. Footer
- Company links
- Support links
- Legal links
- Copyright

---

## 🎯 WordPress-Specific Tips

### 1. Use WordPress Menus
Replace the hardcoded navigation with WordPress menu:

```php
<?php
wp_nav_menu(array(
    'theme_location' => 'primary',
    'container_class' => 'nav-links'
));
?>
```

### 2. Make Content Editable
Use WordPress Custom Fields or ACF (Advanced Custom Fields):

```php
<h1><?php the_field('hero_title'); ?></h1>
<p><?php the_field('hero_subtitle'); ?></p>
```

### 3. Dynamic Pricing
Store pricing in WordPress options:

```php
<span class="price-amount"><?php echo get_option('economy_price'); ?></span>
```

### 4. Contact Form Integration
Replace HTML form with Contact Form 7 or WPForms shortcode:

```php
<?php echo do_shortcode('[contact-form-7 id="123"]'); ?>
```

---

## 🚀 Performance Optimization

### For WordPress:

1. **Minify CSS/JS** - Use Autoptimize plugin
2. **Enable Caching** - Use WP Rocket or W3 Total Cache
3. **Optimize Images** - Use Smush or ShortPixel
4. **Use CDN** - Cloudflare or similar
5. **Lazy Load Images** - Built into WordPress 5.5+

---

## 📊 SEO Optimization

### Already Included:

- ✅ Semantic HTML structure
- ✅ Meta descriptions
- ✅ Proper heading hierarchy (H1, H2, H3)
- ✅ Alt text placeholders for images
- ✅ Mobile-responsive design
- ✅ Fast loading times

### Add in WordPress:

- Install Yoast SEO or Rank Math
- Add focus keywords
- Create XML sitemap
- Set up Google Analytics
- Add Schema markup

---

## 🎨 Color Scheme

**South African Flag Colors:**
- Green: `#007749` (Primary)
- Yellow: `#FFB81C` (Accent)
- Red: `#E03C31` (Error/Alert)
- Blue: `#001489` (Secondary)
- Black: `#000000`
- White: `#FFFFFF`

---

## 📞 Support

If you need help integrating into WordPress:

1. Check WordPress documentation
2. Use page builder (Elementor recommended)
3. Hire a WordPress developer if needed
4. Test on staging site first

---

## ✅ Pre-Launch Checklist

- [ ] Replace placeholder images
- [ ] Update all text content
- [ ] Add real contact information
- [ ] Test contact form
- [ ] Add Google Analytics
- [ ] Set up app store links
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Optimize images
- [ ] Test loading speed
- [ ] Set up SSL certificate
- [ ] Configure SEO settings

---

**Your website is ready! 🎉🇿🇦**

Visit http://localhost:3000 to see it in action!
