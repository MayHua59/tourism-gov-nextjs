import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "@/app/en/e-visa/E-Visa.module.css";
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
          { label: "หน้าแรก", href: "/th", icon: faHome },
          { label: "บัตรทะเบียนอิเล็กทรอนิกส์", active: true }
        ]}
      />
      <div className={styles.container}>
        <section id="evisa-info" className={styles.mb5}>
          <h1 className={styles.pageTitle}>บัตรทะเบียนอิเล็กทรอนิกส์</h1>
          <p className={styles.lead}>บัตรทะเบียนอิเล็กทรอนิกส์ การสมัครสมาชิก</p>
          <ol className={styles.evisaList}>
            <li>
             คุณจะต้องมีสิ่งต่อไปนี้ก่อนที่จะสมัคร:
              <ul className={styles.evisaSublist}>
                <li>a. วันหมดอายุของเอกสารทะเบียนบัตรต้องมีอย่างน้อย (6) เดือน.</li>
                <li>b. คุณต้องอัปโหลดรูปภาพสี (4.6 ซม. X 3.8 ซม.) ที่ถ่ายในช่วงสุดท้าย (3) เดือน.</li>
                <li>c. คุณต้องอัปโหลดหน้าข้อมูลทะเบียนบัตรของคุณ.</li>
                <li>
                    d. หลักฐานการกลับมาในประเทศเมียนมาร์ตัวอย่างการสมัครสมาชิก (ผู้เข้าพักในรถไฟหรือรถไฟรถไฟ)
                </li>
                <li>
                  e. หลักฐานการจองที่พักหรือบนเรือต้องอัปโหลดการสมัครสมาชิก (ผู้เข้าพักในรถไฟหรือรถไฟรถไฟ)
                </li>
                <li>f. บัตรเครดิต Visa, Master, JCB สำหรับการชำระเงินอิเล็กทรอนิกส์บัตรทะเบียนอิเล็กทรอนิกส์</li>
              </ul>
            </li>
            <li>
              ข้อมูลการประมวลผลบัตรทะเบียนอิเล็กทรอนิกส์ :
              <ul className={styles.evisaSublist}>
                <li>a. วันหมดอายุของบัตรทะเบียนอิเล็กทรอนิกส์ตัวอย่างการสมัครสมาชิกคือ 90 วันจากวันที่ออก</li>
                <li>b. ระยะเวลาการพักอยู่คือ (28) วันจากวันที่มาถึงเมียนมาร์</li>
                <li>c. บัตรทะเบียนอิเล็กทรอนิกส์บริการไม่สามารถคืนเงินได้</li>
                <li>d. คุณจะได้รับอีเเมลการยืนยันภายใน 1 ชั่วโมงหลังจากการชำระเงินสำเร็จ</li>
                <li>
                  e. ระยะเวลาการประมวลผลคืออย่างน้อย 3 วันทำงาน (เวลาเมียนมาร์) สำหรับบัตรทะเบียนอิเล็กทรอนิกส์ปกติ ในทุกกรณี ระยะเวลาการประมวลผลเริ่มต้นเมื่อส่งอีเเมลการยืนยันการสมัครสมาชิก หลังจากการส่งการสมัครสมาชิกและการชำระเงินอิเล็กทรอนิกส์สำเร็จ
                </li>
              </ul>
            </li>
            <li>
              หากผู้สมัครสมาชิกมีบุตร(บุตร)ภายใต้ (7) ปีอายุบนเอกสารทะเบียนบัตรเดียวกัน คุณต้องใส่ชื่อและวันเกิดของบุตรในส่วนของบุตรในฟอร์มการสมัครสมาชิก
            </li>
            <li>
              หากการตัดสินใจไม่ได้รับอนุญาตให้เข้า คุณสามารถกลับได้ด้วยการบินเดียวกัน
            </li>
            <li>
              เอกสารทะเบียนบัตรเท่านั้นที่สามารถใช้ได้กับบัตรทะเบียนอิเล็กทรอนิกส์ เอกสารทะเบียนบัตรไม่สามารถยอมรับได้ หากคุณได้รับบัตรทะเบียนอิเล็กทรอนิกส์ด้วยเอกสารทะเบียนบัตร คุณจะไม่สามารถเข้าเมียนมาร์ที่จุดตรวจสอบการป้องกันภัยประจำประเทศได้
            </li>
            <li>
              มีพื้นที่จำกัดสำหรับผู้นำกลุ่มต่างด้าวและนักท่องเที่ยวในประเทศ สำหรับข้อมูลเพิ่มเติม โปรดเข้าชม <a href="https://mip.gov.mm" target="_blank" rel="noopener">mip.gov.mm</a> ข้อมูลเกี่ยวกับพื้นที่จำกัด โปรดเข้าชม <a href="https://mip.gov.mm/RestricetdArea" target="_blank" rel="noopener">mip.gov.mm/RestricetdArea</a> และ <a href="https://tourism.gov.mm/mm/traveller-tips" target="_blank" rel="noopener">tourism.gov.mm/mm/traveller-tips</a>
            </li>
            <li>
              บัตรทะเบียนอิเล็กทรอนิกส์เท่านั้นที่สามารถใช้ได้กับการเดินทางเดียว การเดินทางกลับจะต้องต้องการบัตรทะเบียนอิเล็กทรอนิกส์ใหม่
            </li>
            <li>
              ปัจจุบัน ผู้เดินทางที่มีบัตรทะเบียนอิเล็กทรอนิกส์เท่านั้นที่สามารถเข้าได้ผ่านพอร์ตต่อไปนี้:
              <ul className={styles.evisaSublist}>
                <li>a. สนามบินเอเชียมาร์ตัวอย่างการสมัครสมาชิก (ผู้เข้าพักในรถไฟหรือรถไฟรถไฟ)</li>
                <li>b. สนามบินแม่คำพลอยตัวอย่างการสมัครสมาชิก (ผู้เข้าพักในรถไฟหรือรถไฟรถไฟ)</li>
                <li>c. สนามบินนายพยียทวตัวอย่างการสมัครสมาชิก (ผู้เข้าพักในรถไฟหรือรถไฟรถไฟ)</li>
                <li>d. จุดตรวจสอบการป้องกันภัยประจำประเทศกัวธังตัวอย่างการสมัครสมาชิก (ผู้เข้าพักในรถไฟหรือรถไฟรถไฟ)</li>
              </ul>
            </li>
            <li>
              หากคุณกำลังเดินทางเมียนมาร์ผ่านเรือ โปรดติดต่อตัวแทนการท่องเที่ยวของคุณสำหรับการจองบัตรทะเบียนอิเล็กทรอนิกส์ล่วงหน้า คุณจะไม่สามารถใช้บัตรทะเบียนอิเล็กทรอนิกส์เพื่อเข้าเมียนมาร์ผ่านที่สำหรับการจองบัตรทะเบียนอิเล็กทรอนิกส์ล่วงหน้า
            </li>
            <li>
              สำหรับผู้นำกลุ่มต่างด้าวจากประเทศต่อไปนี้ ไม่ต้องการบัตรทะเบียนอิเล็กทรอนิกส์สำหรับการเดินทางท่องเที่ยวของผู้นำกลุ่มต่างด้าวหากเข้าและออกจากสนามบินเอเชียมาร์ หรือสนามบินแม่คำพลอย หรือสนามบินนายพยียทว หากคุณต้องการพักอยู่ในเมียนมาร์ภายใต้ระยะเวลาการพักอยู่ โปรดสมัครสมาชิกสำหรับบัตรทะเบียนอิเล็กทรอนิกส์ที่เหมาะสม
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
              มีผลตั้งแต่วันที่ 1 กันยายน 2022 ผู้ถือหนังสือเดินทางธรรมดาของพลเมืองสิงคโปร์ไม่ต้องขอวีซ่าสำหรับการเดินทางท่องเที่ยวสูงสุด 30 วัน และสามารถเข้าออกได้ที่จุดตรวจสอบระหว่างประเทศทั้งหมด
            </li>
            <li>
              ผู้ถือหนังสือเดินทางธรรมดาจากประเทศต่อไปนี้ รวมถึงประเทศประชาชนประเทศจีน ประเทศประชาชนประเทศจีน และประเทศประชาชนประเทศจีน สามารถสมัครสมาชิกสำหรับบัตรทะเบียนอิเล็กทรอนิกส์
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
                    <tr><td>22.</td><td>Côte d’Ivoire</td><td>72.</td><td>Pakistan</td></tr>
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