import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { selectRangeValues, setRangeValues } from '../redux/user/rangeSlice';

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const dispatch = useDispatch();
  const value = useSelector(selectRangeValues);

  const handleChange = (event, newValue) => {
    dispatch(setRangeValues(newValue));
  };

  return (
    <Box>
      <Slider
        value={value}
        min={10}
        max={1500}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}