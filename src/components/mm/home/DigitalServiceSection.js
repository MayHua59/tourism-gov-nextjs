import React from "react";
import { FaNotesMedical, FaChartLine, FaHotel } from "react-icons/fa";
import styles from "./DigitalServiceSection.module.css";

const digitalServices = [
  // {
  //   href: "https://hsp.tourism.gov.mm/home",
  //   icon: <FaNotesMedical />,
  //   title: "ကျန်းမာရေးနှင့် ဘေးအန္တရာယ်ကင်းရှင်းရေး လုပ်ထုံးလုပ်နည်းများ",
  //   description: "ဆွဲဆောင်ဖွယ်ရာ မြန်မာပြည် ခရီးသွားဧည့်သည်များ ဘေးကင်းလုံခြုံစွာ လည်ပတ်နိုင်ရေးကျန်းမာရေးနှင့် လုံခြုံရေး လမ်းညွှန်ချက်များ",
  // },
  {
    href: "https://payment.tourism.gov.mm/",
    icon: <FaChartLine />,
    title: "ခရီးသွားလာရေး ငွေပေးချေမှု စနစ်",
    description: "ခရီးသွားလာရေး ဝန်ဆောင်မှုများအတွက် ငွေပေးချေမှုအားလုံးကို အဆင်ပြေပြေနှင့် လုံခြုံစွာ ကိုင်တွယ်ဆောင်ရွက်ရန် သင့်တိုက်ရိုက်ချိတ်ဆက်မှု။",
  },
  {
    href: "https://hotel.myanmar.gov.mm/",
    icon: <FaHotel />,
    title: "ဧည့်သည်စာရင်း အချက်အလက်စနစ် ",
    description: "ဤဒီဂျစ်တယ်ဝန်ဆောင်မှုသည် ပွဲတော်ဧည့်သည်၏ အသေးစိတ်အချက်အလက်အားလုံးကို စနစ်တကျစီမံခန့်ခွဲရန်နှင့် အလွယ်တကူရယူနိုင်ရန် ကူညီပေးပါသည်။",
  },
  {
    href: "https://2020election.uec.gov.mm/",
    image: "/assets/images/uec-image.jpg",
    title: "မဲမသမာမှုနှင့် တရားမဲ့ပြုကျင့်မှုများ",
    description: "၂၀၂၀ ပြည့်နှစ် ပါတီစုံဒီမိုကရေစီ အထွေထွေရွေးကောက်ပွဲတွင် မဲအလွဲသုံးစားမှုနှင့်မမှန်မကန်လုပ်ဆောင်မှုများဆိုင်ရာ စုံစမ်းစစ်ဆေးတွေ့ရှိချက်များ",
  },
  
];

export default function DigitalServiceSection() {
  return (
    <section className={`software-tools-section ${styles.digitalServiceSection}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>ဒီဂျစ်တယ် ဝန်ဆောင်မှုများ</h2>
              <span className={styles.titleBorder}></span>
              <p>ခရီးသွားလုပ်ငန်းများနှင့် ခရီးသွားဧည့်သည်များအတွက် ကျွန်ုပ်တို့၏
                            အွန်လိုင်းပလက်ဖောင်းများနှင့် <br/>ဒီဂျစ်တယ်ဝန်ဆောင်မှုများကို အခုပဲ အသုံးပြုလိုက်ပါ။</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center ">
          {digitalServices.map((service, idx) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={service.title}>
              <a
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.softwareItem}
              >
                <div className={styles.softwareIcon}>
                  {service.icon ? (
                    service.icon
                  ) : (
                    <img
                      src={service.image}
                      alt={service.title}
                      height={50}
                      width={50}
                      style={{ objectFit: "contain" }}
                    />
                  )}
                </div>
                <h3 className={styles.title}>{service.title}</h3>
                <p>{service.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}