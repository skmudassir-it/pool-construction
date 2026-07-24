import { faSwimmingPool, faWater, faPencilRuler, faHardHat, faWrench, faHotTub, faFaucet, faStar } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  icon: IconDefinition;
  image: string;
  features: string[];
  longDescription: string;
}

export interface ProjectItem {
  title: string;
  location: string;
  description: string;
  image: string;
  tags: string[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface FAQItem {
  q: string;
  a: string;
}

export const siteConfig = {
  name: "CrystalBlue Pool Builders",
  tagline: "Creating Your Backyard Paradise",
  description: "Expert custom pool design, construction, and renovation services. Transform your backyard into a luxury resort-style oasis with CrystalBlue Pool Builders.",
  phone: "(555) 234-5678",
  email: "info@crystalbluepools.com",
  address: "123 Aqua Drive, Coastal City, FL 33101",
};

export const services: ServiceItem[] = [
  {
    slug: "custom-pool-design",
    title: "Custom Pool Design",
    description: "Bespoke pool designs tailored to your vision, space, and lifestyle — from modern geometric to natural lagoon styles.",
    icon: faPencilRuler,
    image: "/images/services/custom-pool-design.jpg",
    features: ["3D renderings & virtual walkthroughs", "Custom shape & depth profiles", "Integrated landscaping plans", "Energy-efficient system design", "Permit-ready blueprints"],
    longDescription: "Every great pool begins with a visionary design. Our in-house design team works closely with you to create a breathtaking custom pool that perfectly complements your property and lifestyle. Using cutting-edge 3D modeling software, we bring your vision to life before breaking ground — so you can see every detail, from tile patterns to water features, before construction begins.",
  },
  {
    slug: "pool-construction",
    title: "Pool Construction",
    description: "Premium inground pool construction using the finest materials and latest building techniques for lasting quality.",
    icon: faHardHat,
    image: "/images/services/pool-construction.jpg",
    features: ["Gunite & shotcrete construction", "Premium tile & plaster finishes", "Automated filtration systems", "LED lighting packages", "10-year structural warranty"],
    longDescription: "Our construction process combines old-world craftsmanship with modern engineering. From excavation to final plaster, every step is executed with precision by our experienced crews. We use only commercial-grade materials and partner with leading equipment manufacturers to deliver pools that are as durable as they are beautiful.",
  },
  {
    slug: "pool-renovation",
    title: "Pool Renovation",
    description: "Breathe new life into your existing pool with modern finishes, energy-efficient equipment, and stunning upgrades.",
    icon: faWrench,
    image: "/images/services/pool-renovation.jpg",
    features: ["Plaster & tile replacement", "Equipment modernization", "Coping & deck resurfacing", "Water feature additions", "Energy efficiency retrofits"],
    longDescription: "Your pool deserves to age gracefully. Whether it's a dated 80s design or a pool that's simply seen better days, our renovation team can transform it into a modern showpiece. We specialize in full-scale renovations that drastically improve both aesthetics and efficiency — often paying for themselves through reduced energy and chemical costs.",
  },
  {
    slug: "pool-maintenance",
    title: "Pool Maintenance",
    description: "Weekly and bi-weekly maintenance plans to keep your pool pristine, balanced, and ready for enjoyment year-round.",
    icon: faWater,
    image: "/images/services/pool-maintenance.jpg",
    features: ["Chemical balancing & testing", "Filter cleaning & maintenance", "Debris removal & vacuuming", "Equipment inspection", "Emergency repair service"],
    longDescription: "A crystal-clear pool doesn't happen by accident. Our certified maintenance technicians handle everything — from chemical balancing to equipment upkeep — so you spend your time swimming, not skimming. Choose from our flexible maintenance plans and enjoy peace of mind knowing your pool is in expert hands.",
  },
  {
    slug: "spa-hot-tub",
    title: "Spa & Hot Tub Installation",
    description: "Custom spas and hot tubs seamlessly integrated with your pool or as standalone luxury retreats.",
    icon: faHotTub,
    image: "/images/services/spa-hot-tub.jpg",
    features: ["Integrated pool-spa combos", "Standalone hot tubs", "Hydrotherapy jet systems", "Remote temperature control", "Custom cabinetry & surrounds"],
    longDescription: "Add the ultimate relaxation element to your outdoor space. Our spa installations range from sleek infinity-edge spas integrated into your pool design to standalone therapeutic hot tubs nestled in private garden nooks. Every installation includes premium jets, energy-efficient heating, and intuitive controls.",
  },
  {
    slug: "water-features",
    title: "Water Features",
    description: "Stunning waterfalls, fountains, grottos, and deck jets that transform your pool into a sensory experience.",
    icon: faFaucet,
    image: "/images/services/water-features.jpg",
    features: ["Natural rock waterfalls", "Sheer descent waterfalls", "Deck jets & laminar flows", "Grottos & swim-up bars", "Fire & water bowl features"],
    longDescription: "Water features are the soul of a luxury pool. From the soothing sound of a cascading waterfall to the dramatic visual of illuminated deck jets, our water features add movement, sound, and visual drama. We design and install features that work harmoniously with your pool's architecture and your landscape design.",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Oceanview Infinity",
    location: "Coastal City, FL",
    description: "Stunning 50-foot infinity pool with panoramic ocean views, glass tile interior, and automated smart controls.",
    image: "/images/projects/project-1.jpg",
    tags: ["Infinity", "Luxury", "Smart Controls"],
  },
  {
    title: "Family Oasis",
    location: "Palm Harbor, FL",
    description: "Resort-style family pool with Baja shelf, water slide, and spacious sun deck for all-day entertainment.",
    image: "/images/projects/project-2.jpg",
    tags: ["Family", "Resort-Style", "Water Slide"],
  },
  {
    title: "Athletic Lap Pool",
    location: "Naples, FL",
    description: "Sleek 25-meter lap pool with competition-grade finish, perfect for serious swimmers and triathletes.",
    image: "/images/projects/project-3.jpg",
    tags: ["Lap Pool", "Modern", "Athletic"],
  },
  {
    title: "Tropical Lagoon",
    location: "Key West, FL",
    description: "Natural lagoon-style pool with rock waterfall, cave grotto, and lush tropical landscaping.",
    image: "/images/projects/project-4.jpg",
    tags: ["Lagoon", "Natural", "Waterfall"],
  },
  {
    title: "Nightfall Courtyard",
    location: "Miami, FL",
    description: "Illuminated courtyard pool with dramatic LED color system, fire bowls, and midnight-blue glass tile.",
    image: "/images/projects/project-5.jpg",
    tags: ["Night Lighting", "LED", "Courtyard"],
  },
  {
    title: "Skyline Rooftop",
    location: "Tampa, FL",
    description: "Rooftop pool with infinity edge overlooking the city skyline, complete with swim-up bar.",
    image: "/images/projects/project-6.jpg",
    tags: ["Rooftop", "Urban", "Infinity"],
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: "Robert & Lisa M.",
    role: "Coastal City, FL",
    content: "CrystalBlue transformed our boring backyard into a resort paradise. The design process was collaborative, and the crew was professional every step of the way. We can't stop staring at our infinity pool!",
    rating: 5,
  },
  {
    name: "James K.",
    role: "Naples, FL",
    content: "As a triathlete, I needed a proper lap pool. CrystalBlue delivered beyond expectations. The precision of the build, the quality of materials — absolutely world-class. I train in it every day and it's perfect.",
    rating: 5,
  },
  {
    name: "The Garcia Family",
    role: "Palm Harbor, FL",
    content: "We got quotes from four pool builders and CrystalBlue stood out immediately. They listened to what our family wanted and created the perfect pool for kids and adults alike. The water slide was a game-changer!",
    rating: 5,
  },
  {
    name: "Diane W.",
    role: "Miami, FL",
    content: "Our courtyard pool renovation was complex — tight access, historical home restrictions. CrystalBlue navigated everything seamlessly. The nighttime LED system they installed is absolutely magical.",
    rating: 5,
  },
  {
    name: "Mark & Susan T.",
    role: "Key West, FL",
    content: "The lagoon pool they built looks like it's been there for decades — in the best way. Natural stone, cascading waterfall, lush planting. It feels like swimming in a tropical paradise.",
    rating: 5,
  },
  {
    name: "Tom R.",
    role: "Tampa, FL",
    content: "Rooftop pool on a high-rise? They said it couldn't be done. CrystalBlue proved them wrong. Engineering was flawless, the view is incredible, and the swim-up bar is a massive hit at parties.",
    rating: 5,
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Design Consultation",
    price: "$500",
    description: "Initial design consultation with 3D renderings and site assessment.",
    features: ["On-site property evaluation", "3D concept renderings", "Material & finish selections", "Preliminary cost estimate", "Permit feasibility review"],
  },
  {
    name: "Standard Pool",
    price: "From $45K",
    description: "Complete custom pool design and construction with premium finishes.",
    features: ["Custom gunite pool up to 600 sq ft", "Standard tile & plaster finish", "Basic LED lighting package", "Variable-speed pump & filter", "3-year equipment warranty"],
    popular: true,
  },
  {
    name: "Premium Pool",
    price: "From $75K",
    description: "Luxury pool with premium features, water elements, and smart automation.",
    features: ["Custom pool up to 1,200 sq ft", "Premium glass tile finish", "Full LED color system", "Water features included", "Smart automation system", "10-year structural warranty"],
  },
  {
    name: "Maintenance Plans",
    price: "From $150/mo",
    description: "Weekly or bi-weekly maintenance to keep your pool crystal clear year-round.",
    features: ["Weekly chemical balancing", "Filter cleaning", "Debris removal", "Equipment inspection", "Priority emergency service", "No contract — cancel anytime"],
  },
];

export const faqs: FAQItem[] = [
  {
    q: "How long does pool construction take?",
    a: "Standard pool construction typically takes 8-12 weeks from excavation to final plaster. Custom features, complex landscaping, or weather delays can extend the timeline. We provide a detailed schedule at contract signing and keep you updated throughout.",
  },
  {
    q: "What type of pool is best for my property?",
    a: "The best pool type depends on your soil conditions, budget, aesthetic preferences, and how you plan to use it. During our design consultation, we assess your property and discuss options — gunite, shotcrete, geometric, freeform — to find your ideal match.",
  },
  {
    q: "Do you handle permits and HOA approvals?",
    a: "Absolutely. We manage the entire permitting process, including engineering drawings, HOA submissions, and building department approvals. Our team has extensive experience with local municipalities across Florida.",
  },
  {
    q: "How energy-efficient are your pools?",
    a: "We use variable-speed pumps, LED lighting, and automated chemical systems that significantly reduce energy consumption compared to older equipment. Our designs also optimize hydraulics to minimize pump runtime. Many clients see 40-60% energy savings after renovation.",
  },
  {
    q: "What warranty do you offer?",
    a: "All pools come with a minimum 3-year equipment warranty and a 10-year structural warranty. We also offer extended warranty packages for additional peace of mind. Our maintenance plans help ensure your warranty stays valid.",
  },
  {
    q: "Can you build pools in the off-season?",
    a: "Yes! Florida's mild climate allows us to build year-round. In fact, the off-season (late fall through winter) often means shorter lead times and more flexible scheduling for your project.",
  },
];
