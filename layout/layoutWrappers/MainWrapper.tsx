import { Footer } from "../footer/Footer";
import { Header } from "../Header/Header";

interface MainWrapperInterface {
  children?: React.ReactNode;
}
const MainWrapper: React.FC<MainWrapperInterface> = ({ children }) => {
  return (
    <>
      <Header
        subPages={[
          "home",
          "about",
          "cars",
          "events",
          "forum",
          "blog",
          "contact",
        ]}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainWrapper;
