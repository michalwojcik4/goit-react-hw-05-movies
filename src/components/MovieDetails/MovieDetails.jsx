import React, { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { useMovieAPI } from '../../api/api';

import { Loader } from 'components/Loader/Loader';

import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { getMovieDetails } = useMovieAPI();
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [getMovieDetails, movieId]);

  return (
    <div className={css.container}>
      {movieDetails ? (
        <div className={css.box}>
          <div className={css.details}>
            {movieDetails.poster_path ? (
              <img
                className={css.details__img}
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt={movieDetails.title}
              />
            ) : (
              <div className={css.list__noimg}>
                <p>No Image</p>
              </div>
            )}

            <div className={css.details__context}>
              <h2>
                {movieDetails.title}{' '}
                <span>({movieDetails.release_date.slice(0, 4)})</span>
              </h2>
              <p className={css.details__vote}>
                {Math.round(movieDetails.vote_average * 10) / 10}
              </p>
              <h3>Overview</h3>
              <p>{movieDetails.overview}</p>
              <h3>Genres</h3>
              <p>{movieDetails.genres.map(genre => genre.name).join(' | ')}</p>
            </div>
          </div>
          <ul className={css.more_info_list}>
            <li>
              <NavLink
                to="cast"
                className={css.more_info_list__link}
                style={props => {
                  return {
                    color: props.isActive ? '#FFF' : '#000',
                    backgroundColor: props.isActive
                      ? 'rgb(72, 103, 195)'
                      : '#FFF',
                  };
                }}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to="reviews"
                className={css.more_info_list__link}
                style={props => {
                  return {
                    color: props.isActive ? '#FFF' : '#000',
                    backgroundColor: props.isActive
                      ? 'rgb(72, 103, 195)'
                      : '#FFF',
                  };
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>

          <Outlet />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MovieDetails;
