import Image from "next/image";
import Link from "next/link";

import { ArrowForward } from "@mui/icons-material";

import styles from "../pagesStyles/error.module.scss";
import { ImageHorizontal } from "@/components/ImageWrapper/ImageHorizontal";

//TODO: make images exact ratio we need
//add wrapper for sub text and arrow

const NoPage = () => {
  return (
    <div className={styles.sectionWrapper}>
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
        <ImageHorizontal
          imgSrc={"/assets/images/mercedes-amg.jpg"}
          altText="ds"
          wrapperClassName={styles.imageWrapperStyles}
          imgClassName={styles.imgStyles}
        />
      </div>
    </div>
  );
};

export default NoPage;
