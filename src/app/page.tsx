import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-blue-400 p-4 shadow-md">
        <div className="text-lg font-semibold text-white">Project Guru</div>
        <div>
          <Button className="bg-white text-blue-500 hover:bg-blue-300">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-20 gap-8">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            A Better Way to Spend Your Time
          </h1>
          <p className="text-gray-600 text-lg">Boost your productivity effortlessly.</p>
          <Button className="mt-6">Get Started</Button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/hero-image.png" // Ensure you replace this with a valid image
            alt="Productivity Illustration"
            width={500}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
}
