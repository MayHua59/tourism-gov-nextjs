import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./E-Visa.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Electronic Visa",
  description: "Myanmar eVisa application information, requirements, and eligible countries."
};

export default function EVisa() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/54.jpg" altText="electronic visa cover photo" />
      <Breadcrumb
        items={[
          { label: "首页", href: "/cn/", icon: faHome },
          { label: "Electronic Visa", active: true }
        ]}
      />
      <div className={styles.container}>
        <section id="evisa-info" className={styles.mb5}>
          <h1 className={styles.pageTitle}>eVisa Application</h1>
          <p className={styles.lead}>Notice To Tourist For Applying eVisa</p>
          <ol className={styles.evisaList}>
            <li>
              You will need the following before you apply:
              <ul className={styles.evisaSublist}>
                <li>a. Your passport validity must have at least (6) months.</li>
                <li>b. You have to upload one color photo (4.6 cm X 3.8 cm) taking during last (3) months.</li>
                <li>c. You have to upload your Passport Bio-Data Page.</li>
                <li>
                  d. A proof of return ticket from Myanmar must be attached to the application. (Attach a trip plan if you will enter from the Kawthaung land border checkpoint.)
                </li>
                <li>
                  e. A proof of hotel booking or on boat must be attached to the application. Tourists must stay in registered hotels, motels, inns, guest house, resort or on boat during your stay in Myanmar.
                </li>
                <li>f. Visa, Master, JCB credit cards for the Online Visa payment.</li>
              </ul>
            </li>
            <li>
              Tourist Visa processing information :
              <ul className={styles.evisaSublist}>
                <li>a. The validity of eVisa approval letter is 90 days from the issued date. If it is expired, entry will be denied.</li>
                <li>b. Length of stay is (28) days from the date of arrival in Myanmar.</li>
                <li>c. eVisa service is non refundable.</li>
                <li>d. You will receive an email acknowledgement within 1 hour after successful payment.</li>
                <li>
                  e. The processing time is minimum 3 working days (Myanmar time) for normal Tourist Visa. In all cases, processing time starts when the application acknowledgement e-mail is sent, after application is submitted and online payment is successful.
                </li>
              </ul>
            </li>
            <li>
              If the applicant has child(ren) under (7) years old on the same passport, you have to put the name of that child, date of birth in the minor section of the application form.
            </li>
            <li>
              If the decision is not allowed to entry, you may return by the same flight.
            </li>
            <li>
              Only passports will be eligible for e-visa. Travel documents will not be accepted. If your e-visa was obtained with travel documents, you will be denied entry to Myanmar at the immigration check points.
            </li>
            <li>
              There are Restricted Areas for Foreigners and Tourist travelling in the Country. For more information, please visit <a href="https://mip.gov.mm" target="_blank" rel="noopener">mip.gov.mm</a>. Information on restricted area, please go to <a href="https://mip.gov.mm/RestricetdArea" target="_blank" rel="noopener">mip.gov.mm/RestricetdArea</a> and <a href="https://tourism.gov.mm/mm/traveller-tips" target="_blank" rel="noopener">tourism.gov.mm/mm/traveller-tips</a>.
            </li>
            <li>
              eVisa is a only valid for a single entry. Re-entry will require a new visa.
            </li>
            <li>
              Currently, passengers with eVisa are only permitted to enter via following ports:
              <ul className={styles.evisaSublist}>
                <li>a. Yangon International Airport</li>
                <li>b. Mandalay International Airport</li>
                <li>c. Nay Pyi Taw International Airport</li>
                <li>d. Kawthaung International Land Border Checkpoint</li>
              </ul>
            </li>
            <li>
              If you are visiting Myanmar via cruise, please contact your tour agent for Pre-arrangement Visa on Arrival. You will not be able to use eVisa to enter Myanmar via seaport.
            </li>
            <li>
              Effective from 01 September 2022, ordinary passport holders from the following countries do not require a visa for tourist visits of up to Exemption Period if entering and departing from Yangon, Mandalay, or Naypyidaw International Airports. If you would like to stay in Myanmar over Exemption Period, please apply for the appropriate e-Visa.
              <div className={styles.tableResponsive}>
                <table className={styles.evisaTable}>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Country</th>
                      <th>Exemption Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Brunei</td>
                      <td>14 days</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Cambodia</td>
                      <td>14 days</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Indonesia</td>
                      <td>14 days</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Laos</td>
                      <td>14 days</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Philippines</td>
                      <td>14 days</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Thailand</td>
                      <td>14 days</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Vietnam</td>
                      <td>30 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li>
              Effective from 01 September 2022, ordinary passport holders of Singapore citizens do not require a visa for tourist visits of up to 30 days and you can enter and depart from all International Checkpoints.
            </li>
            <li>
              Ordinary passport holders from the following countries including Taiwan Republic of China, Hong Kong Special Administrative Region of China and Macau Special Administrative Region of China are eligible to apply Tourist Visa.
              <div className={styles.tableResponsive}>
                <table className={styles.evisaTable}>
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Country Name</th>
                      <th>No.</th>
                      <th>Country Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>1.</td><td>Albania</td><td>51.</td><td>Kenya</td></tr>
                    <tr><td>2.</td><td>Algeria</td><td>52.</td><td>Korea, Democratic People&apos;s Republic</td></tr>
                    <tr><td>3.</td><td>Argentina</td><td>53.</td><td>Korea, Republic</td></tr>
                    <tr><td>4.</td><td>Australia</td><td>54.</td><td>Kuwait</td></tr>
                    <tr><td>5.</td><td>Austria</td><td>55.</td><td>Kyrgyzstan</td></tr>
                    <tr><td>6.</td><td>Bangladesh</td><td>56.</td><td>Laos</td></tr>
                    <tr><td>7.</td><td>Belarus</td><td>57.</td><td>Latvia</td></tr>
                    <tr><td>8.</td><td>Belgium</td><td>58.</td><td>Lithuania</td></tr>
                    <tr><td>9.</td><td>Bhutan</td><td>59.</td><td>Luxembourg</td></tr>
                    <tr><td>10.</td><td>Bolivia</td><td>60.</td><td>Malaysia</td></tr>
                    <tr><td>11.</td><td>Bosnia and Herzegovina</td><td>61.</td><td>Maldives</td></tr>
                    <tr><td>12.</td><td>Brazil</td><td>62.</td><td>Malta</td></tr>
                    <tr><td>13.</td><td>Brunei</td><td>63.</td><td>Mauritius</td></tr>
                    <tr><td>14.</td><td>Bulgaria</td><td>64.</td><td>Mexico</td></tr>
                    <tr><td>15.</td><td>Cambodia</td><td>65.</td><td>Monaco</td></tr>
                    <tr><td>16.</td><td>Cameroon</td><td>66.</td><td>Mongolia</td></tr>
                    <tr><td>17.</td><td>Canada</td><td>67.</td><td>Morocco</td></tr>
                    <tr><td>18.</td><td>Chile</td><td>68.</td><td>Nepal</td></tr>
                    <tr><td>19.</td><td>China</td><td>69.</td><td>Netherlands</td></tr>
                    <tr><td>20.</td><td>Colombia</td><td>70.</td><td>New Zeland</td></tr>
                    <tr><td>21.</td><td>Costa Rica</td><td>71.</td><td>Norway</td></tr>
                    <tr><td>22.</td><td>Côte d'Ivoire</td><td>72.</td><td>Pakistan</td></tr>
                    <tr><td>23.</td><td>Croatia</td><td>73.</td><td>Panama</td></tr>
                    <tr><td>24.</td><td>Cyprus</td><td>74.</td><td>Peru</td></tr>
                    <tr><td>25.</td><td>Czech Republic</td><td>75.</td><td>Philippines</td></tr>
                    <tr><td>26.</td><td>Denmark</td><td>76.</td><td>Poland</td></tr>
                    <tr><td>27.</td><td>Ecuador</td><td>77.</td><td>Portugal</td></tr>
                    <tr><td>28.</td><td>Egypt</td><td>78.</td><td>Qatar</td></tr>
                    <tr><td>29.</td><td>Eritrea</td><td>79.</td><td>Romania</td></tr>
                    <tr><td>30.</td><td>Estonia</td><td>80.</td><td>Russia</td></tr>
                    <tr><td>31.</td><td>Fiji</td><td>81.</td><td>Saudi Arabia</td></tr>
                    <tr><td>32.</td><td>Finland</td><td>82.</td><td>Serbia</td></tr>
                    <tr><td>33.</td><td>France</td><td>83.</td><td>Singapore</td></tr>
                    <tr><td>34.</td><td>Georgia</td><td>84.</td><td>Slovakia</td></tr>
                    <tr><td>35.</td><td>Germany</td><td>85.</td><td>Slovenia</td></tr>
                    <tr><td>36.</td><td>Ghana</td><td>86.</td><td>South Africa</td></tr>
                    <tr><td>37.</td><td>Greece</td><td>87.</td><td>Spain</td></tr>
                    <tr><td>38.</td><td>Guatemala</td><td>88.</td><td>Sri lanka</td></tr>
                    <tr><td>39.</td><td>Guinea</td><td>89.</td><td>Sweden</td></tr>
                    <tr><td>40.</td><td>Hungary</td><td>90.</td><td>Switzerland</td></tr>
                    <tr><td>41.</td><td>Iceland</td><td>91.</td><td>Thailand</td></tr>
                    <tr><td>42.</td><td>India</td><td>92.</td><td>Turkey</td></tr>
                    <tr><td>43.</td><td>Indonesia</td><td>93.</td><td>Uganda</td></tr>
                    <tr><td>44.</td><td>Ireland</td><td>94.</td><td>Ukraine</td></tr>
                    <tr><td>45.</td><td>Israel</td><td>95.</td><td>United Kingdom</td></tr>
                    <tr><td>46.</td><td>Italy</td><td>96.</td><td>United States of America</td></tr>
                    <tr><td>47.</td><td>Jamaica</td><td>97.</td><td>Uruguay</td></tr>
                    <tr><td>48.</td><td>Japan</td><td>98.</td><td>Uzbekistan</td></tr>
                    <tr><td>49.</td><td>Jordan</td><td>99.</td><td>Venezuela</td></tr>
                    <tr><td>50.</td><td>Kazakhstan</td><td>100.</td><td>Vietnam</td></tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}
