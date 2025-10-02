import Link from "next/link";
import BreadCrumb from "../../../components/Breadcrumb";
import styles from "./ComingSoon.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Coming Soon",
  description: "We&apos;re working hard to bring you something amazing. Stay tuned!"
};

export default function ComingSoon() {
  return (
    <div className={styles.pageContainer}>
      <BreadCrumb
        items={[
          { label: "Home", href: "/cn/", icon: faHome },
          { label: "Coming Soon", active: true }
        ]}
      />
      <div className={styles.comingSoonContainer}>
        <h1>Coming Soon!</h1>
        <p>We&apos;re working hard to bring you something amazing. Stay tuned!</p>
        <form
          className={styles.subscribeForm}
          // onSubmit={e => {
          //   e.preventDefault();
          //   alert("Thank you! We'll notify you.");
          // }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            required
            className={styles.emailInput}
          />
          <button type="submit" className={styles.notifyBtn}>
            Notify Me
          </button>
        </form>
        <Link href="/cn/" className={styles.backToHome}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
