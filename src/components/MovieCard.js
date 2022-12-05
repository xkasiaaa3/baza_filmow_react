import React from 'react';
import '../App.css';

const MovieCard= (props) => {
  return (
    <div className='Card'>
        <img src={props.image} alt="brak" height={200} width={200} />
        <br/>
        <div className='MovieInfo'>
        <text className='MovieTitle'>{props.title}</text><br/>
       <text className='AboutMovie'>{props.about}</text></div>
    </div>
  );
};

export default MovieCard;
