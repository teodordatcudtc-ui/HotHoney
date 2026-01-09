# Hot Honey Tattoo Studio Website

Website premium pentru Hot Honey Tattoo Studio - studio de tatuaje și piercing în București.

## 🚀 Tehnologii

- **Next.js 14** - React framework cu App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling utility-first
- **Framer Motion** - Animații fluide și moderne
- **React Intersection Observer** - Scroll animations

## 📦 Instalare

1. **Instalează dependențele:**
```bash
npm install
```

2. **Rulează serverul de dezvoltare:**
```bash
npm run dev
```

3. **Deschide în browser:**
```
http://localhost:3000
```

## 🏗️ Build pentru producție

```bash
npm run build
npm start
```

## 📁 Structura Proiectului

```
hot-honey/
├── app/
│   ├── layout.tsx          # Layout principal cu Header & Footer
│   ├── page.tsx             # Pagina Home
│   ├── globals.css          # Stiluri globale
│   ├── studio/              # Pagina Studio/Despre
│   ├── galerie/             # Pagina Galerie
│   ├── tattoo-piercing/     # Pagina Tattoo & Piercing
│   ├── contact/             # Pagina Contact
│   ├── sitemap.ts           # Sitemap pentru SEO
│   └── robots.ts            # Robots.txt
├── components/
│   ├── Header.tsx           # Header cu navigare
│   ├── Footer.tsx           # Footer
│   └── InstagramEmbed.tsx   # Componentă Instagram
├── package.json
├── tailwind.config.js
└── next.config.js
```

## 🎨 Brand Colors

- **Primary:** `#3e0030`
- **Gradient Accent:** `#ee5081` → `#ee992d`

## 📸 Imagini

### Imagini necesare pentru Galerie

Adaugă imagini în folderul `public/images/` cu următoarele nume:

- `gallery-1.jpg` până la `gallery-12.jpg` (sau mai multe)

**Recomandări:**
- Format: JPG sau WebP
- Dimensiuni: minim 1200x1200px pentru calitate bună
- Optimizare: comprimă imaginile pentru performanță

### Logo (opțional)

Dacă ai un logo, adaugă-l în `public/logo.png` sau `public/logo.svg` și actualizează componenta Header.

## 🔧 Configurare

### 1. Domain pentru SEO

Actualizează URL-urile în:
- `app/sitemap.ts` - înlocuiește `https://hothoneytattoo.ro` cu domeniul tău
- `app/robots.ts` - înlocuiește `https://hothoneytattoo.ro` cu domeniul tău

### 2. Google Maps

În `app/contact/page.tsx`, actualizează iframe-ul Google Maps cu coordonatele exacte ale locației:
- Coordonate: Strada Vasile Lascăr 158, București 020497
- Obține link-ul corect de embed de pe Google Maps

### 3. Formular Contact

Formularul de contact este configurat pentru simulare. Pentru funcționalitate completă:

**Opțiunea 1: Email (nodemailer)**
```bash
npm install nodemailer
```

**Opțiunea 2: Serviciu extern**
- Formspree
- EmailJS
- SendGrid

### 4. Instagram Integration

Pentru integrare completă Instagram feed:

**Opțiunea 1: Instagram Basic Display API**
- Creează o aplicație Facebook Developer
- Obține Access Token
- Implementează API calls

**Opțiunea 2: Servicii terțe**
- SnapWidget
- Juicer.io
- Elfsight

## 📱 Mobile-First Design

Site-ul este optimizat pentru mobile-first:
- Responsive breakpoints: sm, md, lg
- Touch-friendly interactions
- Optimizat pentru toate dimensiunile de ecran

## 🎯 SEO Optimization

Site-ul include:
- ✅ Meta tags pentru fiecare pagină
- ✅ Open Graph tags pentru social sharing
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Optimizare pentru local SEO (București, Sector 2)

## 🚀 Deployment

### Vercel (Recomandat)

1. Conectează repository-ul cu Vercel
2. Vercel detectează automat Next.js
3. Deploy automat la fiecare push

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`

### Alte platforme

Folosește `npm run build` și servește folderul `.next`.

## 📝 Note Importante

1. **Imagini:** Adaugă imaginile reale în `public/images/` pentru galerie
2. **Google Maps:** Actualizează iframe-ul cu coordonatele exacte
3. **Formular:** Configurează serviciul de email preferat
4. **Domain:** Actualizează URL-urile în sitemap și robots.txt
5. **Instagram:** Implementează feed-ul real dacă dorești

## 🎨 Customizare

### Culori

Editează `tailwind.config.js` pentru a schimba culorile brandului.

### Fonturi

Fontul principal este Inter (Google Fonts). Poți schimba în `app/layout.tsx`.

### Animații

Animațiile folosesc Framer Motion. Poți ajusta durata și easing în componente.

## 📞 Support

Pentru întrebări sau probleme, contactează echipa de dezvoltare.

---

**Hot Honey Tattoo Studio** - Arta tatuajului cu viziune artistică.
