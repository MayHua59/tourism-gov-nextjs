"use client"; // <-- ADD THIS LINE

import React from "react";
import Image from "next/image";
import { FaNotesMedical, FaChartLine, FaHotel } from "react-icons/fa";
import styles from "./DigitalServiceSection.module.css";
import { sendGAEvent } from "@/lib/analytics"; // <-- 1. IMPORT YOUR HELPER (adjust path if needed)

const digitalServices = [
  // {
  //   href: "https://hsp.tourism.gov.mm/home",
  //   icon: <FaNotesMedical />,
  //   title: "Health and Safety Protocols",
  //   description: "Enchanting Myanmar: Health and Safety Protocol For Safe Tourism Myanmar",
  // },
  {
    href: "https://payment.tourism.gov.mm/",
    icon: <FaChartLine />,
    title: "관광 결제 시스템",
    description:
      "관광 서비스에 대한 모든 결제를 편리하고 안전하게 처리할 수 있는 직접 링크입니다.",
  },
  {
    href: "https://hotel.myanmar.gov.mm/",
    icon: <FaHotel />,
    title: "손님 목록 정보 시스템",
    description:
      "이 디지털 서비스는 모든 이벤트 손님 세부 정보의 관리와 접근성을 단순화합니다.",
  },
  {
    href: "https://2020election.uec.gov.mm/",
    image: "/assets/images/uec-image.jpg",
    title: "선거 부정 및 부정행위",
    description:
      "2020년 다당제 민주주의 총선거에서의 선거 부정 및 부정행위 조사 결과",
  },
];

export default function DigitalServiceSection() {
  // --- 2. ADD THIS CLICK HANDLER ---
  const handleServiceClick = (service) => {

    console.log(service.href + " is clicked");
    // This sends a custom event to GA4
    sendGAEvent("click_digital_service", {
      event_category: "Outbound Services",
      event_label: service.title, // This will be "Tourism Payment System", "Guest List", etc.
      link_url: service.href, // The specific URL that was clicked
    });

    // https://2020election.uec.gov.mm/ 
    if (service.href == "https://2020election.uec.gov.mm/") {
      console.log("မဲမသမာမှု is clicked");
      sendGAEvent("မဲမသမာမှု ဝက်ဘ်ဆိုက် ဝင်ရောက်ကြည့်ရှုခြင်း", {
        event_category: "Outbound Services",
        event_label: service.title, // This will be "Tourism Payment System", "Guest List", etc.
        link_url: service.href, // The specific URL that was clicked
      });
    }
  };

  return (
    <section
      className={`software-tools-section ${styles.digitalServiceSection}`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>관광부 디지털 서비스</h2>
              <span className={styles.titleBorder}></span>
              <p>
                  관광 사업체와 여행객을 위한 온라인 플랫폼 및 디지털 서비스를 이용하세요
              </p>
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
                onClick={() => handleServiceClick(service)} // <-- 3. ADD THE ONCLICK
              >
                <div className={styles.softwareIcon}>
                  {service.icon ? (
                    service.icon
                  ) : (
                    <Image
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

