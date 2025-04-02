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
    </main>
  );
}

export default Page;
