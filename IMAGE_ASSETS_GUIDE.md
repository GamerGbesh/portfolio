# Missing Image Assets Guide

## Images You Need to Add

### Project Images (400x300px recommended)

1. **`/public/assets/projects/company_canon.png`**

   - Suggestion: Vector search visualization, embedding space diagram, or RAG architecture diagram
   - Alternative: Screenshot of Qdrant dashboard or company canonicalization results
   - Fallback: Use a transformer/neural network visualization

2. **`/public/assets/projects/data_pipeline.png`**

   - Suggestion: ETL pipeline diagram showing MongoDB → PostgreSQL migration
   - Alternative: Data flow visualization or architecture diagram
   - Fallback: Database icons with transformation arrows

3. **`/public/assets/projects/flask_api.png`**
   - Suggestion: Postman/Insomnia screenshot of API endpoints
   - Alternative: API documentation screenshot or OpenAPI/Swagger UI
   - Fallback: Simple REST endpoint code snippet screenshot

### Skill Images (200x200px recommended)

4. **`/public/assets/skills/data_pipeline.png`**
   - Suggestion: Generic data pipeline icon or ETL workflow icon
   - Alternative: Docker + database icons
   - Fallback: Gear/cog icons representing automation

### Language/Tech Logos (100x100px recommended)

5. **`/public/assets/languages/docker.png`**

   - Official Docker whale logo (download from Docker branding page)
   - Ensure transparent background

6. **`/public/assets/languages/git.png`**
   - Official Git logo (download from git-scm.com)
   - Ensure transparent background

### Achievement Images (400x300px recommended)

7. **`/public/assets/achievements/remotown.png`**

   - Remotown company logo/branding if available
   - Alternative: Professional workspace image or code editor screenshot
   - Fallback: Generic "AI/Data" themed image

8. **`/public/assets/achievements/academic.png`**
   - University of Ghana logo or crest
   - Alternative: Graduation cap, books, or academic achievement visual
   - Fallback: Trophy or medal icon

---

## Quick Image Sources

### Free Stock Images (Project Placeholders)

- **Unsplash**: unsplash.com (search: "data visualization", "code", "architecture")
- **Pexels**: pexels.com (search: "technology", "data", "programming")
- **Undraw**: undraw.co (illustrations for tech concepts)

### Tech Logos (Exact Assets)

- **Docker**: docker.com/company/newsroom/media-resources
- **Git**: git-scm.com/downloads/logos
- **PostgreSQL**: postgresql.org/media/img/about/press/elephant.png
- **Python**: python.org/community/logos

### DIY Options

1. **Canva**: Create simple diagrams/visualizations
2. **Excalidraw**: Hand-drawn style architecture diagrams
3. **Draw.io**: Professional diagrams (RAG pipeline, ETL flow)
4. **Screenshots**: From your actual projects/tools

---

## Temporary Placeholders

Until you add real images, you can:

### Option 1: Use Gradient Placeholders

Create solid color divs in the code temporarily:

```tsx
// In ProjectCard.tsx, temporarily replace image with:
<div className="w-full h-40 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
  <span className="text-white font-bold">Project Image</span>
</div>
```

### Option 2: Use Icon Libraries

Replace images with large icons from `react-icons`:

```tsx
import { FaDocker, FaGitAlt, FaDatabase } from "react-icons/fa";
// Use <FaDocker size={100} /> etc.
```

### Option 3: Use Placeholder Services

```html
<!-- 400x300 placeholder -->
<img
  src="https://via.placeholder.com/400x300/667eea/ffffff?text=Company+Canonicalization"
/>
```

---

## Image Specifications

### Projects & Achievements

- **Size**: 400x300px (or 4:3 aspect ratio)
- **Format**: PNG or WebP (with fallback)
- **Quality**: High resolution (2x for retina: 800x600px)
- **File size**: < 200KB each (optimize with TinyPNG)

### Skills

- **Size**: 200x200px (square)
- **Format**: PNG with transparent background
- **Quality**: Vector or high-res raster
- **File size**: < 100KB each

### Languages/Tech Logos

- **Size**: 100x100px (square)
- **Format**: PNG or SVG
- **Background**: Transparent
- **File size**: < 50KB each

---

## Priority Order

### Must Have (breaks layout without them):

1. ✅ Docker logo
2. ✅ Git logo

### Should Have (improves professional appearance):

3. Company canonicalization project image
4. Data pipeline project image
5. Data pipeline skill icon

### Nice to Have (can use existing or placeholders):

6. Flask API project image (can screenshot your restaurantly repo)
7. Remotown achievement image
8. Academic achievement image

---

## Action Commands

Once you have images ready:

```bash
# Create directories if they don't exist
cd public/assets
mkdir -p projects skills languages achievements

# Copy images
# Example:
cp ~/Downloads/docker-logo.png languages/docker.png
cp ~/Downloads/git-logo.png languages/git.png
```

---

## Optimization

After adding images, optimize them:

### Online Tools

- **TinyPNG**: tinypng.com
- **Squoosh**: squoosh.app
- **ImageOptim**: imageoptim.com (Mac)

### Command Line (if you have ImageMagick)

```bash
# Resize and optimize
magick input.png -resize 400x300 -quality 85 output.png
```

---

## Testing

After adding images:

1. Start dev server: `npm run dev`
2. Check browser console for 404 errors
3. Verify all images load on all sections:
   - Projects (4 images)
   - Skills (3 images)
   - Languages (5 images)
   - Achievements (4 images)
4. Test responsive layout (mobile, tablet, desktop)
5. Check image aspect ratios and cropping

---

## Notes

- All image paths are relative to `/public` directory
- `/assets/projects/image.png` maps to `public/assets/projects/image.png`
- React dev server serves `public/` as root
- In production (Vite build), same structure applies
