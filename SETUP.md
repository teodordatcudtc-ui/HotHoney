# 🚀 Setup Guide - Hot Honey Tattoo Studio

## ⚡ Quick Start

### 1. Instalează Dependențele
```bash
npm install
```

### 2. Rulează Development Server
```bash
npm run dev
```

### 3. Deschide în Browser
```
http://localhost:3000
```

## 📋 Checklist Pre-Deployment

### ✅ Imagini
- [ ] Adaugă imagini în `public/images/` pentru galerie
  - `gallery-1.jpg` până la `gallery-12.jpg` (sau mai multe)
  - Format recomandat: WebP sau JPG optimizat
  - Dimensiuni: minim 1200x1200px

### ✅ Google Maps
- [ ] Actualizează iframe-ul în `app/contact/page.tsx`
  - Obține link-ul corect de embed de pe Google Maps
  - Coordonate: Strada Vasile Lascăr 158, București 020497

### ✅ Domain & SEO
- [ ] Actualizează URL-urile în:
  - `app/sitemap.ts` - înlocuiește `https://hothoneytattoo.ro`
  - `app/robots.ts` - înlocuiește `https://hothoneytattoo.ro`

### ✅ Formular Contact
- [ ] Configurează serviciul de email:
  - Opțiune 1: Nodemailer (server-side)
  - Opțiune 2: Formspree / EmailJS / SendGrid

### ✅ Instagram Feed (Opțional)
- [ ] Implementează feed real dacă dorești:
  - Instagram Basic Display API
  - Sau servicii terțe (SnapWidget, Juicer.io)

## 🎨 Brand Assets

### Culori
- Primary: `#3e0030`
- Gradient: `#ee5081` → `#ee992d`

### Fonturi
- Principal: Inter (Google Fonts) - deja inclus

## 📱 Testing

### Desktop
- [ ] Testează toate paginile
- [ ] Verifică navigarea
- [ ] Testează formularul
- [ ] Verifică animațiile

### Mobile
- [ ] Testează pe telefon
- [ ] Verifică responsive design
- [ ] Testează touch interactions
- [ ] Verifică meniul mobil

## 🚀 Build Production

```bash
npm run build
npm start
```

## 📦 Deployment

### Vercel (Recomandat)
1. Push code pe GitHub/GitLab
2. Conectează repository cu Vercel
3. Deploy automat

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`

## 🔧 Configurare Avansată

### Environment Variables (dacă e nevoie)
Creează `.env.local`:
```
NEXT_PUBLIC_SITE_URL=https://hothoneytattoo.ro
EMAIL_SERVICE_API_KEY=your_key_here
```

## ✅ Final Checklist

- [ ] Toate imaginile adăugate
- [ ] Google Maps actualizat
- [ ] Domain actualizat în sitemap/robots
- [ ] Formular configurat
- [ ] Testat pe desktop
- [ ] Testat pe mobile
- [ ] Build production testat
- [ ] Deploy realizat

---

**Gata de lansare! 🎉**
