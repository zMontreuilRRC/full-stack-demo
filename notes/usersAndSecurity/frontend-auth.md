# Frontend Auth
## Integrating Clerk
Using our layered architecture:

- Clerk already provides a number of hooks that we can employ in our business logic layer.
- We can use these methods to provide user data to the Service Layer for terms
- Since we don't need to directly modify or work with Users in our app, we should keep our Term service layer "pure" from user methods

## Some questions that came up
- Should we get the user's ID in FrontEnd and send it to backend, or just the user token and let backend authorize?
  - Frontend doesn't need to know the user id so it doesn't need to request it

## Clerk API
Two main methods: `useAuth()` and `useUser()`