import React from "react";
import CurrentPokemonList from "./components/current/PokemonList";
import RefactorPokemonList from "./components/current/PokemonList";
import HybridPokemonList from "./components/hybrid/PokemonList";
import { sagaMiddleware } from "./providers/store";
import rootSaga from "./middleware/sagas/rootSaga";
import { TabContext, TabPanel } from "@material-ui/lab";
import { AppBar, makeStyles, Tab, Tabs } from "@material-ui/core";

sagaMiddleware.run(rootSaga);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const App = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Current implementation" />
            <Tab label="RTK implementation" />
            <Tab label="Hybrid test" />
          </Tabs>
        </AppBar>
        <TabPanel value={0}>
          <CurrentPokemonList />
        </TabPanel>
        <TabPanel value={1}>
          <RefactorPokemonList />
        </TabPanel>
        <TabPanel value={2}>
          <HybridPokemonList />
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default App;
