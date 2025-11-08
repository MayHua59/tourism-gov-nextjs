"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ScrollToTopButton.module.css";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a
      href="#"
      className={`${styles.scrollToTop} ${show ? styles.active : ""}`}
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <Image src="/assets/images/plane-up-solid.svg" alt="Scroll to top" width={24} height={24} />
    </a>
  );
}