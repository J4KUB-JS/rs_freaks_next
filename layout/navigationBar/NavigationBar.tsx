import { ListElement } from "./ListElement";
import { CTAButton } from "./CTAButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { changePage, openCloseMenu } from "../../redux/mainSlice";
import Image from "next/image";
import Link from "next/link";
import { Menu, Close } from "@mui/icons-material";

export const NavigationBar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: RootState) => state.main.isMenuOpen);

  const clickHandler = () => {
    dispatch(changePage("Home"));
  };

  const menuButtonChandler = () => {
    console.log("open close");
    dispatch(openCloseMenu());
  };

  return (
    <>
      <div className="navBar">
        <Link href="/">
          <Image
            className="brand-logo"
            onClick={clickHandler}
            src={"/assets/icons/rs-logo.png"}
            alt="RS freaks logo in square"
            width={50}
            height={50}
          />
        </Link>
        <div className="navBarActionsDesktop">
          <ul>
            <ListElement name="Home" />
            <ListElement name="About" />
            <ListElement name="Events" />
            <ListElement name="Forum" />
            <ListElement name="Contact" />
          </ul>
          <CTAButton text="Join Club" />
        </div>

        <Menu
          className="menuIcon"
          sx={{ fontSize: 40 }}
          onClick={menuButtonChandler}
        />
      </div>
      {isMenuOpen ? (
        <div className="navBarActionsMobile">
          <Close sx={{ fontSize: 40 }} onClick={menuButtonChandler} />
          <ul>
            <ListElement name="Home" closeMenu={menuButtonChandler} />
            <ListElement name="About" closeMenu={menuButtonChandler} />
            <ListElement name="Events" closeMenu={menuButtonChandler} />
            <ListElement name="Forum" closeMenu={menuButtonChandler} />
            <ListElement name="Contact" closeMenu={menuButtonChandler} />
            <ListElement name="Join Club" closeMenu={menuButtonChandler} />
          </ul>
        </div>
      ) : null}
    </>
  );
};
