import React from 'react';
import RemoveBtn from './RemoveBtn';
import { connect } from 'react-redux';

function AllNominatedMovies(props) {
  console.log(props.selectedMovie)
  return (

    <div>
      {props.selectedMovie.map((movie) => (
        <div className='movieBox'>
          <div className='image-container d-flex justify-content-left m-4 col-4'>
            <img src={movie.Poster} alt='movie'></img>
          </div>
          <div className='movieInfo'>
            <h4>{movie.Title}</h4>
            <p>{movie.Year}</p>
            <div className='row btncenter'>
              {<RemoveBtn movie={movie} />}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie
  };
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllNominatedMovies);
