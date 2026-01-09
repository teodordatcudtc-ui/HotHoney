# 📸 Setup Imagini - Hot Honey Tattoo Studio

## Imagini Necesare

### 1. Logo
**Locație:** `public/logo.png` sau `public/logo.svg`

**Dimensiuni recomandate:**
- PNG: 200x200px (transparent background)
- SVG: vectorial (recomandat)

**Actualizare:** În `components/Header.tsx`, linia ~45, de-comentează codul pentru Image component.

---

### 2. Hero Carousel (3 imagini)
**Locație:** `public/images/hero-1.jpg`, `public/images/hero-2.jpg`, `public/images/hero-3.jpg`

**Dimensiuni recomandate:**
- 1920x1080px (16:9)
- Format: JPG sau WebP
- Optimizat pentru web

**Actualizare:** În `app/page.tsx`, linia ~44, înlocuiește:
```tsx
images={['hero-1.jpg', 'hero-2.jpg', 'hero-3.jpg']}
```
cu:
```tsx
images={['/images/hero-1.jpg', '/images/hero-2.jpg', '/images/hero-3.jpg']}
```

---

### 3. Viziunea Noastră Carousel (3 imagini)
**Locație:** `public/images/vision-1.jpg`, `public/images/vision-2.jpg`, `public/images/vision-3.jpg`

**Dimensiuni recomandate:**
- 1200x800px (3:2)
- Format: JPG sau WebP
- Optimizat pentru web

**Actualizare:** În `app/page.tsx`, linia ~95, înlocuiește:
```tsx
images={['vision-1.jpg', 'vision-2.jpg', 'vision-3.jpg']}
```
cu:
```tsx
images={['/images/vision-1.jpg', '/images/vision-2.jpg', '/images/vision-3.jpg']}
```

---

### 4. Galerie (minim 12 imagini)
**Locație:** `public/images/gallery-1.jpg` până la `gallery-12.jpg` (sau mai multe)

**Dimensiuni recomandate:**
- Minim 1200x1200px (pătrat)
- Format: JPG sau WebP
- Optimizat pentru web

**Actualizare:** În `app/galerie/page.tsx`, actualizează array-ul `galleryImages` cu path-urile reale.

---

## Optimizare Imagini

### Pentru performanță optimă:

1. **Comprimare:**
   - Folosește tool-uri precum TinyPNG, Squoosh, sau ImageOptim
   - Target: 70-80% calitate pentru JPG

2. **Format:**
   - WebP pentru imagini moderne (mai mic, calitate mai bună)
   - JPG fallback pentru compatibilitate

3. **Dimensiuni:**
   - Nu încărca imagini mai mari decât necesar
   - Next.js Image component optimizează automat

---

## Structura Folder

```
public/
├── logo.png (sau logo.svg)
└── images/
    ├── hero-1.jpg
    ├── hero-2.jpg
    ├── hero-3.jpg
    ├── vision-1.jpg
    ├── vision-2.jpg
    ├── vision-3.jpg
    ├── gallery-1.jpg
    ├── gallery-2.jpg
    ├── ...
    └── gallery-12.jpg
```

---

## Testare

După adăugarea imaginilor:
1. Verifică că toate path-urile sunt corecte
2. Testează carusel-urile (hero și viziune)
3. Verifică galeria
4. Testează pe mobile și desktop

---

**Notă:** Până când adaugi imaginile reale, carusel-urile vor afișa placeholder-uri cu gradient.
