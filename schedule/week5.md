<frontmatter>
  title: "Week 5"
  pageNav: 2
</frontmatter>

<header class="week-header">
  <p class="eyebrow">Week 5 · 7 Sep - 11 Sep</p>
  <h1>Week 5: <span class="placeholder-text">Test Generation Techniques</span></h1>
  <div class="meta-row">
    <span class="meta-chip">Equivalence Class Partitioning</span>
    <span class="meta-chip">Boundary Value Analysis</span>
    <span class="meta-chip">Decision Table Testing</span>
    <span class="meta-chip">Finite State Machine</span>
  </div>
</header>

<div class="essential-question">
  <strong>Guiding question:</strong>
  <span class="placeholder-text">Which test cases should I write — and how few can I get away with while still catching the bugs?</span>
</div>

## Topic Overview

Test generation techniques are essential for ensuring software quality. **Equivalence Class Partitioning** involves dividing input data into classes where all values are expected to behave similarly, thus reducing the number of test cases. **Boundary Value Analysis** focuses on testing the edges of these equivalence classes, as errors often occur at boundaries. **Decision Table Testing** is used for complex business logic, mapping conditions to actions in a tabular format to ensure all combinations are tested. Finally, **Finite State Machine** testing models the system's behavior as a set of states and transitions, allowing for the creation of tests that cover different state changes and event sequences.

A classic real-world example of **boundary value analysis** is testing the age input field for purchasing a lottery ticket online.

Let's say the system requires users to be between **18** and **120** years old, inclusive. Instead of testing every possible age, we focus on the boundaries of this valid range.

The boundaries are 18 and 120. Boundary value analysis suggests testing values at, just below, and just above these boundaries.

Therefore, the test cases would be:

- **Minimum Boundary - 1:** 17 (invalid)
- **Minimum Boundary:** 18 (valid)
- **Minimum Boundary + 1:** 19 (valid)
- **Maximum Boundary - 1:** 119 (valid)
- **Maximum Boundary:** 120 (valid)
- **Maximum Boundary + 1:** 121 (invalid)

This technique efficiently checks the system's behavior at the critical points where errors are most likely to occur, without the need to test irrelevant values like 35 or 98.
