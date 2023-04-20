import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer>
      <div>
        <div>Contact</div>
        <ul>
          <li>email: rs-freaks@gmail.com</li>
          <li>phone: + 34 (231) 312 432 423</li>
        </ul>
      </div>
      <div>
        <div>Links</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cars</li>
          <li>Events</li>
          <li>Form</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <div>Social Media</div>
        <ul>
          <li>FB</li>
          <li>IG</li>
          <li>YT</li>
        </ul>
      </div>
      <div>
        <div>News Letter</div>
        <div>
          <input placeholder="example@mail.com" />
          <button>Join</button>
        </div>
      </div>
      <div>©2023 Design and developed by &lt;CODE JS&gt;</div>
    </footer>
  );
};
