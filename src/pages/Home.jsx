import { useEffect, useState } from 'react';
import Card from '../components/Card';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const apiUrl = 'https://dummyjson.com/products';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
        console.log(products);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError(true);
      });
  }, []);

  return (
    <div className="flex flex-col items-center md:justify-center w-full md:w-3/4 p-6 md:pl-2 md:pr-5 md:py-5 bg-[#FCFBFC] rounded-md">
      <div className="flex flex-col flex-grow justify-start w-full bg-white border border-gray-500 shadow-sm rounded-md">
        {error ? (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <p className="text-2xl font-semibold">Error fetching data 😔</p>
          </div>
        ) : (
          <div className="flex flex-row flex-wrap gap-4 w-full justify-start px-5 py-4">
            {products.map((product) => (
              <Card key={product.id} product={product}/>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
