<frontmatter>
  title: "Week 10"
  pageNav: 2
</frontmatter>

<header class="week-header">
  <p class="eyebrow">Week 10 · 19 Oct - 23 Oct</p>
  <h1>Week 10: <span class="placeholder-text">Agentic AI-Driven Security Testing</span></h1>
  <div class="meta-row">
    <span class="meta-chip">AI-Driven Security Testing</span>
    <span class="meta-chip">Symbolic Execution</span>
    <span class="meta-chip">LLM Agents</span>
    <span class="meta-chip">Hybrid Testing</span>
  </div>
</header>

<div class="essential-question">
  <strong>Guiding question:</strong>
  <span class="placeholder-text">Can an AI agent reason about the code, and about the testing process itself, well enough to reach the checks that random inputs rarely get past?</span>
</div>

## Week Overview

Random testing explores a program quickly, but it rarely gets past code guarded by precise conditions such as checksums, exact numeric boundaries, or authentication and permission checks. Security bugs often hide in exactly this kind of guarded code. Reaching it takes two kinds of reasoning: which input satisfies a guard, and which testing technique to apply where. This week looks at how **LLM-based agents** can do both, first as **symbolic reasoners** that work out how to reach a specific path, then as **testing orchestrators** that decide what to test next.

## Path Conditions and Symbolic Execution

Every path through a control flow graph has a **path condition**: the constraints an input must satisfy to follow that path. *Symbolic execution* treats inputs as symbols, collects the path condition along a path, and asks a *constraint solver* for a concrete input that satisfies it. Unlike random testing, this targets a branch directly. In practice it struggles: many language features and library calls must be modelled by hand, floating-point and string constraints are hard to solve, and programs written in several languages are largely out of reach.

## LLM Agents as Symbolic Reasoners

The key insight is that an LLM can reason about a path the way a human tester does, at the level of what the code *means*, instead of translating every executed instruction into a formula. Given the code and a summary of a real execution, the agent picks an uncovered branch, states the condition for reaching it in plain terms, and derives an input by reasoning and running small helper programs. Because the model can be wrong, every generated input is **executed to confirm** that it reaches the target. On the programs evaluated, this approach reaches more code than classic tools, at the cost of speed.

## LLM Agents as Testing Orchestrators

Random testing is fast but shallow; symbolic reasoning is precise but slow. *Hybrid testing* combines them, but classic tools switch by fixed rules, for example calling symbolic execution only when random testing stops finding new coverage. Deciding *what to test next* is itself a reasoning task. An agent that understands the code and the testing progress can match each part of the program to the technique that suits it, and **prioritise the core logic** over whatever happens to raise coverage locally. In this approach, the agent sets a goal for each round, calls random testing or symbolic reasoning as tools, and reflects on the result; in evaluation, it found more bugs than rule-based combinations.

## Agentic Security Testing

The same reasoning applies to security when the target branches are **security checks**, such as login and permission logic. The expected behaviour is written as a *security assertion* about the state when a protected branch is reached, for example "when a user's orders are returned, the request comes from that user". Suppose a test logged in as one user reaches that branch and receives another user's orders: coverage records that the branch was reached, and the assertion fails because the state at that point breaks the property.
