---
title: "Using Gatsby with axios"
date: "2019-12-10"
description: It’s also possible to use an “unstructured data” approach in Gatsby sites, no GraphQL required.
category: Gatsby
---

[Gatsby without GraphQL](https://www.gatsbyjs.org/docs/using-gatsby-without-graphql/)

It’s also possible to use an “unstructured data” approach in Gatsby sites, no GraphQL required. For our purposes here, “unstructured data” means data “handled outside of Gatsby’s data layer” (**we’re using the data directly, and not transforming the data into Gatsby nodes**).

### Fetch data and use Gatsby’s createPages API

In your Gatsby project’s **gatsby-node.js** file, fetch the needed data, and supply it to the createPage action within the **createPages API**:
```
// gatsby-node.js
const axios = require('axios');

const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`);

const getPokemonData = names =>
  Promise.all(
    names.map(async name => {
      const { data: pokemon } = await get(`/pokemon/${name}`);
      const abilities = await Promise.all(
        pokemon.abilities.map(async ({ ability: { name: abilityName } }) => {
          const { data: ability } = await get(`/ability/${abilityName}`);

          return ability;
        })
      );

      return { ...pokemon, abilities };
    })
  );

exports.createPages = async ({ actions: { createPage } }) => {
  const allPokemon = await getPokemonData(['pikachu', 'charizard', 'squirtle']);

  // Create a page that lists all Pokémon.
  createPage({
    path: `/`,
    component: require.resolve('./src/templates/all-pokemon.js'),
    context: { allPokemon }
  });

  // Create a page for each Pokémon.
  allPokemon.forEach(pokemon => {
    createPage({
      path: `/pokemon/${pokemon.name}/`,
      component: require.resolve('./src/templates/pokemon.js'),
      context: { pokemon }
    });

    // Create a page for each ability of the current Pokémon.
    pokemon.abilities.forEach(ability => {
      createPage({
        path: `/pokemon/${pokemon.name}/ability/${ability.name}/`,
        component: require.resolve('./src/templates/ability.js'),
        context: { pokemon, ability }
      });
    });
  });
};

```
[full repo on github](https://github.com/jlengstorf/gatsby-with-unstructured-data)


