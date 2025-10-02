import Breadcrumb from "../../../components/Breadcrumb";
import styles from "./AboutMyanmar.module.css";
import BannerSection from "../../../components/BannerSection";
import { faHome } from "@fortawesome/free-solid-svg-icons"; 

export const metadata = {
  title: "About Myanmar",
  description: "Learn about Myanmar's history, people, geography and more."
};

export default function AboutMyanmar() {
  return (
    <div className={styles.pageContainer}>
    <BannerSection imageUrl="/assets/images/cover-images/9.jpg" altText="about myanmar cover photo"/>
<Breadcrumb
        items={[
          { label: "首页", href: "/cn/", icon: faHome },
          { label: "关于缅甸", active: true }
        ]}
      />
    <div className={styles.container}>
     

      

       <h1 className={styles.pageTitle}>关于缅甸</h1>



        <section id="introduction">
            <h2 className={styles.sectionTitle}>介绍</h2>
            <p>缅甸是亚洲最后一个向旅游世界展示的国家之一。位于印度、中国和泰国之间，这片神奇土地上的人民发展了一种文化，这种文化通过吸收和汲取周围民族的最佳品质，创造了属于自己的风格和魅力，经受住了入侵和变化的考验。缅甸的游客会发现有很多值得发现和体验的地方——从原始的自然区域到金色佛塔，再到古代遗迹。</p>
        </section>

        <section id="history">
             <h2 className={styles.sectionTitle}>历史</h2>
            <p>缅甸有着丰富而深刻的历史，可以追溯到公元前200年至公元900年繁荣了1000年的骠族王朝。第一个缅甸帝国由阿奴律陀国王在11世纪在蒲甘建立。这个文明持续了200多年，在16世纪被第二帝国巴因瑙国王取代。1824年开始了一系列缅甸王国与大英帝国之间的战争。这些战争在1885年以英国人推翻最后一位国王并开始60年的殖民统治而告终。在第二次世界大战期间，缅甸从1942年到1945年被日本占领，1948年缅甸摆脱英国统治，成为一个独立的国家。</p>
        </section>

        <section id="people">
             <h2 className={styles.sectionTitle}>人民</h2>
            <p>2017年，缅甸人口为5337万，由许多不同的民族组成，包括最大的群体缅族、克钦族、克伦族、克耶族、钦族、孟族、若开族和掸族。超过80%的人口是佛教徒，最常用的语言是缅甸语，还使用许多民族方言。英语被广泛使用，还有普通话、粤语和印地语。</p>
            <p>该国因每月都有许多丰富多彩和令人兴奋的节日而闻名——其中包括泼水节、纳迦新年和热气球节。</p>
            <p>可以肯定的是，缅甸人民以对游客热情友好而闻名。</p>
        </section>

        <section id="geography">
             <h2 className={styles.sectionTitle}>地理</h2>
            <p>缅甸正式名称为缅甸联邦共和国，西与孟加拉国、印度接壤，北与中国接壤，东与老挝和泰国接壤，南与安达曼海和孟加拉湾接壤。该国面积676,578平方公里。</p>
            <p>该国分为两个大区域——下缅甸——沿海区域和上缅甸——内陆区域。北部有山区，而该国其他地区由许多大小河流纵横交错。</p>
            <p>山脉在北部更为常见，最高峰达到5881米。内陆平原和伊洛瓦底江三角洲极其肥沃，为稻田提供了丰富的土壤，稻田在该国经济中发挥着巨大作用。</p>
            <p>西北和西南海岸点缀着岛屿和美丽的海滩。</p>
            <p>在较高海拔地区天气较凉爽，而中部地区降雨较少，雨季从5月中旬持续到10月中旬，但总的来说，您可以全年访问。</p>
        </section>

        <section id="transportation">
             <h2 className={styles.sectionTitle}>交通</h2>
            <p>仰光、曼德勒和内比都的三个国际机场是大多数国际游客的主要到达点。国内航班也可用，许多国内中心很容易通过航空到达。连接主要中心的道路状况良好，但当您离开这些区域时，质量会有所不同。</p>
            <p>铁路系统服务该国的大片区域，主要路线在仰光和曼德勒、卡劳、彬乌伦和昔卜之间。</p>
        </section>

        <section id="currency">
             <h2 className={styles.sectionTitle}>货币</h2>
            <p>缅甸货币称为缅元。没有硬币，只有从1到10,000缅元的纸币。现金仍然广泛使用，但信用卡在较大的中心越来越受欢迎。建议携带少量美元。欧元和新加坡元也可以在银行和官方货币兑换处兑换。不接受其他外币。</p>
        </section>
    </div>
    </div>
    
  );
}
