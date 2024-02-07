This document is a template for ongoing research. Delete this first paragraph and then update the information below where indicated. 


<br>

# Project & Portfolio 

* **Research Notes - Milestone 2**
* **Pamela Fennell**
* **February 6, 2024**

<br>


## Topic - R4: Delivery
This document contains general notes related to security and compliance
- Mongoose and API endpoint integration



<br>

## Sub-Topic 1 - Mongoose and API endpoint integration
Independent research on Mongoose and API endpoint integration was instrumental in overcoming challenges. Resources such as the official Mongoose documentation, community forums, and review of previous coursework were particularly helpful. I would recommend these to future students for a deeper understanding of missed concepts as they relate to backend operations and frontend-backend communication.

<br>

**1 - Backend Access to API**

Backend:

* Manage authentication with API.
* Handle caching strategies.
* Perform data processing before sending the response to the frontend.
* Fetch data from the database without exposing sensitive data or credentials to the client-side.

Frontend:

* Receive processed data from the backend.
* Present data to the user.
* Allow user interaction, such as highlighting favorite verses or taking notes.

**2 - Frontend Access to API.Bible**

Frontend:

* Enable users to interact with content directly through the browser.
* Reduce server load by making requests from the user's device.
* Allow users to perform actions such as search, view, and listen to content.

Backend:

* Server is invoked only when users want to save preferences or bookmark content.

**3 - Differences**

Backend:

* Sensitive data and API keys are secured on the server.
* Manages interactive user experience with less server load.

Frontend:

* Provides an interactive user experience with reduced server load.
* Both coexist on the web app, with the backend acting as a middleman between the frontend and the API when necessary.

**4 - Mongoose**

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It:

* Manages relationships between data.
* Provides schema validation.
* Translates between objects in code and their representation in MongoDB.

**Backend Access to API.Bible Role of Mongoose Example Workflow:**

1. Backend receives a request from the frontend to fetch today's daily reading.
2. Mongoose checks if today's reading exists in MongoDB Atlas.
3. If not found, the backend calls API.Bible to retrieve the daily reading.
4. Backend creates a new Reading document using Mongoose and saves it to MongoDB Atlas.
5. Backend retrieves the saved Reading document and sends it to the frontend.

**Frontend Access to API.Bible Role of Mongoose Example Workflow:**

1. User selects a feature to view their daily reading in the app.
2. Frontend sends a request to the backend to retrieve the daily reading.
3. Backend checks MongoDB Atlas using Mongoose to see if the reading is available.
4. If not found, the backend fetches it from API.Bible and saves it using Mongoose.
5. Backend sends the reading to the frontend, which displays it to the user.

**Integration with API.Bible:**

* API.Bible provides external data.
* MERN app interacts with API through HTTP requests made by the backend.
* Backend handles API responses, processes data, and stores or transmits it to the frontend.
* Mongoose manages data within MongoDB Atlas, ensuring correct structure, maintaining relationships, and validating data before saving it to the database.

## Reference Links

**Resource 1**
[Using caching strategies to improve API performance](https://www.torocloud.com/blog/using-caching-strategies-to-improve-api-performance) The purpose of caching is to speed up access to the data by reducing the time it takes to retrieve it..

**Resource 2**
[Backend For Frontend Authentication Pattern](https://auth0.com/blog/backend-for-frontend-pattern-with-auth0-and-dotnet/)The backend stores the user's tokens in a cache. An encrypted cookie is issued for the frontend representing the user authentication session

**Resource 3**
[API.Bible API](https://scripture.api.bible/) Everything you need from the Bible in one discoverable place. · Multiple Bibles in one unified format · Search the Bible · Digital Bible Library

**Resource 4**
[Understanding the Connection Between Databases and APIs](https://blog.dreamfactory.com/understanding-the-connection-between-databases-and-apis/)Explore the vital connection between databases and APIs, their roles in data management, and how they work together to enhance business

**Resource 5** 
[Secure the Web with an API-Driven Backend for Frontend](https://thenewstack.io/secure-the-web-with-an-api-driven-backend-for-frontend/) An API-driven Backend for Frontend forces you to think through your current and future deployment early on to identify URLs, domains