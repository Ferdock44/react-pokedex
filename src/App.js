import React from 'react';
import './App.css';


function Pokedex(props){
  let data = [
    {name: "Bulbasaur", pokedexNumber: 1, imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png", primaryType: "grass"},
    {name: "Ivysaur", pokedexNumber: 2, imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png", primaryType: "grass"},
    {name: "Venusaur", pokedexNumber: 3, imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png", primaryType: "grass"},
    {name: "Charmander", pokedexNumber: 4, imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png", primaryType: "fire"},
    {name: "Charmeleon", pokedexNumber: 5, imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png", primaryType: "fire"},
    {name: "Charizard", pokedexNumber: 6, imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png", primaryType: "fire"},
    {name: "Squirtle", pokedexNumber: 7, imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png", primaryType: "water"},
    {name: "Wartortle", pokedexNumber: 8, imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png", primaryType: "water"},
    {name: "Blastoise", pokedexNumber: 9, imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png", primaryType: "water"},
    {name: "Caterpie", pokedexNumber: 10, imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png", primaryType: "bug"},
    {name: "Metapod", pokedexNumber: 11, imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png", primaryType: "bug"},
    {name: "Butterfree", pokedexNumber: 12, imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png", back_image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png", primaryType: "bug"},
  ];

  let pokemonList = data.map(function(pokemon){
    return <Pokemon name={ pokemon.name } pokedexNumber={ pokemon.pokedexNumber } imageUrl={ pokemon.imageUrl } back_image_url={ pokemon.back_image_url } primaryType={ pokemon.primaryType }></Pokemon>
  });

  return(
    <div>
      <h1>Pokedex</h1>
      { pokemonList }
    </div>
  )
}


class Pokemon extends React.Component{
  constructor(props){
    super(props);
    this.state = { name: props.name, pokedexNumber: props.pokedexNumber, imageUrl: props.imageUrl, back_image_url: props.back_image_url, primaryType: props.primaryType, facing: true};
    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    this.setState(
      function(state){
        return { name: state.name, pokedexNumber: state.pokedexNumber, imageUrl: state.imageUrl, back_image_url: state.back_image_url, primaryType: state.primaryType, facing: !state.facing };
      }
    )
  }

  render(){
    let image_url = this.state.facing ? this.state.imageUrl : this.state.back_image_url;
    return(
      <div className="pokemon">
        <h3>{ this.state.pokedexNumber }. { this.state.name }</h3>
        <img alt={ this.state.name } src={ image_url } onClick={ this.toggle }></img>
        <p className={ this.state.primaryType }>{ this.state.primaryType } type</p>
      </div>
      );
  }
}


function App() {
  return (
    <div className="App">
      <Pokedex></Pokedex>
    </div>
  );
}

export default App;
