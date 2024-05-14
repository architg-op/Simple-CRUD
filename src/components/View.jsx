import { useState } from 'react';
// import ViewData from './ViewData';
import { useContext } from 'react';
import { MyContext } from '../MyContext';

function View() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [weight, setWeight] = useState('');
  const { items, setItems } = useContext(MyContext);

  const valueChange = (e) => {
    if (e.target.name === 'firstName') {
      setFirstName(e.target.value);
    } else if (e.target.name === 'lastName') {
      setLastName(e.target.value);
    } else if (e.target.name === 'age') {
      setAge(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'weight') {
      setWeight(e.target.value);
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');

    setItems([
      ...items,
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        weight: weight,
        age: age,
      },
    ]);
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        First Name:{' '}
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={valueChange}
        />
        <br />
        <br />
        Last Name:{' '}
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={valueChange}
        />
        <br />
        <br />
        Age:{' '}
        <input type="number" name="age" value={age} onChange={valueChange} />
        <br />
        <br />
        Email:{' '}
        <input type="email" name="email" value={email} onChange={valueChange} />
        <br />
        <br />
        Weight:{' '}
        <input
          type="number"
          name="weight"
          value={weight}
          onChange={valueChange}
        />
        <br />
        <br />
        <button type="Submit" name="Submit" value="Submit">
          Submit
        </button>
        <br />
        <br />
      </form>
    </div>
  );
}

export default View;
