<frontmatter>
  title: "Week 9"
  pageNav: 2
</frontmatter>

<header class="week-header">
  <p class="eyebrow">Week 9 · 12 Oct - 16 Oct</p>
  <h1>Week 9: <span class="placeholder-text">SE Testing Methods Used in AI</span></h1>
  <div class="meta-row">
    <span class="meta-chip">Differential Testing</span>
    <span class="meta-chip">Metamorphic Testing</span>
    <span class="meta-chip">Mutation Testing</span>
    <span class="meta-chip">Fuzz Testing</span>
  </div>
</header>

<div class="essential-question">
  <strong>Guiding question:</strong>
  <span class="placeholder-text">When a system is non-deterministic and nobody can say exactly what the "correct" output is, how do we still test it systematically?</span>
</div>

## Week Overview

AI systems behave differently from traditional deterministic software. Shuffled training data, dropout, random weight initialisation, and exploration policies mean two models trained the same way can give different outputs without either being *wrong*, and many AI outputs have no clear ground truth to check against. Classic software engineering testing methods still apply, but they need to be adapted. This week introduces four of them: **differential testing**, **metamorphic testing**, **mutation testing**, and **fuzz testing**.

## Differential Testing

Differential testing gives two programs, implementations, or versions the **same input** and compares their outputs. If the outputs differ, at least one of them is probably wrong. It is useful when there is no ground truth, since the other implementation acts as the oracle. Its main drawbacks are that AI outputs are often non-deterministic, so "different" has to be defined with a tolerance, and that a discrepancy tells you *that* something differs but not *where* the fault is.


## Metamorphic Testing

Metamorphic testing checks **relations between inputs and outputs** instead of exact outputs. A *metamorphic relation* describes how the output should change when the input is changed in a known way: it should stay the same (invariance), increase, or decrease. This sidesteps the test oracle problem, because you never need to know the correct output, only how outputs should relate to each other. The challenge is coming up with good relations, and a bug that does not violate any of them will go unnoticed.


## Mutation Testing

Mutation testing evaluates the **quality of your test suite** rather than the program. Small faults are deliberately injected into the original program to create *mutants* (flipping a comparison operator, removing a statement, changing a constant), and the tests that passed on the original are rerun on each mutant. A mutant is *killed* if at least one test fails. The **mutation score** is the fraction of mutants killed: a high score means the tests would catch real faults, while a low score reveals gaps in the suite.


## Fuzz Testing

Fuzz testing generates a **large volume of inputs** (random, from a specification, or mutated from valid inputs) and feeds them to the program to provoke crashes, hangs, memory leaks, or other unexpected behaviour. *Coverage-guided* fuzzers track which code each input reaches and mutate the inputs that go deeper; *black-box* fuzzers need no knowledge of the internals. One important limitation is that fuzzing struggles with logical bugs that do not cause a crash.

