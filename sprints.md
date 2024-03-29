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
  - [x] on myItems return a view that map on items that belongs to the user
  - [ ] allow user to modify the item :
    - [x] implement an updateItem route
    - [x] on get return a view that contains a form
    - [x] on post (sent by the form) perform the changes
  - [x] allow user to delete the item :
    - [x] add a "delete" button at the end of the updateItem view
  - [x] allow user to add an item :
    - [x] add an addItem view
    - [x] implement a createItem method

- ### Fourth phase : Admin part.

  - [x] In home view if user is admin add a /admin link in navbar
  - [x] Create an error 403 view
  - [x] in admin middleware render this view

- ### Fifth phase : Search bar.

  - [x] Design a searchBar in the navbar
  - [x] On submit make a request to return filter items.
  - [x] On server side get revelant items based on either tags or name or description :
    - [x] First check items that includes searched term in their name
    - [x] if no results search for items that includes the searched term in their tags

- ### Sixth phase : displaing errors :

  - [x] display errors in UI :
    - [x] conditionally display an error message if ther is one.

- ### Seventh phase : code refacto.

  - [x] Search button style is broken on addItem and updateItem views
  - [x] translate every french text.
  - [x] check if every views are responsible.

- ### Last phase :
  - [ ] write a documentation
  - [ ] host it
  - [ ] GOT IT !
