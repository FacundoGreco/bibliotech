# BiblioTech
BiblioTech is a book eCommerce for my ReactJS course at CoderHouse.

## Preview
![Bibliotech-min](https://user-images.githubusercontent.com/52587113/134412606-f58c1d81-28f4-41b4-a8ad-36277983946c.gif)


## Functionalities
### Homepage 
- Shows the list of books, divided into categories, which are the literary genres.
- Each book is a card with an image of its cover, the title, price and a button to see more details.
### Details
- In the book details page you can read a description of it and add the book to the cart, with a counter to select quantity.
- The counter max number is the stock quantity.
- When the item is added, it notifies it to the user, and displays a button to go to the cart.
- When the item is out of stock, you can't add it to the cart.
### Contact
- Contains two formularies, one for book requests and the other for consults and suggestions.
### Categories
- Displays a dropdown menu with the list of categories.
- When a category is selected, it shows only the list of books filtered by that genre.
### Cart
- Cart items are saved in localStorage.
- Shows items added to card using and Item component.
- Each item shows its title, quantity, subtotal price and a remove button.
- The item can be removed from the cart, and its quantity can be updated.
- It shows total at the bottom.
### Checkout
- It has a form which ask for name, mail and phone number. Its values has a simple validation.
- When you click pay, an order is created and sent to firebase firestore, showing the user the order ID.
- After payment, the cart is cleaned and stock is discounted.
### Admin
- It has a login, which validates username and password.
- When logged, displays Stock Panel, where you can modify stocks.

## Instalation

1. Fork and clone this repository.
2. Install dependencies running in the terminal:
   ```
   npm install
   ``` 
3. Run the project with: 
   ```
   npm start
   ```
## Dependencies
- Firebase: to store data.
- gh-pages: for deployment.
- node-sass: to make react able to recognize scss files.
- react-router-dom: for navigation.
- react-icons: for some icon components.
