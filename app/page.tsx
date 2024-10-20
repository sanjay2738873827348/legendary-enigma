import Hero from "@/components/hero";
import { Navbar2 } from "@/components/navbar2";
import Button2 from "@/components/button2";


export default function Home() {
  return (
    <main className="">
      <div className="fixed">
        <Navbar2></Navbar2>
      </div>
      {/* <Navbartop /> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Hero />
      <div className="d-flex justify-content-center my-4">
      <Button2></Button2>
      </div>
    </main>
  );
}