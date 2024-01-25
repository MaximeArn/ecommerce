# Documentation

## Project Overview :

This project is only a way to train myself by building an interesting and challenging project. It implements my [node authentication system](https://github.com/MaximeArn/node_auth). The server is constructed using Express and interacts with a MongoDB database through Mongoose.

I made it mainly to train my backend skills that's why I used ChatGpt to feed my database of `items` and to create the biggest part of the views's structure and layout.

## Features :

### User :

- Register
- Log in
- Navigate on home page
- search items using searchBar
- Consult item details
- Add item to cart
- Consult cart's summary page
- Remove item from cart
- Empty cart
- Log out

### Seller :

- _All user's features_
- Consult seller page (listing seller's items)
- Edit an existing item
- Delete an existing item
- Create a new item

### Admin :

- _All user's features_
- Access to admin part (empty page for the demo )

## How to test :

visit _[ecommerce](https://ecommerce-lk8b.onrender.com/)_ (note that as it is hosted on a free tier the first request you will make will probably start the server that is sleeping because of inactivity so just be patient let it the time to wake up and then test it)

You can create a new user by your own by registering but if you want to test admin and sellers function you have to use these following credentials :

**Admin :**

```
username : admin
password : Admin
```

**Seller :**

```
username : bookseller
password : Bookseller
```

### searching feature :

When you search using the searchBar it is trying to fetch items by name and if there is no results it is searching by tags.
So if you want to test it I advice you to search for tags that belongs to multiple articles : `books` , `electronics`, `clothing`

### Bugs :

if you find any bug during your test you can send it to me by mail : `arnould.maxime1907@gmail.com`
