const ServicesSection = () => {
    return(
        <section className="services" id="services">
        <div className="section-header">
          <p className="subtitle">WHAT WE DO</p>
          <h2 className="title">Our Services</h2>
        </div>
        <div className="services-grid">
          {[1,2,3].map(i => (
            <div className="service-card" key={i}>
              <img src="/product_bottle.png" alt="Product" className="service-img" />
              <div className="service-card-info">
                <p className="card-subtitle">COCKTAIL BY TUTU</p>
                <div className="card-bottom">
                  <h3 className="card-title">Event Supply</h3>
                  <button className="arrow-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow-icon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
}

export default ServicesSection;