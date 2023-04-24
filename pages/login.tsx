import Link from "next/link";

import { Google } from "@mui/icons-material";

import styles from "../pagesStyles/login.module.scss";

import { CustomImage } from "@/components/ImageWrapper/CustomImage";

const Login = () => {
  return (
    <div className={styles.gridLayout}>
      <div className={styles.formWrapper}>
        <div className={styles.heading}>
          <h2>Welcome Back</h2>
          <p>What are you going to do today?</p>
        </div>
        <div className={styles.inputGroupWrapper}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Email</label>
            <input className={styles.input} placeholder="example@mail.com" />
          </div>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>Password</label>
            <input
              className={styles.input}
              placeholder="*************"
              type="password"
            />
            <p>Forget password?</p>
          </div>
        </div>
        <div className={styles.buttonGroupWrapper}>
          <button>Sign In</button>
          <button>
            <Google className={styles.icon} />
            Sign In with Google
          </button>
        </div>
      </div>
      <CustomImage
        imgSrc={"/assets/images/classic-bmw.jpg"}
        altText="ds"
        wrapperClassName={styles.imageWrapperStyles}
        imgClassName={styles.imgStyles}
      />
    </div>
  );
};

export default Login;
