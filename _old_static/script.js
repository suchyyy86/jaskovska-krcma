/* ============================================
   JAŠKOVSKÁ KRČMA — Script
   Smooth scroll, header, menu tabs, gallery, animations
   ============================================ */

(function () {
  'use strict';

  // --- Respect reduced motion ---
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ===== HEADER SCROLL EFFECT =====
  const header = document.getElementById('header');
  let lastScroll = 0;

  function handleHeaderScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 80) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // ===== MOBILE MENU =====
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileNavLinks = mobileNav.querySelectorAll('a');

  function toggleMobileNav() {
    const isOpen = mobileNav.classList.contains('mobile-nav--open');
    mobileNav.classList.toggle('mobile-nav--open');
    hamburger.classList.toggle('hamburger--active');
    hamburger.setAttribute('aria-expanded', !isOpen);
    mobileNav.setAttribute('aria-hidden', isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }

  function closeMobileNav() {
    mobileNav.classList.remove('mobile-nav--open');
    hamburger.classList.remove('hamburger--active');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', toggleMobileNav);

  mobileNavLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeMobileNav();
    });
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('mobile-nav--open')) {
      closeMobileNav();
      hamburger.focus();
    }
  });

  // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerHeight = header.offsetHeight;
        var targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({
          top: targetPos,
          behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
      }
    });
  });

  // ===== MENU TABS =====
  var menuTabs = document.querySelectorAll('.menu__tab');
  var menuCategories = document.querySelectorAll('.menu__category');

  menuTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var targetTab = this.getAttribute('data-tab');

      // Deactivate all
      menuTabs.forEach(function (t) {
        t.classList.remove('menu__tab--active');
        t.setAttribute('aria-selected', 'false');
      });
      menuCategories.forEach(function (c) {
        c.classList.remove('menu__category--active');
      });

      // Activate clicked
      this.classList.add('menu__tab--active');
      this.setAttribute('aria-selected', 'true');
      var targetPanel = document.getElementById('tab-' + targetTab);
      if (targetPanel) {
        targetPanel.classList.add('menu__category--active');
      }
    });
  });

  // ===== INTERSECTION OBSERVER FOR FADE-IN =====
  if (!prefersReducedMotion) {
    var fadeElements = document.querySelectorAll('.fade-in');
    var observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    };

    var fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeElements.forEach(function (el) {
      fadeObserver.observe(el);
    });
  } else {
    // If reduced motion, show everything immediately
    document.querySelectorAll('.fade-in').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  // ===== GALLERY DRAG SCROLL =====
  var galleryTrack = document.getElementById('gallery-track');
  if (galleryTrack) {
    var isDown = false;
    var startX;
    var scrollLeft;

    galleryTrack.addEventListener('mousedown', function (e) {
      isDown = true;
      galleryTrack.style.cursor = 'grabbing';
      startX = e.pageX - galleryTrack.offsetLeft;
      scrollLeft = galleryTrack.scrollLeft;
    });

    galleryTrack.addEventListener('mouseleave', function () {
      isDown = false;
      galleryTrack.style.cursor = 'grab';
    });

    galleryTrack.addEventListener('mouseup', function () {
      isDown = false;
      galleryTrack.style.cursor = 'grab';
    });

    galleryTrack.addEventListener('mousemove', function (e) {
      if (!isDown) return;
      e.preventDefault();
      var x = e.pageX - galleryTrack.offsetLeft;
      var walk = (x - startX) * 1.5;
      galleryTrack.scrollLeft = scrollLeft - walk;
    });
  }

  // ===== ACTIVE NAV LINK HIGHLIGHT ON SCROLL =====
  var navLinks = document.querySelectorAll('.header__nav-link');
  var sections = document.querySelectorAll('section[id]');

  function highlightNavOnScroll() {
    var scrollY = window.scrollY + 200;

    sections.forEach(function (section) {
      var sectionTop = section.offsetTop;
      var sectionHeight = section.offsetHeight;
      var sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(function (link) {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + sectionId) {
            link.style.color = 'var(--color-accent)';
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

})();
