import NavHome from "@/components/Home/nav-home/navHome";
import AuthGaurd from "@/utils/Auth-Gaurd/auth-gaurd";

export default function AddPageLayout({ children }) {
  return (
    <>
      <NavHome />
      <AuthGaurd>{children}</AuthGaurd>
    </>
  );
}
