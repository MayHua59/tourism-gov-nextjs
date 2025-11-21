import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import Breadcrumb from "../../../../components/Breadcrumb";
import BannerSection from "../../../../components/BannerSection";
import styles from "./NewsDetail.module.css";
import { faHome, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchNewsDetail } from "../../../../lib/api/kr-site/news";
import AttachmentTable from "@/components/AttachmentTable";



export async function generateMetadata({ params }) {
  params = await params;
  try {
    const news = await fetchNewsDetail(params.slug);
    if (!news) return {};
    return {
      title: news.name,
      description: news.description
    };
  } catch {
    return {};
  }
}

export default async function NewsDetail({ params }) {
  // const news = news_list.find(n => n.slug === params.slug);
  params = await params;
  let news = null;
  let error = null;

    try {
    news = await fetchNewsDetail(params.slug);
  } catch (e) {
    error = "Sorry, we couldn't load this news item. Please try again later.";
    redirect('/en/news');
  }

 if (!news && !error) return notFound();

  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images/34.jpg"
        altText="news cover photo"
      />
      <Breadcrumb
        items={[
          { label: "홈페이지", href: "/kr", icon: faHome },
          { label: "뉴스", href: "/kr/news" },
          { label: "...", active: true }
        ]}
      />
      <div className={styles.container}>
      {error ? (
        <div className="errorMessage">{error}</div>
      ) : (
          <div className={styles.govtCard}>
          <h1 className={styles.govtTitle}>{news.name}</h1>
          <div className={styles.govtMeta}>
            <FontAwesomeIcon icon={faCalendarAlt} className={styles.calendarIcon} />
            <span>
              <strong>Published on:</strong>{" "}
               {new Date(news.published_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
            </span>
            {news.category?.name && (
                <span className={styles.govtCategory}>
                  {" | "}Category: {news.category.name}
                </span>
              )}
          </div>
          <div className={styles.govtImageWrapper}>
            <Image
              src={news.cover_photo}
              alt={news.name}
              className={styles.govtImage}
              width={1200}
              height={600}
            />
          </div>
          <div className={styles.govtDesc}>
            <p
className={styles.newsDesc}
dangerouslySetInnerHTML={{ __html: news.description }}
></p>
          </div>

        </div>
      )}

       {news.attachments && news.attachments.length > 0 && (
                        <AttachmentTable attachments={news.attachments} />
                      )}
      </div>
    </div>
  );
}

