import styles from "./Footer.module.scss";
import { FooterGroupItem } from "./components/FooterGroupItem/FooterGroupItem";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGroupsWrapper}>
        <FooterGroupItem
          groupItems={["Email: rs-freaks@mail.com", "Phone: +48 456 293 678"]}
          groupTitle="Contact"
          groupItemClass={styles.contactWrapper}
        />
        <FooterGroupItem
          groupItems={[
            "Home",
            "About",
            "Cars",
            "Events",
            "Form",
            "Blog",
            "Contact",
          ]}
          groupTitle="Links"
          groupItemClass={styles.linksGrid}
        />
        <FooterGroupItem
          groupItems={["FB", "IG", "YT"]}
          groupTitle="Social Media"
          groupItemClass={styles.linksFlex}
        />
        <FooterGroupItem groupTitle="News Letter">
          <div className={styles.newsLetterWrapper}>
            <input placeholder="example@mail.com" />
            <button>Join</button>
          </div>
        </FooterGroupItem>
      </div>
      <div className={styles.copyRight}>
        ©2023 Design and Developed by &lt;CODE JS&gt;
      </div>
    </footer>
  );
};
