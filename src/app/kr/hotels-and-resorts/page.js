import Breadcrumb from "@/components/Breadcrumb";
import BannerSection from "@/components/BannerSection";
import styles from "@/app/en/hotels-and-resorts/HotelsandResorts.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { HotelsNPW, HotelsPMA, HotelsLW, HotelsTK } from "@/data/hotels";

export const metadata = {
  title: "Hotels and Resorts",
  description: "List of hotels and resorts licensed by the Ministry of Hotels and Tourism, Myanmar."
};

export default function HotelsAndResortsPage() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/18.jpg" altText="Hotels and Resorts cover photo" />
      <Breadcrumb
        items={[
          { label: "홈페이지", href: "/kr", icon: faHome },
          { label: "호텔과 리조트", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>호텔과 리조트</h1>
        <section>
            <h2>Nay Pyi Taw</h2>
        <div className={styles.tableResponsive}>
          <table className={styles.guideTable}>
            <thead>
              <tr>
                <th>번호</th>
                <th>호텔 이름</th>
                <th>주소</th>
                <th>연락처</th>
                <th>이메일</th>
                <th>웹사이트 (또는) 소셜 미디어</th>
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
                <th>번호</th>
                <th>호텔 이름</th>
                <th>주소</th>
                <th>연락처</th>
                <th>이메일</th>
                <th>웹사이트 (또는) 소셜 미디어</th>
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
                <th>번호</th>
                <th>호텔 이름</th>
                <th>주소</th>
                <th>연락처</th>
                <th>이메일</th>
                <th>웹사이트 (또는) 소셜 미디어</th>
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
                <th>번호</th>
                <th>호텔 이름</th>
                <th>주소</th>
                <th>연락처</th>
                <th>이메일</th>
                <th>웹사이트 (또는) 소셜 미디어</th>
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