import React, { useContext, useState } from 'react';
import { Navbar, FormControl,Form, InputGroup, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import MovieContext from '../shared/helpers/movieContext';

function SiteNav() {
  const [formData, setFormData] = useState({ search: '' });

  const history = useHistory();
  const { setCurrentQuery, setMovieList } = useContext(MovieContext);


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
    <Navbar bg="dark" expand="lg" className="justify-content-between">
      <Navbar.Brand><Link to="/">Movie Explorer</Link></Navbar.Brand>
        <Form inline>
          <InputGroup className="my-1">
            <FormControl
              placeholder="Find a Movie"
              aria-label="Search for a Movie"
              aria-describedby="basic-addon2"
              value={formData.search}
              onChange={handleChange}
              name="search"
              size='sm'
            />
            <InputGroup.Append>
              <Button size='sm' variant="secondary" type="submit" onClick={handleSubmit}>Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
    </Navbar>
  )
}

export default SiteNav;