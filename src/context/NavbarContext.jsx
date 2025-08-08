import { createContext, useState, useEffect, useRef, useCallback } from "react";
import { UseClickOutside } from "../hook/UseClickOutside";

export const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const [isScroll, setIsScroll] = useState(false);
  const scrollYRef = useRef(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // function navbar scroll
  useEffect(() => {
    const handleScroll = () => {
      if (Math.abs(window.scrollY - scrollYRef.current) < 1) return;
      scrollYRef.current = window.scrollY;

      requestAnimationFrame(() => {
        setIsScroll(window.scrollY > 1);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // function add hamburger active
  const toggleHamburger = useCallback(() => {
    if (hamburgerRef.current) {
      hamburgerRef.current.classList.toggle("hamburger-active");
    }
    setMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const button = hamburgerRef.current;
    if (button) {
      button.addEventListener("click", toggleHamburger);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", toggleHamburger);
      }
    };
  }, [toggleHamburger]);

  // function handle click outside sidenav
  UseClickOutside(menuRef, (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target) // ✅ Pastikan klik bukan di tombol hamburger
    ) {
      setMenuOpen(false);
      hamburgerRef.current.classList.remove("hamburger-active"); // ✅ Hapus class
    }
  });

  return (
    <NavbarContext.Provider
      value={{
        isScroll,
        menuOpen,
        setMenuOpen,
        menuRef,
        hamburgerRef,
        toggleHamburger,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
export default NavbarProvider;
