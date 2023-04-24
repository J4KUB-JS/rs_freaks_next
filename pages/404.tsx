import Image from "next/image";
import Link from "next/link";

import { ArrowForward } from "@mui/icons-material";

import styles from "../pagesStyles/error.module.scss";
import { CustomImage } from "@/components/ImageWrapper/CustomImage";

//TODO: make images exact ratio we need

const NoPage = () => {
  return (
    <div className={styles.gridLayout}>
      <div className={styles.textWrapper}>
        <span className={styles.sectionTitle}>
          Looks like you fell out of the track
        </span>
        <Link href={`/`} className={styles.subText}>
          <p>Let’s go back to home page</p>
          <ArrowForward className={styles.icon} />
        </Link>
      </div>
      <span className={styles.backgroundText}>Hmm...</span>
      <CustomImage
        imgSrc={"/assets/images/mercedes-amg.jpg"}
        altText="ds"
        wrapperClassName={styles.imageWrapperStyles}
        imgClassName={styles.imgStyles}
      />
    </div>
  );
};

export default NoPage;
