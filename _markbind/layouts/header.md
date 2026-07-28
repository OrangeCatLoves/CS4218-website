<div class="skip-link-container">
  <a class="skip-link" href="#main-content">Skip to main content</a>
</div>

<header sticky>
  <navbar type="dark" default-highlight-on="sibling-or-child">
    <a slot="brand" href="{{ baseUrl }}/index.html" title="{{ moduleCode }} overview" class="navbar-brand course-brand"><span class="brand-mark" aria-hidden="true">{{ brandMark }}</span><span class="brand-copy"><strong>{{ moduleCode }}</strong><small>{{ moduleName }}</small></span></a>
    <li slot="right">
      <form class="navbar-form course-search" role="search" aria-label="Site search">
        <searchbar :data="searchData" placeholder="Search course materials" :on-hit="searchCallback" menu-align-right></searchbar>
      </form>
    </li>
    <div slot="lower-navbar" class="nav-menu-container">
      <site-nav-button />
      <page-nav-button />
    </div>
  </navbar>
</header>
