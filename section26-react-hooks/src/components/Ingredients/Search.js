import React, { useState, useEffect, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState('');
  const inputRef = useRef()

  useEffect(() => {

    const timer = setTimeout(() => {
      const query = enteredFilter.length === 0 ? '' : `?orderBy="title"&equalTo="${enteredFilter}"`;
      console.log(enteredFilter,inputRef.current.value);

      if (enteredFilter === inputRef.current.value) {
        fetch('https://react-hooks-update-75e95-default-rtdb.firebaseio.com/ingredients.json' + query)
          .then((response) => response.json())
          .then((responseData) => {
            const loadedIngredients = [];
            for (const key in responseData) {
              loadedIngredients.push({
                id: key,
                title: responseData[key].title,
                amount: responseData[key].amount
              });
            }
            //onLoadIngredients(loadedIngredients);
            onLoadIngredients(loadedIngredients);
          });
      }
    }, 500);

    return () => { 
      clearTimeout(timer);
    };
  }, [enteredFilter, onLoadIngredients, inputRef])

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text"
            ref={inputRef}
            value={enteredFilter}
            onChange={event => setEnteredFilter(event.target.value)} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
