import Hero from "@/components/hero";
import Main from "@/components/main";

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="mt-16">
        <div className="text-center">
          <h1 className="text-5xl mb-2 leading-tight tracking-wider font-bold text-gray-600">Room & Rates</h1>
          <p className="leading-tight text-gray-950 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <Main />
      </div>
    </div>
  );
}
