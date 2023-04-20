import classNames from "classnames";
import styles from "./MenuIconButton.module.scss";

interface MenuIconButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MenuIconButton = ({ isOpen, onClick }: MenuIconButtonProps) => {
  return (
    <div
      className={classNames(styles.menuIconButton, {
        [styles.open]: isOpen,
      })}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
