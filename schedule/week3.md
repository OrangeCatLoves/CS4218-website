<frontmatter>
  title: "Week 3"
  pageNav: 2
</frontmatter>

<header class="week-header">
  <p class="eyebrow">Week 3 · 24 Aug - 28 Aug</p>
  <h1>Week 3: <span class="placeholder-text">Integration Testing and Code Coverage</span></h1>
  <div class="meta-row">
    <span class="meta-chip">Integration Testing</span>
    <span class="meta-chip">System Testing</span>
    <span class="meta-chip">Code Coverage</span>
  </div>
</header>

<div class="essential-question">
  <strong>Guiding question:</strong>
  <span class="placeholder-text">If every unit test passes, what can still be broken — and how would I know?</span>
</div>

## Integration Testing and System Testing

Let's consider a simple e-commerce application with two modules: a **Pricing Module** and a **Shopping Cart Module**.

- **Pricing Module**: Its job is to retrieve the price of an item from a database.
- **Shopping Cart Module**: Its job is to add item prices together to calculate a total.

### Why Unit Tests Aren't Enough

Both modules could easily pass their individual unit tests:

- The **Pricing Module** is tested and correctly returns the price for a "T-Shirt" as the string `"$25.00"`. The test **passes**.
- The **Shopping Cart Module** is tested by giving it the number `25.00`, and it correctly adds this to the cart's total. The test **passes**.

Both modules appear to work perfectly on their own.

### The Integration Failure

The problem occurs when the two modules are integrated. The Shopping Cart Module calls the Pricing Module to get the T-Shirt's price.

1. The Pricing Module returns the price as a **string**. `"$25.00"`
2. The Shopping Cart Module receives this string but expects a **number** (like `25.00`) to perform a mathematical addition.
3. When the cart tries to add the string `"$25.00"` to the numerical total (e.g., `0`), it results in an error or unexpected behavior, **crashing the checkout process**.

<div class="callout callout-info">
  <div class="callout-title">Takeaway</div>
  <p>This is a classic integration bug caused by <strong>mismatched assumptions between interfaces</strong> about the data format. An integration test, which would have tested the flow of data between both modules, would have immediately caught this error before the software was released.</p>
</div>

We will also discuss an overview of functional system testing.

## Code Coverage

Code coverage is necessary because it reveals **untested parts of your codebase** where bugs can hide. Without it, you might have a false sense of security, thinking your code is working correctly when, in fact, critical logic has never been executed by your tests.

### The Scenario: A Bug in Untested Code

Imagine a developer writes a function to check if a person is eligible for a discount. The rule is that the person must be a student **or** a senior citizen. However, the developer introduces a bug in the senior citizen logic.

Here is the **buggy code**:

```python
def check_discount_eligibility(is_student, is_senior):
    if is_student:
        return True
    elif is_senior:
        # Buggy line: This should return True, but mistakenly returns False
        return False
    else:
        return False
```

### The Problem: An Incomplete Test Suite

The developer writes a test case for the student scenario, which is the most common use case.

```python
assert check_discount_eligibility(is_student=True, is_senior=False) == True
```

This test **passes** because the logic for students is correct. The developer might stop here, thinking the function works. However, the bug in the `is_senior` logic remains **completely undiscovered**.

### The Solution: Using Code Coverage

When a **code coverage tool** is run, it analyzes the test suite and generates a report. The report would show that the `elif is_senior:` block was **never executed**. This low coverage score acts as a critical warning that a part of the code is untested.

Prompted by this report, the developer writes a new test specifically to cover the missing branch:

```python
assert check_discount_eligibility(is_student=False, is_senior=True) == True
```

This new test immediately **fails**. It expected `True` for a senior citizen, but the buggy code returned `False`. The bug is instantly exposed.

<div class="callout callout-info">
  <div class="callout-title">Takeaway</div>
  <p>This example shows that code coverage is essential for assessing the <strong>thoroughness of a test suite</strong> and ensuring all logic paths are verified, which helps prevent hidden bugs from making it into the final product.</p>
</div>
