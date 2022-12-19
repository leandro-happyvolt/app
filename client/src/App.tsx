import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";

interface Product {
  name: string;
  price: number;
  envMode: string;
}

// Se podría agregar axios interceptor
// Abort request para no sobre cargar el servidor
// Obviamente que modularizar esto
const App = () => {
  const REST_API = import.meta.env.VITE_REST_API;
  const MODE = import.meta.env.MODE;
  const axiosClient = axios.create({ baseURL: REST_API + "/api" });
  const config: AxiosRequestConfig = { withCredentials: true };

  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    const request = await axiosClient.get<Product[]>(REST_API + "/api/products", config);
    const response = request.data;
    setProducts(response);
  };

  useEffect(() => {
    getProducts()
    return () => {};
  }, []);

  return (
    <div>
      <h1>REST_API: {REST_API}</h1>
      <h1>MODE: {MODE}</h1>
      {products &&
        products.length > 0 &&
        products.map((p) => (
          <div>
            {p.name} {p.price} {p.envMode}
          </div>
        ))}
    </div>
  );
};

export default App;
