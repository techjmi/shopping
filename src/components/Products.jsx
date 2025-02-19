import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import CardSkeleton from '../skeleton/CardSkeleton';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOption, setSortOption] = useState('');
  // const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const productsRes = await axios.get(`https://dummyjson.com/products?limit=20`);
        const categoriesRes = await axios.get('https://dummyjson.com/products/categories');
        
        setProducts(productsRes.data.products);
        setFilteredProducts(productsRes.data.products);
        setCategories(categoriesRes.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = products.filter(product => 
      (!selectedCategory || product.category === selectedCategory) &&
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (sortOption === 'priceLow') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceHigh') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'newest') {
      filtered.sort((a, b) => b.id - a.id);
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, sortOption, products]);

  return (
    <div className="container mx-auto mb-12">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      
      {/* Filters */}
      <div className="flex gap-4 mb-4 flex-col md:flex-row">
        <select onChange={(e) => setSelectedCategory(e.target.value)} className="p-2 border rounded">
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category.slug} value={category.slug}>{category.name}</option>
          ))}
        </select>
        
        <input type="range" min="0" max="1000" value={priceRange[1]} 
          onChange={(e) => setPriceRange([0, parseInt(e.target.value)])} />

        <select onChange={(e) => setSortOption(e.target.value)} className="p-2 border rounded">
          <option value="">Sort By</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="newest">Newest</option>
        </select>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => <CardSkeleton key={index} />)
          : filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default Products;
