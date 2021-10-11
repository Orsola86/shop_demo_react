import React from "react";
import { Stack, Paper, Chip } from "@mui/material";
import SearchBar from "./SearchBar";

const filters = ["All", "Design", "Mobile", "Ux", "DevOps", "Essentials"];

export default function Filters({ selectedFilter, selectFilter }) {
  return (
    <>
      <Stack direction='row' spacing={2} sx={{ my: 5 }}>
        <SearchBar />
      </Stack>
      <Stack direction='row' spacing={2} sx={{ my: 5 }}>
        {filters?.map((filter) => (
          <Chip
            key={filter}
            label={filter}
            color={selectedFilter === filter ? "secondary" : "primary"}
            onClick={() => selectFilter(filter)}
            variant={selectedFilter === filter ? "filled" : "outlined"}
          />
        ))}
      </Stack>
    </>
  );
}
