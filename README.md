
# Shopping Cart App 🛒

This is a React-based shopping cart application that fetches product data from a dummy API and allows users to add/remove items from their cart. The application features product filtering, sorting, quick view, and toast notifications.

## 🚀 Tech Stack

- **Frontend:** React.js (React 19), Vite, Tailwind CSS
- **State Management:** Redux Toolkit, Redux Persist
- **Routing:** React Router DOM
- **API Handling:** Axios
- **UI Components:** React Icons, React Responsive Carousel
- **Notifications:** React Toastify

## 📌 Features

- 📦 **Product Listing:** Displays a list of products fetched from an API.
- 🔥 **Flash Deals Section:** Shows limited-time deals.
- 🔄 **Carousel Slider:** Highlights featured products.
- 🛒 **Shopping Cart:** Users can add/remove products and update quantities.
- 🔍 **Quick View:** View product details without navigating away.
- 📊 **Sorting & Filtering:** Products can be filtered by category and price.
- 🔔 **Toast Notifications:** Provides feedback for actions (e.g., item added to cart).
- ⚡ **Lazy Loading & Suspense:** Improves performance.

## 🏗 Folder Structure

```
/src
├── assets/                 # Static assets (images, icons, etc.)
├── components/             # UI components (Navbar, ProductCard, etc.)
│   ├── CarouselPart.jsx
│   ├── FlashDeals.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── Products.jsx
│   ├── QuickView.jsx
├── pages/                  # Page components (Home, Cart)
│   ├── Cart.jsx
│   ├── Home.jsx
├── redux/                  # Redux store and slices
│   ├── cartSlice.js
│   ├── store.js
├── skeleton/               # Skeleton loaders for UI components
│   ├── CardSkeleton.jsx
│   ├── FlashDealsSkeleton.jsx
├── App.css                 # Global styles
├── App.jsx                 # Main application file
├── index.css               # CSS for styling
└── index.js                # Entry point
```

## 🛠️ Installation & Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/techjmi/shopping
   cd shopping-cart
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🌐 API Usage

- The project fetches product data from [DummyJSON API](https://dummyjson.com).
- API used: `https://dummyjson.com/products`
- Cart data: `https://dummyjson.com/carts/1`

## 🔧 Redux State Management

- **cartSlice.js**: Manages cart state (add, remove, update quantity).
- **store.js**: Configures Redux store and Redux Persist for state persistence.

## 🎯 Future Enhancements

- ✅ Authentication & User Accounts
- ✅ Payment Integration (Stripe)
- ✅ Wishlist & Order History
- ✅ Dark Mode

---

### 📜 License

This project is licensed under the MIT License.

---

**Author:** Md Shamim Akhter  
**GitHub:** [techjmi](https://github.com/techjmi)  
**Portfolio:** [Visit Here](https://shamim-portfolio-u1yp.onrender.com)  
```

