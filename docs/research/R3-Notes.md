This document is a template for ongoing research. Delete this first paragraph and then update the information below where indicated. 


<br>

# Project & Portfolio 

* **Research Notes - Milestone 2**
* **Pamela Fennell**
* **January 28, 2024**

<br>


## Topic - R3: Innovation
This document contains general notes related to security and compliance
- OWASP Top 10 Web App Security Risks
- Code QL
- SWOT Analyis



<br>

## Sub-Topic 1 - OWASP Top 10 Web App Security Risks
Security is a continuous process and not a one-time task. Therefore staying up to date with the latest security practices and threats. The OWASP Top 10 is a widely accepted list of the most critical web application security risks. Here are some key takeaways from the OWASP Top 10 to revisit throughout this project:

* **1: Broken Access Control** 
    - Limit access based on roles and privileges. 
        - For instance, certain features of your app might be restricted to logged-in users.
    - Never trust client-side validation and 
    - always perform server-side checks.
    - Implement secure authentication mechanisms. This could mean using secure methods for storing and verifying user credentials, and providing options for multi-factor authentication.


* 2: Cryptographic Failures (Sensitive Data Exposure)
    - Protect sensitive data during transmission and storage. 
    - Use encryption for data at rest and in transit, and 
    - ensure access controls are properly set up.

* 3: Injection
    - ensure to validate and sanitize all user input to prevent 
        - SQL, OS, and LDAP injection attacks.
    - Always validate input, 
        - use parameterized queries or prepared statements, and 
        - avoid using user input in dangerous places like SQL statements.
    - Encode user input and implement Content Security Policy (CSP) to prevent XSS attacks.

* 4: Insecure Design
    - This is a new category for 2021, with a focus on risks related to design flaws. 
    - It calls for more use of 
        - threat modeling, 
        - secure design patterns and principles, and 
        - reference architectures.

* 5: Security Misconfiguration 
    - Keep all software up-to-date and configure them securely. 
        - This includes the MERN stack and any third-party APIs you use.
    - Disable unnecessary features and use default configurations that deny access.
    - If your app involves parsing XML data, 
        - ensure to validate XML inputs and 
        - disable external entity resolution to prevent XXE attacks.



* 6: Vulnerable and Outdated Components 
    - Using Components with Known Vulnerabilities 
    - Regularly update components and libraries, and 
    - consider using tools to scan for vulnerabilities.

* 7: Identification and Authentication Failures
    - Ensure that authentication mechanisms are secure and cannot be easily bypassed. 
    - Implement strong password policies, 
    - provide multi-factor authentication, and 
    - regularly update passwords.

* 8: Software and Data Integrity Failures
    - Insecure Deserialization
    - Be careful with deserializing data and 
    - consider using safer alternatives.


* 9: Security Logging and Monitoring Failures 
    - Insufficient Logging & Monitoring 
    - Implement logging for all events, especially login attempts and transactions. 
    - monitor logs for suspicious activity.

* 10: Server-Side Request Forgery 
    - often involves tricking the server into making requests to internal resources, 
    - bypassing security controls. 
    - Proper input validation and secure configuration are essential to prevent SSRF vulnerabilities.

<br>

## Sub-Topic 2 -  Code QL
CodeQL allows you to identify vulnerabilities and errors in your code. Using code analysis to detect potential issues.
* 1: Vulnerability Identification:
    - can identify vulnerabilities in your code, providing you with detailed insights into potential security risks. The results are displayed as code scanning alerts in GitHub.

* 2: Supported Languages: 
    - supports a wide range of programming languages including C and C++, C#, Go, Java and Kotlin, JavaScript and TypeScript, Python, Ruby, and Swift.

* 3: Integration with GitHub: 
    - meaning you can use it to scan all your repositories hosted on GitHub. The results are displayed right in GitHub, making it easy to manage and respond to identified issues.

* 4: Availability:
    -  CodeQL is available for all public repositories on GitHub.com. For private repositories, it's available for organizations that use GitHub Enterprise Cloud and have a license for GitHub Advanced Security.

* 5: External CI Systems:
    - You can run the CodeQL CLI directly in an external Continuous Integration (CI) system and upload the results to GitHub. This provides flexibility in managing your CI pipeline and integrating CodeQL into your existing workflow. 



<br>

## Sub-Topic 3 - 

<br>

## Sub-Topic 4 - 
    
<br>

## Reference Links

**Resource 1: Google Analytics**  
[Analytics Tools & Solutions for Your Business](https://marketingplatform.google.com/about/analytics/benefits/): Get a complete understanding of how your customers engage with your business.

**Resource 2: A/B Testing**    
[The Ultimate Guide To A/B Testing](https://www.smashingmagazine.com/2010/06/the-ultimate-guide-to-a-b-testing/) Gain insight into visitor behavior and to increase conversion rate. 

**Resource 3: Use Cases**
[Use Case And Use Case Testing Complete Tutorial](https://www.softwaretestinghelp.com/use-case-testing/)

[What is Use Case Diagram? - Visual Paradigm](https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-use-case-diagram/)

**Resource 4: Your First Plan**
[The Agile Samurai](https://learning.oreilly.com/library/view/the-agile-samurai/9781680500066/f_0056.html) Chapter 8
