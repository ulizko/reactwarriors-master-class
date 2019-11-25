import React, { Component } from 'react';

export default class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = { inWishList: false };
  }

  handleClick = e => {
    const { movie, removeFromWishList, addToWishList } = this.props;
    if (this.state.inWishList) {
      removeFromWishList(movie);
    } else {
      addToWishList(movie);
    }
    this.setState(prevState => ({ inWishList: !prevState.inWishList }));
  };

  render() {
    const { movie } = this.props;
    const imagePath = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const btnClass = this.state.inWishList ? 'success' : 'secondary';
    const { inWishList } = this.state;

    return (
      <div className='col-4 mb-4'>
        <div className='card' style={{ height: '100%' }}>
          <img className='card-img-top' src={imagePath} alt='' height='380px' />
          <div className='card-body'>
            <h6 className='card-title'>{movie.title}</h6>
            <div className='d-flex justify-content-between align-items-center'>
              <p className='mb-0'>Rating: {movie.vote_average}</p>
              <button
                type='button'
                className={`btn btn-${btnClass}`}
                onClick={this.handleClick}
              >
                {inWishList ? "Won't" : 'Will'} Watch
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
