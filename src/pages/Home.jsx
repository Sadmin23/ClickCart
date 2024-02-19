import { useEffect, useState } from 'react';
import Card from '../components/Card';
import RangeSlider from '../components/RangeSlider';
import { useSelector } from 'react-redux';
import { selectRangeValues } from '../redux/user/rangeSlice';
import { searchProduct } from '../redux/user/searchSlice';

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
        console.log(searchedValue);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError(true);
      });
  }, [rangeValues, searchedValue]);

  return (
    <div className="flex flex-grow w-full lg:flex-row flex-col">
      <div className="flex flex-col items-center w-full lg:w-1/4 p-6 h-72 lg:h-80 lg:pl-6 lg:pr-2 py-5 bg-[#FCFBFC] rounder-lg ">
        <div className="flex flex-col flex-grow items-center justify-center w-full h-1/4 bg-white border border-gray-500 shadow-sm rounded-lg">
          <div className="flex flex-col w-full justify-start px-5 text-xl pt-3 font-semibold flex-grow">
            <p className="w-full ">Filters</p>
            <div className="flex w-full items-center justify-between pt-4">
              <p className="w-full text-sm ">Category</p>
            </div>
            <RangeSlider/>
          </div>
        </div>
      </div>
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
