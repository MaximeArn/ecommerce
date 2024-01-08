# features to integrate :

- ### First phase : Integrate Auth module

  - [x] Adding ejs as views engine
  - [x] Create views for register and login and render it
  - [x] On submit make request to register and log
  - [x] On login return an httpOnly cookie containing the token to access the rest of the routes.
  - [x] Add a home view to redirect on if login is successfull
  - [x] Add a logout route :
    - [x] Remove the token from the cookies
    - [x] Redirect to `"/landing"`
  - [x] Add a profile route that renders a profile view with user infos
  - [x] Create a Landing page that contains links to login and register pages
  - [x] Create a error401 view

- ### Last phase :
  - [] write a documentation
  - [ ] host it
  - [ ] GOT IT !
