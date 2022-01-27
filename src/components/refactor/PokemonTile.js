import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useGetPokemonByIdQuery } from "../../api";

const useStyles = makeStyles((theme, props) => ({
  name: {
    fontWeight: "bold",
    color: "#fff",
  },
  container: {
    height: "100%",
    backgroundColor: (props) => `${props.color}`,
    boxSizing: "border-box",
  },
  image: {
    height: "300px",
  },
  typeContainer: {
    backgroundColor: "#ffffff28",
    fontWeight: "bold",
    color: "#fff",
  },
}));


const PokemonTile = ({ pokemon }) => {
  // this one has a paramater 
  const { data } = useGetPokemonByIdQuery(pokemon.url);
  const classes = useStyles({ color: data?.color });

  return (
    <Grid item xs={3} key={pokemon?.name}>
      <Card className={classes.container}>
        <CardContent>
          <CardHeader
            title={
              <Typography className={classes.name} variant="h4">
                {data?.name}
              </Typography>
            }
          />
          <CardMedia>
            <img
              className={classes.image}
              src={data?.imageURL}
              alt={data?.name}
            />
          </CardMedia>
          <CardActions>
            {Array.isArray(data?.types) &&
              data?.types.map((type) => (
                <Chip
                  size="medium"
                  className={classes.typeContainer}
                  label={type}
                />
              ))}
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PokemonTile;
