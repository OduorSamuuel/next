import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function Home() {
  return (
  <main>
    <nav className="flex  bg-blue-400  justify-between p-4 ">
      <div ><span>Project Guru</span></div>
      <div className=""><Button >Get Started</Button></div>
    </nav>
    {/*Hero Section*/}
    <section className="flex">
<div ><h1>Better way to spend your time</h1>
<span>get more productive</span></div>
<div> <Image  alt="image" src={`/images`}/></div>
    </section>
  </main>
  );
}
