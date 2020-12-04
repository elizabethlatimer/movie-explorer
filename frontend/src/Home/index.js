import React, { useState, useContext } from 'react';
import { Form, InputGroup, Button, FormControl } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import Footer from '../Footer';
import MovieContext from '../shared/helpers/movieContext';

import background from '../shared/images/background-home.jpg';
import './Home.scss';


function Home() {
  const [formData, setFormData] = useState({ search: '' });
  const { setCurrentQuery, setMovieList } = useContext(MovieContext);
  const history = useHistory();

  function handleChange(evt) {
    let { name, value } = evt.target;
    setFormData(formData => ({ ...formData, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setCurrentQuery(formData.search);
    setMovieList(null);
    history.push('/movies');
  }

  return (
    <div className="Home">
      <img src={background}
        alt="movie projector shining light" />
      <div className="HomeSearch">
        <Form>
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
        </Form>
      </div>
      <Footer />
    </div>
  )
}

export default Home;