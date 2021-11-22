import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function Search() {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={filter}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      style={{ width: 'auto' }}
      renderInput={(params) => (
        <TextField {...params} label="Search" placeholder="Filter" />
      )}
    />
  );
}

const filter = [
  { title: 'Furniture' },
  { title: 'Electronics' },
  { title: 'Kitchen' },
  { title: 'Appliances' },
  { title: 'Arts and Crafts' },
  { title: 'Clothing' },
  { title: 'Garden and Outdoors' },
  { title: 'Pet' },
  { title: 'Tools' },
  { title: 'Jewelry' },
  { title: 'Toys' },
];