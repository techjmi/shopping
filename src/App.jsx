import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, } from 'react-redux';
import { Suspense, lazy } from 'react';
import {store,  persistor } from './redux/store';
import Navbar from './components/Navbar';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from "redux-persist/integration/react";
// Lazy Load Components
const Home = lazy(() => import('./pages/Home'));
const Cart = lazy(() => import('./pages/Cart'));

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Navbar />
        <Suspense fallback={<p className="text-center py-10">Loading...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
