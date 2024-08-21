# Vue App

This is a simple Vue.js project. It allows users to sign up, log in, create tasks, and manage their accounts. The app is built with modern tools like Pinia for state management, Tailwind CSS for design, and TypeScript for better code quality.


## Project Setup

In this app, I used Pinia for managing the app’s state because it makes it easy to control data in one place. Pinia allows the logic to be centered in one spot, making it easier to manage the state of different components and update or maintain the app.

I also used Vue Router for navigating between different pages of the app and to ensure security. It helps in preventing unauthorized users from accessing protected pages.

For forms, I implemented validation to check the data entered by users, ensuring they input correct information. This keeps users informed if they enter something wrong by showing warnings.

The Composition API is used to simplify the code, making it easier for developers to maintain and understand. The app is split into components, with business logic centralized in the state manager to keep components independent and reusable.

Tailwind CSS was used for styling the app. It is a powerful tool for quickly designing UI components.

To secure user data, token-based authorization and password encryption were implemented. Each user has a unique ID, and during login, they receive a special token. Passwords are encrypted to protect their data.

## Implementation Details

- Each user has a unique ID and token.
- User passwords are encrypted.
- Tasks are filtered by the user ID.
- Registration checks if the email is already in use.

## Decisions Made

- Created utility functions for secure user login, password encryption, and token generation.
- Separated validation and security logic for reuse in different parts of the app.
- Built reusable input components.
- Leveraged TypeScript for stability.
- Tailwind CSS was used for better visuals.
- Added the ability to delete a user account if needed.
