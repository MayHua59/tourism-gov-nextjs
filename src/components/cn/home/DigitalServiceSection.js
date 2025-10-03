import React from "react";
import { FaNotesMedical, FaChartLine, FaHotel } from "react-icons/fa";
import styles from "./DigitalServiceSection.module.css";

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
    title: "旅游支付系统",
    description: "直连通道助您便捷安全地完成所有旅游服务费用支付",
  },
  {
    href: "https://hotel.myanmar.gov.mm/",
    icon: <FaHotel />,
    title: "宾客名单信息系统",
    description: "T数字化服务让各类活动宾客信息管理尽在掌握",
  },
  {
    href: "https://2020election.uec.gov.mm/",
    image: "/assets/images/uec-image.jpg",
    title: "选举舞弊与不当行为",
    description: "2020年多党制民主大选舞弊行为调查结论公示",
  },
  
];

export default function DigitalServiceSection() {
  return (
    <section className={`software-tools-section ${styles.digitalServiceSection}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center">
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>部门数字服务</h2>
              <span className={styles.titleBorder}></span>
              <p>为您连接专为旅游行业与旅行者打造的在线平台及数字服务</p>
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