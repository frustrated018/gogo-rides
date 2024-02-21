import FooterHome from "@/components/Home/footer-home/footerHome";
import NavHome from "@/components/Home/nav-home/navHome";

export default function VehiclesPageLayout({ children }) {
  return (
    <>
      <NavHome />
      <>{children}</>
      <FooterHome />
    </>
  );
}
