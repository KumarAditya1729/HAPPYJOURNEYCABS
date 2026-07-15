/* ==========================================================================
   HAPPY JOURNEY CABS — REUSABLE UI COMPONENTS (RESPONSIVE & ACCESSIBLE)
   ========================================================================== */

function renderHeader(activePage = 'index') {
  return `
  <header class="site-header" id="siteHeader" role="banner">
    <!-- Top Bar -->
    <div class="header-top">
      <div class="container header-top-container">
        <div class="contact-pills">
          <a href="tel:+919783201155" aria-label="Call Customer Care +91 9783201155"><i class="fas fa-phone-alt"></i> +91 9783201155</a>
          <a href="https://wa.me/919783201155" target="_blank" aria-label="WhatsApp Us +91 9783201155"><i class="fab fa-whatsapp"></i> +91 9783201155</a>
          <a href="mailto:sainikaml8502@gmail.com" aria-label="Email Customer Care sainikaml8502@gmail.com"><i class="fas fa-envelope"></i> sainikaml8502@gmail.com</a>
        </div>
        <div>
          <span style="color: var(--gold); font-weight: 700;"><i class="fas fa-clock"></i> 24×7 Premium Cab & Tour Service across Rajasthan</span>
        </div>
      </div>
    </div>

    <!-- Main Navbar -->
    <div class="container nav-container">
      <a href="index.html" class="logo" aria-label="Happy Journey Cabs Home Page">
        <img src="assets/images/logo.png" alt="Happy Journey Cabs Logo" class="logo-img" width="56" height="56" loading="eager" decoding="async">
        <div class="logo-text">
          <span class="logo-title">Happy Journey Cabs</span>
          <span class="logo-tagline">Royal Rajasthan Tours</span>
        </div>
      </a>

      <nav class="nav-menu" id="navMenu" aria-label="Main Navigation" role="navigation">
        <a href="index.html" class="nav-link ${activePage === 'index' ? 'active' : ''}">Home</a>
        <a href="about.html" class="nav-link ${activePage === 'about' ? 'active' : ''}">About</a>
        <a href="fleet.html" class="nav-link ${activePage === 'fleet' ? 'active' : ''}">Fleet</a>
        <a href="services.html" class="nav-link ${activePage === 'services' ? 'active' : ''}">Services</a>
        <a href="cab-pricing.html" class="nav-link ${activePage === 'pricing' ? 'active' : ''}">Cab Pricing</a>
        <div class="nav-item-dropdown" id="navDropdownContainer">
          <a href="packages.html" class="nav-link ${['packages','rajasthan','jaipur-sightseeing','pilgrimage','uttarakhand','himachal','up','mp','delhi'].includes(activePage) ? 'active' : ''}" id="tourPackagesDropdownToggle" aria-haspopup="true" aria-expanded="false" style="display: inline-flex; align-items: center; gap: 0.3rem;">Tour Packages <i class="fas fa-chevron-down" style="font-size: 0.7rem; margin-left: 2px;"></i></a>
          <div class="nav-dropdown-menu" id="tourPackagesDropdownMenu" aria-label="Tour Packages Submenu">
            <a href="index.html#road-trips" style="color: #FF6B00; font-weight: 700;">✦ Curated Road Trips</a>
            <a href="packages.html">All Tour Packages Overview</a>
            <a href="rajasthan-packages.html">✦ Rajasthan Tour Packages</a>
            <a href="jaipur-sightseeing.html">✦ Jaipur Sightseeing Packages</a>
            <a href="pilgrimage-packages.html">✦ Temple & Pilgrimage Tours</a>
            <a href="uttarakhand-packages.html">✦ Uttarakhand Packages</a>
            <a href="himachal-packages.html">✦ Himachal Pradesh Packages</a>
            <a href="up-packages.html">✦ Uttar Pradesh Packages</a>
            <a href="mp-packages.html">✦ Madhya Pradesh Packages</a>
            <a href="delhi-packages.html">✦ Delhi Heritage Tours</a>
          </div>
        </div>
        <a href="destinations.html" class="nav-link ${activePage === 'destinations' ? 'active' : ''}">Destinations</a>
        <a href="gallery.html" class="nav-link ${activePage === 'gallery' ? 'active' : ''}">Gallery</a>
        <a href="faq.html" class="nav-link ${activePage === 'faq' ? 'active' : ''}">FAQ</a>
        <a href="blog.html" class="nav-link ${activePage === 'blog' ? 'active' : ''}">Blog</a>
        <a href="contact.html" class="btn btn-primary" style="padding: 0.6rem 1.3rem; font-size: 0.85rem;"><i class="fas fa-taxi"></i> Book Now</a>
      </nav>

      <button class="hamburger" id="hamburgerBtn" aria-label="Toggle Navigation Menu" aria-expanded="false" aria-controls="navMenu">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </header>
  `;
}

function renderFooter() {
  return `
  <footer class="site-footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <!-- Col 1: Brand -->
        <div>
          <a href="index.html" class="logo" style="margin-bottom: 1.2rem;" aria-label="Happy Journey Cabs Home Page">
            <img src="assets/images/logo.png" alt="Happy Journey Cabs Logo" class="logo-img" width="64" height="64" loading="lazy" decoding="async">
            <div class="logo-text">
              <span class="logo-title" style="color: var(--gold-light);">Happy Journey Cabs</span>
              <span class="logo-tagline" style="color: var(--sandstone);">Rajasthan Luxury Travel</span>
            </div>
          </a>
          <p style="font-size: 0.92rem; line-height: 1.7; margin-bottom: 1.5rem;">
            Happy Journey Cabs is Rajasthan’s premier luxury cab rental and holiday planning agency. Drawing inspiration from royal fort heritage and unmatched guest hospitality, we provide verified chauffeurs, transparent pricing, and spotless air-conditioned vehicles 24×7.
          </p>
          <div style="display: flex; gap: 1rem; font-size: 1.25rem;">
            <a href="https://wa.me/919783201155" target="_blank" style="color: var(--gold); min-height: 48px; min-width: 48px; display: inline-flex; align-items: center; justify-content: center;" aria-label="WhatsApp Us"><i class="fab fa-whatsapp"></i></a>
            <a href="tel:+919783201155" style="color: var(--gold); min-height: 48px; min-width: 48px; display: inline-flex; align-items: center; justify-content: center;" aria-label="Call Us"><i class="fas fa-phone"></i></a>
            <a href="mailto:sainikaml8502@gmail.com" style="color: var(--gold); min-height: 48px; min-width: 48px; display: inline-flex; align-items: center; justify-content: center;" aria-label="Email Us"><i class="fas fa-envelope"></i></a>
            <a href="https://maps.google.com" target="_blank" style="color: var(--gold); min-height: 48px; min-width: 48px; display: inline-flex; align-items: center; justify-content: center;" aria-label="Location Map"><i class="fas fa-map-marker-alt"></i></a>
          </div>
        </div>

        <!-- Col 2: Quick Links -->
        <div>
          <h4 class="footer-title">Navigation & Pricing</h4>
          <ul class="footer-links">
            <li><a href="about.html">About Our Heritage</a></li>
            <li><a href="fleet.html">Our Luxury Fleet</a></li>
            <li><a href="cab-pricing.html">Cab Pricing Tariffs</a></li>
            <li><a href="services.html">All Taxi Services</a></li>
            <li><a href="oneway.html">One Way Taxi Service</a></li>
            <li><a href="airport.html">Airport Transfers</a></li>
            <li><a href="tempo.html">Tempo Traveller Rental</a></li>
            <li><a href="gallery.html">Royal Photo Gallery</a></li>
          </ul>
        </div>

        <!-- Col 3: Tour Packages & Regions -->
        <div>
          <h4 class="footer-title">Tour Packages & Hubs</h4>
          <ul class="footer-links">
            <li><a href="index.html#road-trips" style="color: #FF6B00; font-weight: 700;">Curated Road Trips from Jaipur</a></li>
            <li><a href="rajasthan-packages.html">Rajasthan Tour Packages</a></li>
            <li><a href="jaipur-sightseeing.html">Jaipur Sightseeing Tours</a></li>
            <li><a href="pilgrimage-packages.html">Temple & Pilgrimage Tours</a></li>
            <li><a href="uttarakhand-packages.html">Uttarakhand Tour Packages</a></li>
            <li><a href="himachal-packages.html">Himachal Pradesh Packages</a></li>
            <li><a href="up-packages.html">Uttar Pradesh Packages</a></li>
            <li><a href="mp-packages.html">Madhya Pradesh Packages</a></li>
            <li><a href="delhi-packages.html">Delhi Heritage Packages</a></li>
          </ul>
        </div>

        <!-- Col 4: Contact & Office -->
        <div>
          <h4 class="footer-title">Contact Us 24×7</h4>
          <ul class="footer-contact">
            <li>
              <i class="fas fa-phone-alt"></i>
              <div>
                <strong>Call / Booking Desk:</strong><br>
                <a href="tel:+919783201155" style="color: var(--gold-light);">+91 9783201155</a>
              </div>
            </li>
            <li>
              <i class="fab fa-whatsapp"></i>
              <div>
                <strong>WhatsApp Booking:</strong><br>
                <a href="https://wa.me/919783201155" target="_blank" style="color: #25D366;">+91 9783201155</a>
              </div>
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              <div>
                <strong>Official Email:</strong><br>
                <a href="mailto:sainikaml8502@gmail.com">sainikaml8502@gmail.com</a>
              </div>
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <strong>Main Headquarters:</strong><br>
                Jaipur, Rajasthan, India<br>
                <span style="font-size: 0.8rem; color: var(--gold);">Operating across all major cities</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Happy Journey Cabs. All Rights Reserved. Designed with Royal Heritage & SEO Excellence.</p>
        <div style="margin-top: 0.5rem; display: flex; justify-content: center; gap: 1.5rem; font-size: 0.82rem; flex-wrap: wrap;">
          <a href="faq.html">Privacy Policy</a>
          <a href="faq.html">Terms & Conditions</a>
          <a href="sitemap.xml">XML Sitemap</a>
        </div>
      </div>
    </div>
  </footer>
  `;
}

function renderFloatingActions() {
  return `
  <!-- Floating WhatsApp Button -->
  <a href="https://wa.me/919783201155?text=Hello%20Happy%20Journey%20Cabs,%20I%20would%20like%20to%20inquire%20about%20a%20taxi/tour%20booking." target="_blank" class="floating-whatsapp" aria-label="Chat on WhatsApp with Happy Journey Cabs">
    <i class="fab fa-whatsapp"></i>
  </a>

  <!-- Sticky Mobile Call & WhatsApp Bar -->
  <div class="sticky-mobile-call" aria-label="Mobile Contact Bar">
    <div class="sticky-mobile-grid">
      <a href="tel:+919783201155" class="sticky-btn call-btn" aria-label="Call Now +91 9783201155">
        <i class="fas fa-phone-alt"></i> Call Now
      </a>
      <a href="https://wa.me/919783201155?text=Hello%20Happy%20Journey%20Cabs,%20I%20need%20a%20cab%20booking." target="_blank" class="sticky-btn wa-btn" aria-label="WhatsApp Booking Inquiry">
        <i class="fab fa-whatsapp"></i> WhatsApp
      </a>
    </div>
  </div>
  `;
}

function renderBookingModal() {
  return `
  <!-- Universal Booking Modal -->
  <div class="modal-overlay" id="bookingModal" role="dialog" aria-modal="true" aria-labelledby="modalVehicleTitle">
    <div class="modal-box">
      <button class="modal-close" id="closeModalBtn" aria-label="Close Booking Modal">&times;</button>
      
      <div class="text-center" style="margin-bottom: 1.5rem;">
        <span class="royal-subtitle">Instant Reservation</span>
        <h3 id="modalVehicleTitle" style="color: var(--royal-maroon); margin-top: 0.3rem;">Book Your Royal Ride</h3>
        <p style="font-size: 0.88rem; color: var(--text-muted);">No advance payment required for inquiry. Our manager confirms within 15 minutes.</p>
      </div>

      <form id="modalBookingForm" onsubmit="return handleModalSubmit(event)">
        <input type="hidden" id="modalVehicleInput" name="vehicle" value="General Inquiry">
        
        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="modalFullName">Full Name *</label>
            <input type="text" class="form-input" id="modalFullName" required placeholder="e.g. Rajesh Sharma">
          </div>
          <div class="form-group">
            <label class="form-label" for="modalMobile">Mobile / WhatsApp *</label>
            <input type="tel" class="form-input" id="modalMobile" required placeholder="+91 XXXXXXXXXX">
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="modalServiceType">Service Type</label>
            <select class="form-select" id="modalServiceType">
              <option value="Local Taxi">Local Taxi (Jaipur / City)</option>
              <option value="One Way Taxi">One Way Drop</option>
              <option value="Round Trip Outstation">Round Trip Outstation</option>
              <option value="Rajasthan Tour Package">Rajasthan Tour Package</option>
              <option value="Airport Transfer">Airport Pickup / Drop</option>
              <option value="Tempo Traveller Rental">Tempo Traveller Group Tour</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label" for="modalTravelDate">Travel Date *</label>
            <input type="date" class="form-input" id="modalTravelDate" required>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label class="form-label" for="modalPickupLocation">Pickup City / Location</label>
            <input type="text" class="form-input" id="modalPickupLocation" placeholder="e.g. Jaipur Airport / Hotel">
          </div>
          <div class="form-group">
            <label class="form-label" for="modalDestination">Destination / Tour Route</label>
            <input type="text" class="form-input" id="modalDestination" placeholder="e.g. Udaipur & Mount Abu">
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="modalSpecialNotes">Special Notes / Passengers</label>
          <input type="text" class="form-input" id="modalSpecialNotes" placeholder="e.g. 4 Adults + 3 Bags, need clean Innova Crysta">
        </div>

        <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 0.5rem; font-size: 1rem;">
          <i class="fas fa-paper-plane"></i> Submit Royal Booking Request
        </button>
      </form>
    </div>
  </div>

  <!-- Toast Notice -->
  <div class="toast-notice" id="toastNotice" role="status" aria-live="polite">
    <i class="fas fa-check-circle" style="font-size: 1.3rem;"></i>
    <span id="toastMessage">Your booking inquiry has been submitted successfully!</span>
  </div>
  `;
}
