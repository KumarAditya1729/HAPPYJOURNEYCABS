/* ==========================================================================
   HAPPY JOURNEY CABS — MAIN INTERACTIVITY SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 0. Ensure Favicon / Browser Logo is present on every page
  if (!document.querySelector('link[rel="icon"]')) {
    const faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    faviconLink.type = 'image/png';
    faviconLink.href = 'assets/images/favicon.png';
    document.head.appendChild(faviconLink);

    const shortcutLink = document.createElement('link');
    shortcutLink.rel = 'shortcut icon';
    shortcutLink.href = 'assets/images/favicon.png';
    document.head.appendChild(shortcutLink);
  }

  // 1. Inject Reusable Components if target containers exist
  const headerContainer = document.getElementById('header-container');
  if (headerContainer && typeof renderHeader === 'function') {
    const activePage = headerContainer.getAttribute('data-active') || 'index';
    headerContainer.innerHTML = renderHeader(activePage);
  }

  const footerContainer = document.getElementById('footer-container');
  if (footerContainer && typeof renderFooter === 'function') {
    footerContainer.innerHTML = renderFooter();
  }

  const floatingContainer = document.getElementById('floating-actions-container');
  if (floatingContainer && typeof renderFloatingActions === 'function') {
    floatingContainer.innerHTML = renderFloatingActions();
  }

  const modalContainer = document.getElementById('modal-container');
  if (modalContainer && typeof renderBookingModal === 'function') {
    modalContainer.innerHTML = renderBookingModal();
  }

  // 2. Hamburger Mobile Menu Toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = hamburgerBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });
  }

  // 3. Header Scroll Effect
  const siteHeader = document.getElementById('siteHeader');
  if (siteHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        siteHeader.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
        siteHeader.style.background = 'rgba(250, 249, 246, 0.96)';
      } else {
        siteHeader.style.boxShadow = 'none';
        siteHeader.style.background = 'rgba(250, 249, 246, 0.88)';
      }
    });
  }

  // 4. Modal Handlers
  const bookingModal = document.getElementById('bookingModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalVehicleTitle = document.getElementById('modalVehicleTitle');
  const modalVehicleInput = document.getElementById('modalVehicleInput');

  if (closeModalBtn && bookingModal) {
    closeModalBtn.addEventListener('click', () => {
      bookingModal.classList.remove('active');
    });
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) {
        bookingModal.classList.remove('active');
      }
    });
  }

  // Bind global click delegates for any "Book Now" / "Open Modal" buttons
  document.addEventListener('click', (e) => {
    const bookBtn = e.target.closest('.book-trigger');
    if (bookBtn && bookingModal) {
      e.preventDefault();
      const vehicleName = bookBtn.getAttribute('data-vehicle') || 'General Booking Inquiry';
      if (modalVehicleTitle) modalVehicleTitle.innerText = `Book: ${vehicleName}`;
      if (modalVehicleInput) modalVehicleInput.value = vehicleName;
      bookingModal.classList.add('active');
    }
  });

  // 5. FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others for clean UI
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });

  // 6. Quick Booking Tabs on Hero Banner
  const bookingTabs = document.querySelectorAll('.booking-tab');
  if (bookingTabs.length > 0) {
    bookingTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        bookingTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const tabType = tab.getAttribute('data-tab');
        const serviceSelect = document.getElementById('quickServiceSelect');
        if (serviceSelect && tabType) {
          serviceSelect.value = tabType;
        }
      });
    });
  }

  // 7. Fleet Category Filter
  const filterBtns = document.querySelectorAll('.fleet-filter-btn');
  const fleetCards = document.querySelectorAll('.fleet-card');
  if (filterBtns.length > 0 && fleetCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
          b.classList.remove('btn-primary');
          b.classList.add('btn-outline');
        });
        btn.classList.remove('btn-outline');
        btn.classList.add('btn-primary');

        const category = btn.getAttribute('data-category');
        fleetCards.forEach(card => {
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Set default travel date to today on quick booking inputs
  const dateInputs = document.querySelectorAll('input[type="date"]');
  const today = new Date().toISOString().split('T')[0];
  dateInputs.forEach(input => {
    if (!input.value) input.value = today;
  });
});

// Toast Notification Helper
function showToast(message) {
  const toastNotice = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');
  if (toastNotice && toastMessage) {
    toastMessage.innerText = message;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 4000);
  }
}

// Quick Hero Booking Form Submit Handler
function handleQuickBooking(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('[name="name"]')?.value || 'Guest';
  const mobile = form.querySelector('[name="mobile"]')?.value || '';
  const service = form.querySelector('[name="service"]')?.value || 'Taxi Service';
  
  showToast(`Thank you ${name}! Our Royal Dispatch Team is checking cab availability right now.`);
  
  // Also offer immediate WhatsApp redirect option or auto-send message
  setTimeout(() => {
    const waUrl = `https://wa.me/919783201155?text=Hello%20Happy%20Journey%20Cabs!%20My%20name%20is%20${encodeURIComponent(name)},%20Phone:%20${encodeURIComponent(mobile)}.%20I%20want%20to%20book:%20${encodeURIComponent(service)}.`;
    if (confirm(`Booking inquiry saved! Would you like to connect directly on WhatsApp with our dispatch desk right now?`)) {
      window.open(waUrl, '_blank');
    }
  }, 1000);

  form.reset();
  return false;
}

// Modal Booking Form Submit Handler
function handleModalSubmit(e) {
  e.preventDefault();
  const bookingModal = document.getElementById('bookingModal');
  const form = e.target;
  const vehicle = document.getElementById('modalVehicleInput')?.value || 'Cab';
  
  showToast(`Royal reservation request for "${vehicle}" submitted! We will call you within 15 minutes.`);
  if (bookingModal) bookingModal.classList.remove('active');
  form.reset();
  return false;
}
