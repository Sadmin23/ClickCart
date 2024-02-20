import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { selectRangeValues, setRangeValues } from '../redux/user/rangeSlice';

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
      valueLabelDisplay="auto"
      sx={{
        '& .MuiSlider-track': {
          backgroundColor: '#FFA500',
        },
        '& .MuiSlider-thumb': {
          color: '#FFA500',
        },
        '& .MuiSlider-rail': {
          color: '#FFA500',
        },
      }}
    />
  );
}