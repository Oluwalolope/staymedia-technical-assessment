import { useState } from "react"

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const NAV_LINKS: string[] = ['home', 'services', 'testimonials', 'blogs'];

    return(
        <nav className="navbar">
        <div className="nav-logo">TÚTÙ</div>
        
        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation"
        >
          {
          isMobileMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"     strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
          : 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
          </svg>
          }

        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {NAV_LINKS.map((nav_link, i) => 
            <li key={i}><a href={`#${nav_link}`} onClick={() => setIsMobileMenuOpen(false)}>{nav_link}</a></li>
          )}
        </ul>
      </nav>
    )
}

export default NavBar;