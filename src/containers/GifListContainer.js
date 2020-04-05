import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
    constructor(){
        super()

        this.state ={
            gifs: [],
         
        }
    }

  componentDidMount(){
    this.getGifs()
  }

 


  getGifs = (search = "dolphins") => {
  
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=bwaOJwQNytrhqklpfqwwn4evhwjuUz34&rating=g`)
    .then((res)=> {return res.json()})
    .then((gifs)=> {
        this.setState({
            gifs: gifs.data.slice(0,3)
        })
    })
  }






  render(){
   
      return (
          <div>
              <GifSearch handleGetGifs= {this.getGifs}/>
              <GifList gifs={this.state.gifs}/>
          </div>
      )
  }
}