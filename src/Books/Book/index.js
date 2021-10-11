import React from "react";
import {
  Button,
  CardActionArea,
  CardActions,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function Book({ id, cover, title, price, stock, category }) {
  return (
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 345 }} variant='outlined'>
        <CardActionArea>
          <CardMedia component='img' height='250' image={cover} alt={title} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h5'>
              {title?.toUpperCase()}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Dolor excepteur irure consectetur velit ullamco labore ullamco
              consectetur. Laborum dolor nostrud commodo quis proident ea esse
              sunt dolore ut.
            </Typography>
            <Chip
              label={category}
              size='small'
              color='secondary'
              variant='filled'
              sx={{ my: 2 }}
            />
            <List dense>
              <ListItem sx={{ padding: 0, margin: 0 }}>
                <ListItemText primary='Stock' secondary={stock} />
              </ListItem>
              <ListItem sx={{ padding: 0, margin: 0 }}>
                <ListItemText primary='Price' secondary={`${price}€`} />
              </ListItem>
            </List>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ backgroundColor: "secondary" }}>
          <Button size='small' color='primary'>
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
