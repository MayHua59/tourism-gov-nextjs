import Breadcrumb from "../../../components/Breadcrumb";
import BannerSection from "../../../components/BannerSection";
import styles from "./MyanmarMinistries.module.css";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
  title: "Myanmar Ministries",
  description: "List of Myanmar government ministries and their official websites."
};

export default function MyanmarMinistries() {
  return (
    <div className={styles.pageContainer}>
      <BannerSection imageUrl="/assets/images/cover-images/51.jpg" altText="myanmar ministries cover photo" />
      <Breadcrumb
        items={[
          { label: "首页", href: "/cn/", icon: faHome },
          { label: "Myanmar Ministries", active: true }
        ]}
      />
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Myanmar Ministries</h1>
        <section id="ministries-table" className={styles.mt5}>
          <div className={styles.tableResponsive}>
            <table className={styles.ministriesTable}>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Ministry</th>
                  <th>Website Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ministry of National Planning
</td>
                  <td><a href="https://monp.gov.mm/

" target="_blank" rel="noopener">https://monp.gov.mm

                  </a></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Ministry (1) of the President&apos;s Office

                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Ministry (2) of the President&apos;s Office

                  </td>
                  <td>

                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Ministry (3) of the President&apos;s Office

                  </td>
                  <td>

                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Ministry (4) of the President&apos;s Office

                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Ministry of Transport and Communications

                  </td>
                  <td><a href="https://www.motc.gov.mm
" target="_blank" rel="noopener">https://www.motc.gov.mm
                  </a></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Ministry of Defense

                  </td>
                  <td>
                    <a href="https://www.mod.gov.mm

" target="_blank" rel="noopener">https://www.mod.gov.mm

                    </a>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Ministry of Finance and Revenue

                  </td>
                  <td>
                    <a href="https://www.mopf.gov.mm


" target="_blank" rel="noopener">https://www.mopf.gov.mm</a><br />
<a href="https://www.mmftb.gov.mm" target="_blank" rel="noopener">https://www.mmftb.gov.mm</a><br />
<a href="https://www.cbm.gov.mm" target="_blank" rel="noopener">https://www.cbm.gov.mm</a><br />
<a href="https://ird.gov.mm" target="_blank" rel="noopener">https://ird.gov.mm</a><br />
<a href="https://customs.gov.mm
" target="_blank" rel="noopener">https://customs.gov.mm
</a><br />
<a href="https://www.mminsurance.gov.mm

" target="_blank" rel="noopener">https://www.mminsurance.gov.mm

</a><br />
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Ministry of Foreign Affairs

                  </td>
                  <td>
                    <a href="https://www.mofa.gov.mm



" target="_blank" rel="noopener">https://www.mofa.gov.mm



                    </a>
                  </td>
                </tr>
               
                <tr>
                  <td>10</td>
                  <td>Ministry of Home Affairs

                  </td>
                  <td><a href="https://www.moha.gov.mm
" target="_blank" rel="noopener">https://www.moha.gov.mm
                  </a><br/>
                  <a href="https://policeforce.gov.mm

" target="_blank" rel="noopener">https://policeforce.gov.mm

</a><br />
<a href="https://gad.gov.mm


" target="_blank" rel="noopener">https://gad.gov.mm


</a><br />
<a href="https://bsi.gov.mm



" target="_blank" rel="noopener">https://bsi.gov.mm



</a><br />
<a href="https://prisonsdepartment.gov.mm




" target="_blank" rel="noopener">https://prisonsdepartment.gov.mm




</a><br />
<a href="https://www.fsd.gov.mm





" target="_blank" rel="noopener">https://www.fsd.gov.mm





</a><br />
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Ministry of Border Affairs

                  </td>
                  <td>
                    <a href="https://www.moba.gov.mm
" target="_blank" rel="noopener">https://www.moba.gov.mm
                    </a>
                  </td>
                </tr>
                 <tr>
                  <td>12</td>
                  <td>Ministry of Ethnic Affairs


                  </td>
                  <td>
                    <a href="https://portal.moea.gov.mm




" target="_blank" rel="noopener">https://portal.moea.gov.mm




                    </a>
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Ministry of Investment and Foreign Economic Relations

                  </td>
                  <td><a href="https://www.mifer.gov.mm
" target="_blank" rel="noopener">https://www.mifer.gov.mm
                  </a><br/>

                  <a href="https://www.dica.gov.mm

" target="_blank" rel="noopener">https://www.dica.gov.mm

                  </a>
                  
                  </td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Ministry of Legal Affairs

                  </td>
                  <td>
                    <a href="https://www.mola.gov.mm
" target="_blank" rel="noopener">https://www.mola.gov.mm
                    </a><br />

                  </td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Ministry of Information

                  </td>
                  <td>
                    <a href="https://www.moi.gov.mm
" target="_blank" rel="noopener">https://www.moi.gov.mm
                    </a><br />
                    <a href="https://www.mrtv.gov.mm

" target="_blank" rel="noopener">https://www.mrtv.gov.mm

                    </a><br />
                    <a href="https://www.moi.gov.mm/iprd

" target="_blank" rel="noopener">https://www.moi.gov.mm/iprd

                    </a><br />
                    <a href="https://moi.gov.mm/ppd

" target="_blank" rel="noopener">https://moi.gov.mm/ppd

                    </a><br />
                    <a href="https://moi.gov.mm/npe

" target="_blank" rel="noopener">https://moi.gov.mm/npe

                    </a><br />

                  </td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Ministry of Religious Affairs & Culture

                  </td>
                  <td><a href="https://www.mora.gov.mm

" target="_blank" rel="noopener">https://www.mora.gov.mm

                  </a><br />
                    <a href="https://www.kbrl.gov.mm


" target="_blank" rel="noopener">https://www.kbrl.gov.mm


                    </a><br />
                    <a href="https://www.mahana.org.mm


" target="_blank" rel="noopener">https://www.mahana.org.mm


                    </a><br />
                  </td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Ministry of Agriculture, Livestock and Irrigation

                  </td>
                  <td><a href="https://www.moali.gov.mm
" target="_blank" rel="noopener">https://www.moali.gov.mm
                  </a></td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Ministry of Cooperatives and Rural Development

                  </td>
                  <td>
                    <a href="https://mcrd.gov.mm
" target="_blank" rel="noopener">https://mcrd.gov.mm
                    </a><br />

                  </td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Ministry of Natural Resources & Environmental Conservation

                  </td>
                  <td><a href="https://www.monrec.gov.mm

" target="_blank" rel="noopener">https://www.monrec.gov.mm

                  </a>
                    <br />
                    <a href="https://www.mining.gov.mm


" target="_blank" rel="noopener">https://www.mining.gov.mm


                    </a>
                    <br />
                    <a href="https://www.mte.com.mm


" target="_blank" rel="noopener">https://www.mte.com.mm


                    </a>
                    <br />
                  </td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Ministry of Electric Power

                  </td>
                  <td><a href="https://www.moep.gov.mm

" target="_blank" rel="noopener">https://www.moep.gov.mm

                  </a></td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Ministry of Energy

                  </td>
                  <td><a href="https://www.energy.gov.mm

" target="_blank" rel="noopener">https://www.energy.gov.mm

                  </a></td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Ministry of Industry

                  </td>
                  <td><a href="https://industry.gov.mm

" target="_blank" rel="noopener">https://industry.gov.mm

                  </a></td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Ministry of Immigration & Population

                  </td>
                  <td>
                    <a href="https://www.mip.gov.mm

" target="_blank" rel="noopener">https://www.mip.gov.mm

                    </a><br />

                  </td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Ministry of Labour

                  </td>
                  <td>
                    <a href="https://www.mol.gov.mm
" target="_blank" rel="noopener">https://www.mol.gov.mm
                    </a><br />
                    <a href="https://www.ssb.gov.mm

" target="_blank" rel="noopener">https://www.ssb.gov.mm

                    </a><br />

                  </td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Ministry of Commerce

                  </td>
                  <td><a href="https://www.commerce.gov.mm
" target="_blank" rel="noopener">https://www.commerce.gov.mm
                  </a><br />
                    <a href="https://www.myanmartradenet.com.mm

" target="_blank" rel="noopener">https://www.myanmartradenet.com.mm

                    </a><br />
                    <a href="https://www.servicetrade.gov.mm

" target="_blank" rel="noopener">https://www.servicetrade.gov.mm

                    </a>
                  </td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Ministry of Science and Technology
</td>
                  <td><a href="https://www.most.gov.mm
" target="_blank" rel="noopener">https://www.most.gov.mm</a></td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Ministry of Health
</td>
                  <td><a href="https://www.mohs.gov.mm
" target="_blank" rel="noopener">https://www.mohs.gov.mm
                  </a></td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Ministry of Sports and Youth Affairs

                  </td>
                  <td><a href="https://mosya.gov.mm
" target="_blank" rel="noopener">https://mosya.gov.mm
                  </a><br></br>
                    <a href="https://www.tourism.gov.mm

" target="_blank" rel="noopener">https://www.tourism.gov.mm

                    </a>
                  </td>
                </tr>
                 <tr>
                  <td>29</td>
                  <td>Ministry of Hotels & Tourism

                  </td>
                  <td><a href="https://www.tourism.gov.mm

" target="_blank" rel="noopener">https://www.tourism.gov.mm

                  </a>
                  </td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Ministry of Construction
</td>
                  <td><a href="https://www.construction.gov.mm

" target="_blank" rel="noopener">https://www.construction.gov.mm

                  </a></td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Ministry of Social Welfare, Relief & Resettlement
</td>
                  <td>
                    <a href="https://www.moswrr.gov.mm
" target="_blank" rel="noopener">https://www.moswrr.gov.mm
                    </a><br />
                    <a href="https://www.dsw.gov.mm
" target="_blank" rel="noopener">https://www.dsw.gov.mm
                    </a><br />
                    <a href="https://www.ddm.gov.mm
" target="_blank" rel="noopener">https://www.ddm.gov.mm
                    </a><br />

                  </td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>Ministry of Education

                  </td>
                  <td><a href="https://www.moe.gov.mm
" target="_blank" rel="noopener">https://www.moe.gov.mm
                  </a></td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
