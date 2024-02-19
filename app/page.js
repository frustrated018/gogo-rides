import FooterHome from "@/components/footer-home/footerHome";
import NavHome from "@/components/nav-home/navHome";

function Home() {
  return (
    <>
      <NavHome />
      <div className="grid place-items-center min-h-screen">
        <h2 className="text-4xl font-semibold">This will be the home page</h2>
      </div>
      <FooterHome />
    </>
  );
}

export default Home;
