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
  - [x] display a pop up to either show the cart or continue shopping.
  - [x] Add a link to user's cart in navbar.
  - [x] Create a carteDetail view
  - [x] On server side when cart is populated group same items in arrays to return an array of arrays.
  - [x] map on this array of itemGroup, display a line per itemGroup and set amount on itemGroup.length.
  - [x] Return also a "total" calculated on server side.
  - [x] Write methods for increment and decrement methods.
  - [x] Add a "Empty Cart" button at the end of the cartDetail view
  - [x] Link it to a emptyCart method.

- ### Third Phase : Seller part

  - [x] Add a "seller" role in user model
  - [x] Depending on status display a "myItems" nav link in navbar.
  - [x] implement a seller middleware that autorize only sellers
  - [ ] on myItems return a view that map on items that belongs to the user
  - [ ] allow user to modify the item
  - [ ] allow user to delete the item
  - [ ] allow user to add an item

- ### Fourth phase : Admin part.

  - [x] In home view if user is admin add a /admin link in navbar
  - [ ] Create a addItem page.
  - [ ] Link it to a corresponding method.
  - [x] Create an error 403 view
  - [x] in admin middleware render this view

- ### Fifth phase : Search bar.

  - [ ] Design a searchBar in the navbar
  - [ ] On submit make a request to filter items.
  - [ ] On server side get revelant items based on either tags or name or description.
  - [ ] Return a searchResults view that maps on the response.

- ### Sixth phase : code refacto.

  - [ ] Check if it is possible to factorize some html using ejs partials
  - [ ] sort controllers methods

- ### Last phase :
  - [ ] write a documentation
  - [ ] host it
  - [ ] GOT IT !
