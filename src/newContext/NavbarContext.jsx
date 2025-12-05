import { createContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [activePage, setActivePage] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const value = {
    activePage,
    setActivePage,
    mobileOpen,
    setMobileOpen,
    isScrolled,
    setIsScrolled,
  };

  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
};
