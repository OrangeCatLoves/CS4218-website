<frontmatter>
  title: "Week 8"
  pageNav: 2
</frontmatter>

<header class="week-header">
  <p class="eyebrow">Week 8 · 5 Oct - 9 Oct</p>
  <h1>Week 8: <span class="placeholder-text">Security Testing</span></h1>
  <div class="meta-row">
    <span class="meta-chip">Security Testing</span>
    <span class="meta-chip">CIA Triad</span>
    <span class="meta-chip">Secure SDLC</span>
    <span class="meta-chip">Web Application Vulnerabilities</span>
  </div>
</header>

<div class="essential-question">
  <strong>Guiding question:</strong>
  <span class="placeholder-text">My tests show the system does what it should — but how do I know it refuses everything it shouldn't?</span>
</div>

## The Invisible War: A Deep Dive into Security Testing

In the digital age, trust is the ultimate currency. Yet, as major breaches like **Equifax (2017)** and **Capital One (2019)** have shown, that trust is incredibly fragile when software isn't properly hardened. Security testing is no longer an optional "extra" at the end of a project; it is an essential, ongoing process of identifying vulnerabilities and risks to prevent unauthorized access and devastating data breaches.

## What Exactly is Security Testing?

While standard functional testing checks if a feature *works*, security testing flips the script. It ensures that operations that **should not** be allowed are strictly forbidden. It is a combination of automated tools and manual rigors designed to protect sensitive data from financial losses, legal consequences, and reputational ruin.

### The Core Pillars: The CIA Triad & Beyond

To build a secure system, testers focus on several foundational concepts:

- **Confidentiality**: Ensuring sensitive data is only accessible to authorized users.
- **Integrity**: Guaranteeing that data remains accurate, complete, and unaltered.
- **Availability**: Ensuring systems and services are accessible when needed.
- **Authentication & Authorization**: Confirming "Who are you?" before deciding "What are you allowed to do?".
- **Non-repudiation**: Ensuring a user cannot deny performing a specific action.

## Essential Security Techniques

There is no "silver bullet" for security; instead, we use a multi-layered approach:

1. **Security Scanning**: Automated tools like **SAST** (scanning source code) and **DAST** (scanning running apps) to find common flaws like SQL Injection or outdated libraries.
2. **Penetration Testing**: Simulated cyberattacks (Black, White, or Grey box) to identify exploitable weaknesses before real attackers find them.
3. **Threat Modelling**: A proactive "risk assessment for applications" where designers anticipate potential threats and develop mitigation strategies early.
4. **Security Auditing**: A formal review of policies and controls to ensure compliance with standards.

## The Secure SDLC: Security at Every Stage

Security cannot be "bolted on" at the end. It must be woven into the **Software Development Life Cycle (SDLC)**:

- **Before Development**: Define the SDLC, review security policies, and establish clear metrics.
- **Design Phase**: Conduct architecture reviews and create UML/Threat models to catch flaws when they are most cost-effective to fix.
- **Development Phase**: Utilize code walkthroughs and manual source code reviews. Some issues, like flawed business logic or "backdoors," can only be found by looking at the source code.
- **Deployment & Maintenance**: Perform final penetration tests and schedule periodic "health checks" to ensure new risks haven't emerged.

## Focus: Web Application Vulnerabilities

Web applications are prime targets for attackers. Testing often involves two modes:

- **Passive Testing**: Gathering information and observing the application's logic without making changes (e.g., using a proxy to watch HTTP headers).
- **Active Testing**: Directly probing for vulnerabilities like **Cross-Site Scripting (XSS)**—where malicious scripts are injected into web pages—or **SQL Injection**, which targets the underlying database.
