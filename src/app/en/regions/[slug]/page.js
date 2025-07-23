import React from 'react';
import regionsData from '@/data/regions.json'; 
import ImageCarousel from '../../../../components/ImageCarousel'; 
import styles from "./RegionDetail.module.css"
import BannerSection from '../../../../components/BannerSection';
import Breadcrumb from '../../../../components/Breadcrumb';
import { faHome, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
export default function RegionDetailPage({ params }) {
  const { slug } = params;

  // Find the region that matches the slug
  const region = regionsData.find(r => r.slug === slug);

 
  if (!region) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Region Not Found</h1>
        <p>The region with slug "{slug}" could not be found.</p>
        
        
      </div>
    );
  }

  // If a region is found, render its details
  return (
    <div className={styles.pageContainer}>
      <BannerSection
              imageUrl={region.cover_image}
              altText="maps cover photo"
            />
            <Breadcrumb
                    items={[
                      { label: "Home", href: "/", icon: faHome },
                      { label: region.slug, active: true }
                    ]}
                  />
<div className={styles.mainContent}>
        
      <h1 className="text-center mb-4 text-dark">{region.name}</h1> 
      
      <div className="text-center mb-5"> 
        
        <p className="lead mt-3 text-secondary">{region.description}</p> 
      </div>

      {region.sections && region.sections.length > 0 && (
        <section className="mb-5"> 
          <h2 className="border-bottom pb-2 mb-4 text-dark">Key Highlights</h2> 
          {region.sections.map((section, index) => (
            <div key={index} className="mb-4"> 
              <h3 className="text-primary">{section.subtitle}</h3> 
              <p>{section.description}</p>
            </div>
          ))}
        </section>
      )}

      {region.carousel_section && region.carousel_section.length > 0 && (
        <section className="mb-5">
          <h2 className="border-bottom pb-2 mb-4 text-dark">Gallery</h2>
          {region.carousel_section.map((carousel, index) => (
            <div key={index} className="mb-4 p-3 border rounded shadow-sm"> 
              <h3 className="text-primary text-center mb-3">{carousel.title}</h3>
              
              
              <ImageCarousel images={carousel.images} />

              <p className="text-center text-muted mt-3">{carousel.description}</p> 
            </div>
          ))}
        </section>
      )}

      { region.destinations && region.destinations.length > 0 && (
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
                    <p className="card-text text-muted d-flex align-items-center mb-0 fs-6">
                      <span className={`me-2 ${styles.icon}`}>
                        <svg width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                          <path d="M8 16s6-5.686 6-10A6 6 0 1 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                      </span>
                      {destination.region}
                    </p>
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
          <h2 className="border-bottom pb-2 mb-4 text-dark">Upcoming Events</h2>
          <ul className="list-group list-group-flush"> 
            {region.events.map((event, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center"> 
                <div>
                  <h5 className="mb-1">{event.name}</h5>
                  <p className="mb-1 text-muted">{event.description}</p>
                </div>
                <span className="badge bg-primary rounded-pill">{event.date}</span> 
              </li>
            ))}
          </ul>
        </section>
      )}

    </div>
    </div>
  );
}


export async function generateStaticParams() {
  
  return regionsData.map(region => ({
    slug: region.slug,
  }));
}