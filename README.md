# VelvetDate - Companion Rental Platform (India)

A premium, full-stack companion rental platform built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. Designed for the Indian market with local currency support (₹) and Indian cities.

## 🌟 Features

### User-Facing Features
- ✨ **Stunning, Responsive Design** - Premium dark mode UI with glassmorphism effects
- 🔍 **Advanced Search & Filters** - Filter by location, age, interests
- 📱 **Fully Mobile Responsive** - Optimized for all screen sizes
- 💳 **Booking System** - Complete booking flow with pricing calculator
- ⭐ **Profile Pages** - Detailed companion profiles with galleries and reviews
- 🇮🇳 **India-Focused** - Cities like Mumbai, Delhi, Bangalore, Goa, Pune

### Admin Panel Features
- 📊 **Dashboard Statistics** - Total profiles, availability status
- ➕ **Add Companions** - Full form with validation
- ✏️ **Edit Profiles** - Update any companion information
- 🗑️ **Delete Profiles** - Remove companions with confirmation
- 🖼️ **Image Management** - Support for multiple image URLs
- 💾 **LocalStorage Persistence** - Data saved locally (MongoDB ready)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Navigate to project directory**
```bash
cd "c:/Users/prati/OneDrive/Desktop/New folder (2)/cg-site/velvet-date"
```

2. **Install dependencies** (if not already installed)
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure

```
velvet-date/
├── app/
│   ├── page.tsx              # Home page with hero & featured profiles
│   ├── layout.tsx            # Root layout with navigation
│   ├── globals.css           # Global styles & Tailwind directives
│   ├── browse/
│   │   └── page.tsx          # Browse all companions with filters
│   ├── companions/
│   │   └── [id]/
│   │       └── page.tsx      # Individual profile detail page
│   └── admin/
│       └── page.tsx          # Admin dashboard (CRUD operations)
├── hooks/
│   └── useCompanions.ts      # Custom hook for data management
├── types/
│   └── index.ts              # TypeScript interfaces
├── public/                   # Static assets
└── package.json
```

## 💻 Available Pages

| Page | Route | Description |
|------|-------|-------------|
| **Home** | `/` | Landing page with hero and featured companions |
| **Browse** | `/browse` | All companions with search and filters |
| **Profile** | `/companions/[id]` | Detailed companion profile with booking |
| **Admin Panel** | `/admin` | Manage all companion profiles |

## 🎨 Design Features

- **Dark Mode Theme** - Premium slate/purple/pink color scheme
- **Glassmorphism** - Modern frosted glass UI elements
- **Smooth Animations** - Hover effects, transitions, scale transforms
- **Typography** - Google Fonts: Playfair Display (serif) + Inter (sans)
- **Responsive Grid** - Mobile-first, 1/2/3 column layouts
- **Premium Components** - Cards, forms, tables, stats widgets

## 🔧 Data Management

### Current: LocalStorage
- Data persists in browser localStorage
- Pre-seeded with 3 sample companions
- CRUD operations via `useCompanions` hook
- Key: `velvet_date_companions`

### Future: MongoDB Atlas
The app is architected to easily migrate to MongoDB:
1. Replace `useCompanions` hook with API calls
2. Create `/app/api/companions/route.ts` endpoints
3. Connect to MongoDB Atlas
4. Update environment variables

## 🛠️ Admin Panel Usage

1. Navigate to `/admin`
2. View statistics (Total, Available, Booked)
3. Click **"+ Add New Companion"** to create profile
4. Fill form:
   - Name, Age, Location (Indian cities)
   - Price in ₹ (Rupees)
   - Bio and Interests (comma-separated)
   - Image URLs (comma-separated URLs)
   - Availability checkbox
5. **Edit** existing profiles with ✏️ button
6. **Delete** profiles with 🗑️ button (with confirmation)

## 📸 Image Guidelines

For now, use **external image URLs**:
- Unsplash: `https://images.unsplash.com/...`
- Any publicly accessible image URL
- Use high-quality, professional photos
- Comma-separated for multiple images

**Coming Soon**: Direct file upload with MongoDB GridFS

## 🌐 Deployment

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option 2: Build for Production
```bash
npm run build
npm start
```

## 🔒 Security Notes

- This is a **development template** using localStorage
- For production:
  - Add authentication (NextAuth.js)
  - Implement server-side validation
  - Use MongoDB/PostgreSQL for data
  - Add payment gateway integration
  - Implement HTTPS and security headers

## 🎯 Customization

### Change Colors
Edit `app/globals.css`:
```css
--background-start-rgb: 15, 23, 42;  /* Change dark mode colors */
```

### Add New Cities
Edit `app/browse/page.tsx`:
```tsx
<option value="Kolkata">Kolkata</option>
```

### Modify Initial Data
Edit `hooks/useCompanions.ts`:
```tsx
const INITIAL_DATA: Companion[] = [
  // Add your companions here
];
```

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px` - Single column, stacked filters
- **Tablet**: `768px - 1024px` - 2 columns
- **Desktop**: `> 1024px` - 3 columns, sidebar filters

## 🐛 Troubleshooting

**Issue**: Server won't start
```bash
rm -rf .next
npm install
npm run dev
```

**Issue**: TypeScript errors
```bash
npm install --save-dev @types/node @types/react @types/react-dom
```

**Issue**: Styles not loading
- Check `app/globals.css` imports `@import "tailwindcss";`
- Clear browser cache
- Restart dev server

## 📄 License

This is a development template. Customize freely for your needs.

## 🙏 Credits

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS 4
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Icons**: Unicode & SVG
- **Images**: Unsplash (placeholder)

---

**Developer Note**: This project uses localStorage for development. Replace with MongoDB Atlas connection for production deployment.

**Contact**: Built for Indian market with ₹ pricing and local cities.
