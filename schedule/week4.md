<frontmatter>
  title: "Week 4"
  pageNav: 2
</frontmatter>

<header class="week-header">
  <p class="eyebrow">Week 4 · 31 Aug - 4 Sep</p>
  <h1>Week 4: <span class="placeholder-text">Control Flow Testing</span></h1>
  <div class="meta-row">
    <span class="meta-chip">Control Flow Testing</span>
    <span class="meta-chip">Control Flow Graph</span>
    <span class="meta-chip">Coverage Targets</span>
  </div>
</header>

<div class="essential-question">
  <strong>Guiding question:</strong>
  <span class="placeholder-text">Which paths through my code have my tests never taken?</span>
</div>

<div class="callout callout-info">
  <div class="callout-title">Definition</div>
  <p><strong>Control Flow Testing</strong> is a structural (white-box) testing technique where the test cases are designed based on the logic or "paths" of a program's execution. It focuses on the order in which statements are executed and how the system makes decisions (e.g., <code>if-else</code> blocks, loops, and switches).</p>
</div>

## 1. The Core Tool: Control Flow Graph (CFG)

To perform control flow testing, developers first represent the code as a **Control Flow Graph**.

- **Nodes:** Represent a "basic block"—a sequence of code that runs linearly without branching.
- **Edges:** Represent the possible transitions or decisions between these blocks.
- **Decisions:** Points where the path splits (like an `if` statement).
- **Junctions:** Points where paths merge back together (like the end of an `if-else` block).

## 2. Levels of Coverage

The goal of control flow testing is to satisfy a specific **Coverage Target**. Common targets include:

- **Statement Coverage:** Every line of code is executed **at least once**.
- **Branch/Decision Coverage:** Every possible outcome of a decision point (**True** and **False**) is tested.
- **Path Coverage:** Every possible end-to-end path through the program is tested. This is the **most thorough** but can be difficult with complex loops.

## 3. Importance of Control Flow Testing

This technique is vital for high-reliability software for several reasons:

- **Logic Verification:** It ensures that every logic "branch" works as intended. Even if 90% of your code is perfect, a bug in a rarely-triggered `else` block can crash a system.
- **Early Defect Detection:** It is highly effective in unit testing, often catching nearly **50% of bugs** at the component level before they reach integrated systems.
- **Eliminating Dead Code:** By building a CFG, you can visually identify code that is "unreachable"—sections of the program that can never be executed under any input condition.
- **Cyclomatic Complexity:** It allows testers to calculate the **Cyclomatic Complexity**, which provides a quantitative measure of how complex the code is. Higher complexity usually indicates a higher risk of defects and difficulty in maintenance.
