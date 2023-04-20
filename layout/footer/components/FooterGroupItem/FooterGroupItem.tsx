import classNames from "classnames";
import styles from "./FooterGroupItem.module.scss";
import React from "react";
interface FooterGroupItemProps {
  groupItems?: string[];
  groupTitle: string;
  groupItemClass?: string;
  children?: React.ReactNode;
}
export const FooterGroupItem = ({
  groupItems,
  groupTitle,
  groupItemClass = "",
  children,
}: FooterGroupItemProps) => {
  return (
    <div className={styles.groupWrapper}>
      <div className={styles.groupTitle}>{groupTitle}</div>
      {!children && (
        <ul
          className={classNames(styles.groupItems, {
            [groupItemClass]: groupItemClass,
          })}
        >
          {groupItems?.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      )}
      {children}
    </div>
  );
};
