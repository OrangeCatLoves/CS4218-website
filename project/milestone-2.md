<frontmatter>
  title: "Milestone 2"
</frontmatter>

# Milestone 2

<div class="callout callout-warning">
  <div class="callout-title">Deadline</div>
  <p>Due on <strong>Week 9 Monday, 12:00 PM</strong>.</p>
</div>

## Integration Tests 👤

<div class="callout callout-info">
  <div class="callout-title">Weightage</div>
  <p>This section is worth <strong>2%</strong> of your final grade.</p>
</div>

Design and write integration tests using appropriate, principled approaches, as discussed during the lectures. Integration tests are tests that verify the interactions between different units. For example, it could be between a unit that you have tested previously during Milestone 1 and another unit tested by another team member. Thus, you are no longer testing in isolation. Furthermore, integration tests are white-box tests and hence will be written using the same technology and methods as unit tests.

Similar to Milestone 1, identify the integration tests to write—covering all components—and divide the workload equally among yourselves. As some components might have more interactions than others, feel free to re-allocate the components such that everyone has an equal workload.

### Grading Rubric

<div class="table-scroll course-note-table-scroll" role="region" aria-label="Project Milestone 2: 10% - Week 9 Monday 12 PM — Integration Tests 2% (Individual) — Grading Rubric" tabindex="0">
  <table class="wide-data course-note-table course-note-rubric">
    <thead>
      <tr>
        <th scope="col">Approach (1%)</th>
        <th scope="col">Correctness (1%)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0: Integration tests were written without a clear approach or code does not match approach mentioned in the report.</td>
        <td>0: Integration tests are not testing integration of components or mocks/stubs are inappropriately used.</td>
      </tr>
      <tr>
        <td>1: Integration tests are written with a clear approach (e.g., bottom-up integration, etc.) and the code aligns with the approach mentioned in the report.</td>
        <td>1: Integration tests are clearly testing the integration of some components, as opposed to complete mocking/stubbing in unit tests. This also means that mocks/stubs are appropriately used.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="callout callout-success">
  <div class="callout-title">Submission</div>
  <p>Tag your group's code as <strong>ms2</strong> in your GitHub repository.</p>
</div>

## UI Tests 👤

<div class="callout callout-info">
  <div class="callout-title">Weightage</div>
  <p>This section is worth <strong>3%</strong> of your final grade.</p>
</div>

Design and write end-to-end system tests. These are black-box tests and you need to use **Playwright** to develop these tests. These tests should test end-user scenarios that span across multiple components, independent of the underlying implementation.

- Good example of multiple components: User logs in -> adds item to cart -> views cart -> sees item in cart
- Poor example of multiple components: Navigates to login page -> checks that the page contains the necessary UI elements

As a group, identify meaningful end-to-end system tests and divide the workload equally among yourselves. There is no limit on the number of tests you can write, so feel free to write as many as you require.

### Grading Rubric

<div class="table-scroll course-note-table-scroll" role="region" aria-label="Project Milestone 2: 10% - Week 9 Monday 12 PM — UI Tests 3% (Individual) — Grading Rubric" tabindex="0">
  <table class="wide-data course-note-table course-note-rubric">
    <thead>
      <tr>
        <th scope="col">Completeness (1%)</th>
        <th scope="col">Correctness (1%)</th>
        <th scope="col">Variety (1%)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0: Poor or incomplete E2E scenarios are tested. For example, just checking that a page has the necessary UI elements.</td>
        <td>0: UI tests are incorrectly implemented with poor structure (e.g., test case does not assert any outcomes).</td>
        <td>0: UI tests lack variety. For example, only implementing the test for 'Login successfully' and 'Login unsuccessfully'.</td>
      </tr>
      <tr>
        <td>1: Clear and complete E2E scenarios are tested. For example, for registration, the test case tests that the user navigates to register page, fill in details and finally register, instead of just checking that the register page has the necessary UI elements.</td>
        <td>1: UI tests are correctly implemented using Playwright with the structure of navigating to pages, performing user actions (e.g. clicking a button) and asserting the outcomes.</td>
        <td>1: UI tests are testing a variety of E2E user scenarios. For example, it is not sufficient to just implement 'Login successfully' and 'Login unsuccessfully'. Other diverse scenarios like 'Register' or 'View Profile' are included as well.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="callout callout-success">
  <div class="callout-title">Submission</div>
  <p>Tag your group's code as <strong>ms2</strong> in your GitHub repository.</p>
</div>

## Code Coverage 👥

<div class="callout callout-info">
  <div class="callout-title">Weightage</div>
  <p>This section is worth <strong>1%</strong> of your final grade.</p>
</div>

As a group, use SonarQube and generate a code coverage report. Based on the generated report, write a **two-page summary**:

- One page with screenshots of the report generated from SonarQube (e.g., percentages of different types of coverage, coverage for a specific file).
- Another page with your plan to improve the coverage based on the screenshots (you don't need to implement these proposed things).
- If you have very high coverage (>95%), and thus, have very few things to write about in the second page, also describe your process of achieving high coverage. So you should write about:
  - The improvement plan for the small portion of code not yet covered (unless you attained 100%).
  - How your team attained high code coverage.

We are not grading based on how much code coverage has been obtained, but rather, we are grading based on the ability to run SonarQube and analyze the report.

### Grading Rubric

<div class="table-scroll course-note-table-scroll" role="region" aria-label="Project Milestone 2: 10% - Week 9 Monday 12 PM — Code Coverage 1% (Group) — Grading Rubric" tabindex="0">
  <table class="wide-data course-note-table course-note-rubric">
    <thead>
      <tr>
        <th scope="col">Code Coverage (1%)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0: Did not use SonarQube OR insufficient details in sonarqube screenshots/improvement plan.</td>
      </tr>
      <tr>
        <td>1: Sufficient details for both SonarQube screenshots and improvement plan.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="callout callout-success">
  <div class="callout-title">Submission</div>
  <p>Append the two pages to the end of your collated Milestone 2 report (see below).</p>
</div>

## Report 👤

<div class="callout callout-info">
  <div class="callout-title">Weightage</div>
  <p>This section is worth <strong>4%</strong> of your final grade.</p>
</div>

Your report should cover two key components:

- A brief description of the approaches you used for your Integration and UI tests — which approaches you selected and why.
- Milestone 2 test statistics presented in a graphical way (e.g., pie charts, bar charts), covering things such as the number of tests identified, tests automated, bugs identified, and bugs fixed. Tables are **not** counted as graphs.

The report has a strict **2 page limit**.

### Grading Rubric

<div class="table-scroll course-note-table-scroll" role="region" aria-label="Project Milestone 2: 10% - Week 9 Monday 12 PM — Report 4% (Individual) — Grading Rubric" tabindex="0">
  <table class="wide-data course-note-table course-note-rubric">
    <thead>
      <tr>
        <th scope="col">Approach Description (2%)</th>
        <th scope="col">Graphical Test Statistics (2%)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0: Poor or missing approach description</td>
        <td>0: Poor or missing graphical statistics</td>
      </tr>
      <tr>
        <td>1: Adequate approach description</td>
        <td>1: Adequate graphical statistics</td>
      </tr>
      <tr>
        <td>2: Clear and well-reasoned approach description</td>
        <td>2: Clear and well-presented graphical statistics</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="callout callout-success">
  <div class="callout-title">Submission</div>
  <p>Collate the reports from your group members and submit one PDF on Canvas (only one member needs to make the submission for the whole group).</p>
</div>
