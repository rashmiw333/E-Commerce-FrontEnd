# E-Commerce Application

A full-stack **E-Commerce application** for browsing electronics,
managing products and categories, maintaining a wishlist and shopping
cart, managing addresses and user profile information, and placing
orders.

Built with **React JS frontend, Node.js/Express backend, MongoDB
database**, and REST APIs for product, category, and order management.

------------------------------------------------------------------------

## Quick Start

### Frontend

``` bash
git clone https://github.com/rashmiw333/E-Commerce-FrontEnd
cd E-Commerce-FrontEnd
npm install
npm run dev
```

### Backend

``` bash
git clone https://github.com/rashmiw333/E-Commercebackend
cd E-Commercebackend
npm install
node index.js
```

Make sure the MongoDB connection and required environment variables are
configured before starting the backend.

------------------------------------------------------------------------

## Technologies

-   React JS
-   React Router
-   JavaScript
-   HTML
-   CSS
-   Bootstrap
-   Context API
-   React Hooks
-   Node.js
-   Express
-   MongoDB
-   Mongoose
-   REST APIs
-   Vercel

------------------------------------------------------------------------

## Features

### Home Page

-   Display products and categories.
-   Provide navigation to different sections of the application.
-   Provide access to product search and shopping features.

### Product Listing

-   Display a list of available electronics products.
-   Search products.
-   Filter products by category.
-   Filter products by ratings.
-   Sort products by price.
-   View product details.
-   Add products to the cart.
-   Add products to the wishlist.

### Product Details

-   View detailed information about a product.
-   Display product image, name, description, price, category, and
    rating.
-   Add products to the cart.
-   Add products to the wishlist.

### Search

-   Search for products separately by product information.
-   Display matching products based on the search input.

### Wishlist

-   Add products to the wishlist.
-   Remove products from the wishlist.
-   Move products from the wishlist to the cart.
-   If a product already exists in the cart, moving it from the wishlist
    increases its cart quantity.

### Cart Management

-   Add products to the cart.
-   Increase or decrease product quantity.
-   Remove products from the cart.
-   Calculate cart totals.
-   Manage cart state using React Context API.
-   Display cart status/count in the navigation bar.

### Address Management

-   Add and manage delivery address information during the shopping
    flow.

### User Profile

-   Provide a user profile section for managing user information.

### Checkout & Orders

-   Review cart items before checkout.
-   Place an order after successful checkout.
-   Save completed orders in the backend.
-   Fetch stored orders through the orders API.

### Loading & Alerts

-   Display loading states while data is being fetched.
-   Display alerts/notifications for important user actions and errors.

------------------------------------------------------------------------

## Shopping Flow

``` text
Home
  ↓
Product Listing
  ↓
Product Details
  ↓
Add to Wishlist / Cart
  ↓
Cart
  ↓
Address
  ↓
Checkout
  ↓
Order Placed
```

------------------------------------------------------------------------

## API Reference

### Products

#### POST `/api/products`

Create a new product.

#### GET `/api/products`

Get all products.

The response contains products inside the `data.products` property.

Example response structure:

``` json
{
  "data": {
    "products": []
  }
}
```

#### GET `/api/products/:productId`

Get details of a single product by its ID.

Example response structure:

``` json
{
  "data": {
    "product": {}
  }
}
```

------------------------------------------------------------------------

### Categories

#### POST `/api/categories`

Create a new category.

#### GET `/api/categories`

Get all categories.

The response contains categories inside the `data.categories` property.

Example response structure:

``` json
{
  "data": {
    "categories": []
  }
}
```

#### GET `/api/categories/:categoryId`

Get details of a single category by its ID.

Example response structure:

``` json
{
  "data": {
    "category": {}
  }
}
```

------------------------------------------------------------------------

### Orders

#### POST `/api/orders`

Create and save a new order.

Example request structure:

``` json
{
  "items": [],
  "totalAmount": 0
}
```

Example response structure:

``` json
{
  "message": "Order placed successfully.",
  "data": {}
}
```

#### GET `/api/orders`

Get all stored orders.

Products inside order items are populated from the Product collection.

Example response structure:

``` json
{
  "message": "Orders fetched successfully.",
  "data": {
    "orders": []
  }
}
```

------------------------------------------------------------------------

## Backend Structure

The backend uses separate Mongoose models for the main e-commerce
entities:

``` text
models/
├── product.model.js
├── category.model.js
└── order.model.js
```

The Express server provides REST APIs for:

-   Products
-   Categories
-   Orders

MongoDB is used for persistent application data, with Mongoose used for
database operations.

------------------------------------------------------------------------

## Frontend Highlights

The React frontend uses:

-   React Router for application navigation.
-   React Context API for shared cart/product state.
-   React Hooks for managing component state and application behavior.
-   Reusable components for product and shopping features.
-   Bootstrap for responsive UI.
-   REST API integration with the Node.js/Express backend.

------------------------------------------------------------------------

## Repository and Deployment Links

### Frontend

GitHub Repository:

https://github.com/rashmiw333/E-Commerce-FrontEnd

Vercel Deployment:

https://e-commerce-front-end-tawny.vercel.app/

### Backend

GitHub Repository:

https://github.com/rashmiw333/E-Commercebackend

Vercel Deployment:

https://e-commerce-rouge-chi-18.vercel.app/

------------------------------------------------------------------------

## Contact

For bugs or feature requests, please reach out to:

**rashmiwankhade99@gmail.com**
