const getPokemonList = (builder) =>
  builder.query({
    // appends data to the url
    query: () => ({ url: "pokemon" }),
    // transforms the response before being send
    transformResponse: (data) => data.results,
  });

export default getPokemonList;
