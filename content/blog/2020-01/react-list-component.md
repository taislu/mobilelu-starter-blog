---
title: "React List Components by Example"
date: "2020-01-13"
description: This tutorial for List components in React gives you a step by step walkthrough on how to render a list of simple primitives, how to render a list of complex objects, and how to update the state of your list in React.
category: React
---

[React List Components by Example](https://www.robinwieruch.de/react-list-component)

### HOW TO DISPLAY A LIST OF ITEMS IN REACT

Since we can use **JavaScript in JSX** by using **curly braces**, we can use the built-in [JavaScript array map method](https://www.robinwieruch.de/javascript-map-array) to iterate over our list items; and to map them from JavaScript primitive to HTML elements. Each element receives a mandatory key prop:
```js
const SimpleList = () => (
  <ul>
    {['a', 'b', 'c'].map(function(item) {
      return <li key={item}>{item}</li>;
    })}
  </ul>
);
```

In the case of **declaring the list as variable**, it would look like the following:
```js
const list = ['a', 'b', 'c'];
const SimpleList = () => (
  <ul>
    {list.map(function(item) {
      return <li key={item}>{item}</li>;
    })}
  </ul>
);
```

We can also use JavaScript **arrow function** to make the inline function for the map more lightweight:
```js
const list = ['a', 'b', 'c'];
const SimpleList = () => (
  <ul>
    {list.map(item => {
      return <li key={item}>{item}</li>;
    })}
  </ul>
);
```

Since we are not doing anything in the function's block body, we can also refactor it to a concise body and omit the return statement and the curly braces for the function body:
```js
const list = ['a', 'b', 'c'];
const SimpleList = () => (
  <ul>
    {list.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);
```

If we would use the List as child component in another component, we could pass the list as props to it:
```js
const mylist = ['a', 'b', 'c'];
const App = () => (
  <SimpleList list={mylist} />
);
const SimpleList = ({ list }) => (
  <ul>
    {list.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);
```

### HOW TO DISPLAY A LIST OF OBJECTS IN REACT

```js
import React from 'react';
const list = [
  {
    id: 'a',
    firstname: 'Robin',
    lastname: 'Wieruch',
    year: 1988,
  },
  {
    id: 'b',
    firstname: 'Dave',
    lastname: 'Davidds',
    year: 1990,
  },
];
const ComplexList = () => (
  <ul>
    {list.map(item => (
      <li key={item.id}>
        <div>{item.id}</div>
        <div>{item.firstname}</div>
        <div>{item.lastname}</div>
        <div>{item.year}</div>
      </li>
    ))}
  </ul>
);
export default ComplexList;
```

### REACT LIST COMPONENTS

In order to keep your React list components tidy, you can extract them to standalone component that only care about their concerns. For instance, the List component makes sure to map over the array to render a list of ListItem components for each item as child component. One little trick for [conditional rendering](https://www.robinwieruch.de/conditional-rendering-react): **If you don't know whether the incoming list is null or undefined, default to an empty list yourself**:
```js
const list = [
  {
    id: 'a',
    firstname: 'Robin',
    lastname: 'Wieruch',
    year: 1988,
  },
  {
    id: 'b',
    firstname: 'Dave',
    lastname: 'Davidds',
    year: 1990,
  },
];
const App = () => <List list={list} />;
const List = ({ list }) => (
  <ul>
    {(list || []).map(item => (
      <ListItem key={item.id} item={item} />
    ))}
  </ul>
);
const ListItem = ({ item }) => (
  <li>
    <div>{item.id}</div>
    <div>{item.firstname}</div>
    <div>{item.lastname}</div>
    <div>{item.year}</div>
  </li>
);
```

### REACT LIST: UPDATE ITEMS

#### React List: Add Item

The following List component shows a stateful managed list where it's possible to add an item to the list with a [controlled form element](https://www.robinwieruch.de/react-controlled-components):
```js
import React from 'react';
const initialList = [
  'Learn React',
  'Learn Firebase',
  'Learn GraphQL',
];
const ListWithAddItem = () => {
  const [value, setValue] = React.useState('');
  const [list, setList] = React.useState(initialList);
  const handleChange = event => {
    setValue(event.target.value);
  };
  const handleSubmit = event => {
    if (value) {
      setList(list.concat(value));
    }
    setValue('');
    event.preventDefault();
  };
  return (
    <div>
      <ul>
        {list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};
export default ListWithAddItem;
```
By using the submit button to initiate the creation of the item, the handler makes sure to add the item to the stateful list. Also the [native browser behavior is prevented](https://www.robinwieruch.de/react-preventdefault) by using the click event; otherwise the browser would refresh after the submit event.

#### React List: Update Item

The following List component shows a stateful managed list where it's possible to update an item in the list with a input element:
```js
import React from 'react';
const initialList = [
  { id: 'a', name: 'Learn React', complete: false },
  { id: 'b', name: 'Learn Firebase', complete: false },
  { id: 'c', name: 'Learn GraphQL', complete: false },
];
const ListWithUpdateItem = () => {
  const [list, setList] = React.useState(initialList);
  const handleChangeCheckbox = id => {
    setList(
      list.map(item => {
        if (item.id === id) {
          return { ...item, complete: !item.complete };
        } else {
          return item;
        }
      })
    );
  };
  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.complete}
              onChange={() => handleChangeCheckbox(item.id)}
            />
            {item.name}
          </label>
        </li>
      ))}
    </ul>
  );
};
export default ListWithUpdateItem;
```
By using the checkbox element to initiate the update of the item, the handler makes sure to toggle the boolean flag of the item in the stateful list.

#### React List: Remove Item

The following List component shows a stateful managed list where it's possible to remove an item from the list with a button element:
```js
import React from 'react';
const initialList = [
  { id: 'a', name: 'Learn React' },
  { id: 'b', name: 'Learn Firebase' },
  { id: 'c', name: 'Learn GraphQL' },
];
const ListWithRemoveItem = () => {
  const [list, setList] = React.useState(initialList);
  const handleClick = id => {
    setList(list.filter(item => item.id !== id));
  };
  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <label>{item.name}</label>
          <button type="button" onClick={() => handleClick(item.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ListWithRemoveItem;
```
By using the delete button to initiate the removal of the item, the handler makes sure to remove the item from the stateful list. React makes sure to update the list after the delete when using the function to set the state.

[react list examples](https://github.com/the-road-to-learn-react/react-list-component)




