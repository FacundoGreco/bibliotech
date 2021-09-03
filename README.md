# BiblioTech
BiblioTech is a book eCommerce for my ReactJS course at CoderHouse.

## Functionalities
### Homepage 
- Shows the list of books, divided into categories, wich are the literary genres.
- Each book is a card with an image of its cover, the title, price and a button to see more details.
- In the book details page you can read a description of it and add the book to the cart, with a counter to select quantity.
### Contact
- Contains two formularies, one for book requests and the other for consults and suggestions.
### Categories
- Displays a dropdown menu with the list of categories.
- When a category is selected, it shows only the list of books filtered by that genre.
### Cart
- Cart items are saved in localStorage.
- Shows items added to card using and Item component.
- Each item shows its title, quantity, subtotal price (not developed yet) and a remove button.
- The item can be removed from the cart, and its quantity can be updated.
- It shows total at the bottom (not developed yet).

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
