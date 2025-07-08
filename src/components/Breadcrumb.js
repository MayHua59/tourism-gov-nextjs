"use client";
import Link from "next/link";
import styles from "./Breadcrumb.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="breadcrumb" className={styles.breadcrumbSection}>
      <ol className={styles.breadcrumb}>
        {items.map((item, index) => (
          <li
            key={index}
            className={`${styles.breadcrumbItem} ${item.active ? styles.active : ""}`}
          >
            {item.active ? (
              <>
                {/* Render icon if it exists */}
                {item.icon && <FontAwesomeIcon icon={item.icon} className={styles.icon} />}
                {item.label}
              </>
            ) : (
              <Link href={item.href || "#"}>
                {/* Render icon if it exists */}
                {item.icon && <FontAwesomeIcon icon={item.icon} className={styles.icon} />}
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}