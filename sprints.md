# features to integrate :

- ### First phase : Integrate Auth module

  - [x] Adding ejs as views engine
  - [x] Create views for register and login and render it
  - [x] On submit make request to register and log
  - [x] On login return an httpOnly cookie containing the token to access the rest of the routes.
  - [x] Add a `/home` view to redirect on if login is successfull
  - [x] Add a logout route :
    - [x] Remove the token from the cookies
    - [x] Redirect to `"/landing"`
  - [x] Add a profile route that renders a profile view with user infos
  - [x] Create a Landing page that contains links to login and register pages
  - [x] Create a error401 view

- ### Second phase :

  - [x] Create an Item model that matchs the requirements of the app
  - [x] Create a data file containing a lot of items (using chatGpt)
  - [x] Feed the db by using the data file
  - [x] On home view map on items data got from the server and display a card for each item
  - [x] On click on a card display a itemDetails view with dynamics details from the server
  - [x] Add a "Add to cart" button on this view.
  - [x] On "Add to cart" button submit make a post requets to modify the user's cart in DB.
  - [ ] display a pop up to either show the cart or continue shopping.

- ### Last phase :
  - [] write a documentation
  - [ ] host it
  - [ ] GOT IT !
