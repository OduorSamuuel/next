import React from "react";
import { Button } from "@/components/ui/button";

function Page() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      {/* Hero Section */}
      <section className="text-center py-16 bg-blue-500 text-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold">Feature Page</h1>
        <p className="text-lg mt-2">Discover the amazing features we offer.</p>
        <Button className="mt-4 bg-white text-blue-500 hover:bg-blue-300">
          Get Started
        </Button>
      </section>

      {/* Features Section */}
      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">🚀 Fast Performance</h2>
          <p className="text-gray-600 mt-2">
            Experience blazing-fast speeds with our optimized platform.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">🔒 Secure & Reliable</h2>
          <p className="text-gray-600 mt-2">
            Your data is safe with our top-notch security measures.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">🌍 Global Access</h2>
          <p className="text-gray-600 mt-2">
            Access our services from anywhere in the world.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold">What Our Users Say</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="italic">"This platform transformed my workflow!"</p>
            <p className="mt-2 font-semibold">- Jane Doe</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="italic">"Super secure and easy to use!"</p>
            <p className="mt-2 font-semibold">- John Smith</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold">Choose Your Plan</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Free Plan</h3>
            <p className="text-gray-600 mt-2">Basic features at no cost.</p>
            <Button className="mt-4 bg-blue-500 text-white hover:bg-blue-600">
              Get Started
            </Button>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md border border-blue-500">
            <h3 className="text-xl font-semibold">Pro Plan</h3>
            <p className="text-gray-600 mt-2">Advanced features for professionals.</p>
            <Button className="mt-4 bg-blue-500 text-white hover:bg-blue-600">
              Upgrade Now
            </Button>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="text-gray-600 mt-2">Custom solutions for businesses.</p>
            <Button className="mt-4 bg-blue-500 text-white hover:bg-blue-600">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 bg-gray-800 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </footer>
    </main>
  );
}

export default Page;
