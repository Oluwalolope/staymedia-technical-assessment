import { useWordPress } from '../store/WordPressContext';

const ServicesSection = () => {
  const { wpData, loading, error } = useWordPress();

  if (loading) return <section className="services" id="services"><div>Loading...</div></section>;
  if (error || !wpData) return null;

  const acf = wpData.acf;
  const servicesData = [
    {
      id: 1,
      tag: acf.service_1_tag,
      title: acf.service_1_title,
      image: acf.service_1_image
    },
    {
      id: 2,
      tag: acf.service_2_tag,
      title: acf.service_2_title,
      image: acf.service_2_image
    },
    {
      id: 3,
      tag: acf.service_3_tag,
      title: acf.service_3_title,
      image: acf.service_3_image
    }
  ];

  return(
    <section className="services" id="services">
      
      <div className="section-header">
        <p className="subtitle">{acf.services_subheading}</p>
        <h2 className="title">{acf.services_heading}</h2>
      </div>
      
      <div className="services-grid">
        {servicesData.map(service => (
          <div className="service-card" key={service.id}>
            
            <img src={service.image} alt={service.title} className="service-img" />
            
            <div className="service-card-info">
              <p className="card-subtitle">{service.tag}</p>
              
              <div className="card-bottom">
                <h3 className="card-title">{service.title}</h3>
                
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