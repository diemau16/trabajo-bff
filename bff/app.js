const fs = require('fs');
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get('/pokemon-species', async (req, res) => {
  try {
    const species = await axios.get('https://pokeapi.co/api/v2/pokemon-species/?limit=100');
    res.send(species.data);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while fetching data from PokeAPI' });
  }
});

app.get('/pokemon-species/:id', async (req, res) => {
  try {
    const species = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${req.params.id}`);
    res.send(species.data);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while fetching data from PokeAPI' });
  }
});

app.get('/move', async (req, res) => {
  try {
    const move = await axios.get(`https://pokeapi.co/api/v2/move/?limit=100`);
    res.send(move.data);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while fetching data from PokeAPI' });
  }
});

app.get('/move/:id', async (req, res) => {
  try {
    const move = await axios.get(`https://pokeapi.co/api/v2/move/${req.params.id}`);
    res.send(move.data);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while fetching data from PokeAPI' });
  }
});

app.get('/berry', async (req, res) => {
  try {
    const evolutionChain = await axios.get(`https://pokeapi.co/api/v2/berry/?limit=100`);
    res.send(evolutionChain.data);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while fetching data from PokeAPI' });
  }
});

app.get('/berry/:id', async (req, res) => {
  try {
    const evolutionChain = await axios.get(`https://pokeapi.co/api/v2/berry/${req.params.id}`);
    res.send(evolutionChain.data);
  } catch (error) {
    res.status(500).send({ error: 'An error occurred while fetching data from PokeAPI' });
  }
});

module.exports = app; // Exporta la aplicación