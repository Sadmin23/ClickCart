import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import { selectRangeValues } from '../redux/user/rangeSlice';
import { searchProduct } from '../redux/user/searchSlice';
import Filter from '../components/Filter';
import { Toaster } from 'react-hot-toast';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const rangeValues = useSelector(selectRangeValues)
  const searchedValue = useSelector(searchProduct)

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

        let filteredData = data.products

        filteredData = filteredData.filter(product => product.price >= rangeValues[0] && product.price <= rangeValues[1])

        filteredData = filteredData.filter(item =>
          item.title.toLowerCase().includes(searchedValue.toLowerCase())
        );

        setProducts(filteredData);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError(true);
      });
  }, [rangeValues, searchedValue]);

  return (
    <div className="flex flex-grow w-full lg:flex-row flex-col">
      <Toaster />
      <Filter/>
      <div className="flex flex-col items-center lg:justify-center w-full lg:w-3/4 p-6 lg:pl-2 lg:pr-5 lg:py-5 bg-[#FCFBFC] rounded-lg">
        <div className="flex flex-col flex-grow justify-start w-full bg-white border border-gray-500 shadow-sm rounded-lg">
          {error ? (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <p className="text-2xl font-semibold">Error fetching data 😔</p>
            </div>
          ) : (
            <div className="flex flex-row flex-wrap gap-4 w-full justify-center px-5 py-4">
              {products.map((product) => (
                <Card key={product.id} product={product}/>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
