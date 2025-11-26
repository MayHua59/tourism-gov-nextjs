"use client"; // <-- ADD THIS LINE

import React from "react";
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
    title: "Hệ thống thanh toán du lịch",
    description:
      "Liên kết trực tiếp để xử lý thanh toán tiện lợi và an toàn cho tất cả dịch vụ du lịch.",
  },
  {
    href: "https://hotel.myanmar.gov.mm/",
    icon: <FaHotel />,
    title: "Hệ thống thông tin danh sách khách",
    description:
      "Dịch vụ số này đơn giản hóa quản lý và truy cập tất cả chi tiết khách hàng của bạn.",
  },
  {
    href: "https://2020election.uec.gov.mm/",
    image: "/assets/images/uec-image.jpg",
    title: "Bắt buộc bầu cử",
    description:
      "Kết quả của cuộc điều tra về bắt buộc bầu cử trong đại hội đa nguyên bầu cử nhiều bộ phận năm 2020",
  },
];

export default function DigitalServiceSection() {
  // --- 2. ADD THIS CLICK HANDLER ---
  const handleServiceClick = (service) => {

    console.log(service.href + " is clicked");
    // This sends a custom event to GA4
    sendGAEvent("click_digital_service", {
      event_category: "Outbound Services",
      event_label: service.title, // This will be "Hệ thống thanh toán du lịch", "Hệ thống thông tin danh sách khách", etc.
      link_url: service.href, // The specific URL that was clicked
    });

    // https://2020election.uec.gov.mm/ 
    if (service.href == "https://2020election.uec.gov.mm/") {
      console.log("မဲမသမာမှု is clicked");
      sendGAEvent("မဲမသမာမှု ဝက်ဘ်ဆိုက် ဝင်ရောက်ကြည့်ရှုခြင်း", {
        event_category: "Outbound Services",
        event_label: service.title, // This will be "Hệ thống thanh toán du lịch", "Hệ thống thông tin danh sách khách", etc.
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
              <h2 className={styles.sectionTitle}>Dịch vụ số của Bộ Khách sạn và Du lịch</h2>
              <span className={styles.titleBorder}></span>
              <p>
                Truy cập các nền tảng và dịch vụ số cho các doanh nghiệp du lịch và du khách
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
