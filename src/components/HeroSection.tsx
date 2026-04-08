const HeroSection = () => {
    return(
        <section className="hero" id="home">
        <div className="hero-content">
          <div className="social-dots">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="hero-text-container">
            <h1 className="hero-title">The Most <em>Delicious</em><br/><em>Cocktails</em> In A Can</h1>
            <a href="#touch" className="hero-cta">Get In Touch &rarr;</a>
          </div>
        </div>
      </section>
    )
}

export default HeroSection;