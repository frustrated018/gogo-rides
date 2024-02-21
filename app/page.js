import Banner from "@/components/Home/banner/banner";
import BodyStyle from "@/components/Home/body-style/body-style";
import DealsGrid from "@/components/Home/deals-grid/deals-grid";
import FooterHome from "@/components/Home/footer-home/footerHome";
import NavHome from "@/components/Home/nav-home/navHome";

function Home() {
  return (
    <>
      <NavHome />

      <Banner />
      <DealsGrid />
      <BodyStyle />
      <FooterHome />
    </>
  );
}

export default Home;
