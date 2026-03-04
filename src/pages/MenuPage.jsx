import { useState, useRef } from 'react'
import { ArrowIcon, CtaFlip } from '../components/Layout'

/* ═══════════════════════════════════════════════════════════
   MENU DATA
   ═══════════════════════════════════════════════════════════ */

const CATEGORIES = [
  'All',
  'Sushi Sets',
  'Maki',
  'Uramaki',
  'Dynamite Rolls',
  'Nigiri',
  'Street Food',
  'Hot Dishes',
  'Ramen',
  'Bowls',
  'Party Platters',
  'Sides',
  'Desserts & Drinks',
]

const MENU_ITEMS = [
  // ── SUSHI SETS ──
  { category: 'Sushi Sets', name: 'Omega 3', desc: 'Sashimi grade Atlantic salmon. 4 salmon baby roles; 6 salmon and avocado uramaki; 5 salmon nigiri.', priceEatIn: 13.14, priceTakeOut: 10.95 },
  { category: 'Sushi Sets', name: 'Zen', desc: 'Line caught yellowfin tuna and sashimi grade salmon; 3 salmon + avocado uramaki; 3 crab maki; 2 tuna sushi; 3 salmon sushi; 2 salmon sashimi.', priceEatIn: 13.14, priceTakeOut: 10.95 },
  { category: 'Sushi Sets', name: 'Oh My Veggies', desc: 'A plant based favourite packed with nutrients — 6 veggie maki; 6 baby avo maki; 4 veggie gyoza + salad.', priceEatIn: 12.78, priceTakeOut: 10.65, tag: 'Vegetarian' },
  { category: 'Sushi Sets', name: 'Colours of Koyo', desc: 'ASC assured Ebi prawns, line caught yellowfin tuna and sashimi grade salmon. 2 crab, 2 salmon, 2 veggie uramaki + 3 salmon, 2 tuna, 3 prawn sushi.', priceEatIn: 13.14, priceTakeOut: 10.95 },
  { category: 'Sushi Sets', name: 'Sashimi-Grade', desc: 'Pure sashimi cut line caught yellowfin tuna and Atlantic salmon. 6 salmon, 4 tuna sashimi + edamame.', priceEatIn: 14.16, priceTakeOut: 11.80 },
  { category: 'Sushi Sets', name: 'Salmon-Kren', desc: 'Sashimi grade Atlantic salmon with avocado topped with crunchy onions. 5 salmon maki; 3 salmon sushi.', priceEatIn: 11.40, priceTakeOut: 9.50 },
  { category: 'Sushi Sets', name: 'Salmon-Lit', desc: 'A lighter eat of Omega 3 rich sashimi grade Atlantic salmon. 3 salmon sushi; 4 salmon maki + 3 salmon baby maki.', priceEatIn: 11.40, priceTakeOut: 9.50 },
  { category: 'Sushi Sets', name: 'Sushi Rainbow', desc: 'Wonderful selection of over 17 pieces of sushi. As ever sashimi grade Atlantic salmon, 6 salmon + 6 avo baby maki; 5 salmon sushi.', priceEatIn: 11.40, priceTakeOut: 9.50 },

  // ── MAKI ──
  { category: 'Maki', name: 'Avocado Maki', desc: '14 pieces of avocado wrapped in KOYO\u2019s Japanese originated rice.', priceEatIn: 8.34, priceTakeOut: 6.95, tag: 'Vegetarian' },
  { category: 'Maki', name: 'Salmon Maki', desc: '14 baby salmon rolls wrapped in KOYO\u2019s Japanese originated rice.', priceEatIn: 8.34, priceTakeOut: 6.95 },
  { category: 'Maki', name: 'Mixed Maki', desc: '7 baby salmon rolls + 7 pieces of avocado wrapped in KOYO\u2019s Japanese originated rice.', priceEatIn: 8.34, priceTakeOut: 6.95 },

  // ── URAMAKI ──
  { category: 'Uramaki', name: 'Salmon-Avocado Uramaki', desc: '6 pieces of Atlantic sashimi grade salmon wrapped in Japanese originated rice, seaweed and sesame seeds.', priceEatIn: 8.34, priceTakeOut: 6.95 },
  { category: 'Uramaki', name: 'Veggie Uramaki', desc: '6 veggie maki pieces of fine beans, carrots and avocado wrapped in Japanese originated rice seaweed and chives.', priceEatIn: 8.34, priceTakeOut: 6.95, tag: 'Vegetarian' },
  { category: 'Uramaki', name: 'Crab Uramaki', desc: '6 crab and avocado pieces wrapped in Japanese originated rice, seaweed and sesame seeds.', priceEatIn: 8.34, priceTakeOut: 6.95 },
  { category: 'Uramaki', name: 'Tuna & Ginger Uramaki', desc: '6 tuna and ginger pieces wrapped in Japanese originated rice, seaweed and sesame seeds.', priceEatIn: 8.34, priceTakeOut: 6.95 },

  // ── DYNAMITE ROLLS ──
  { category: 'Dynamite Rolls', name: 'Crab Dynamite Roll', desc: '6 pieces of crab and avocado under a crunchy blanket.', priceEatIn: 10.74, priceTakeOut: 8.95 },
  { category: 'Dynamite Rolls', name: 'Tuna Dynamite Roll', desc: '6 pieces of spicy line caught tuna under a crunchy blanket. Absolute favourite!', priceEatIn: 10.74, priceTakeOut: 8.95, tag: 'Popular' },
  { category: 'Dynamite Rolls', name: 'Salmon Dynamite Roll', desc: '6 pieces of sashimi grade Atlantic salmon under a crunchy blanket. Classic!', priceEatIn: 10.74, priceTakeOut: 8.95 },
  { category: 'Dynamite Rolls', name: 'Veggie Dynamite Roll', desc: '6 pieces fine beans, carrots + avocado wrapped in Japanese originated rice seaweed and chives under a crunchy blanket.', priceEatIn: 10.74, priceTakeOut: 8.95, tag: 'Vegetarian' },

  // ── NIGIRI ──
  { category: 'Nigiri', name: 'Salmon Nigiri', desc: '6 salmon sushi pieces with KOYO\u2019s Japanese originated rice and sashimi grade salmon.', priceEatIn: 8.34, priceTakeOut: 6.95 },
  { category: 'Nigiri', name: 'Butterfly Prawn Nigiri', desc: '6 prawn sushi pieces with KOYO\u2019s Japanese originated rice.', priceEatIn: 8.34, priceTakeOut: 6.95 },
  { category: 'Nigiri', name: 'Tuna Nigiri', desc: '6 tuna sushi pieces with KOYO\u2019s Japanese originated rice and sashimi grade tuna.', priceEatIn: 8.34, priceTakeOut: 6.95 },

  // ── IZAKAYA STREET FOOD ──
  { category: 'Street Food', name: 'Beef Tataki', desc: 'Medium rare beef with KOYO secret dressing, mixed leafs, pumpkin seeds and sticky rice.', priceEatIn: 14.99, tag: 'Dine-in Only' },
  { category: 'Street Food', name: 'Osaka Takoyaki', desc: '8 hand made octopus balls.', priceEatIn: 14.99, tag: 'Dine-in Only' },
  { category: 'Street Food', name: 'Meiji Yakitori', desc: '8 pieces of teriyaki marinated chicken on skewers.', priceEatIn: 14.99, tag: 'Dine-in Only' },
  { category: 'Street Food', name: 'Izakaya Karaage', desc: '10 pieces of Karaage chicken made to an original recipe.', priceEatIn: 14.99, tag: 'Dine-in Only' },
  { category: 'Street Food', name: 'Yoshoku Ebi Fry', desc: '8 pieces of ASC certified prawns in panko bread crumbs and chilli mayo.', priceEatIn: 14.99, tag: 'Dine-in Only' },
  { category: 'Street Food', name: 'Nagoya Tebasaki', desc: '8 middle wings with a special blend of Japanese herbs and spices. Tender and juicy. Served with a chilli mayo.', priceEatIn: 14.99, tag: 'Dine-in Only' },
  { category: 'Street Food', name: 'Hokkaido Tara Katsu', desc: '10 pieces of breaded fleshy white cod with katsu sauce.', priceEatIn: 14.99, tag: 'Dine-in Only' },

  // ── HOT DISHES ──
  { category: 'Hot Dishes', name: 'Renegade Chicken Katsu', desc: 'Breaded chicken, sticky rice and KOYO\u2019s katsu sauce + sesame seeds.', priceEatIn: 15.49, tag: 'Dine-in Only' },
  { category: 'Hot Dishes', name: 'Tokyo Katsu', desc: 'Silken tofu, sticky rice and KOYO\u2019s katsu sauce + sesame seeds.', priceEatIn: 15.49, tag: 'Vegetarian' },
  { category: 'Hot Dishes', name: 'Miso Teriyaki Salmon', desc: '150g fillet of miso marinated salmon, teriyaki sauce, sticky rice + sesame seeds.', priceEatIn: 15.95, tag: 'Dine-in Only' },
  { category: 'Hot Dishes', name: 'Koyo Miso', desc: 'Miso, tofu, chives and wakame.', priceEatIn: 5.00, tag: 'Vegetarian' },
  { category: 'Hot Dishes', name: 'Teriyaki Chicken Rice Bowl', desc: 'Crispy chicken on a bed of sticky rice with lashings of teriyaki sauce. With carrot, mixed leaves + sesame seeds.', priceEatIn: 13.20, tag: 'Dine-in Only' },
  { category: 'Hot Dishes', name: 'Flaked Teriyaki Salmon Rice Bowl', desc: 'Atlantic salmon on a bed of sticky rice with lashings of teriyaki sauce. With carrot, mixed leaves + sesame seeds.', priceEatIn: 13.20, tag: 'Dine-in Only' },

  // ── RAMEN ──
  { category: 'Ramen', name: 'Crispy Vegetable Gyoza Ramen', desc: 'Make it vegan — remove tamago.', priceEatIn: 15.49, tag: 'Vegetarian' },
  { category: 'Ramen', name: 'Crispy Chicken Gyoza Ramen', desc: 'Crispy chicken gyoza in a rich ramen broth.', priceEatIn: 15.49, tag: 'Dine-in Only' },
  { category: 'Ramen', name: 'Spicy Teriyaki Salmon Ramen', desc: 'Teriyaki salmon in a spicy ramen broth.', priceEatIn: 15.49, tag: 'Dine-in Only' },
  { category: 'Ramen', name: 'Crispy Prawn Gyoza Ramen', desc: 'Crispy prawn gyoza in a rich ramen broth.', priceEatIn: 15.49, tag: 'Dine-in Only' },

  // ── BOWLS (POKE) ──
  { category: 'Bowls', name: 'Tuna Poke', desc: 'A bowl of line caught yellowfin tuna with avocado, rice, muki beans, carrot, mango, ginger + wasabi sauce + sesame seeds.', priceEatIn: 11.94, priceTakeOut: 9.95 },
  { category: 'Bowls', name: 'Salmon Poke', desc: 'Sashimi grade Atlantic salmon with avocado, rice, muki beans, carrot, mango, ginger + wasabi sauce + sesame seeds.', priceEatIn: 11.94, priceTakeOut: 9.95 },
  { category: 'Bowls', name: 'Tofu Poke', desc: 'Tofu with avocado, rice, muki beans, carrot, mango, ginger + wasabi sauce + sesame seeds.', priceEatIn: 11.94, priceTakeOut: 9.95, tag: 'Vegetarian' },

  // ── PARTY PLATTERS ──
  { category: 'Party Platters', name: 'Veggie Gyoza & Uramaki Sharing Platter', desc: 'Tapasu style sharing selection. 8 veg maki; 20 avo baby rolls & 6 veggie gyoza.', priceEatIn: 44.40, priceTakeOut: 37.00, tag: 'Vegetarian' },
  { category: 'Party Platters', name: 'Veggie Dynamite Platter', desc: '24 pieces uramaki containing fine beans, carrots, avocado and mint covered in a crunchy blanket.', priceEatIn: 42.96, priceTakeOut: 35.80, tag: 'Vegetarian' },
  { category: 'Party Platters', name: 'Salmon & Tuna Dynamite Platter', desc: '12 pieces of salmon and avocado; 12 pieces of tuna and ginger covered in a crunchy blanket.', priceEatIn: 42.96, priceTakeOut: 35.80 },
  { category: 'Party Platters', name: 'Uramaki Sharing Platter', desc: '6 pieces of salmon and avocado, 6 pieces of crab, 6 pieces of tuna and ginger & 6 pieces of veggie.', priceEatIn: 33.36, priceTakeOut: 27.80 },
  { category: 'Party Platters', name: 'Baby Salmon & Avocado Maki Sharing Platter', desc: '28 pieces of salmon maki & 28 pieces of avocado maki.', priceEatIn: 33.36, priceTakeOut: 27.80 },
  { category: 'Party Platters', name: 'Sushi Tapasu Selection', desc: 'Tapasu style sharing selection. 4 tuna sashimi; 4 salmon sushi; 4 salmon, 4 crab + 4 veggie maki; 8 avo baby rolls.', priceEatIn: 49.20, priceTakeOut: 41.00, tag: 'Popular' },
  { category: 'Party Platters', name: 'Salmon \u2022 Tuna Selection', desc: 'Tapasu style sharing selection. 6 salmon & 4 tuna sushi; 4 salmon & 4 tuna maki; 8 salmon baby rolls; 4 salmon sashimi.', priceEatIn: 49.20, priceTakeOut: 41.00 },
  { category: 'Party Platters', name: 'Mixed Nigiri Platter', desc: '12 salmon; 6 tuna & 6 butterfly prawns.', priceEatIn: 33.36, priceTakeOut: 27.80 },

  // ── SIDES ──
  { category: 'Sides', name: 'Tenderstem Broccoli', desc: 'Steamed broccoli with sesame dressing.', priceEatIn: 5.95, tag: 'Vegetarian' },
  { category: 'Sides', name: 'Edamame', desc: 'Lightly salted edamame beans.', priceEatIn: 4.95, tag: 'Vegetarian' },
  { category: 'Sides', name: 'Gyoza', desc: 'Choose from: Chicken, Vegetable, Prawn or Salmon.', priceEatIn: 6.99 },
  { category: 'Sides', name: 'Sticky Rice', desc: 'Using Japanese origin rice.', priceEatIn: 6.50, tag: 'Vegetarian' },

  // ── DESSERTS & DRINKS ──
  { category: 'Desserts & Drinks', name: 'Little Moons Mochi', desc: 'Small balls of ice cream covered in sweet rice dough. Flavours: chocolate ganash, salted caramel, green tea, mango, coconut, raspberry, strawberry cheesecake, vanilla.', priceEatIn: 2.00, priceNote: 'each' },
  { category: 'Desserts & Drinks', name: 'Ice Cream', desc: 'Vanilla, yuzu, chocolate.', priceEatIn: 2.00, priceNote: 'per scoop' },
  { category: 'Desserts & Drinks', name: 'Green Tea', desc: 'A pot of Japanese tea for 2 people.', priceEatIn: 5.00 },
]

const TAG_COLORS = {
  'Vegetarian': { bg: 'rgba(42,107,60,0.08)', text: '#2A6B3C', border: 'rgba(42,107,60,0.2)' },
  'Popular': { bg: 'rgba(185,76,42,0.08)', text: '#E10613', border: 'rgba(185,76,42,0.2)' },
  'Dine-in Only': { bg: 'rgba(17,17,17,0.05)', text: '#555555', border: 'rgba(17,17,17,0.12)' },
}

/* ═══════════════════════════════════════════════════════════
   MENU ITEM CARD
   ═══════════════════════════════════════════════════════════ */

function MenuItem({ item }) {
  const tagColor = item.tag ? TAG_COLORS[item.tag] || TAG_COLORS['Popular'] : null

  return (
    <div
      className="group relative p-5 md:p-6 rounded-xl transition-all duration-300"
      style={{ backgroundColor: '#FFFFFF', border: '1px solid #EEEEEE' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#DDDDDD'
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#EEEEEE'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="font-body font-medium text-text text-[15px] md:text-[16px] m-0 leading-snug">
          {item.name}
        </h3>
        <div className="flex flex-col items-end shrink-0">
          {item.priceTakeOut ? (
            <>
              <span className="font-body font-medium text-text text-[15px] whitespace-nowrap">
                £{item.priceEatIn.toFixed(2)}
              </span>
              <span className="font-body text-text-muted text-[11px] whitespace-nowrap">
                £{item.priceTakeOut.toFixed(2)} takeaway
              </span>
            </>
          ) : (
            <span className="font-body font-medium text-text text-[15px] whitespace-nowrap">
              £{item.priceEatIn.toFixed(2)}{item.priceNote ? ` ${item.priceNote}` : ''}
            </span>
          )}
        </div>
      </div>
      <p className="font-body text-text-muted text-[13px] leading-[1.65] m-0 mb-3">
        {item.desc}
      </p>
      {item.tag && (
        <span
          className="inline-block font-body text-[11px] font-medium px-2.5 py-1 rounded-full"
          style={{ backgroundColor: tagColor.bg, color: tagColor.text, border: `1px solid ${tagColor.border}` }}
        >
          {item.tag}
        </span>
      )}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   FILTER BAR
   ═══════════════════════════════════════════════════════════ */

function FilterBar({ active, onChange }) {
  const scrollRef = useRef(null)

  return (
    <div className="relative -mx-6 md:-mx-12 lg:-mx-24">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-6 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #F7F6F3, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-6 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #F7F6F3, transparent)' }} />
      <div
        ref={scrollRef}
        className="flex items-center gap-2 overflow-x-auto px-6 md:px-12 lg:px-24 py-1 no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className="shrink-0 px-4 py-2 rounded-full text-[13px] font-body font-medium border-none cursor-pointer transition-all duration-200 whitespace-nowrap"
            style={
              active === cat
                ? { backgroundColor: '#111111', color: '#FFFFFF' }
                : { backgroundColor: 'transparent', color: '#555555', border: '1px solid #DDDDDD' }
            }
            onMouseEnter={(e) => {
              if (active !== cat) e.currentTarget.style.borderColor = '#AAAAAA'
            }}
            onMouseLeave={(e) => {
              if (active !== cat) e.currentTarget.style.borderColor = '#DDDDDD'
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════
   MENU PAGE
   ═══════════════════════════════════════════════════════════ */

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter items
  const filtered = MENU_ITEMS.filter((item) => {
    const matchCategory = activeCategory === 'All' || item.category === activeCategory
    const matchSearch = !searchQuery || item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.desc.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  // Group by category for display
  const grouped = {}
  filtered.forEach((item) => {
    if (!grouped[item.category]) grouped[item.category] = []
    grouped[item.category].push(item)
  })

  const categoryOrder = CATEGORIES.filter((c) => c !== 'All')

  return (
      <main className="bg-bg min-h-screen">
        {/* Hero banner */}
        <section
          className="relative w-full overflow-hidden flex items-end"
          style={{ height: 'clamp(280px, 40vh, 420px)' }}
        >
          <div className="absolute inset-0" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2670&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#1A0A00' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.4) 100%)' }} />
          <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 md:px-12 lg:px-24 pb-10 md:pb-14">
            <span className="block font-body uppercase text-[11px] tracking-[0.2em] mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
              KOYO
            </span>
            <h1 className="font-display text-white m-0" style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1 }}>
              Our Menu
            </h1>
          </div>
        </section>

        {/* Intro text */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[22%_1fr] gap-6 lg:gap-12">
            <div className="pt-1">
              <span className="font-body text-text-muted text-[15px]">The Menu</span>
            </div>
            <div>
              <p className="font-body text-text text-[16px] md:text-[17px] leading-[1.75] max-w-[680px] mb-0">
                Every dish at <strong className="text-accent-green font-medium">KOYO</strong> is a tribute to the precision and artistry of Japanese culinary tradition. From delicate sashimi to hearty donburi, our menu is crafted with the freshest seasonal ingredients sourced directly from Japan&apos;s finest markets.
              </p>
            </div>
          </div>
        </section>

        {/* Sticky filter bar */}
        <section
          className="sticky z-40 py-4"
          style={{ backgroundColor: '#F7F6F3', top: 'var(--nav-height, 52px)', boxShadow: '0 -20px 0 #F7F6F3' }}
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24">
            {/* Search */}
            <div className="mb-3">
              <div className="relative">
                <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted" width="16" height="16" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                  <circle cx="8" cy="8" r="5.5" /><path d="M12.5 12.5L16 16" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search dishes..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-full text-[13px] font-body bg-white border-none outline-none"
                  style={{ border: '1px solid #DDDDDD' }}
                  onFocus={(e) => e.currentTarget.style.borderColor = '#AAAAAA'}
                  onBlur={(e) => e.currentTarget.style.borderColor = '#DDDDDD'}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full bg-transparent border-none cursor-pointer text-text-muted"
                    aria-label="Clear search"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6L18 18M6 18L18 6"/></svg>
                  </button>
                )}
              </div>
            </div>
            {/* Category pills */}
            <FilterBar active={activeCategory} onChange={setActiveCategory} />
          </div>
        </section>

        {/* Menu items */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 py-10 md:py-16">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-body text-text-muted text-[15px]">No dishes found matching your search.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All') }}
                className="mt-4 font-body text-[13px] font-medium px-5 py-2.5 rounded-full border-none cursor-pointer transition-colors duration-200"
                style={{ backgroundColor: '#111111', color: '#FFFFFF' }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            categoryOrder.map((cat) => {
              if (!grouped[cat]) return null
              return (
                <div key={cat} className="mb-12 md:mb-16 last:mb-0">
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="font-display text-text m-0" style={{ fontSize: 'clamp(22px, 3vw, 28px)' }}>
                      {cat}
                    </h2>
                    <div className="flex-1 h-px" style={{ backgroundColor: '#EEEEEE' }} />
                    <span className="font-body text-text-muted text-[13px] shrink-0">
                      {grouped[cat].length} {grouped[cat].length === 1 ? 'item' : 'items'}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {grouped[cat].map((item, i) => (
                      <MenuItem key={`${cat}-${i}`} item={item} />
                    ))}
                  </div>
                </div>
              )
            })
          )}
        </section>

        {/* Pricing note */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 pb-10">
          <div className="p-5 rounded-xl" style={{ backgroundColor: '#F7F6F3', border: '1px solid #EEEEEE' }}>
            <p className="font-body text-text-muted text-[13px] leading-[1.7] m-0">
              <strong className="text-text font-medium">Pricing Note:</strong> All eat-in prices are inclusive of UK government 20% VAT charge. Takeaway prices shown where available. KOYO is cashless. For allergen info please ask a member of staff. Last orders for takeaway before 6pm on the day.
            </p>
          </div>
        </section>

        {/* CTA band */}
        <section className="py-16 md:py-20" style={{ backgroundColor: '#F7F6F3' }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 text-center">
            <h2 className="font-display text-text mb-4 m-0" style={{ fontSize: 'clamp(28px, 4vw, 40px)' }}>
              Ready to Experience It?
            </h2>
            <p className="font-body text-text-muted text-[15px] mb-8 max-w-[480px] mx-auto">
              Reserve your table today and let our chefs take you on a culinary journey through the heart of Japan.
            </p>
            <a
              href="/contact"
              className="group/cta inline-flex items-center px-8 py-3.5 rounded-full text-[13px] font-body font-medium no-underline transition-all duration-300"
              style={{ backgroundColor: '#111111', color: '#FFFFFF' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#333'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#111111'}
            >
              <CtaFlip label="Make a Reservation" labelJa="ご予約はこちら" />
              <ArrowIcon />
            </a>
          </div>
        </section>
      </main>
  )
}
