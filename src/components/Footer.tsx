import { useWordPress } from "../store/WordPressContext";
import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  const { wpData } = useWordPress();

  const acf = wpData?.acf;

  return (
    <footer className="footer">
      <div className="footer-top">
        <div 
          className="newsletter-text"
          dangerouslySetInnerHTML={{ 
            __html: acf?.newsletter_heading || "SIGN UP NOW FOR<br/>EXCLUSIVE SPECIAL OFFERS" 
          }}
        />
        
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Full Name*" required />
          <input type="email" placeholder="Email Address*" required />
          <button type="submit">Subscribe Now</button>
        </form>
      </div>

      <div className="footer-middle">
        <h1 className="footer-logo">TÚTÙ</h1>
        <div className="social-links">
          <SocialMediaIcons />
        </div>
      </div>

      <div className="footer-bottom">
        <ul className="footer-links">
          <li><a href="#help">help</a></li>
          <li><a href="#privacy">privacy</a></li>
          <li><a href="#terms">Terms of use</a></li>
        </ul>
        <p className="copyright">
          Copyright {new Date().getFullYear()}. Allright Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;