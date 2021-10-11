import React from "react";
import { Input, InputLabel, InputAdornment, FormControl } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <FormControl variant='standard' className='custom-input'>
      <InputLabel htmlFor='input-with-icon-adornment'>Search a book</InputLabel>
      <Input
        id='input-with-icon-adornment'
        name='name'
        startAdornment={
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
