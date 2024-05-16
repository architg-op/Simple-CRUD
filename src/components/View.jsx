import { useState } from 'react';
// import ViewData from './ViewData';
import { useContext } from 'react';
import { MyContext } from '../MyContext';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function View() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [weight, setWeight] = useState('');
  const { items, setItems } = useContext(MyContext);

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

  const resetAll = (e) => {
    setFirstName('');
    setLastName('');
    setAge('');
    setEmail('');
    setWeight('');
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <Box
          // component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          autoComplete="off"
          onSubmit={formSubmit}
        >
          <br />

          <TextField
            id="standard-basic"
            variant="standard"
            type="text"
            label="First Name"
            name="firstName"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
          <br />

          <TextField
            id="standard-basic"
            variant="standard"
            type="text"
            label="Last Name"
            name="lastName"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
          <br />

          <TextField
            id="standard-basic"
            variant="standard"
            type="number"
            label="Age"
            name="age"
            value={age}
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
          <br />

          <TextField
            id="standard-basic"
            variant="standard"
            type="email"
            label="Email"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <br />

          <TextField
            id="standard-basic"
            variant="standard"
            type="number"
            label="Weight"
            name="weight"
            value={weight}
            onChange={(event) => {
              setWeight(event.target.value);
            }}
          />
          <br />
          <br />

          <Stack spacing={2} direction="row">
            <Button variant="outlined" type="submit">
              Submit
            </Button>
            <Button variant="outlined" type="reset" onClick={resetAll}>
              Reset
            </Button>
          </Stack>
        </Box>
        <br />
        <br />
      </form>
    </div>
  );
}

export default View;
