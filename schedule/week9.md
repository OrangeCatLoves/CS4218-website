<frontmatter>
  title: "Week 9"
  pageNav: 2
</frontmatter>

<header class="week-header">
  <p class="eyebrow">Week 9 · 12 Oct - 16 Oct</p>
  <h1>Week 9: <span class="placeholder-text">Combinatorial Testing</span></h1>
  <div class="meta-row">
    <span class="meta-chip">Combinatorial Testing</span>
    <span class="meta-chip">Pairwise Testing</span>
    <span class="meta-chip">Orthogonal Array Testing</span>
  </div>
</header>

<div class="essential-question">
  <strong>Guiding question:</strong>
  <span class="placeholder-text">When there are too many input combinations to test them all, which ones actually find the bugs?</span>
</div>

## Week Overview

Combinatorial testing is a powerful method for testing software when the number of input combinations is too large to test exhaustively. It's based on the observation that most software bugs are caused by the interaction of a small number of parameters. This approach systematically tests specific combinations of inputs to provide efficient fault detection.

## Pairwise Testing (2-Way Testing)

**Pairwise testing** is the most common form of combinatorial testing. Its core principle is that every possible combination of values for any *two* input parameters is tested at least once. This significantly reduces the number of test cases compared to testing every single possible combination, while still being highly effective at finding bugs.

Imagine you're testing a text formatting feature with these options:

- **Font:** Arial, Times New Roman, Verdana (3 values)
- **Font Size:** 10, 12, 14 (3 values)
- **Style:** Bold, Italic (2 values)

An exhaustive approach would require 3×3×2=18 test cases. However, bugs are more likely to occur from an interaction like "Verdana" with "Bold" or "Size 12" with "Italic," rather than a specific combination of all three.

Using pairwise testing, you could cover all pairs with a much smaller set of tests. Here is a possible set of 6 test cases that covers every pair:

<div class="table-scroll" role="region" aria-label="Pairwise test cases for the text formatting feature" tabindex="0">
  <table class="wide-data">
    <thead>
      <tr>
        <th scope="col">Test Case</th>
        <th scope="col">Font</th>
        <th scope="col">Font Size</th>
        <th scope="col">Style</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>1</td><td>Arial</td><td>10</td><td>Bold</td></tr>
      <tr><td>2</td><td>Arial</td><td>12</td><td>Italic</td></tr>
      <tr><td>3</td><td>Times New Roman</td><td>10</td><td>Italic</td></tr>
      <tr><td>4</td><td>Times New Roman</td><td>12</td><td>Bold</td></tr>
      <tr><td>5</td><td>Verdana</td><td>10</td><td>-</td></tr>
      <tr><td>6</td><td>Verdana</td><td>14</td><td>Bold</td></tr>
    </tbody>
  </table>
</div>

If you check, every pair (e.g., Arial-10, Times New Roman-Italic, 12-Bold, Verdana-Bold) is covered at least once.

## Orthogonal Array Testing (OAT)

**Orthogonal Array Testing (OAT)** is a more structured and statistically grounded method of combinatorial testing. It uses pre-defined mathematical tables called **orthogonal arrays** to create a balanced set of test cases.

The key property of an orthogonal array is **balance**. Like pairwise testing, it ensures that for any pair of columns (parameters), all combinations of values occur an equal number of times. This provides a uniform and statistically distributed sample of the total possible combinations. OAT can be seen as a specific, highly efficient way to achieve pairwise (or 3-way, 4-way, etc.) coverage.

For example, using an orthogonal array for the same text formatting feature might produce a similarly small and efficient set of test cases. The primary difference is the systematic, balanced way the combinations are generated, which can sometimes provide more even test coverage than a simple pairwise approach. The goal remains the same: to achieve high fault detection with a fraction of the test cases.
