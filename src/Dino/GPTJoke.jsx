import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Dino.css"
// const za swa "https://swapi.def/api/people/1/"
const JokeComponent = ({count}) => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await axios.get('https://icanhazdadjoke.com/', {
          headers: { Accept: 'application/json' },
        });

        // Extract the joke from the response data
        const { joke } = response.data;
        setJoke(joke);
      } catch (error) {
        console.error('Error fetching joke:', error);
      }
    };

    fetchJoke();
  }, [count]); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div className='GPTJoke'>
      <h2>Random Dad Joke:</h2>
      <p>{joke} ispisuje {count}</p>
    </div>
  );
};

export default JokeComponent;
