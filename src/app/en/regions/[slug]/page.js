import React from 'react';
import regionsData from '@/data/regions.json'; 
import ImageCarousel from '../../../../components/ImageCarousel'; 
import styles from "./RegionDetail.module.css"
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
    <div className={styles.mainContent}>
      <h1 className="text-center mb-4 text-dark">{region.name}</h1> {/* Bootstrap text-center, margin, text-dark */}
      
      <div className="text-center mb-5"> {/* Bootstrap text-center and margin */}
        <img 
          src={region.cover_image} 
          alt={region.name} 
          className={`${styles.coverImage} img-fluid rounded shadow-sm`} // Combined module.css for max-width and Bootstrap for responsive, rounded, shadow
        />
        <p className="lead mt-3 text-secondary">{region.description}</p> {/* Bootstrap lead text, margin-top, text-secondary */}
      </div>

      {region.sections && region.sections.length > 0 && (
        <section className="mb-5"> {/* Bootstrap margin-bottom */}
          <h2 className="border-bottom pb-2 mb-4 text-dark">Key Highlights</h2> {/* Bootstrap border and padding, text-dark */}
          {region.sections.map((section, index) => (
            <div key={index} className="mb-4"> {/* Bootstrap margin-bottom */}
              <h3 className="text-primary">{section.subtitle}</h3> {/* Bootstrap text-primary color */}
              <p>{section.description}</p>
            </div>
          ))}
        </section>
      )}

      {region.carousel_section && region.carousel_section.length > 0 && (
        <section className="mb-5">
          <h2 className="border-bottom pb-2 mb-4 text-dark">Gallery</h2>
          {region.carousel_section.map((carousel, index) => (
            <div key={index} className="mb-4 p-3 border rounded shadow-sm"> {/* Bootstrap classes for card-like appearance */}
              <h3 className="text-primary text-center mb-3">{carousel.title}</h3>
              
              {/* ImageCarousel component already handles its own styles via module.css */}
              <ImageCarousel images={carousel.images} />

              <p className="text-center text-muted mt-3">{carousel.description}</p> {/* Bootstrap muted text */}
            </div>
          ))}
        </section>
      )}

      {region.destinations && region.destinations.length > 0 && (
        <section className="mb-5">
          <h2 className="border-bottom pb-2 mb-4 text-dark">Popular Destinations</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center"> {/* Bootstrap Grid System */}
            {region.destinations.map((destination, index) => (
              <div key={index} className="col"> {/* Bootstrap column for responsiveness */}
                <div className="card h-100 shadow-sm text-center"> {/* Bootstrap Card, full height, shadow, text-center */}
                  <div className="card-body"> {/* Card body for padding */}
                    <h5 className="card-title text-primary mb-2">{destination.name}</h5> {/* Card title, Bootstrap color */}
                    <p className="card-text text-muted">{destination.region}</p> {/* Card text, Bootstrap muted color */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {region.events && region.events.length > 0 && (
        <section className="mb-5">
          <h2 className="border-bottom pb-2 mb-4 text-dark">Upcoming Events</h2>
          <ul className="list-group list-group-flush"> {/* Bootstrap list group */}
            {region.events.map((event, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center"> {/* List group item */}
                <div>
                  <h5 className="mb-1">{event.name}</h5>
                  <p className="mb-1 text-muted">{event.description}</p>
                </div>
                <span className="badge bg-primary rounded-pill">{event.date}</span> {/* Bootstrap badge */}
              </li>
            ))}
          </ul>
        </section>
      )}

    </div>
  );
}


export async function generateStaticParams() {
  
  return regionsData.map(region => ({
    slug: region.slug,
  }));
}