import React, { useContext } from "react";
import { Container, Grid } from "@mui/material";
import Book from "./Book";
import Filters from "./Filters";
import { AppContext } from "../App";

export default function Books() {
  const [state] = useContext(AppContext);
  const { filteredBooks } = state.books;

  return (
    <Container fixed sx={{ mt: 4 }}>
      <Filters
      //selectedFilter={selectedFilter} selectFilter={selectFilter}
      />
      <Grid container spacing={2}>
        {filteredBooks?.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </Grid>
    </Container>
  );
}
