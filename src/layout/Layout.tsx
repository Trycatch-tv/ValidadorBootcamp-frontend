import FooterContainer from "@/components/footer/footer.container";
import NavbarContainer from "@/components/navbar/navbar.container";
import type React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="relative min-h-screen bg-gray-50">
      <NavbarContainer />
      <main className="container container-lg pt-16 pb-36">{children}</main>
      <FooterContainer />
    </div>
  );
};

export default Layout;
