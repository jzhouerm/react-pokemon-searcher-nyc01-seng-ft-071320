import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokeArray: [],
    filteredArray: [],
    searchValue: ""
  }

  changeHandler = (e) => {
    console.log("James hand", e.target.value)
    this.setState({searchValue: e.target.value})
  }

  pokeFilter = () => {
    return this.state.pokeArray.filter( el => el.name.includes(this.state.searchValue))
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
        .then(response => response.json())
        .then(pokemons => this.setState({ pokeArray: pokemons}))
    }

  render() {
    console.log("inside render: " , this.state.pokeArray)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search changeHandler = {this.changeHandler} searchValue={this.state.searchValue}/>
        <br />
        <PokemonCollection pokemons = {this.pokeFilter()}/>
      </Container>
    )
  }
}

export default PokemonPage
