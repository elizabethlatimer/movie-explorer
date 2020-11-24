import React, {useState} from 'react';
import { InputGroup, Button, FormControl } from 'react-bootstrap';

import './Home.scss';
import background from '../shared/images/background-home.jpg'


function Home({search}) {
  const [formData, setFormData] = useState({search: ''});

  function handleChange(evt) {
    let { name, value } = evt.target;
    setFormData(formData => ({ ...formData, [name]: value }));
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
            <Button variant="primary">Search</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
      Photo by Jeremy Yap on Unsplash
    </div>
  )
}

export default Home;