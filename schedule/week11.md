<frontmatter>
  title: "Week 11"
  pageNav: 2
</frontmatter>

<header class="week-header">
  <p class="eyebrow">Week 11 · 26 Oct - 30 Oct</p>
  <h1>Week 11: <span class="placeholder-text">Test Metrics</span></h1>
  <div class="meta-row">
    <span class="meta-chip">Test Metrics</span>
    <span class="meta-chip">Code Review Metrics</span>
    <span class="meta-chip">Product Quality Metrics</span>
    <span class="meta-chip">Visualising Metrics</span>
  </div>
</header>

<div class="essential-question">
  <strong>Guiding question:</strong>
  <span class="placeholder-text">Will our software be ready to ship on time, with the quality our users deserve — and which numbers would actually tell us?</span>
</div>

## Week Overview

Metrics are **quantitative measures used to assess the quality, progress, and effectiveness of testing activities**. They are used by testers, QA leads, developers, project managers and stakeholders, throughout the software development lifecycle and across every environment — including production.

They exist because a team cannot answer the important questions by intuition alone: *How long will it really take to test this? How bad are the bugs we are finding? How many bugs did our test team miss before shipping?*

<div class="callout callout-info">
  <div class="callout-title">Why it matters</div>
  <p>Metrics are the <strong>language of quality</strong> in software. They provide data and improve the entire development process — ultimately answering one question: <em>will our software be ready to ship on time, with the quality our users deserve?</em></p>
</div>

## 1. Two Kinds of Metrics

- **White-box metrics** — code review and code-level metrics, such as defect density per lines of code (LOC), function points, risk density, and **cyclomatic complexity** (`CC = Number of Decisions + 1`), where higher complexity means less stable, less maintainable, more defect-prone code.
- **Black-box metrics** — software test metrics, derived from what testing actually observed rather than from the code itself.

## 2. Types of Software Metrics

- **Product metrics** measure the quality of the finished system — defect density, code coverage, mean time between failures, customer-reported issues.
- **Process metrics** measure the efficiency of the testing and development process — test case execution rate, defect removal efficiency, time per phase.
- **Project metrics** measure the management of the project — actual vs. estimated effort, budget, schedule adherence, team productivity.

## 3. Base and Calculated Metrics

**Base metrics** are the raw data collected during testing: number of test cases, how many passed, failed or were blocked, defects found, accepted, rejected or deferred, and planned versus actual test hours.

**Calculated metrics** are derived from those using formulas, and fall into five groups:

<div class="table-scroll" role="region" aria-label="The five groups of calculated test metrics" tabindex="0">
  <table class="wide-data">
    <thead>
      <tr>
        <th scope="col">Group</th>
        <th scope="col">Question it answers</th>
        <th scope="col">Example metric</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Test coverage</td><td>How much of testing have we covered?</td><td>(Tests run &divide; Total tests to be run) &times; 100%</td></tr>
      <tr><td>Test effectiveness</td><td>How effective are our tests in catching bugs?</td><td>(Bugs found in tests &divide; All bugs found, including after shipping) &times; 100%</td></tr>
      <tr><td>Test effort</td><td>How long did each test take, and how many bugs per test?</td><td>Total defects &divide; Total test hours</td></tr>
      <tr><td>Test tracking and quality</td><td>Are the defects caught during testing fixed?</td><td>(Defects fixed &divide; Total defects reported) &times; 100%</td></tr>
      <tr><td>Test efficiency</td><td>How fast can we fix our bugs?</td><td>Total time taken for bug fixes &divide; Total number of bugs</td></tr>
    </tbody>
  </table>
</div>

<div class="callout callout-info">
  <div class="callout-title">Worked example</div>
  <p>A team fixes four bugs in a month, taking 8, 2, 9 and 3 hours of developer effort. Average time to repair defects = 22 hours / 4 bugs = <strong>5.5 hours per bug</strong>. A high or rising average is a prompt to ask why: are bugs being reported clearly, do developers have the right tools, is the codebase getting harder to change?</p>
</div>

## 4. Product Quality Metrics

- **Mean time to failure (MTTF)** — the average time the software runs before failing. A system running 500 hours with 5 failures has an MTTF of 100 hours; higher is more reliable.
- **Defect density** — defects per thousand lines of code (KLOC) or per module. 15 defects in 25,000 lines is 0.6 per KLOC. It is affected by code complexity, developer skill level, and the type of defect.
- **Customer problems** — measured as problems per user month (PUM), counting *everything* users hit, valid defects or not: usability challenges, unclear documentation, duplicates.
- **Customer satisfaction** — surveyed on a five-point Likert scale and summarised as the percentage of satisfied customers or as a Net Satisfaction Index (NSI).

## 5. Visualising Test Metrics

Charts turn complex data into representations that enable faster understanding and better decision-making — but only if the chart type fits the question.

<div class="table-scroll" role="region" aria-label="Suggested chart types by metric goal" tabindex="0">
  <table class="wide-data">
    <thead>
      <tr>
        <th scope="col">Metric Goal</th>
        <th scope="col">Best Chart Type</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Compare categories</td><td>Bar chart, column chart</td></tr>
      <tr><td>Show trends</td><td>Line chart, area chart</td></tr>
      <tr><td>Display composition</td><td>Pie chart, donut, stacked bar</td></tr>
      <tr><td>Visualize distribution</td><td>Histogram, box plot</td></tr>
      <tr><td>Show relationships</td><td>Scatter plot, bubble chart</td></tr>
    </tbody>
  </table>
</div>

<div class="callout callout-info">
  <div class="callout-title">The three principles of charting</div>
  <ol>
    <li>Identify right and meaningful metrics to visualize.</li>
    <li>Choose chart types wisely.</li>
    <li>Look at each chart — what insights can we get from that chart?</li>
  </ol>
</div>
