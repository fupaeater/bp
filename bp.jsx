import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <Hero />
      <Services />
      <About />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">BluePeak Staffing</h1>
        <ul className="flex space-x-6">
          <li><a href="#services" className="hover:text-indigo-500">Services</a></li>
          <li><a href="#about" className="hover:text-indigo-500">About Us</a></li>
          <li><a href="#contact" className="hover:text-indigo-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-indigo-50 flex-grow flex items-center">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Connecting Talent with Opportunity</h2>
        <p className="mb-8 text-lg text-gray-700">Streamlined staffing solutions for businesses of all sizes.</p>
        <Button size="lg">Get Started</Button>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { title: "Temporary Staffing", description: "Flexible workforce solutions to meet seasonal demands." },
    { title: "Permanent Placement", description: "Find the perfect long-term fit for your team." },
    { title: "Contract-to-Hire", description: "Try talent before committing full-time." },
    { title: "Payroll Services", description: "Simplify payroll and compliance management." }
  ];

  return (
    <section id="services" className="container mx-auto px-6 py-16">
      <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((svc) => (
          <Card key={svc.title} className="shadow-lg hover:shadow-2xl transition p-0">
            <CardContent>
              <h4 className="text-xl font-semibold mb-2">{svc.title}</h4>
              <p>{svc.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">About BluePeak Staffing</h3>
        <p className="max-w-2xl mx-auto text-gray-700">
          BluePeak Staffing has been bridging the gap between employers and job seekers for over a decade. Our mission is to deliver tailored staffing strategies that drive growth and success.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-indigo-600 text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h5 className="font-bold mb-2">Contact Us</h5>
          <p>Email: info@bluepeakstaffing.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div>
          <h5 className="font-bold mb-2">Locations</h5>
          <p>New York | Boston | Houston</p>
        </div>
      </div>
      <p className="text-center mt-6 text-sm">&copy; {new Date().getFullYear()} BluePeak Staffing. All rights reserved.</p>
    </footer>
  );
}
