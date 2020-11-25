import React, { useState, useEffect, useContext } from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import './Home.scss';
import background from '../shared/images/background-home.jpg'
import MovieContext from '../shared/helpers/movieContext';


function Home() {
  const [formData, setFormData] = useState({ search: '' });
  const history = useHistory();
  const { setCurrentQuery } = useContext(MovieContext);

  function handleChange(evt) {
    let { name, value } = evt.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setCurrentQuery(formData.search);
    history.push('/movies');
  }



  return (
    <div className="Home">
      <img src={background}
        alt="books lying open layered across floor" />
      <div className="HomeSearch">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Find a Movie"
            aria-label="Find a Movie"
            aria-describedby="basic-addon2"
            value={formData.search}
            onChange={handleChange}
            name="search"
          />
          <InputGroup.Append>
            <Button variant="primary" type="submit" onClick={handleSubmit}>Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
      Photo by Jeremy Yap on Unsplash
    </div>
  )
}

export default Home;