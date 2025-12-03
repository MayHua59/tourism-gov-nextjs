import React from 'react';
import ImageCarousel from '../../../../components/ImageCarousel';
import styles from "./RegionDetail.module.css"
import BannerSection from '../../../../components/BannerSection';
import Breadcrumb from '../../../../components/Breadcrumb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChevronRight, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { fetchRegion } from '@/lib/api/region';
import { notFound } from 'next/navigation';
import AttachmentTable from '@/components/AttachmentTable';

async function getRegionData(slug) {
    try {
        const region = await fetchRegion(slug);
        return region;
    } catch (error) {
        console.error("Failed to fetch region data:", error);
        return null;
    }
}

export default async function RegionDetailPage({ params }) {
    const { slug } = params;
    const region = await getRegionData(slug);

    if (!region) {
        return (
            <div className={styles.pageContainer}>
                <BannerSection
                    imageUrl="/assets/images/cover-images/70.jpg"
                    alt={`Cover photo`}
                />
                <Breadcrumb
                    items={[
                        { label: "Startseite", href: "/de", icon: faHome },
                        { label: slug, active: true }
                    ]}
                />
                <div className="errorMessage">
                    Sorry, we couldn&apos;t load this region. Please try again later.
                </div>
            </div>
        );
    }

    // if (!region.data) {
    //     console.error("Region data is missing or invalid:", region);
    //     return <div>Error: Invalid region data</div>;
    // }



    return (
        <div className={styles.pageContainer}>
            <BannerSection
                imageUrl={region.cover_photo}
                alt={`Cover photo of ${region.name}`}
            />
            <Breadcrumb
                items={[
                    { label: "Startseite", href: "/de", icon: faHome },
                    { label: region.slug, active: true }
                ]}
            />
            <div className={styles.container}>
                <div className={styles.mainContent}>
                    <h1 className="text-center mb-4 text-dark">{region.name}</h1>
                    <div className={styles.regionDescriptionWrapper}>
                        <p
                            className={styles.regionDescription}
                            dangerouslySetInnerHTML={{ __html: region.description || "" }}
                        />
                    </div>

                    {region.carousel && region.carousel.length > 0 && (
                        <section className={styles.gallerySection}>
                            <h2 className={styles.galleryTitle}>Gallery</h2>
                            <div className={styles.galleryGrid}>
                                {region.carousel.map((carousel, index) => (
                                    <div key={index} className={styles.galleryCard}>
                                        <div className={styles.cardHeader}>
                                            <h3 className={styles.galleryItemTitle}>{carousel.name}</h3>
                                        </div>
                                        <div className={styles.cardBody}>
                                            <div className={styles.carouselWrapper}>
                                                <ImageCarousel images={carousel.images} />
                                            </div>
                                            <div
                                                className={styles.galleryDescription}
                                                dangerouslySetInnerHTML={{ __html: carousel.description || "" }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}




                    {region.destinations && region.destinations.length > 0 && (
                        <section className="mb-5">
                            <h2 className="border-bottom pb-2 mb-4 text-dark">Popular Destinations</h2>
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
                                {region.destinations.map((destination, index) => {
                                    const imgSrc = "https://www.go-myanmar.com/files/destination-photo/2_hindu_temple_on_myitkyina_riverfront.jpg";
                                    return (
                                        <div key={index} className="col">
                                            <div className={`card h-100 shadow-lg border-0 ${styles.destinationCard}`}>
                                                <div className={`position-relative overflow-hidden ${styles.cardImageWrapper}`}>
                                                    <Image
                                                        src={imgSrc}
                                                        alt={`Image of ${destination.name}`}
                                                        fill
                                                        sizes="(max-width: 600px) 100vw, 400px"
                                                        priority={index < 3}
                                                        className={styles.cardImage}
                                                    />
                                                </div>
                                                <div className={`card-body d-flex flex-column justify-content-between px-4 py-3 ${styles.cardBody}`}>
                                                    <h5 className="card-title fw-bold text-primary mb-2 fs-4">{destination.name}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    )}

                    {region.events && region.events.length > 0 && (
                        <section className="mb-5">
                            <h2 className="border-bottom pb-2 mb-4 text-dark">Events</h2>
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
                                {region.events.map((event, index) => {
                                    const imgSrc = "https://www.go-myanmar.com/files/destination-photo/2_hindu_temple_on_myitkyina_riverfront.jpg";
                                    return (
                                        <div key={index} className="col">
                                            <div className={`card h-100 shadow-lg border-0 ${styles.destinationCard}`}>
                                                <div className={`position-relative overflow-hidden ${styles.cardImageWrapper}`}>
                                                    <Image
                                                        src={imgSrc}
                                                        alt={`Image of ${event.name}`}
                                                        fill
                                                        sizes="(max-width: 600px) 100vw, 400px"
                                                        priority={index < 3}
                                                        className={styles.cardImage}
                                                    />
                                                </div>
                                                <div className={`card-body d-flex flex-column justify-content-between px-4 py-3 ${styles.cardBody}`}>
                                                    <h5 className="card-title fw-bold text-primary mb-2 fs-4">{event.name}</h5>
                                                    <p className="card-text text-muted mb-2 d-flex align-items-center fs-6">
                                                        <span className="me-2">
                                                            <FontAwesomeIcon icon={faCalendarAlt} />
                                                        </span>
                                                        {event.start_date} &ndash; {event.end_date}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    )}
                    {region.attachments && region.attachments.length > 0 && (
                        <AttachmentTable attachments={region.attachments} />
                    )}
                </div>

            </div>
        </div>
    );
}

