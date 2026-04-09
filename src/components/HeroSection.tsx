import { useWordPress } from '../store/WordPressContext';

const HeroSection = () => {
  const { wpData, loading, error } = useWordPress();

  // --- SKELETON LOADING STATE ---
  if (loading) {
    return (
      <section className="hero skeleton-hero" id="home">
        <div className="hero-content">
          <div className="social-dots">
            <span className="dot skeleton-circle"></span>
            <span className="dot skeleton-circle"></span>
            <span className="dot skeleton-circle"></span>
          </div>
          <div className="hero-text-container">
            {/* These divs represent the ghost lines of your title and button */}
            <div className="skeleton-bar title-line"></div>
            <div className="skeleton-bar title-line short"></div>
            <div className="skeleton-bar btn-line"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !wpData) return null;

  const acf = wpData.acf;

  return (
    <section 
      className="hero" 
      id="home"
      style={{ 
        backgroundImage: `url(${acf.hero_background_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="hero-content">
        <div className="social-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        
        <div className="hero-text-container">
          <h1 
            className="hero-title"
            dangerouslySetInnerHTML={{ __html: acf.hero_headline }}
          />
          <a href={acf.hero_button_link || "#touch"} className="hero-cta">
            {acf.hero_button_text} &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;