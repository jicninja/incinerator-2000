# Incinerator 2000 - Mock API Error Server

  
  ![enter image description here](https://static.wikia.nocookie.net/simpsons/images/3/39/Hank_Scorpio.png)

Incinerator 2000 is a mock API server designed to simulate various error responses for testing and development purposes. This server can be used to help developers understand how their applications handle different types of errors, including hard crashes, logging all events.

Do you want to fire your app? Try https://incinerator-2000.onrender.com
  

## Table of Contents

  

-  [Features](#features)

-  [Installation](#installation)

-  [Usage](#usage)

-  [Error Responses](#error-responses)

  

## Features

  

- Simulates various HTTP error responses (e.g., 400, 401, 404, 500).

- Any route will be fired by random errors

- All data would be saved in error.log file

- Lightweight and easy to set up for local development.

  

## Installation

  

To set up the Incinerator 2000 server, follow these steps:

  

1.  **Clone the repository**:

  

```bash

git clone https://github.com/jicninja/incinerator-2000

cd incinerator-2000

```

  

2.  **Install dependencies**:

  

Ensure you have Node.js installed, then run:

  

```bash

yarn install

```

  

3.  **Start the server**:

  

```bash

npm start

```

  

The server will run on `http://localhost:3000` by default.

  

## Usage

  

Once the server is running, you can use tools like Postman or curl or connect to your current app, it will generate random errors on any endpoint




## Error Responses

* Cors Errors
* Timeout errors
* All kind of 500 and 400 errors
* Common error messages response like [object Object] or java errors
* Wrong HTML tags responses
* Delay configured
  
### Some Men Just Want to Watch the World Burn