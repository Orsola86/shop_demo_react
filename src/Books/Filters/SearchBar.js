import React, { useContext } from "react";
import { Input, InputLabel, InputAdornment, FormControl } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { AppContext } from "../../App";
import { SEARCH_BOOK } from "../../actions";

export default function SearchBar() {
  const [state, dispatch] = useContext(AppContext);
  console.log(state);
  return (
    <FormControl variant="standard" className="custom-input">
      <InputLabel htmlFor="input-with-icon-adornment">Search a book</InputLabel>
      <Input
        id="input-with-icon-adornment"
        name="name"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        onChange={(event) =>
          dispatch({
            type: SEARCH_BOOK,
            payload: {
              filter: state.filters.category,
              word: event.target.value,
            },
          })
        }
      />
    </FormControl>
  );
}
