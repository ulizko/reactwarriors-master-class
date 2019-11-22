import React, { Component } from 'react';
import { API_URL, API_KEY_3 } from '../utils/api';
import MovieItem from './MovieItem';
import MoviesWillWatch from './MovieListWillWatch';
import Pagination from './Pagination';

const MoviesList = ({ movies, addToWishList, removeFromWishList }) => {
  const moviesList = movies.map(movie => {
    return (
      <MovieItem
        key={movie.id}
        movie={movie}
        addToWishList={addToWishList}
        removeFromWishList={removeFromWishList}
      />
    );
  });

  return <div className='row'>{moviesList}</div>;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      moviesWillWatch: [],
      currentPage: 1,
      totalPages: 0,
    };
  }

  componentDidMount() {
    console.log('didMount');
    this.getMovies();
  }

  getMovies = () => {
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&page=${this.state.currentPage}`
    )
      .then(response => {
        return response.json();
      })
      .then(result =>
        this.setState({
          movies: result.results,
          totalPages: result.total_pages,
        })
      );
  };

  addToWishList = movie => {
    const movieIndex = this.state.moviesWillWatch.indexOf(movie);
    if (movieIndex < 0) {
      this.setState(prevState => {
        return { moviesWillWatch: [...prevState.moviesWillWatch, movie] };
      });
    }
  };

  removeFromWishList = movie => {
    this.setState(prevState => {
      return {
        moviesWillWatch: prevState.moviesWillWatch.filter(
          el => el.id !== movie.id
        ),
      };
    });
  };

  changePage = page => {
    this.setState({ currentPage: page }, this.getMovies);
  };

  render() {
    const { currentPage, totalPages } = this.state;
    return (
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-9'>
            <MoviesList
              movies={this.state.movies}
              addToWishList={this.addToWishList}
              removeFromWishList={this.removeFromWishList}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              changePage={this.changePage}
            />
          </div>
          <div className='col-3'>
            <MoviesWillWatch wishList={this.state.moviesWillWatch} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
