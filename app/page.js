import DealsGrid from "@/components/Home/deals-grid/deals-grid";
import FooterHome from "@/components/Home/footer-home/footerHome";
import NavHome from "@/components/Home/nav-home/navHome";

function Home() {
  return (
    <>
      <NavHome />
      <section className="min-h-screen">
        <DealsGrid />
      </section>
      <FooterHome />
    </>
  );
}

export default Home;
