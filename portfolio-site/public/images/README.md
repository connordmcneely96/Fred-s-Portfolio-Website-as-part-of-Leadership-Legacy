# Portfolio Images Directory

This directory contains all images used in the portfolio website.

## ⚠️ Important Note

**The site currently uses CSS gradient placeholders instead of images.** This allows the site to deploy and function immediately on Vercel without requiring actual image files.

When you're ready to add your portfolio images:
1. Add image files to this directory
2. Update `components/ProjectCard.tsx` to use the images
3. Git commit and push - Vercel will auto-deploy

## Required Images (Optional - for when you're ready)

### Logo/Portfolio Images (from project files)

1. **ynsgm-logo.png** (Original: 01331E9884C44794993EAD56D68FEF84.png)
   - YNSGM gold shield logo
   - Used in: Home page featured work, Portfolio page
   - Recommended size: 800x800px minimum

2. **inner-animal-logo.png** (Original: 815279AB6A164FB38FA734DE588DA52F.png)
   - Inner Animal Activewear logo
   - Used in: Home page featured work, Portfolio page
   - Recommended size: 800x800px minimum

3. **south-wind-logo.png** (Original: 5E0EB212FDD34390820E0C775DBA48B1.png)
   - South Wind Hat Co. vintage logo
   - Used in: Home page featured work, Portfolio page
   - Recommended size: 800x800px minimum

4. **gorilla-logo.png** (Original: 2AA49DA7B762455481386165B0D32FE5.png)
   - Simple gorilla face logo
   - Used in: Portfolio page
   - Recommended size: 800x800px minimum

5. **character-illustration.png** (Original: ChatGPT_Image_Dec_16_2025_at_07_14_44_PM.png)
   - Character illustration artwork
   - Used in: Home page featured work, Portfolio page
   - Recommended size: 800x800px minimum

6. **design-workspace.png** (Original: DEB4A551702348D0AA8DC2D5AF5ADB20.png)
   - Design workspace/hero image
   - Used in: Home page background, placeholder for other projects
   - Recommended size: 1920x1080px minimum

### Reference Images (for content extraction)

7. **pricing-table.png** (Original: Screenshot_20251208_at_22_17_50.png)
   - Pricing information reference
   - Not displayed on site, for reference only

8. **portfolio-description.png** (Original: Screenshot_20251210_at_20_13_04.png)
   - Portfolio description and content reference
   - Not displayed on site, for reference only

## Image Specifications

### Recommended Formats
- **Logos**: PNG with transparent background
- **Illustrations**: PNG or JPG
- **Hero/Background**: JPG (optimized for web)

### Recommended Sizes
- **Portfolio project cards**: 800x800px (square) or 1200x800px (landscape)
- **Hero backgrounds**: 1920x1080px or larger
- **Logo thumbnails**: Minimum 500x500px

### Optimization
- Compress images before uploading
- Use WebP format for better performance (Next.js will auto-convert)
- Maximum file size: 500KB per image recommended

## Current Status

Currently using placeholder images. Replace these with actual project images for the best visual impact.

## Next.js Image Component

All images are loaded using Next.js `<Image>` component for:
- Automatic optimization
- Lazy loading
- Responsive sizing
- Better performance

## Adding New Images

1. Add image files to this directory
2. Use descriptive, lowercase, hyphenated filenames
3. Update the relevant component to reference the new image
4. Test on both desktop and mobile views
