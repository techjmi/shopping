import React, { useEffect, useState, useCallback } from "react";
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Data
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [featuredRes, categoriesRes, arrivalsRes] = await Promise.all([
        axios.get("https://dummyjson.com/products?limit=5"),
        axios.get("https://dummyjson.com/products/categories"),
        axios.get("https://dummyjson.com/products?limit=4&sort=id,desc"),
      ]);

      setFeatured(featuredRes.data.products);
      setCategories(categoriesRes.data);
      setNewArrivals(arrivalsRes.data.products);
    } catch (error) {
      setError("Failed to fetch data. Please try again.");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-red-600 text-center py-10">{error}</p>;

  return (
    <div className="container mx-auto px-4">
      <CarouselPart featured={featured} />
      <Products />
      <FlashDeals featured={featured} />

      {/* New Arrivals Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
