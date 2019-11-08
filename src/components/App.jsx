import React, { Component } from 'react'
import { moviesData } from '../moviesData'
import MovieItem from './MovieItem'
import MoviesWillWatch from './MovieListWillWatch'



const MoviesList = ({ movies, addToWishList, removeFromWishList }) => {
  const moviesList = movies.map(movie => {
    return <MovieItem key={ movie.id } movie={movie} addToWishList={ addToWishList } removeFromWishList={ removeFromWishList }/>
  })

  return (
    <div className="row">
      { moviesList }
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { movies: moviesData, moviesWillWatch: [] }
  }

  addToWishList = (movie) => {
    const movieIndex = this.state.moviesWillWatch.indexOf(movie)
    if ( movieIndex < 0 ) {
      this.setState(prevState => {
        return { moviesWillWatch: [...prevState.moviesWillWatch, movie] }
      })
    }
  }

  removeFromWishList = (movie) => {
    this.setState(prevState => {
      return { moviesWillWatch: prevState.moviesWillWatch.filter(el => el.id !== movie.id) }
    })
  }

  render() {
    return (
      <div className='container'>
        <div className="row mt-4">
          <div className="col-9">
            <MoviesList movies={ this.state.movies } addToWishList={ this.addToWishList } removeFromWishList={ this.removeFromWishList } />
          </div>
          <div className='col-3'>
            <MoviesWillWatch wishList={ this.state.moviesWillWatch }/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
