import Breadcrumb from "@/components/Breadcrumb";
import BannerSection from "@/components/BannerSection";
import styles from "./HotelsandResorts.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { HotelsNPW, HotelsPMA, HotelsLW, HotelsTK } from "@/data/hotels";

export const metadata = {
  title: "Отели и курорты",
  description: "Список отелей и курортов, лицензированных Министерством туризма и отелей, Мьянма."
};

export default function HotelsAndResortsPage() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/18.jpg" altText="Hotels and Resorts cover photo" />
      <Breadcrumb
        items={[
          { label: "Главная", href: "/ru", icon: faHome },
          { label: "Отели и курорты", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Отели и курорты</h1>
        <section>
            <h2>Nay Pyi Taw</h2>
        <div className={styles.tableResponsive}>
          <table className={styles.guideTable}>
            <thead>
              <tr>
                <th>No</th>
                <th>Название отеля</th>
                <th>Адрес</th>
                <th>Контактный телефон</th>
                <th>Email</th>
                <th>Веб-сайт (или) Социальные сети</th>
              </tr>
            </thead>
            <tbody>
              {HotelsNPW.map((hotel, idx) => (
                <tr key={idx}>
                  <td>{hotel.no}</td>
                  <td>{hotel.name}</td>
                  <td>{hotel.address}</td>
                  <td>{hotel.phone}</td>
                  <td>
                    {hotel.email
                      ? hotel.email.split(",").map((email, i) => (
                          <div key={i}>
                            {email.trim().includes("@") ? (
                              <a href={`mailto:${email.trim()}`}>{email.trim()}</a>
                            ) : (
                              email.trim()
                            )}
                          </div>
                        ))
                      : ""}
                  </td>
                  <td>{hotel.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </section>
        <section>
            <h2>Pyinmana</h2>
        <div className={styles.tableResponsive}>
          <table className={styles.guideTable}>
            <thead>
              <tr>
                <th>№</th>
                <th>Название отеля</th>
                <th>Адрес</th>
                <th>Контактный телефон</th>
                <th>Email</th>
                <th>Веб-сайт (или) Социальные сети</th>
              </tr>
            </thead>
            <tbody>
              {HotelsPMA.map((hotel, idx) => (
                <tr key={idx}>
                  <td>{hotel.no}</td>
                  <td>{hotel.name}</td>
                  <td>{hotel.address}</td>
                  <td>{hotel.phone}</td>
                  <td>
                    {hotel.email
                      ? hotel.email.split(",").map((email, i) => (
                          <div key={i}>
                            {email.trim().includes("@") ? (
                              <a href={`mailto:${email.trim()}`}>{email.trim()}</a>
                            ) : (
                              email.trim()
                            )}
                          </div>
                        ))
                      : ""}
                  </td>
                  <td>{hotel.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </section>
        <section>
            <h2>Lewe</h2>
        <div className={styles.tableResponsive}>
          <table className={styles.guideTable}>
            <thead>
              <tr>
                <th>№</th>
                <th>Название отеля</th>
                <th>Адрес</th>
                <th>Контактный телефон</th>
                <th>Email</th>
                <th>Веб-сайт (или) Социальные сети</th>
              </tr>
            </thead>
            <tbody>
              {HotelsLW.map((hotel, idx) => (
                <tr key={idx}>
                  <td>{hotel.no}</td>
                  <td>{hotel.name}</td>
                  <td>{hotel.address}</td>
                  <td>{hotel.phone}</td>
                  <td>
                    {hotel.email
                      ? hotel.email.split(",").map((email, i) => (
                          <div key={i}>
                            {email.trim().includes("@") ? (
                              <a href={`mailto:${email.trim()}`}>{email.trim()}</a>
                            ) : (
                              email.trim()
                            )}
                          </div>
                        ))
                      : ""}
                  </td>
                  <td>{hotel.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </section>
        <section>
            <h2>Tat Kone</h2>
        <div className={styles.tableResponsive}>
          <table className={styles.guideTable}>
            <thead>
              <tr>
                <th>№</th>
                <th>Название отеля</th>
                <th>Адрес</th>
                <th>Контактный телефон</th>
                <th>Email</th>
                <th>Веб-сайт (или) Социальные сети</th>
              </tr>
            </thead>
            <tbody>
              {HotelsTK.map((hotel, idx) => (
                <tr key={idx}>
                  <td>{hotel.no}</td>
                  <td>{hotel.name}</td>
                  <td>{hotel.address}</td>
                  <td>{hotel.phone}</td>
                  <td>
                    {hotel.email
                      ? hotel.email.split(",").map((email, i) => (
                          <div key={i}>
                            {email.trim().includes("@") ? (
                              <a href={`mailto:${email.trim()}`}>{email.trim()}</a>
                            ) : (
                              email.trim()
                            )}
                          </div>
                        ))
                      : ""}
                  </td>
                  <td>{hotel.website}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </section>
      </div>
    </div>
  );
}