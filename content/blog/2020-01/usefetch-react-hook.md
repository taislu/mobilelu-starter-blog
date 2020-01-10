---
title: "Create a custom useFetch() React Hook"
date: "2020-01-09"
description: The whole idea behind custom hooks is just so that we can extract component logic into reusable functions.
category: React
---

[Create a custom useFetch() React Hook](https://scotch.io/tutorials/create-a-custom-usefetch-react-hook)

Often times as we build out React applications, we see ourselves writing almost the same exact codes in two or more different components. Ideally what we could do in such cases would be to extract that recurrent logic into a reusable piece of code (hook) and reuse it where the need be.



```js
const useFetch = (url, options) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => { /* async call */
      setIsLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
        setIsLoading(false)
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []); /* run once after first mount */

  return { response, error, isLoading };
 };

```

```js
function App() {
  const res = useFetch("https://dog.ceo/api/breeds/image/random", {});
  if (!res.response) {
    return <div>Loading...</div>
  }
  const dogName = res.response.status
  const imageUrl = res.response.message
  return (
    <div className="App">
      <div>
        <h3>{dogName}</h3>
        <div>
          <img src={imageUrl} alt="avatar" />
        </div>
      </div>
    </div>
  );
}
```

