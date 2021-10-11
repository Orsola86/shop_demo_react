import React from "react";
import {
  Box,
  Typography,
  Divider,
  ListItem,
  ListItemText,
  List,
  IconButton,
  Chip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { CLOSE_BAKET } from "../actions";

export default function Basket({ state, dispatch }) {
  console.log(state);
  return (
    <Box
      sx={{
        width: "50%",
        height: "100%",
        bgcolor: "primary.dark",
        position: "fixed",
        top: 0,
        left: 0,
        padding: "30px",
        color: "white",
        transform: state.opened ? "translateX(0)" : "translateX(-100%)",
        transition: "all 0.3s ease",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CloseIcon
          sx={{ position: "absolute", top: 0, right: 0, cursor: "pointer" }}
          onClick={() => dispatch({ type: CLOSE_BAKET })}
        />
        <Typography variant="button" component="div">
          Your items
        </Typography>
        <List dense sx={{ mt: 5 }}>
          <ListItem
            sx={{ padding: 0 }}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteTwoToneIcon sx={{ color: "white" }} />
              </IconButton>
            }
          >
            <ListItemText primary="Book title" />
          </ListItem>
          <Divider
            sx={{ borderColor: "white" }}
            onClick={() => dispatch({ type: CLOSE_BAKET })}
          />
        </List>
        <Chip sx={{ mt: 5 }} color="secondary" label="TOTAL PRICE 20" />
      </Box>
    </Box>
  );
}
