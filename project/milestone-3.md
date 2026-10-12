<frontmatter>
  title: "Milestone 3"
</frontmatter>

# Milestone 3

<div class="callout callout-warning">
  <div class="callout-title">Deadline</div>
  <p>Due on <strong>Week 13 Tuesday, 12:00 PM</strong> (Monday is a Public Holiday).</p>
</div>

## Performance Tests 👤

<div class="callout callout-info">
  <div class="callout-title">Weightage</div>
  <p>This section is worth <strong>3%</strong> of your final grade.</p>
</div>

Identify and automate performance tests using **Grafana k6**. Automate one type of performance test per person for the submission (e.g., load testing, stress testing, spike testing, soak testing, etc.).

- **Same test type as a groupmate:** the components you test must not overlap.
- **Different test type from a groupmate:** overlapping components is fine.

It is up to you to determine the number of tests to automate as this can sometimes depend on your test type. That said, typically testing a few significant components appropriate for your test type is sufficient.

**Different from the previous milestones, in this milestone you are NOT required to fix any bugs found during testing.**

### Grading Rubric

<div class="table-scroll course-note-table-scroll" role="region" aria-label="Project Milestone 3: 15% - Week 13 Tuesday 12 PM — Performance Tests 3% (Individual) — Grading Rubric" tabindex="0">
  <table class="wide-data course-note-table course-note-rubric">
    <thead>
      <tr>
        <th scope="col">Correctness (2%)</th>
        <th scope="col">Uniqueness (1%)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0: There are issues with the implementation that compromise its validity.</td>
        <td>0: Performance tests are not unique within the group (same test type as a groupmate on overlapping components; all members involved will be penalized).</td>
      </tr>
      <tr>
        <td>1: Implementation is mostly logical, but the performance testing is only partially demonstrated.</td>
        <td>1: Performance tests are unique within the group (different test type from groupmates, or the same test type on non-overlapping components).</td>
      </tr>
      <tr>
        <td>2: Implementation is logical and performance testing is clearly being done.</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>

<div class="callout callout-success">
  <div class="callout-title">Submission</div>
  <p>Tag your group's code as <strong>ms3</strong> in your GitHub repository.</p>
</div>

## General AI-driven Testing 👥

<div class="callout callout-info">
  <div class="callout-title">Weightage</div>
  <p>This section is worth <strong>2%</strong> of your final grade.</p>
</div>

AI-driven testing refers to the use of AI-assisted techniques or tools to automate and enhance the testing process. As a group, you are expected to use AI-driven testing to help with your testing. Some examples include (but are not limited to):

- Writing tests using AI.
- AI agents performing automated code corrections.
- AI-based test input generation.
- AI-based code/result analysis and reporting (e.g., identifying anti-patterns like brittle test cases, analysing logs).

As a group, write a **two-page summary** on all the AI-driven testing approach(es) used throughout the milestones (this excludes AI-driven security testing). Discuss their effectiveness and limitations, how you would improve them, and so on. Include detailed examples.

### Grading Rubric

<div class="table-scroll course-note-table-scroll" role="region" aria-label="Project Milestone 3: 15% - Week 13 Tuesday 12 PM — General AI-driven Testing 2% (Group) — Grading Rubric" tabindex="0">
  <table class="wide-data course-note-table course-note-rubric">
    <thead>
      <tr>
        <th scope="col">General AI-driven Testing (2%)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0: No AI-driven testing and analysis done.</td>
      </tr>
      <tr>
        <td>1: Some basic AI-driven testing and analysis done.</td>
      </tr>
      <tr>
        <td>2: Extensive/advanced AI-driven testing and analysis done.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="callout callout-success">
  <div class="callout-title">Submission</div>
  <p>Append the two pages to the end of your collated Milestone 3 report (see below).</p>
</div>

## AI-driven Security Testing 👤

<div class="callout callout-info">
  <div class="callout-title">Weightage</div>
  <p>This section is worth <strong>5%</strong> of your final grade.</p>
</div>

Using the approach from the Week 10 lecture and Lab 06, use AI to generate tests that reach security checks in your Virtual Vault components.

You may either keep the component assignments from Milestone 1 / 2 or re-divide the components among yourselves. Either way, remember to indicate in your **README** again who did which components for AI-driven security testing.

First, run random testing on your components and record the coverage. Then pick security checks that the random tests did not reach (e.g., authentication, permission or input validation), write the expected state at each check as an assertion, and use AI to generate tests that reach them. Use coverage to confirm that each check was reached.

Write a **one-page summary** covering the coverage before and after, the checks you targeted, whether the AI-generated tests reached them, and any problems found.

**You are not required to fix any bugs found.**

### Grading Rubric

<div class="table-scroll course-note-table-scroll" role="region" aria-label="Project Milestone 3: 15% - Week 13 Tuesday 12 PM — AI-driven Security Testing 5% (Individual) — Grading Rubric" tabindex="0">
  <table class="wide-data course-note-table course-note-rubric">
    <thead>
      <tr>
        <th scope="col">Test Generation (3%)</th>
        <th scope="col">Summary (2%)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0: No AI-generated tests.</td>
        <td>0: Summary missing.</td>
      </tr>
      <tr>
        <td>1: AI-generated tests written, but none reach their target check.</td>
        <td>1: Results reported, but without a coverage comparison.</td>
      </tr>
      <tr>
        <td>2: Some target checks reached, confirmed by coverage.</td>
        <td>2: Clear before/after coverage and results for each targeted check.</td>
      </tr>
      <tr>
        <td>3: Several target checks reached, each confirmed by coverage and with an assertion.</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</div>

<div class="callout callout-success">
  <div class="callout-title">Submission</div>
  <p>Include your code as part of the <strong>ms3</strong> tag, and append the one-page summary at the <strong>end of your individual Milestone 3 report</strong>.</p>
</div>

## Report 👤

<div class="callout callout-info">
  <div class="callout-title">Weightage</div>
  <p>This section is worth <strong>2%</strong> of your final grade.</p>
</div>

Your report should cover the following components:

- **Performance test approach:** Which components you selected to test, why those components were selected, how you tested those components, which metrics you selected and why, etc.
- **Graphical test statistics:** Test statistics presented in a graphical way (e.g., pie charts, bar charts). Tables are **not** counted as graphs. This should have two portions:
  - **Performance test statistics:** Identify what metrics (learned in the class or otherwise) are suitable for your test type (e.g., response time, error rate, etc.) and generate statistics based on those metrics.
  - **Combined test statistics:** Test statistics **combined across all 3 milestones**, covering things such as the number of tests identified, tests automated, bugs identified, and bugs fixed.

The report has a strict **3 page limit** (this limit excludes the AI-driven Security Testing summary).

### Grading Rubric

<div class="table-scroll course-note-table-scroll" role="region" aria-label="Project Milestone 3: 15% - Week 13 Tuesday 12 PM — Report 2% (Individual) — Grading Rubric" tabindex="0">
  <table class="wide-data course-note-table course-note-rubric">
    <thead>
      <tr>
        <th scope="col">Performance Testing Approach (1%)</th>
        <th scope="col">Graphical Test Statistics (1%)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0: Poor or missing approach description</td>
        <td>0: Poor or missing graphical statistics</td>
      </tr>
      <tr>
        <td>1: Clear and well-reasoned approach description</td>
        <td>1: Clear and well-presented graphical statistics</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="callout callout-success">
  <div class="callout-title">Submission</div>
  <p>Collate the reports from your group members and submit one PDF on Canvas (only one member needs to make the submission for the whole group).</p>
</div>

## Presentation 👤 + 👥

<div class="callout callout-info">
  <div class="callout-title">Weightage</div>
  <p>This section is worth <strong>3%</strong> of your final grade.</p>
</div>

The presentation consists of an individual component and a group component. Presentations will be conducted one group at a time. A 5-member group gets a total of 20 minutes to present.

- **Individual (3 minutes per person):** Open your Milestone 3 report and present your portion of the work. No slides are required.
- **Group (5 minutes):** Give a short live demo as a group, showcasing how you used AI in the project.

A short Q&A session will follow the presentation.

The presentation is graded **solely on your communication skills**. The content of the presentation (i.e., your Milestone 3 report) is graded separately under the Report section.

### Grading Rubric

<div class="table-scroll course-note-table-scroll" role="region" aria-label="Project Milestone 3: 15% - Week 13 Tuesday 12 PM — Presentation 3% (Individual + Group) — Grading Rubric" tabindex="0">
  <table class="wide-data course-note-table course-note-rubric">
    <thead>
      <tr>
        <th scope="col">Structure (1%)</th>
        <th scope="col">AI-usage Demo (1%)</th>
        <th scope="col">Verbal Delivery (1%)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0: Presentation is difficult to follow and poorly structured.</td>
        <td>0: Demo is not working, or AI usage is not clearly demonstrated.</td>
        <td>0: Speech is unclear, overly rushed, too quiet, or difficult to understand.</td>
      </tr>
      <tr>
        <td>1: Presentation is well-structured and easy to follow within the time limit.</td>
        <td>1: Demo is fully working and AI usage is clearly demonstrated.</td>
        <td>1: Speech is clear, audible, well-paced, and confident.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="callout callout-info">
  <div class="callout-title">Note</div>
  <p>The group demo is only for General AI-driven Testing.</p>
</div>

<div class="callout callout-success">
  <div class="callout-title">Submission</div>
  <p>There is nothing to submit for this one! Simply show up at your allocated time slot and present.</p>
</div>
