import {
  capitalize,
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
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonInfo } from "../../middleware/actions/pokemon";
import getPokemonColor from "../../utils/getPokemonColor";

const parseRawPokemon = (rawPokemon) => {
  const name = capitalize(rawPokemon.name);
  const types = rawPokemon.types.map(
    (typeItem) => `${typeItem.type.name.toUpperCase()}`
  );
  const color = getPokemonColor(types[0]);
  const imageURL = rawPokemon.sprites.front_default;
  return {
    id: rawPokemon.id,
    name,
    color,
    types,
    imageURL,
  };
};

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
  const dispatch = useDispatch();
  const [localState, setLocalState] = useState({
    pokemon: {
      types: [],
      imageURL: "",
      name: "",
    },
  });
  const classes = useStyles({ color: localState?.pokemon?.color });

  useEffect(() => {
    if (pokemon.url) {
      dispatch(
        getPokemonInfo(pokemon?.url, {}, (data) => {
          const pokemon = parseRawPokemon(data);
          console.log(pokemon);
          setLocalState({
            pokemon,
          });
        })
      );
    }
  }, []);

  const {
    pokemon: { types, imageURL, name },
  } = localState;

  return (
    <Grid item  xs={12} md={6} lg={4} key={name}>
      <Card className={classes.container}>
        <CardContent>
          <CardHeader
            title={
              <Typography className={classes.name} variant="h4">
                {name}
              </Typography>
            }
          />
          <CardMedia>
            <img className={classes.image} src={imageURL} alt={name} />
          </CardMedia>
          <CardActions>
            {Array.isArray(types) &&
              types.map((type) => (
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
