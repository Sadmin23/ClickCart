import { useEffect, useState } from 'react'
import RangeSlider from './RangeSlider'
import { useDispatch, useSelector } from 'react-redux';
import { selectRangeValues, setRangeValues } from '../redux/user/rangeSlice';

export default function Filter() {

    const dispatch = useDispatch();    
    const rangeValues = useSelector(selectRangeValues)
    const [inputMin, setInputMin] = useState(rangeValues[0]); // Initial value of the input
    const [inputMax, setInputMax] = useState(rangeValues[1]); // Initial value of the input

    useEffect(() => {
        setInputMin(rangeValues[0]);
        setInputMax(rangeValues[1]);
      }, [rangeValues]);

    const handleMinChange = (event) => {
      setInputMin(event.target.value);
    };

    const handleMaxChange = (event) => {
        setInputMax(event.target.value);
      };

    const handleSubmit = () => {
      
      dispatch(setRangeValues([inputMin, inputMax]));
    };

  return (
    <div className="flex flex-col items-center w-full lg:w-1/4 p-6 h-52 lg:pl-6 lg:pr-2 py-5 bg-[#FCFBFC] rounder-lg ">
        <div className="flex flex-col flex-grow items-center justify-center w-full h-1/4 bg-white border border-gray-500 shadow-sm rounded-lg">
          <div className="flex flex-col w-full justify-start px-5 text-xl pt-3 space-y-3 font-semibold flex-grow">
            <p className="w-full">Price</p>
            <div className='px-2'>
                <RangeSlider/>
            </div>
          </div>
          <div className='flex w-full justify-between px-5 pb-6'>
            <input 
                type="text" 
                inputMode='numeric' 
                value={inputMin}
                onChange={handleMinChange}
                onKeyDown={(e) => {if (e.key === 'Enter') {
                    handleSubmit(e)
                }}}
                className="w-20 h-10 px-3 text-center border border-gray-500 rounded-lg" 
            />
            <input 
                type="text" 
                inputMode='numeric' 
                value={inputMax}
                onChange={handleMaxChange}
                onKeyDown={(e) => {if (e.key === 'Enter') {
                    handleSubmit(e)
                }}}
                className="w-20 h-10 px-3 text-center border border-gray-500 rounded-lg" 
            />
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}
