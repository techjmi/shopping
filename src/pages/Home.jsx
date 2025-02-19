import React, { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductCard from "../components/ProductCard";
import Products from "../components/Products";
import CarouselPart from "../components/CarouselPart";
import FlashDeals from "../components/FlashDeals";

const Home = () => {
  const [featured, setFeatured] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [page, setPage] = useState(1); // track the current page
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const observerRef = useRef(null); // ref for infinite scroll detection

  // Fetch initial data
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [featuredRes, categoriesRes] = await Promise.all([
        axios.get("https://dummyjson.com/products?limit=5"),
        axios.get("https://dummyjson.com/products/categories"),
      ]);

      setFeatured(featuredRes.data.products);
      setCategories(categoriesRes.data);
    } catch (error) {
      setError("Failed to fetch data. Please try again.");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch more products on scroll
  const fetchMoreProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://dummyjson.com/products?limit=4&skip=${page * 4}`
      );

      setNewArrivals((prev) => [...prev, ...response.data.products]); 
      setPage((prev) => prev + 1);
    } catch (error) {
      setError("Failed to fetch more products.");
      console.error("Error fetching more products:", error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  // set up nObserver for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          fetchMoreProducts();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [fetchMoreProducts, loading]);

  if (error) return <p className="text-red-600 text-center py-10">{error}</p>;

  return (
    <div className="container mx-auto px-4">
      <CarouselPart featured={featured} />
      <Products />
      <FlashDeals featured={featured} />

      {/* New Arrivals Section with Infinite Scroll */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Loading Indicator */}
      {loading && <p className="text-center py-4">Loading more products...</p>}

      {/* Invisible div for IntersectionObserver */}
      <div ref={observerRef} className="h-10"></div>
    </div>
  );
};

export default Home;
