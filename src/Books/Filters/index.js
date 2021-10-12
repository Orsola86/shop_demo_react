import React, { useContext } from "react";
import { Stack, Paper, Chip } from "@mui/material";
import SearchBar from "./SearchBar";
import { AppContext } from "../../App";
import { SELECTED_FILTER } from "../../actions";

export default function Filters() {
  const [state, dispatch] = useContext(AppContext);
  const { categories } = state.books;
  const { category } = state.filters;

  return (
    <>
      <Stack direction="row" spacing={2} sx={{ my: 5 }}>
        <SearchBar />
      </Stack>
      <Stack direction="row" spacing={2} sx={{ my: 5 }}>
        {categories?.map((filter) => (
          <Chip
            key={filter}
            label={filter}
            color={category === filter ? "secondary" : "primary"}
            onClick={() => dispatch({ type: SELECTED_FILTER, payload: filter })}
            variant={category === filter ? "filled" : "outlined"}
          />
        ))}
      </Stack>
    </>
  );
}
