import styles from "@/components/CompanyProfile/CompanyProfile.module.css";

const profileData = [
  { label: "会社名", value: "株式会社SEA" },
  { label: "所在地", value: "東京都港区海風町1-2-3" },
  { label: "設立", value: "2024年4月1日" },
  { label: "資本金", value: "1,000万円" },
  { label: "代表取締役", value: "石室屋 拓" },
  {
    label: "事業内容",
    value: "Web開発 / ITコンサルティング / クラウド導入支援",
  },
];

const CompanyProfile = () => {
  return (
    <section className={styles.profileSection}>
      <h2 className={styles.heading}>会社概要</h2>
      <table className={styles.table}>
        <tbody>
          {profileData.map((item, index) => (
            <tr key={index} className={styles.tableRow}>
              <th className={styles.tableHeader}>{item.label}</th>
              <td className={styles.tableCell}>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CompanyProfile;
