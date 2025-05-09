# Updating Terms with Users
## The Frontend Model
Maintaing a frontend model allows us to leave our routes intact.
It also abstracts our data so that the frontend does not have to work with any extraneous data -- users to not need to ever read or update other user data, so we prevent that data from reaching the frontend.

Route > Controller > Service > Database
Front > Front-To-Back > Back > SQL

## Handling Relationships
**Service** handles the relationship as dictated by the Controller.
I.e. for a Read route, the Service queries Terms and UserTerms.
The controller transforms both into a Frontend Term and provides it to the Route.

For an Update, the route recieves a frontend term. The controller sends a request
to both services to modify the appropriate tables.

## Backend Setup with Terms and Users
Three models: Terms, Users, UserTerms
These all filter to a single route set (Terms) because they are the only interactible component of the app in frontend.

## Updating Backend
1. Update `service` to query multiple elements **(DONE)**
   1. This requires the creation of a new "TermWithUsers" model that allows for the "payload" of multiple tables to be included (see `types/termWithUsers.ts`)
   2. Add the `include` property to the query object:
    ```ts
    export const fetchAllTerms = async(): Promise<TermWithUsers[]> => {
        return prisma.term.findMany({
            include: {
                userTerms: true
            }
        });
    }
    ```
2. Update `Controller` to accept Terms with Users as returned Data, in this case mapping to `FrontendTerms`. **(DONE)**
3. Term favourites (UserTerms) should be handled with a different service/controller/route layer. Because handling these will require the User Id, we should first find out how user requests can be authenticated.
4. **Include User Information** in requests and only allow modification of favourites from an owning user.
   1. First include logged in user data with request
   2. Figure out how to authenticate user in backend
   3. Authorize post/put methods for admins
   4. Authorize favourite/un-favourite for users
   5. Favourites are added/removed based on user id
   6. If new user found, add to db

## Building Steps
1. Update routes/controllers/services to accept user data (DONE)
2. Have frontend use and send user auth
3. Have backend middleware intercept user auth when needed at route
4. Have backend employ user id in routes