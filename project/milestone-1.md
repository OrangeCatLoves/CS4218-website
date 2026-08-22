<frontmatter>
  title: "Milestone 1"
</frontmatter>

# Milestone 1

<div class="callout callout-warning">
  <div class="callout-title">Deadline</div>
  <p>Due on <strong>Recess Week Monday, 12:00 PM</strong>.</p>
</div>

## Unit Tests 👤

<div class="callout callout-info">
  <div class="callout-title">Weightage</div>
  <p>This section is worth <strong>5%</strong> of your final grade.</p>
</div>

Design and write unit tests using appropriate, principled approaches, as discussed during the lectures. Refer to the **Suggested Testing Scope on Canvas** to help you divide the workload.

### Grading Rubric

<div class="table-scroll course-note-table-scroll" role="region" aria-label="Project Milestone 1: 10% - Recess Week Monday 12 PM — Unit Tests 5% (Individual) — Grading Rubric" tabindex="0">
  <table class="wide-data course-note-table course-note-rubric">
    <thead>
      <tr>
        <th scope="col">Adherence to Principled Approach (1%)</th>
        <th scope="col">Test Variety &amp; Scope (1%)</th>
        <th scope="col">Correctness of Unit Tests (2%)</th>
        <th scope="col">Code Quality (1%)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0: Incorrect application of approach or no approach applied.</td>
        <td>0: Tests are largely repetitive and cover only a narrow set of cases.</td>
        <td>0: Unit tests are not implemented correctly, with multiple issues found (e.g., not testing in isolation).</td>
        <td>0: Low code quality, difficult to read and understand (e.g., lack of AAA/given-when-then pattern).</td>
      </tr>
      <tr>
        <td>0.5: Partially followed the chosen approach.</td>
        <td>0.5: Some variety in test cases but missing key scenarios.</td>
        <td>1: Some issues, but generally well done.</td>
        <td>0.5: Generally ok, a few tests are not well structured.</td>
      </tr>
      <tr>
        <td>1: Clearly follows the chosen approach.</td>
        <td>1: Tests show strong variety, covering a wide range of scenarios, including important edge cases.</td>
        <td>2: Unit tests are correctly testing components in isolation with no issues found.</td>
        <td>1: Well structured unit tests (AAA/given-when-then pattern).</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="callout callout-success">
  <div class="callout-title">Submission</div>
  <p>Tag your group's code as <strong>ms1</strong> in your GitHub repository.</p>
</div>


## Continuous Integration 👥

<div class="callout callout-info">
  <div class="callout-title">Weightage</div>
  <p>This section is worth <strong>1%</strong> of your final grade.</p>
</div>

Unit tests are part of Continuous Integration (CI). You will use **GitHub Actions** to automate running your test cases on GitHub. This way, commits from you or your group members that break the code can easily be spotted and handled.

You will be guided through setting this up during the third lab. If done correctly, you should see the output for number of test suites passed, number of tests passed, etc:

```
Test Suites: x passed, x total
Tests: x passed,  x total
...
```

### Grading Rubric

<div class="table-scroll course-note-table-scroll" role="region" aria-label="Project Milestone 1: 10% - Recess Week Monday 12 PM — CI 1% (Group) — Grading Rubric" tabindex="0">
  <table class="wide-data course-note-table course-note-rubric">
    <thead>
      <tr>
        <th scope="col">Continuous Integration (1%)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0: Jest is not running on GitHub.</td>
      </tr>
      <tr>
        <td>1: Jest is running on GitHub with the required output indicating number of passed tests etc. Errors/failed tests are fine.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="callout callout-success">
  <div class="callout-title">Submission</div>
  <p>Paste the GitHub workflow run URL in your <strong>README</strong> under the heading <strong>MS1 CI URL</strong>, pointing directly to the output of the run. Do this <strong>before</strong> you tag your group's code as <strong>ms1</strong>.</p>
</div>

## Report 👤

<div class="callout callout-info">
  <div class="callout-title">Weightage</div>
  <p>This section is worth <strong>4%</strong> of your final grade.</p>
</div>

Your report should cover two key components:

- A brief description of your unit test approach — which approach you selected and why.
- Test statistics presented in a graphical way (e.g., pie charts, bar charts), covering things such as the number of tests identified, tests automated, bugs identified, and bugs fixed. Tables are **not** counted as graphs.

The report has a strict **2 page limit**.

### Grading Rubric

<div class="table-scroll course-note-table-scroll" role="region" aria-label="Project Milestone 1: 10% - Recess Week Monday 12 PM — Report 4% (Individual) — Grading Rubric" tabindex="0">
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
