import Banner from "@/components/Home/banner/banner";
import BodyStyle from "@/components/Home/body-style/body-style";
import Brands from "@/components/Home/brands/brands";
import DealsGrid from "@/components/Home/deals-grid/deals-grid";
import FooterHome from "@/components/Home/footer-home/footerHome";
import NavHome from "@/components/Home/nav-home/navHome";
import Testimonial from "@/components/Home/testimonial/testimonial";

function Home() {
  return (
    <>
      <NavHome />

      <Banner />
      <DealsGrid />
      <Brands />
      <BodyStyle />
      <Testimonial />
      <FooterHome />
    </>
  );
}

export default Home;
