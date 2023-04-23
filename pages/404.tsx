import Image from "next/image";

import { ArrowForward } from "@mui/icons-material";

import styles from "../pagesStyles/error.module.scss";

const NoPage = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.gridLayout}>
        <div>
          <span className={styles.sectionTitle}>
            Looks like you fell out of the track
          </span>
          <span>
            <p>Let’s go back to home page</p>
            <ArrowForward />
          </span>
        </div>
        <span className={styles.backgroundText}>Hmm...</span>
        <Image
          className={styles.imageStyles}
          src="/assets/images/mercedes-amg.jpg"
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default NoPage;
