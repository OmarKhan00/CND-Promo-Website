import React from "react";
import {
  FaCheck,
  FaCar,
  FaBolt,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaCoins,
  FaChartLine,
  FaClock,
  FaPlug,
  FaUserPlus,
  FaKey,
} from "react-icons/fa";

// Single‑file landing page styled after the new aesthetic

const features = [
  {
    icon: FaBolt,
    title: "Home & Apartment Chargers",
    desc: "Find nearby Level 1, 2, and fast DC chargers hosted by locals.",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Smart Matching",
    desc: "Search by suburb, time window, connector type, and price per kWh or per session.",
  },
  {
    icon: FaShieldAlt,
    title: "Trusted Access",
    desc: "Verified hosts, clear house rules, secure payments, and 24/7 support.",
  },
  {
    icon: FaCoins,
    title: "Earn From Your Driveway",
    desc: "Hosts set availability and pricing; we take a small commission.",
  },
  {
    icon: FaChartLine,
    title: "Transparent Pricing",
    desc: "Up‑front fees, no surprises. Cancel‑or‑reschedule friendly.",
  },
  {
    icon: FaClock,
    title: "Reserve Ahead",
    desc: "Lock in a slot so you’re never waiting at a busy public site again.",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Search",
    desc: "Enter your destination or suburb, pick connector type, and choose a time.",
  },
  {
    step: "2",
    title: "Book",
    desc: "See availability, house rules, and pricing. Book and pay securely in a few taps.",
  },
  { step: "3", title: "Charge", desc: "Navigate to the host, plug in, and track your session live." },
  {
    step: "4",
    title: "Rate",
    desc: "Leave feedback so the best hosts rise to the top and the network stays trustworthy.",
  },
];

const faqs = [
  {
    q: "What is ChargeNextDoor?",
    a: "An EV charging marketplace connecting drivers to nearby private and small‑business chargers with scheduled access and transparent pricing.",
  },
  {
    q: "How do hosts get paid?",
    a: "Payouts occur automatically to the host’s bank after a completed session. We take a small commission to cover payments, support, and platform costs.",
  },
  {
    q: "What about safety and access?",
    a: "Hosts can gate access (key safe, RFID, app‑based smart plug, or supervised). Photos, instructions, and house rules are shown on each listing. Drivers verify identity before booking.",
  },
  {
    q: "Which connectors are supported?",
    a: "Type 2, CCS2, CHAdeMO, Tesla (via adapter), and standard wall outlets with power limits disclosed.",
  },
  {
    q: "Can I set my own price as a host?",
    a: "Yes. Choose per‑kWh, per‑hour, or fixed‑slot pricing. Add dynamic pricing for peak times if you like.",
  },
];

const testimonials = [
  {
    name: "Aisha • Melbourne",
    quote:
      "Booked a driveway charger near St Kilda before footy—no queues, cheaper than public fast charging, and super clear instructions.",
  },
  {
    name: "Liam • Sydney",
    quote: "I listed my townhouse charger while at work. It now pays for my electricity bill every month.",
  },
  {
    name: "Rina • Brisbane",
    quote: "Loved reserving a guaranteed spot during a rainy night—felt safe and easy.",
  },
];

const hostBenefits = [
  {
    icon: FaCoins,
    title: "New Income",
    desc: "Turn idle time into earnings with flexible schedules and instant payouts.",
  },
  {
    icon: FaShieldAlt,
    title: "You’re In Control",
    desc: "Approve bookings, set house rules, and choose who can charge.",
  },
  {
    icon: FaChartLine,
    title: "Insights",
    desc: "See usage, revenue, and energy reports for tax time and optimisation.",
  },
];

const driverBenefits = [
  {
    icon: FaMapMarkerAlt,
    title: "More Places To Charge",
    desc: "Unlock hidden chargers in your neighbourhood and along your route.",
  },
  {
    icon: FaClock,
    title: "Reserve & Relax",
    desc: "Skip queues—your slot is held for you when you arrive.",
  },
  {
    icon: FaBolt,
    title: "Right Power, Right Price",
    desc: "Pick the connector and speed you need—fair, transparent pricing.",
  },
];

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-semibold tracking-tight">{value}</div>
    <div className="text-sm text-gray-500">{label}</div>
  </div>
);

const SectionTitle = ({ kicker, title, subtitle }) => (
  <div className="mx-auto max-w-3xl text-center mb-10">
    {kicker && (
      <div className="text-xs uppercase tracking-widest text-blue-600 mb-2">{kicker}</div>
    )}
    <h2 className="text-2xl md:text-4xl font-semibold leading-tight">{title}</h2>
    {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
  </div>
);

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="h-full border rounded-lg p-6 shadow-sm bg-white">
    <div className="w-10 h-10 rounded-2xl bg-gray-100 grid place-items-center mb-3">
      <Icon className="w-5 h-5" />
    </div>
    <h3 className="text-base font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

const ListItem = ({ children }) => (
  <div className="flex items-start gap-3 text-sm">
    <FaCheck className="w-4 h-4 mt-0.5" /> <span>{children}</span>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-2xl grid place-items-center bg-blue-100">
              <FaPlug className="w-5 h-5" />
            </div>
            <span className="font-semibold">ChargeNextDoor</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="hover:opacity-80">How it works</a>
            <a href="#drivers" className="hover:opacity-80">For drivers</a>
            <a href="#hosts" className="hover:opacity-80">For hosts</a>
            <a href="#pricing" className="hover:opacity-80">Pricing</a>
            <a href="#faq" className="hover:opacity-80">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden md:inline-flex px-4 py-2 text-sm rounded-md hover:bg-gray-100">
              Sign in
            </button>
            <button className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700">
              List your charger
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 py-16 md:py-24 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-full border mb-4">
              <FaBolt className="w-4 h-4" /> <span>Community‑powered EV charging</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Find a nearby charger. <span className="text-blue-600">Reserve ahead.</span> Skip the queue.
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              ChargeNextDoor connects drivers to verified home and business chargers with clear pricing and guaranteed time slots. Hosts earn. Drivers relax.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Stat value="5,200+" label="Community chargers" />
              <Stat value=">97%" label="4★+ sessions" />
              <Stat value="12 min" label="Avg. detour saved" />
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                placeholder="Enter suburb or postcode (e.g., 3000)"
                className="col-span-2 border rounded-md px-3 py-2"
              />
              <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                Search chargers
              </button>
            </div>
            <div className="mt-3 text-xs text-gray-500">
              Try: Carlton • Parramatta • South Brisbane • Fremantle
            </div>
          </div>

          <div>
            <div className="border rounded-xl shadow-lg p-6 bg-white">
              <h3 className="text-lg font-semibold mb-4">Quick Booking</h3>
              <div className="grid gap-3">
                <input placeholder="Destination or address" className="border rounded-md px-3 py-2" />
                <div className="grid grid-cols-2 gap-3">
                  <input placeholder="Date" className="border rounded-md px-3 py-2" />
                  <input placeholder="Time" className="border rounded-md px-3 py-2" />
                </div>
                <select className="border rounded-md px-3 py-2">
                  <option>Type 2</option>
                  <option>CCS2</option>
                  <option>CHAdeMO</option>
                  <option>Tesla</option>
                </select>
                <button className="w-full px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                  See available slots
                </button>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <FaShieldAlt className="w-3.5 h-3.5" /> Secure payments • Verified profiles
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-12 md:py-20">
        <SectionTitle
          kicker="Why CND"
          title="More certainty, more chargers, more savings"
          subtitle="A community marketplace built for reliability and trust."
        />
        <div className="max-w-6xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-12 md:py-20 bg-gray-100">
        <SectionTitle kicker="How it works" title="Book in four simple steps" />
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-4 gap-6">
          {howItWorks.map(({ step, title, desc }) => (
            <div key={step} className="border rounded-lg p-6 bg-white shadow-sm">
              <div className="text-xs text-gray-500">Step {step}</div>
              <h3 className="text-base font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DRIVERS vs HOSTS */}
      <section className="py-12 md:py-20" id="drivers">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <SectionTitle kicker="For drivers" title="Plan your day, not your charging" />
            <div className="grid gap-4">
              {driverBenefits.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gray-100 grid place-items-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">{title}</div>
                    <div className="text-sm text-gray-600">{desc}</div>
                  </div>
                </div>
              ))}
              <div className="grid sm:grid-cols-2 gap-3 mt-2">
                <ListItem>Real‑time status & instructions</ListItem>
                <ListItem>Up‑front price before you go</ListItem>
                <ListItem>Cancel‑friendly windows</ListItem>
                <ListItem>In‑app navigation support</ListItem>
              </div>
              <div className="mt-4 flex gap-3 flex-wrap">
                <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 flex items-center">
                  <FaCar className="w-4 h-4 mr-2" /> Find chargers
                </button>
                <button className="px-4 py-2 rounded-md border flex items-center">
                  Create driver profile
                </button>
              </div>
            </div>
          </div>

          <div id="hosts">
            <SectionTitle kicker="For hosts" title="Earn from your charger—on your terms" />
            <div className="grid gap-4">
              {hostBenefits.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gray-100 grid place-items-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium">{title}</div>
                    <div className="text-sm text-gray-600">{desc}</div>
                  </div>
                </div>
              ))}
              <div className="grid sm:grid-cols-2 gap-3 mt-2">
                <ListItem>Set price & availability</ListItem>
                <ListItem>Approve or auto‑accept bookings</ListItem>
                <ListItem>Insurance & support options</ListItem>
                <ListItem>Energy & revenue reports</ListItem>
              </div>
              <div className="mt-4 flex gap-3 flex-wrap">
                <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 flex items-center">
                  <FaUserPlus className="w-4 h-4 mr-2" /> List your charger
                </button>
                <button className="px-4 py-2 rounded-md border flex items-center">
                  <FaKey className="w-4 h-4 mr-2" /> Host guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-12 md:py-20 bg-gray-100">
        <SectionTitle
          kicker="Pricing"
          title="Simple, transparent pricing"
          subtitle="Drivers see the full price before booking. Hosts choose how to charge."
        />
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h3 className="text-base font-semibold mb-2">Per‑Session</h3>
            <div className="text-3xl font-semibold mb-2">$6–$15</div>
            <p className="text-gray-600 mb-4">
              Fixed price for a reserved slot. Great for short top‑ups.
            </p>
            <div className="grid gap-2">
              <ListItem>Time‑boxed access</ListItem>
              <ListItem>Host‑set rules</ListItem>
              <ListItem>Ideal for errands</ListItem>
            </div>
            <button className="w-full mt-4 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
              Choose session
            </button>
          </div>

          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h3 className="text-base font-semibold mb-2">Per‑kWh</h3>
            <div className="text-3xl font-semibold mb-2">$0.25–$0.55</div>
            <p className="text-gray-600 mb-4">
              Pay only for energy consumed. Ideal for longer charges.
            </p>
            <div className="grid gap-2">
              <ListItem>Live usage tracking</ListItem>
              <ListItem>Receipts for tax time</ListItem>
              <ListItem>Fair local market rates</ListItem>
            </div>
            <button className="w-full mt-4 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
              Find per‑kWh
            </button>
          </div>

          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h3 className="text-base font-semibold mb-2">Per‑Hour</h3>
            <div className="text-3xl font-semibold mb-2">$3–$10</div>
            <p className="text-gray-600 mb-4">
              Great for predictable schedules and apartment bays.
            </p>
            <div className="grid gap-2">
              <ListItem>Reserve specific hours</ListItem>
              <ListItem>No energy metering required</ListItem>
              <ListItem>Simple for hosts</ListItem>
            </div>
            <button className="w-full mt-4 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
              Browse hourly
            </button>
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-4 mt-6 text-xs text-gray-500 text-center">
          Platform commission applies and is shown before checkout. Prices are indicative and vary by city and host settings.
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="py-12 md:py-20">
        <SectionTitle
          kicker="Coverage"
          title="Growing across Australia"
          subtitle="Rolling out city by city. Add your charger to expand the map."
        />
        <div className="max-w-6xl mx-auto px-4">
          <div className="aspect-[16/9] w-full rounded-2xl border bg-[linear-gradient(135deg,transparent_24px,rgba(0,0,0,0.04)_24px),linear-gradient(225deg,transparent_24px,rgba(0,0,0,0.04)_24px)] bg-[length:48px_48px] grid place-items-center">
            <div className="text-center">
              <FaMapMarkerAlt className="w-10 h-10 mx-auto mb-2" />
              <div className="font-medium">Interactive map placeholder</div>
              <div className="text-sm text-gray-600">
                (Embed Mapbox/Google Maps here with cluster markers and availability)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-12 md:py-20 bg-gray-100">
        <SectionTitle kicker="What people say" title="Loved by local drivers and hosts" />
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="border rounded-lg p-6 bg-white shadow-sm">
              <p className="mb-3 text-sm">“{t.quote}”</p>
              <div className="text-xs text-gray-500">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-12 md:py-20">
        <SectionTitle kicker="FAQ" title="Answers to common questions" />
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="border rounded-md p-4 bg-white">
                <summary className="font-medium cursor-pointer">{f.q}</summary>
                <p className="mt-2 text-sm text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-3xl border p-8 md:p-12 grid md:grid-cols-2 gap-6 items-center bg-white">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">
                Power the future of EVs—right from your home
              </h3>
              <p className="text-gray-600 mt-2">
                List your charger in minutes and set your own rules. You choose who, when, and how much.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 flex items-center">
                  <FaUserPlus className="w-4 h-4 mr-2" /> Become a host
                </button>
                <button className="px-4 py-2 rounded-md border flex items-center">
                  <FaCar className="w-4 h-4 mr-2" /> Find a charger
                </button>
              </div>
            </div>
            <ul className="grid gap-3 text-sm">
              <ListItem>Identity verification & reviews</ListItem>
              <ListItem>Clear house rules and photos</ListItem>
              <ListItem>Secure payments & receipts</ListItem>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-2xl grid place-items-center bg-blue-100">
                <FaPlug className="w-5 h-5" />
              </div>
              <span className="font-semibold">ChargeNextDoor</span>
            </div>
            <p className="text-gray-600">
              Community‑powered EV charging. Built for certainty, trust, and access everywhere.
            </p>
          </div>
          <div>
            <div className="font-medium mb-2">Product</div>
            <ul className="grid gap-2 text-gray-600">
              <li><a href="#how">How it works</a></li>
              <li><a href="#drivers">For drivers</a></li>
              <li><a href="#hosts">For hosts</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-2">Company</div>
            <ul className="grid gap-2 text-gray-600">
              <li>About</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <div className="font-medium mb-2">Legal</div>
            <ul className="grid gap-2 text-gray-600">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Host protection</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} ChargeNextDoor. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

