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
- SWOT Analysis
- Creativity & Innovation



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
CodeQL allows you to identify vulnerabilities and errors in your code. Using code analysis to detect potential issues. Apply these principles to help identify vulnerabilities and errors in your code
* 1: Vulnerability Identification:
    - can identify vulnerabilities in your code, providing you with detailed insights into potential security risks. The results are displayed as code scanning alerts in GitHub.
    - This can help you spot security risks early in the development process, allowing you to fix them before they become a problem.


* 2: Supported Languages: 
    - supports a wide range of programming languages including C and C++, C#, Go, Java and Kotlin, JavaScript and TypeScript, Python, Ruby, and Swift.
    - Since this app primarily consists of JavaScript, you can use CodeQL to analyze your JavaScript code.

* 3: Integration with GitHub: 
    - Use CodeQL to scan your repositories.
    - The results are displayed right in GitHub, making it easy to manage and respond to identified issues.

* 4: Availability:
    -  CodeQL is available for all public repositories on GitHub.com. For private repositories, it's available for organizations that use GitHub Enterprise Cloud and have a license for GitHub Advanced Security.

* 5: External CI Systems:
    - You can run the CodeQL CLI directly in an external Continuous Integration (CI) system and upload the results to GitHub. This provides flexibility in managing your CI pipeline and integrating CodeQL into your existing workflow. 

<br>

## Sub-Topic 3 - SWOT Analysis
A SWOT analysis is a dynamic tool apply to this project and to review as you progress with your project. Revisit to assess initial assumptions to see if they still hold and to identify new opportunities and threats.

**Strengths:**

    * 1: MERN Stack: This is a popular full-stack JavaScript solution that can speed up development time due to its cohesive nature.

    * 2: API.Bible Integration: Using this will provide you with a vast amount of biblical content, which can enhance the functionality and appeal of your app.

    * 3: Unique Feature: The feature of exploring the eight prayer watches aligns with the bible scriptures is unique and can attract users looking for spiritual guidance.


**Weaknesses:**

    * 1: Complexity of MERN Stack: While this stack is powerful, it can also be complex, especially for beginners. This could potentially slow down development time.

    * 2: Dependency on API.Bible: Your app's functionality heavily depends on the API.Bible integration. Any changes or issues with the API could affect your app.


**Opportunities:**

    * 1: Growing Interest in Spiritual Apps: With the increasing interest in spiritual apps, there's a growing market for your Bible app.

    * 2: Personal Devotionals: Many people use personal devotionals as a way to connect with God. Your app could fill a gap in this market by providing a unique, interactive experience.


**Threats:**

    * 1: Competition: There are many Bible apps already in the market. To stand out, your app needs to offer something truly unique.

    * 2: User Privacy Concerns: As your app will likely require user accounts, you need to ensure you handle user data responsibly to avoid privacy concerns.

<br>

## Sub-Topic 4 - Creativity & Innovation
A review of the EFF topics on 'Creativity & Innovation' and how they could be relative to this project, and guide your development process.

* 1: Fair Use: EFF advocates for fair use rights, which means that creative works should be protected, but also that they can be used in various ways without permission from the copyright holder. This is particularly relevant if your app plans to share or display any copyrighted material, such as Bible verses or images. You should ensure that your use of such material complies with fair use laws.


* 2: Open Access: EFF promotes open access to information and ideas. If your app provides access to Bible verses or teachings, it aligns with this principle. Open access ensures that the information is freely available to everyone.


* 3: Innovation: EFF supports innovation in technology. Your Bible app is an innovative project that brings together technology and spirituality. It's important to continue fostering this spirit of innovation throughout your project.


* 4: Digital Freedom: EFF fights for digital freedom, which includes the right to tinker with technology. As you develop your app, you'll likely encounter challenges and limitations. EFF's philosophy of standing up for digital freedom can provide motivation and guidance.

* 5: Digital Rights: EFF works to protect digital rights, including the right to privacy. If your app collects user data, you'll need to ensure you're handling it responsibly. This includes getting explicit consent from users and being transparent about how you're using their data.

<br>

## Reference Links

**Resource 1: OWASP Top 10 Web App Security Risks**  
[OWASP Top Ten](https://owasp.org/www-project-top-ten/): A standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications.

**Resource 2: Code QL**    
[About code scanning with CodeQL](https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql) About code scanning with CodeQL. CodeQL is the code analysis engine developed by GitHub to automate security checks.

**Resource 3: SWOT Analysis**
[SWOT Analysis Explained – Forbes Advisor](https://www.forbes.com/advisor/business/what-is-swot-analysis/) A SWOT analysis is a framework used in a business’s strategic planning to evaluate its competitive positioning in the marketplace.

**Resource 4: Creativity & Innovation**
[Creativity & Innovation | Electronic Frontier Foundation](https://www.eff.org/issues/innovation) Creativity & Innovation Our digital future depends on our ability to access, use, and build on technology. 
