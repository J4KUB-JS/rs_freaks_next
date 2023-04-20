import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "./Header.module.scss";

import { MenuIconButton } from "./components/MenuIconButton/MenuIconButton";
import classNames from "classnames";

interface HeaderProps {
  subPages: string[];
}

export const Header = ({ subPages }: HeaderProps) => {
  const [selectedTab, setSelectedTab] = useState<string>("home");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSlideIn, setIsSlideInn] = useState<boolean>(true);

  const changeTabHandler = (tab: string) => {
    setSelectedTab(tab);
    toggleMenuHandler();
  };

  const toggleMenuHandler = () => {
    setTimeout(() => {
      setIsMenuOpen((prevState) => !prevState);
    }, 300);
    setIsSlideInn((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.headerWrapper}>
        <Link href={`/`} onClick={() => changeTabHandler("home")}>
          <Image
            src={"/assets/icons/logo.svg"}
            alt={"logo of rs freaks club"}
            width={60}
            height={50}
          />
        </Link>
        <div className={styles.listItemWrapper}>
          {subPages.map((subPage) => (
            <li key={subPage} onClick={() => changeTabHandler(subPage)}>
              <Link
                className={styles.listElement}
                href={subPage !== "home" ? `/${subPage}` : "/"}
              >
                {subPage}
                {selectedTab === subPage ? (
                  <div className={styles.listElementUnderline}></div>
                ) : null}
              </Link>
            </li>
          ))}
        </div>
        <Link
          className={styles.actionButtonLinkWrapper}
          href={`/register`}
          onClick={() => changeTabHandler("")}
        >
          <button className={styles.actionButton}>Join Club!</button>
        </Link>
        <MenuIconButton isOpen={isMenuOpen} onClick={toggleMenuHandler} />
      </div>
      {isMenuOpen && (
        <div
          className={classNames(styles.responsiveMenuWrapper, {
            [styles.menuSlideInAnimation]: !isSlideIn,
            [styles.menuSlideOutAnimation]: isSlideIn,
          })}
        >
          {subPages.map((subPage) => (
            <li key={subPage} onClick={() => changeTabHandler(subPage)}>
              <Link
                className={styles.listElement}
                href={subPage !== "home" ? `/${subPage}` : "/"}
              >
                {subPage}
                {selectedTab === subPage ? (
                  <div className={styles.listElementUnderline}></div>
                ) : null}
              </Link>
            </li>
          ))}
        </div>
      )}
    </>
  );
};
