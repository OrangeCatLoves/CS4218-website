(() => {
  const copyStatusTimers = new WeakMap();

  const copyTextWithFallback = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '1px';
    textArea.style.height = '1px';
    textArea.style.opacity = '0';
    textArea.style.pointerEvents = 'none';
    document.body.append(textArea);
    textArea.select();
    textArea.setSelectionRange(0, text.length);

    let didCopy = false;
    try {
      didCopy = document.execCommand('copy');
    } finally {
      textArea.remove();
    }

    if (!didCopy) {
      throw new Error('The browser did not allow the passcode to be copied.');
    }
  };

  const copyText = async (text) => {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(text);
        return;
      } catch {
        // Some browsers expose the Clipboard API but block it outside HTTPS.
      }
    }

    copyTextWithFallback(text);
  };

  const resetCopyFeedback = (button, status) => {
    button.classList.remove('is-copied', 'has-copy-error');
    button.setAttribute('aria-label', button.dataset.defaultLabel);
    status.textContent = '';
    status.removeAttribute('data-state');
    copyStatusTimers.delete(button);
  };

  const nextRender = (callback) => {
    window.requestAnimationFrame(() => window.requestAnimationFrame(callback));
  };

  const updateMobileTrigger = (trigger) => {
    const button = trigger.querySelector(
      '.toggle-site-nav-button, .toggle-page-nav-button',
    );
    const menu = trigger.nextElementSibling;

    if (!button || !menu?.classList.contains('nav-menu')) {
      return;
    }

    const isCourseNavigation = button.classList.contains('toggle-site-nav-button');
    const navigationName = isCourseNavigation ? 'course navigation' : 'page navigation';
    const isOpen = trigger.classList.contains('nav-menu-close-icon');

    if (!menu.id) {
      menu.id = isCourseNavigation ? 'mobile-course-navigation' : 'mobile-page-navigation';
    }

    trigger.setAttribute('role', 'button');
    trigger.setAttribute('tabindex', '0');
    trigger.setAttribute('aria-controls', menu.id);
    trigger.setAttribute('aria-expanded', String(isOpen));
    trigger.setAttribute('aria-label', `${isOpen ? 'Close' : 'Open'} ${navigationName}`);

    if (trigger.dataset.keyboardEnhanced === 'true') {
      return;
    }

    trigger.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        button.click();
        nextRender(() => {
          updateMobileTrigger(trigger);
          if (trigger.getAttribute('aria-expanded') === 'true') {
            menu.querySelector('a, button, [tabindex="0"]')?.focus();
          }
        });
      }
    });

    button.addEventListener('click', () => {
      nextRender(() => updateMobileTrigger(trigger));
    });

    trigger.dataset.keyboardEnhanced = 'true';
  };

  const enhanceGeneratedNavigation = () => {
    document.documentElement.lang = 'en-SG';

    const overviewLink = document.querySelector(
      'header [data-course-section="overview"]',
    );
    if (overviewLink) {
      const overviewRoot = new URL(overviewLink.href, window.location.origin).pathname;
      const overviewDirectory = overviewRoot.replace(/\/index\.html$/u, '/overview/');
      const isOverviewPage = window.location.pathname === overviewRoot
        || window.location.pathname.startsWith(overviewDirectory);

      if (isOverviewPage) {
        overviewLink.parentElement?.classList.add('current');
        overviewLink.setAttribute('aria-current', 'page');
      }
    }

    document.querySelectorAll('.course-search input').forEach((input) => {
      input.setAttribute('aria-label', 'Search course materials');
    });

    document
      .querySelectorAll(
        'header .navbar-nav > li.current > a.nav-link, '
          + '#site-nav .current > a, #site-nav a.current',
      )
      .forEach((link) => {
        link.setAttribute('aria-current', 'page');
      });

    const primaryNavigation = document.querySelector('header nav.navbar');
    if (primaryNavigation) {
      primaryNavigation.setAttribute('aria-label', 'Primary');
    }

    document.querySelectorAll('.breadcrumb-wrap').forEach((wrapper) => {
      if (!wrapper.querySelector('a')) {
        wrapper.hidden = true;
      }
    });

    document.querySelectorAll('#page-nav .page-nav-title').forEach((title) => {
      title.removeAttribute('href');
      title.setAttribute('role', 'heading');
      title.setAttribute('aria-level', '2');
    });

    document.querySelectorAll('#page-nav nav').forEach((navigation) => {
      navigation.setAttribute('role', 'none');
    });

    document.querySelectorAll('a.fa-anchor').forEach((anchor) => {
      const heading = anchor.closest('h1, h2, h3, h4, h5, h6');
      const headingText = heading?.textContent.trim().replace(/\s+/gu, ' ');
      anchor.setAttribute(
        'aria-label',
        headingText ? `Link to section: ${headingText}` : 'Link to this section',
      );
    });

    document.querySelectorAll('#site-nav .site-nav-default-list-item').forEach((toggle, index) => {
      const toggleIcon = toggle.querySelector(':scope > .site-nav-dropdown-btn-container');
      const controlledList = toggle.nextElementSibling;

      if (!toggleIcon || !controlledList?.classList.contains('site-nav-dropdown-container')) {
        return;
      }

      if (!controlledList.id) {
        controlledList.id = `course-nav-section-${index + 1}`;
      }

      const updateExpandedState = () => {
        const isExpanded = controlledList.classList.contains(
          'site-nav-dropdown-container-open',
        );
        toggle.setAttribute('aria-expanded', String(isExpanded));
        controlledList.inert = !isExpanded;
        controlledList.setAttribute('aria-hidden', String(!isExpanded));
      };

      toggle.setAttribute('role', 'button');
      toggle.setAttribute('tabindex', '0');
      toggle.setAttribute('aria-controls', controlledList.id);
      updateExpandedState();

      if (toggle.dataset.keyboardEnhanced !== 'true') {
        toggle.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggle.click();
            window.requestAnimationFrame(updateExpandedState);
          }
        });
        toggle.addEventListener('click', () => {
          window.requestAnimationFrame(updateExpandedState);
        });
        toggle.dataset.keyboardEnhanced = 'true';
      }
    });

    document
      .querySelectorAll('.toggle-site-nav-button, .toggle-page-nav-button')
      .forEach((button) => updateMobileTrigger(button.parentElement));
  };

  enhanceGeneratedNavigation();
  window.requestAnimationFrame(enhanceGeneratedNavigation);

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') {
      return;
    }

    document
      .querySelectorAll('.nav-menu-container > div > span.nav-menu-close-icon')
      .forEach((trigger) => {
        const button = trigger.querySelector(
          '.toggle-site-nav-button, .toggle-page-nav-button',
        );
        button?.click();
        nextRender(() => {
          updateMobileTrigger(trigger);
          trigger.focus();
        });
      });
  });

  window.addEventListener('resize', enhanceGeneratedNavigation);
  window.setTimeout(enhanceGeneratedNavigation, 100);

  document.addEventListener('click', async (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const button = target?.closest('.copy-passcode-button');

    if (!button) {
      return;
    }

    const passcode = button
      .closest('.recording-passcode')
      ?.querySelector('.recording-passcode-value')
      ?.textContent;
    const status = button.parentElement?.querySelector('.copy-passcode-status');

    if (!passcode || !status) {
      return;
    }

    if (!button.dataset.defaultLabel) {
      button.dataset.defaultLabel = button.getAttribute('aria-label') || 'Copy passcode';
    }

    const existingTimer = copyStatusTimers.get(button);
    if (existingTimer) {
      window.clearTimeout(existingTimer);
    }

    button.disabled = true;
    button.classList.remove('is-copied', 'has-copy-error');
    status.textContent = '';
    status.removeAttribute('data-state');

    try {
      await copyText(passcode);
      button.classList.add('is-copied');
      button.setAttribute('aria-label', 'Passcode copied');
      status.textContent = 'Copied!';
      status.dataset.state = 'success';
    } catch {
      button.classList.add('has-copy-error');
      button.setAttribute('aria-label', 'Copy failed');
      status.textContent = 'Copy failed — select it manually';
      status.dataset.state = 'error';
    } finally {
      button.disabled = false;
      const timer = window.setTimeout(
        () => resetCopyFeedback(button, status),
        2500,
      );
      copyStatusTimers.set(button, timer);
    }
  });
})();
