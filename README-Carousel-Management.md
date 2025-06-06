# Portfolio Carousel Management Guide

This portfolio now features an advanced, easily manageable carousel system. You can add, remove, reorder, and replace photos/videos without touching complex code.

## Quick Start

### Managing Existing Carousels

1. **Open `carousel-config.js`** - This is your main control file
2. **Find the carousel you want to edit** (bodybuilding, fitness, or projects)
3. **Make your changes** following the examples below

### Adding New Items

```javascript
// Add to the 'items' array:
{
    type: "image",                          // or "video"
    src: "images/your-new-photo.jpg",       // path to your file
    alt: "Description for accessibility",    // alt text
    caption: "Text that appears on image"   // optional caption
}
```

### Removing Items
- Delete the entire item object, or
- Comment it out by adding `//` before each line

### Reordering Items
- Cut and paste items within the array
- First item = shown first

## Current Carousels

### 1. Bodybuilding Progress (`bodybuilding`)
- Shows 4 progress photos
- Linked from "Photos: 1,2,3,4" in the interests section

### 2. Fitness Activities (`fitness`) 
- Shows bouldering video
- Linked from "Executing Dyno (video)"

### 3. Technical Projects (`projects`)
- Shows chess game screenshot  
- Linked from "Screenshot of Chess Game"

## Adding New Carousels

### Step 1: Add to `carousel-config.js`
```javascript
newcarousel: {
    title: "My New Carousel",
    items: [
        {
            type: "image",
            src: "images/photo1.jpg", 
            alt: "Photo description",
            caption: "Photo caption"
        }
    ]
}
```

### Step 2: Add HTML Container
Add this to your HTML where you want the carousel:
```html
<div class="carousel-container-wrapper">
    <h3>My New Carousel</h3>
    <div class="carousel" id="newcarousel-carousel"></div>
</div>
```

### Step 3: Link to Specific Slides (Optional)
```html
<a href="#" data-carousel="newcarousel" data-slide="0">View Photo 1</a>
```

## File Organization

```
/
├── index.html              # Main page
├── carousel-config.js      # EDIT THIS to manage carousels
├── styles.css             # Styling (rarely needs changes)
├── images/                # Put your images here
└── videos/               # Put your videos here
```

## Supported Media Types

**Images:** `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`  
**Videos:** `.mp4`, `.webm`, `.ogg` (auto-play, looped, muted)

## Tips

- **Keep images under 2MB** for fast loading
- **Use descriptive filenames** like `bodybuilding-back-2024-01.jpg`
- **Always add alt text** for accessibility
- **Test on mobile** - carousels are responsive
- **Backup before major changes** - copy `carousel-config.js`

## Troubleshooting

**Carousel not showing?**
- Check file paths in `carousel-config.js`
- Ensure HTML container exists with correct ID
- Check browser console for errors

**Images not loading?**  
- Verify file paths are correct
- Check that files exist in the specified folders
- Ensure proper file extensions

**Need help?** Check the detailed comments in `carousel-config.js` 