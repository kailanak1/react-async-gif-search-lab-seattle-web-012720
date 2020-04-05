
import React from 'react'

export default class GifList extends React.Component {

  
    displayGifs = () => {
        let gifs = this.props.gifs
        return gifs.map((gif)=> {
            return <li><img src={gif.images.original.url}></img></li>
        })
    }

    render(){

        return(
            <div>
            <ul>
                {this.displayGifs()}
            </ul>
        </div>
        )
    
    }

}