import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../components/ui/accordion";
import {
  Check,
  Car,
  Zap,
  MapPin,
  Shield,
  Coins,
  LineChart,
  Clock,
  UserPlus,
  Plus,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Home & Apartment Chargers",
    desc: "Find nearby Level 1, 2, and fast DC chargers hosted by locals.",
  },
  {
    icon: MapPin,
    title: "Smart Matching",
    desc: "Search by suburb, time window, connector type, and price per kWh or per session.",
  },
  {
    icon: Shield,
    title: "Trusted Access",
    desc: "Verified hosts, clear house rules, secure payments, and 24/7 support.",
  },
  {
    icon: Coins,
    title: "Earn From Your Driveway",
    desc: "Hosts set availability and pricing; we take a small commission.",
  },
  {
    icon: LineChart,
    title: "Transparent Pricing",
    desc: "Up‑front fees, no surprises. Cancel‑or‑reschedule friendly.",
  },
  {
    icon: Clock,
    title: "Reserve Ahead",
    desc: "Lock in a slot so you’re never waiting at a busy public site again.",
  },
];

const howItWorks = [
  {
    step: "Search",
    desc: "Enter your destination or suburb, pick connector type, and choose a time.",
  },
  {
    step: "Book",
    desc: "See availability, house rules, and pricing. Book and pay securely in a few taps.",
  },
  { step: "Charge", desc: "Navigate to the host, plug in, and track your session live." },
  {
    step: "Rate",
    desc: "Leave feedback so the best hosts rise to the top and the network stays trustworthy.",
  },
];

const driverBenefits = [
  {
    icon: MapPin,
    title: "More Places To Charge",
    desc: "Unlock hidden chargers in your neighbourhood and along your route.",
  },
  {
    icon: Clock,
    title: "Reserve & Relax",
    desc: "Skip queues—your slot is held for you when you arrive.",
  },
  {
    icon: Zap,
    title: "Right Power, Right Price",
    desc: "Pick the connector and speed you need—fair, transparent pricing.",
  },
];

const hostBenefits = [
  {
    icon: Coins,
    title: "New Income",
    desc: "Turn idle time into earnings with flexible schedules and instant payouts.",
  },
  {
    icon: Shield,
    title: "You're In Control",
    desc: "Approve bookings, set house rules, and choose who can charge.",
  },
  {
    icon: LineChart,
    title: "Insights",
    desc: "See usage, revenue, and energy reports for tax time and optimisation.",
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
    quote:
      "I listed my townhouse charger while at work. It now pays for my electricity bill every month.",
  },
  {
    name: "Rina • Brisbane",
    quote: "Loved reserving a guaranteed spot during a rainy night—felt safe and easy.",
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

const SectionTitle = ({ kicker, title, subtitle }) => (
  <div className="mx-auto mb-10 max-w-3xl text-center">
    {kicker && (
      <p className="mb-2 text-sm font-medium text-muted-foreground">{kicker}</p>
    )}
    <h2 className="text-3xl font-semibold">{title}</h2>
    {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
  </div>
);

export default function HomePage() {
  return (
    <div className="space-y-24">
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6 pt-20 text-center"
      >
        <h1 className="text-4xl font-bold">Community EV charging, guaranteed</h1>
        <p className="mx-auto max-w-xl text-muted-foreground">
          Book nearby home chargers in advance and skip public station queues.
        </p>
        <div className="flex justify-center gap-4">
          <Button>Find a charger</Button>
          <Button variant="ghost">Become a host</Button>
        </div>
      </motion.section>

      {/* FEATURES */}
      <section className="bg-muted/40 py-20">
        <SectionTitle title="Why ChargeNextDoor?" />
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6">
                <Icon className="mb-4 h-8 w-8" />
                <h3 className="font-medium">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="py-20">
        <SectionTitle kicker="How it works" title="Charge in four easy steps" />
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-4">
          {howItWorks.map(({ step, desc }) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6 text-center">
                <div className="text-3xl font-semibold">{step}</div>
                <p className="mt-4 text-sm text-muted-foreground">{desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DRIVERS VS HOSTS */}
      <section id="drivers" className="bg-muted/40 py-20">
        <SectionTitle
          title="Drivers vs Hosts"
          subtitle="One platform, two empowering roles"
        />
        <Tabs defaultValue="drivers" className="mx-auto max-w-5xl px-4">
          <TabsList className="mx-auto mb-8">
            <TabsTrigger value="drivers">Drivers</TabsTrigger>
            <TabsTrigger value="hosts">Hosts</TabsTrigger>
          </TabsList>
          <TabsContent value="drivers">
            <div className="grid gap-6 md:grid-cols-3">
              {driverBenefits.map(({ icon: Icon, title, desc }) => (
                <Card key={title} className="h-full p-6">
                  <Icon className="mb-4 h-8 w-8" />
                  <h3 className="font-medium">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="hosts">
            <div className="grid gap-6 md:grid-cols-3">
              {hostBenefits.map(({ icon: Icon, title, desc }) => (
                <Card key={title} className="h-full p-6">
                  <Icon className="mb-4 h-8 w-8" />
                  <h3 className="font-medium">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20">
        <SectionTitle title="Simple pricing" subtitle="Only pay for what you need" />
        <div className="mx-auto max-w-md px-4">
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-2xl">Pay as you go</CardTitle>
              <CardDescription>Transparent rates set by hosts</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4" /> No subscription fees
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4" /> Choose per‑kWh or per‑session
                </li>
                <li className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4" /> Cancel anytime before start
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* MAP */}
      <section id="map" className="bg-muted/40 py-20">
        <SectionTitle
          kicker="Coverage"
          title="Growing across Australia"
          subtitle="Rolling out city by city. Add your charger to expand the map."
        />
        <div className="mx-auto max-w-5xl px-4">
          <Card className="aspect-[16/9] w-full grid place-items-center">
            <div className="text-center">
              <MapPin className="mx-auto mb-2 h-10 w-10" />
              <div className="font-medium">Interactive map placeholder</div>
              <p className="text-sm text-muted-foreground">
                (Embed Mapbox/Google Maps here with cluster markers and availability)
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20">
        <SectionTitle
          kicker="What people say"
          title="Loved by local drivers and hosts"
        />
        <div className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-3">
          {testimonials.map(({ name, quote }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full p-6">
                <p className="mb-3 text-sm">“{quote}”</p>
                <div className="text-xs text-muted-foreground">{name}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-muted/40 py-20">
        <SectionTitle kicker="FAQ" title="Answers to common questions" />
        <div className="mx-auto max-w-3xl px-4">
          <Accordion type="single" className="space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-background">
                <AccordionTrigger icon={<Plus className="h-4 w-4" />}>
                  {f.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground">{f.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <Card className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:p-12">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-semibold">
                Power the future of EVs—right from your home
              </h3>
              <p className="text-muted-foreground">
                List your charger in minutes and set your own rules. You choose who, when, and how much.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button>
                  <UserPlus className="mr-2 h-4 w-4" /> Become a host
                </Button>
                <Button variant="ghost">
                  <Car className="mr-2 h-4 w-4" /> Find a charger
                </Button>
              </div>
            </div>
            <ul className="grid flex-1 gap-3 text-sm">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4" /> Identity verification & reviews
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4" /> Clear house rules and photos
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4" /> Secure payments & receipts
              </li>
            </ul>
          </Card>
        </div>
      </section>
    </div>
  );
}
