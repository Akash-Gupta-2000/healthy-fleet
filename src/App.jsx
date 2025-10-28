import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, Mail, Instagram, Phone } from "lucide-react";

// ---------------------- NAVBAR ----------------------
function Nav() {
  return (
    <nav className="backdrop-blur bg-white/70 sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Healthy Fleet"
            className="w-17 h-12 rounded-md shadow-sm"
          />
          <div>
            <div className="text-lg font-bold text-green-800">HEALTHY FLEET</div>
            <div className="text-xs text-green-600">Healthy Crunch, Happy Munch</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="hover:text-green-700">Home</Link>
          <Link to="/about" className="hover:text-green-700">About</Link>
          <Link to="/products" className="hover:text-green-700">Products</Link>
          <Link to="/contact" className="hover:text-green-700">Contact</Link>
        </div>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

// ---------------------- MOBILE MENU ----------------------
function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="p-2 rounded-lg border">☰</button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg py-2">
          {["Home", "About", "Products", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block px-4 py-2 hover:bg-green-50"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

// ---------------------- HOME ----------------------
function Home() {
  return (
    <main>
      <section className="min-h-[70vh] flex items-center bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-5xl font-extrabold text-green-900 leading-tight">
              Healthy Crunch, <br /> Happy Munch
            </h1>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Healthy Fleet is a clean, conscious food brand delivering farm-sourced roasted makhana and more — honest ingredients, premium taste, and mindful snacking for modern life.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/products"
                className="inline-block px-6 py-3 bg-green-700 text-white rounded-full shadow hover:bg-green-800 transition"
              >
                Explore Products
              </Link>
              <Link
                to="/about"
                className="inline-block px-6 py-3 border border-green-200 rounded-full text-green-800 hover:bg-green-50 transition"
              >
                Our Story
              </Link>
            </div>

            <div className="mt-8 flex gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-600" /> 100% Natural
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-600" /> Roasted, Not Fried
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* <div className="bg-white rounded-3xl shadow-xl p-6"> */}
              <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947"
            alt="farm"
            className="rounded-3xl shadow-lg object-cover w-150 h-90"
          />
              {/* <img
                src="snack.jpeg"
                alt="snack"
                className="rounded-2xl w-full object-cover h-72"
              /> */}
              {/* <div className="mt-4">
                <div className="text-lg font-semibold text-green-800">Roasted Makhana</div>
                <div className="text-sm text-gray-500">Light, crunchy & guilt-free</div>
              </div> */}
            {/* </div> */}
          </motion.div>
        </div>
      </section>

      {/* Why Healthy Fleet */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-green-800 mb-6"
        >
          Why Healthy Fleet?
        </motion.h3>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard title="Farmer Partnerships" desc="Direct sourcing ensures fair trade and transparency." />
          <FeatureCard title="Clean Ingredients" desc="100% natural, preservative-free snacks." />
          <FeatureCard title="Sustainability" desc="Mindful packaging and responsible sourcing." />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition"
    >
      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-3">
        <Leaf className="w-6 h-6 text-green-600" />
      </div>
      <div className="font-semibold text-green-800">{title}</div>
      <p className="text-gray-600 mt-2">{desc}</p>
    </motion.div>
  );
}

// ---------------------- ABOUT ----------------------
function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-green-800 mb-3">About Healthy Fleet</h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
          Healthy Fleet is a clean, conscious food brand dedicated to bringing healthy,
          natural, and farm-sourced snacks to modern consumers. We believe that good health
          begins with what we eat — that’s why every Healthy Fleet product is crafted to
          deliver honest ingredients, authentic taste, and mindful nutrition.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left text section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-green-800 mb-3">
            🌾 Sourcing & Philosophy
          </h3>
          <p className="text-gray-700 text-base leading-relaxed">
            We work directly with farmers across India to ensure fair trade,
            transparency, and quality — from farm to packet. Our approach blends
            traditional wisdom with modern health needs, creating snacks that are
            simple, sustainable, and deliciously wholesome.
          </p>

          {/* Mission & Vision side by side */}
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ y: -4 }}
              className="p-5 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="font-semibold text-green-800 text-lg">🌱 Vision</div>
              <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                To be the most trusted brand for natural, nutritious, and sustainable
                food choices for every household.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="p-5 bg-green-50 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="font-semibold text-green-800 text-lg">🚀 Mission</div>
              <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                To bring India’s traditional, healthy foods to modern consumers through
                innovation, transparency, and farmer-first partnerships.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right image section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1544025162-d76694265947"
            alt="farm"
            className="rounded-3xl shadow-lg object-cover w-150 h-90"
          />
        </motion.div>
      </div>
    </div>
  );
}

// ---------------------- PRODUCTS ----------------------
function Products() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-green-800 mb-8"
      >
        🟩 Product Line
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        <ProductDetail size="100 g" />
        <ProductDetail size="200 g" />
        <ProductDetail size="350 g" />
      </div>

      {/* Upcoming Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mt-12 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 p-10 rounded-3xl shadow-sm"
      >
        <h3 className="text-2xl font-semibold text-green-800 mb-5 text-center">
          🔶 Future Expansion
        </h3>
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          <ExpansionCard
            title="Flavored Makhana"
            desc="Peri Peri | Pudina | Cheese | Himalayan Salt"
          />
          <ExpansionCard
            title="Premium Dry Fruits"
            desc="Almonds | Cashews | Raisins | Walnuts"
          />
          <ExpansionCard
            title="Snack Mixes & Seeds"
            desc="Trail Mix | Flax | Chia | Pumpkin Seeds"
          />
        </div>
      </motion.div>
    </div>
  );
}

function ExpansionCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
    >
      <h4 className="text-green-800 font-semibold text-lg mb-2">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  );
}

function ProductDetail({ size }) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
    >
      <div>
        <div className="text-sm text-gray-500">Roasted Makhana</div>
        <div className="text-2xl font-bold text-green-800 mt-1">{size}</div>
      </div>
      <p className="mt-4 text-gray-700">
        High protein, low GI, gluten-free — a mindful snack for every day.
      </p>
    </motion.div>
  );
}


// ---------------------- CONTACT ----------------------
function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-green-800 mb-6">Get in touch</h2>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <ContactCard
          icon={<Phone className="w-5 h-5 text-green-600" />}
          title="Phone"
          value="+91 93549 25821"
        />
        <ContactCard
          icon={<Mail className="w-5 h-5 text-green-600" />}
          title="Email"
          value="thehealthyfleet@gmail.com"
        />
        <ContactCard
          icon={<Instagram className="w-5 h-5 text-green-600" />}
          title="Instagram"
          value="@healthyfleet"
        />
        <ContactCard
          icon={<Leaf className="w-5 h-5 text-green-600" />}
          title="Packaging Address"
          value="Ghaziabad, Uttar Pradesh"
        />
      </div>
    </div>
  );
}

function ContactCard({ icon, title, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
    >
      <div className="flex items-center gap-3">
        {icon} <div className="font-semibold">{title}</div>
      </div>
      <div className="mt-2 text-gray-700">{value}</div>
    </motion.div>
  );
}

// ---------------------- FOOTER ----------------------
function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-bold text-lg">HEALTHY FLEET</div>
          <div className="text-sm text-green-200">Healthy Crunch, Happy Munch</div>
        </div>

        <div className="text-sm text-green-200 text-center leading-relaxed">
          FSSAI: 22725105001705 | GST: 09AJHPG2843D1ZG <br /><br />
          © {new Date().getFullYear()} Healthy Fleet. All rights reserved.
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/healthyfleet"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a href="mailto:thehealthyfleet@gmail.com">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* <div className="text-center text-green-200 mt-6 text-sm">
        © {new Date().getFullYear()} Healthy Fleet. All rights reserved.
      </div> */}
    </footer>
  );
}


// ---------------------- MAIN APP ----------------------
export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Nav />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
