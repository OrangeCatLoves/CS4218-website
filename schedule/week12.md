<frontmatter>
  title: "Week 12"
  pageNav: 2
</frontmatter>

<header class="week-header">
  <p class="eyebrow">Week 12 · 2 Nov - 6 Nov</p>
  <h1>Week 12: <span class="placeholder-text">Agile Testing</span></h1>
  <div class="meta-row">
    <span class="meta-chip">Agile Testing</span>
    <span class="meta-chip">Testing Quadrants</span>
    <span class="meta-chip">TDD</span>
    <span class="meta-chip">ATDD</span>
    <span class="meta-chip">BDD</span>
  </div>
</header>

<div class="essential-question">
  <strong>Guiding question:</strong>
  <span class="placeholder-text">If testing happens in every iteration rather than at the end, who writes the tests — and when?</span>
</div>

## Week Overview

Everything so far — unit, integration and system testing, code coverage, control flow testing, test generation techniques, combinatorial testing, performance testing, security testing, test metrics and testing AI software — has assumed tests exist. **Agile testing** asks when they are written and by whom.

The difference from traditional testing is a matter of timing:

- **Traditional testing:** testing is only done just before release.
- **Agile testing:** testing is done during each iteration.

That shift means testing is no longer a phase handed to a separate team at the end; it is a continuous activity shared by developers, testers and business stakeholders throughout the sprint.

## 1. The Agile Testing Quadrants

The quadrants classify tests along two axes: whether a test is **business-facing or technology-facing**, and whether it **supports the team** (guiding development) or **critiques the product** (evaluating what was built).

<div class="table-scroll" role="region" aria-label="The four Agile Testing Quadrants" tabindex="0">
  <table class="wide-data">
    <thead>
      <tr>
        <th scope="col">Quadrant</th>
        <th scope="col">Purpose</th>
        <th scope="col">Example tests</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Q1 — Technology-facing, supports the team</th>
        <td>Confirm the code itself is correct as it is written.</td>
        <td>Unit tests, component tests.</td>
      </tr>
      <tr>
        <th scope="row">Q2 — Business-facing, supports the team</th>
        <td>Ensure the software works from an end-user perspective.</td>
        <td>Automated functional tests and prototypes: the full flow from selecting a product to completing a purchase, product search, user registration and login.</td>
      </tr>
      <tr>
        <th scope="row">Q3 — Business-facing, critiques the product</th>
        <td>Identify defects not covered by previous tests and ensure the software is user-friendly.</td>
        <td>Exploratory and usability testing: responsiveness across devices and browsers, the user experience of the checkout process.</td>
      </tr>
      <tr>
        <th scope="row">Q4 — Technology-facing, critiques the product</th>
        <td>Ensure the product meets technical, performance and security standards.</td>
        <td>Load testing for large numbers of users; security testing for vulnerabilities like SQL injection or cross-site scripting.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="callout callout-info">
  <div class="callout-title">Reading a scenario</div>
  <p>A single project usually touches several quadrants. A developer who builds a <strong>high-fidelity prototype</strong> for feedback is in <strong>Q2</strong>; who writes <strong>unit tests</strong> each sprint is in <strong>Q1</strong>; who later sits with real office workers to <strong>evaluate the experience</strong> is in <strong>Q3</strong>.</p>
</div>

## 2. Testing Practices: TDD, ATDD and BDD

Three agile practices decide what gets written before the code does. They are easiest to tell apart by asking **who is in the room** and **what language the test is written in**.

- **Test Driven Development (TDD)** — the developer writes a failing test first, then the code to pass it. Only developers are involved, and the business perspective is not represented. *Example: write a test asserting the fare calculation returns $12.50 for a 5-mile non-peak trip, then implement it.*
- **Acceptance Test Driven Development (ATDD)** — the product owner, developers and testers collaborate to define acceptance criteria **before implementation begins**. *Example: agreeing that "a user must receive driver details within 30 seconds of requesting a ride."*
- **Behaviour Driven Development (BDD)** — describes system behaviour in structured natural language that technical and non-technical stakeholders can both read, using the **Given, When, Then** framework from the user's perspective.

Neither of these is the same as ordinary **component-level testing**, where a tester writes automated tests for one part of the system *after* it is built — no test-first discipline, no stakeholder collaboration.

## 3. BDD in Practice

BDD starts from a user story and turns it into scenarios:

> "As a user, I want to search for books by their titles, so that I can quickly find the books I'm interested in."

<div class="table-scroll" role="region" aria-label="Given-When-Then scenarios for a book search feature" tabindex="0">
  <table class="wide-data">
    <thead>
      <tr>
        <th scope="col">Scenario</th>
        <th scope="col">Given</th>
        <th scope="col">When</th>
        <th scope="col">Then</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Search for a book that exists in the store</td>
        <td>the book store has the books "Harry Potter", "The Great Gatsby", "To Kill a Mockingbird"</td>
        <td>I search for "Harry Potter"</td>
        <td>I should see the search result "Harry Potter"</td>
      </tr>
      <tr>
        <td>Search for a book that doesn't exist in the store</td>
        <td>the book store has the books "Harry Potter", "The Great Gatsby", "To Kill a Mockingbird"</td>
        <td>I search for "Lord of the Rings"</td>
        <td>I should see the message "No books found for 'Lord of the Rings'"</td>
      </tr>
    </tbody>
  </table>
</div>

Tools like **Cucumber** or **SpecFlow** turn these scenarios into automated tests, written in a plain language called **Gherkin** so non-technical stakeholders can read them too. The scenarios fail initially, because the functionality does not exist yet; the team then writes the code that makes them pass.

<div class="callout callout-info">
  <div class="callout-title">Takeaway</div>
  <p>BDD focuses on understanding the desired behaviour <strong>from the user's perspective</strong>. Starting with clear user stories and acceptance criteria ensures the feature aligns with user expectations, and fosters better communication between developers, testers and stakeholders — resulting in more user-centric software.</p>
</div>
