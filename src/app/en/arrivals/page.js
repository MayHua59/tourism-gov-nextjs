"use client";

import { useState, useEffect } from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./Arrivals.module.css";
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchArrivalReport } from "../../../lib/api/arrival";
import Loading from "@/components/Loading";

// Generate years array dynamically (current year and 4 years back)
const getYearsArray = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = 0; i < 5; i++) {
    years.push(currentYear - i);
  }
  return years;
};

const YEARS = getYearsArray();
const MONTHS = [
  { label: "January", value: 1 },
  { label: "February", value: 2 },
  { label: "March", value: 3 },
  { label: "April", value: 4 },
  { label: "May", value: 5 },
  { label: "June", value: 6 },
  { label: "July", value: 7 },
  { label: "August", value: 8 },
  { label: "September", value: 9 },
  { label: "October", value: 10 },
  { label: "November", value: 11 },
  { label: "December", value: 12 }
];

// Get current date and set default values
const getCurrentDate = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1; // getMonth() returns 0-11, we need 1-12
  
  // If we're in January, default to previous year December
  if (currentMonth === 1) {
    return {
      year: currentYear - 1,
      month: 12
    };
  }
  
  // Otherwise, default to current year and previous month
  return {
    year: currentYear,
    month: currentMonth - 1
  };
};

const defaultDate = getCurrentDate();

// Debug logging
console.log('Current date logic:', {
  currentDate: new Date(),
  defaultYear: defaultDate.year,
  defaultMonth: defaultDate.month
});

export default function Page() {
  const [arrivalsData, setArrivalsData] = useState([]);
  const [transportTypes, setTransportTypes] = useState([]);
  const [visaTypes, setVisaTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedYear, setSelectedYear] = useState(defaultDate.year);
  const [selectedMonth, setSelectedMonth] = useState(defaultDate.month);
  const [error, setError] = useState(null);

  // Fetch data from API
  const fetchData = async (year, month) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetchArrivalReport(year, month);
      const data = response.data;
      
      setArrivalsData(data);
      
      // Extract unique transport types
      const allTransportTypes = new Set();
      data.forEach(country => {
        country.number_of_arrival_by_transport.forEach(transport => {
          allTransportTypes.add(transport.transport_name);
        });
      });
      
      // Extract unique visa types
      const allVisaTypes = new Set();
      data.forEach(country => {
        country.number_of_arrival_by_visa.forEach(visa => {
          allVisaTypes.add(visa.visa_name);
        });
      });
      
      setTransportTypes(Array.from(allTransportTypes).sort());
      setVisaTypes(Array.from(allVisaTypes).sort());
      setLoading(false);
    } catch (error) {
      console.error('Error fetching arrivals data:', error);
      setError('Failed to load arrivals data. Please try again.');
      setLoading(false);
    }
  };

  // Load initial data
  useEffect(() => {
    fetchData(selectedYear, selectedMonth);
  }, []);

  // Handle search button click
  const handleSearch = () => {
    fetchData(selectedYear, selectedMonth);
  };

  // Calculate total arrivals for a country (transport)
  const calculateTransportTotal = (country) => {
    return country.number_of_arrival_by_transport.reduce((sum, transport) => sum + transport.arrival, 0);
  };

  // Calculate total arrivals for a country (visa)
  const calculateVisaTotal = (country) => {
    return country.number_of_arrival_by_visa.reduce((sum, visa) => sum + visa.arrival, 0);
  };

  // Get arrival count for specific transport type
  const getTransportCount = (country, transportType) => {
    const transport = country.number_of_arrival_by_transport.find(t => t.transport_name === transportType);
    return transport ? transport.arrival : 0;
  };

  // Get arrival count for specific visa type
  const getVisaCount = (country, visaType) => {
    const visa = country.number_of_arrival_by_visa.find(v => v.visa_name === visaType);
    return visa ? visa.arrival : 0;
  };

  if (loading) {
    return (
      <div className={styles.pageContainer}>
        <BannerSection imageUrl="/assets/images/cover-images/16.jpg" altText="arrivals cover photo" />
        <Breadcrumb
          items={[
            { label: "Home", href: "/en/", icon: faHome },
            { label: "Arrivals", active: true }
          ]}
        />
        <div className={styles.container}>
          <Loading size="large" message="Loading arrivals data..."/>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/16.jpg" altText="arrivals cover photo" />
      <Breadcrumb
        items={[
          { label: "Home", href: "/en/", icon: faHome },
          { label: "Arrivals", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Arrivals Statistics</h1>
        <p className={styles.lead}>Tourist arrivals statistics by transport method and visa type</p>
        
        {/* Filter Controls */}
        <div className={styles.filterControls}>
          <div className={styles.filterGroup}>
            <label htmlFor="year-select" className={styles.filterLabel}>Choose Year:</label>
            <select
              id="year-select"
              className={styles.filterSelect}
              value={selectedYear}
              onChange={(e) => setSelectedYear(parseInt(e.target.value))}
            >
              {YEARS.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
          
          <div className={styles.filterGroup}>
            <label htmlFor="month-select" className={styles.filterLabel}>Choose Month:</label>
            <select
              id="month-select"
              className={styles.filterSelect}
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
            >
              {MONTHS.map(month => (
                <option key={month.value} value={month.value}>{month.label}</option>
              ))}
            </select>
          </div>
          
          <button 
            className={styles.searchButton}
            onClick={handleSearch}
            disabled={loading}
          >
            <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
            {loading ? 'Loading...' : 'Search'}
          </button>
        </div>
        
        {error && (
          <div className={styles.errorMessage}>
            {error}
          </div>
        )}
        
        {arrivalsData.length === 0 && !loading ? (
          <div className={styles.noDataContainer}>
            <div className={styles.noDataIcon}>📊</div>
            <h3 className={styles.noDataTitle}>No Data Available</h3>
            <p className={styles.noDataMessage}>
              No arrival data found for <strong>{MONTHS.find(m => m.value === selectedMonth)?.label} {selectedYear}</strong>.
              <br />
              Please try selecting a different year or month.
            </p>
          </div>
        ) : (
          <>
            {/* Transport Table */}
            <div className={styles.tableSection}>
              <h2 className={styles.tableTitle}>Arrivals by Transport</h2>
              <div className={styles.tableResponsive}>
                <table className={styles.arrivalsTable}>
                  <thead>
                    <tr>
                      <th rowSpan="2">No</th>
                      <th rowSpan="2">Country</th>
                      <th colSpan={transportTypes.length + 1}>Arrivals - {MONTHS.find(m => m.value === selectedMonth)?.label} {selectedYear}</th>
                    </tr>
                    <tr>
                      {transportTypes.map((transport, index) => (
                        <th key={index}>{transport}</th>
                      ))}
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {arrivalsData.map((country, index) => (
                      <tr key={country.id}>
                        <td>{index + 1}</td>
                        <td>{country.country}</td>
                        {transportTypes.map((transport, transportIndex) => (
                          <td key={transportIndex}>
                            {getTransportCount(country, transport)}
                          </td>
                        ))}
                        <td className={styles.totalCell}>{calculateTransportTotal(country)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Visa Table */}
            <div className={styles.tableSection}>
              <h2 className={styles.tableTitle}>Arrivals by Visa Type</h2>
              <div className={styles.tableResponsive}>
                <table className={styles.arrivalsTable}>
                  <thead>
                    <tr>
                      <th rowSpan="2">No</th>
                      <th rowSpan="2">Country</th>
                      <th colSpan={visaTypes.length + 1}>Arrivals - 
                        {selectedYear} - 
                        {MONTHS.find(m => m.value === selectedMonth)?.label}</th>
                    </tr>
                    <tr>
                      {visaTypes.map((visa, index) => (
                        <th key={index}>{visa}</th>
                      ))}
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {arrivalsData.map((country, index) => (
                      <tr key={`visa-${country.id}`}>
                        <td>{index + 1}</td>
                        <td>{country.country}</td>
                        {visaTypes.map((visa, visaIndex) => (
                          <td key={visaIndex}>
                            {getVisaCount(country, visa)}
                          </td>
                        ))}
                        <td className={styles.totalCell}>{calculateVisaTotal(country)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}