
import React from 'react'

export default class GifSearch extends React.Component {

constructor(){
    super()
    
    this.state ={
        search: ""
    }
}

handleSubmit = event => {
    event.preventDefault()
    this.props.handleGetGifs(this.state.search)
}


render(){

    return(
        <form onSubmit={this.handleSubmit}>
            <label>Search
            <input type="text" value={this.state.search} onChange={event => this.setState({search: event.target.value})} />
            </label>
    
        
        </form>
    )

}
    
}