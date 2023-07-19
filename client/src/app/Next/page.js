"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import api from "../unit/api";

function Next() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await api.product();
        console.log(productsData)
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex w-full items-center justify-around">
        <Link href="/Next">
          <p>Next</p>
        </Link>
        <Link href="/Next">
          <p>About Me</p>
        </Link>
      </div>

      <div>
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Next;
