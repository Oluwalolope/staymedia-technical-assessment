import { useState, useEffect, type TouchEvent, } from 'react';
import TESTIMONIALS from '../lib/testimonials';

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchEndX, setTouchEndX] = useState<number | null>(null);

    // Minimum swipe distance to trigger navigation
    const minSwipeDistance = 50;

    useEffect(() => {
      const timer = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1));
      }, 5000);
      
      return () => clearTimeout(timer);
    }, [currentIndex]);

    const nextTestimonial = () => {
      setCurrentIndex((prevIndex) => (prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1));
    };

    const prevTestimonial = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1));
    };

    const onTouchStart = (e: TouchEvent) => {
      setTouchEndX(null); // Reset end calculation
      setTouchStartX(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: TouchEvent) => {
      setTouchEndX(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
      if (!touchStartX || !touchEndX) return;
      const distance = touchStartX - touchEndX;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;

      if (isLeftSwipe) {
        nextTestimonial();
      } else if (isRightSwipe) {
        prevTestimonial();
      }
    };

    const currentTestimonial = TESTIMONIALS[currentIndex];

    return(
      <section className="testimonials" id="testimonials">
        <h2 className="title">3,009 happy customers and counting...</h2>
        <p className="subtitle">Top best reviews of Cocktail by tutu</p>
        
        <div 
          className="testimonial-carousel"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button className="nav-btn" onClick={prevTestimonial} aria-label="Previous Testimonial">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
          </button>
          
          <div className="testimonial-content">
            <div key={currentTestimonial.id} className="animate-fade-in">
              <div className="avatar">
                <img src={currentTestimonial.avatar} alt="Customer avatar" />
              </div>
              <h3 className="testimonial-title">{currentTestimonial.title}</h3>
              <p className="testimonial-text">
                {currentTestimonial.text}
              </p>
              <div className="customer-info">
                <p className="customer-name">{currentTestimonial.name}</p>
                <div className="stars">
                  {Array.from({ length: currentTestimonial.stars }).map((_, i) => (
                    <span key={i}>&#9733; </span>
                  ))}
                </div>
                <p className="customer-role">{currentTestimonial.role}</p>
              </div>
            </div>
          </div>

          <button className="nav-btn" onClick={nextTestimonial} aria-label="Next Testimonial">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="arrow-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
        <div className="carousel-dots">
            {TESTIMONIALS.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                role="button"
                tabIndex={0}
                aria-label={`Go to slide ${index + 1}`}
              ></span>
            ))}
        </div>
      </section>
    )
}

export default TestimonialSection;