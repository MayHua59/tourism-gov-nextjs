import { notFound } from 'next/navigation';
import Breadcrumb from '../../../../components/Breadcrumb';
import BannerSection from '../../../../components/BannerSection';
import styles from './RegionDetail.module.css'; // Create this CSS module
import { faHome } from '@fortawesome/free-solid-svg-icons';

async function fetchRegion(slug) {
  const API_URL = `https://mohtgov.software100.com.mm/api/v1/regions/${slug}`;
  const res = await fetch(API_URL, { cache: 'no-store' });

  if (!res.ok) {
    console.error(`Failed to fetch region ${slug}:`, res.status, res.statusText);
    return null;
  }

  const data = await res.json();
  return data;
}

export async function generateMetadata({ params }) {
  const region = await fetchRegion(params.slug);

  if (!region) {
    return {
      title: 'Region Not Found',
      description: 'Region not found'
    };
  }

  return {
    title: region.name,
    description: `Information about ${region.name} region.`
  };
}

export default async function RegionDetail({ params }) {
  const region = await fetchRegion(params.slug);

  if (!region) {
    return notFound();
  }

  return (
    <div className={styles.pageContainer}>
      <BannerSection
        imageUrl="/assets/images/cover-images-title/12.jpg"
        altText={`Banner for ${region.name}`}
      />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/en', icon: faHome },
        
          { label: region.name, active: true },
        ]}
      />
      <div className={styles.container}>
        <div className={styles.regionCard}>
          <h1 className={styles.regionTitle}>{region.name}</h1>
          <div className={styles.regionInfo}>
            <p><strong>Division:</strong> {region.division?.name || 'N/A'}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}