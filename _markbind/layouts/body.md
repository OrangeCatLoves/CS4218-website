<div id="course-shell">
  <nav id="site-nav" class="fixed-header-padding" aria-label="Course navigation">
    <div class="nav-heading">
      <span class="nav-heading-label">Module guide</span>
      <strong>{{ moduleCode }}</strong>
    </div>
    <div class="nav-component">
      <include src="site-nav.md" />
    </div>
  </nav>

  <main id="main-content" class="fixed-header-padding" tabindex="-1">
    <div class="breadcrumb-wrap">
      <breadcrumb />
    </div>
    <article id="course-content">
      {{ content }}
    </article>
  </main>

  <nav id="page-nav" class="fixed-header-padding" aria-label="On this page">
    <div class="nav-component">
      <page-nav />
    </div>
  </nav>

  <scroll-top-button
    icon=":fas-arrow-up:"
    icon-size="1x"
    bottom="2%"
    right="2%">
  </scroll-top-button>
</div>
