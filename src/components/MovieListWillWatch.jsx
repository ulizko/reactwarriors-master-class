import React, { Component } from 'react';

export default class MovieListWillWatch extends Component {
  render() {
    const movies = this.props.wishList.map(movie => {
      return (
        <li key={movie.id} className='list-group-item'>
          <div className='d-flex justify-content-between'>
            {movie.title}{' '}
            <span className='badge badge-secondary mb-auto mt-auto'>
              {movie.vote_average}
            </span>
          </div>
        </li>
      );
    });

    return (
      <div className='sidenav'>
        <h4>Will Watch: {this.props.wishList.length} movies</h4>
        <ul className='list-group'>{movies}</ul>
      </div>
    );
  }
}
