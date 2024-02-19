import NavHome from "@/components/nav-home/navHome";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <>
      <NavHome />
      <div className="grid place-items-center min-h-screen">
        <h2 className="text-4xl font-semibold">This will be the home page</h2>
      </div>
    </>
  );
}

export default Home;
