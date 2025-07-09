import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./ComingSoon.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const metadata = {
  title: "Brochures and Pamphlets",
  description: "Downloadable brochures and pamphlets for Myanmar tourism."
};

export default function BrochuresAndPamphlets() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images-title/12.jpg"
        altText="brochures and pamphlets cover photo"
      />
      <Breadcrumb
        items={[
          { label: "မူလစာမျက်နှာ", href: "/mm/", icon: faHome },
          { label: "Coming Soon", active: true }
        ]}
      />
      <div className={styles.container}>
         <div className={styles.comingSoonContainer}>
        <h1>Coming Soon!</h1>
        <p>သင့်အတွက် အံ့မခန်းဖွယ်ရာများကို ဖန်တီးဖို့ ကျွန်တော်တို့ ကြိုးပမ်းနေပါတယ်။ ဆက်ပြီး စောင့်မျှော်ကြည့်ပေးပါ။</p>
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
            ကျွန်ုပ်ကို အသိပေးပါ 
          </button>
        </form>
        <Link href="/mm/" className={styles.backToHome}>
          မူလစာမျက်နှာသို့ ပြန်သွားရန်
        </Link>
      </div>
    </div>
      </div>
    
  );
}