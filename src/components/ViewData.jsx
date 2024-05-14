import { useContext } from 'react';
import { MyContext } from '../MyContext';

const ViewData = () => {
  const { items, setItems } = useContext(MyContext);
  console.log(items);
  const headers = ['First Name', 'Last Name', 'Age', 'Email', 'Weight'];
  return (
    <div>
      {' '}
      {headers.map((header) => ` ${header} `)}
      <br />
      {items.map(
        (item) =>
          ` ${item.firstName} ${item.lastName} ${item.age} ${item.email} ${
            item.weight
          } ${'\n'}`
      )}
      <br />
    </div>
  );
};

export default ViewData;
