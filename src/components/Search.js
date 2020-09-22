import React from 'react'


class Search extends React.Component{


  render(){
    console.log("inside Search :", this.props)

    return (
      <div className="ui search">
        <div className="ui icon input">
          <input className="prompt" value={this.props.searchValue} onChange={ (e) => {this.props.changeHandler(e)}}/>
          <i className="search icon" />
        </div>
      </div>
    )
  }
}


export default Search
