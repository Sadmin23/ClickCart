import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { selectRangeValues, setRangeValues } from '../redux/filter/rangeSlice';

export default function RangeSlider() {
  const dispatch = useDispatch();
  const value = useSelector(selectRangeValues);

  const handleChange = (event, newValue) => {
    dispatch(setRangeValues(newValue));
  };

  return (
    <Slider
      value={value}
      min={10}
      max={1800}
      onChange={handleChange}
      disableSwap = {true}
      valueLabelDisplay="auto"
      sx={{
        '& .MuiSlider-track': {
          backgroundColor: '#F97316',
        },
        '& .MuiSlider-thumb': {
          color: '#F97316',
        },
        '& .MuiSlider-rail': {
          color: '#F97316',
        },
      }}
    />
  );
}