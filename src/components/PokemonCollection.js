import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  pokemons = () => {
    return this.props.pokemons.map(poke => <PokemonCard key={poke.id} pokeObj={poke} />)
  }

  render() {
    console.log(this.props)
    return (
      <Card.Group itemsPerRow={6}>
        <h1></h1>
        {this.pokemons()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
