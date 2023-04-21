const getData = (onSuccess, onFail) => {
  fetch('https://swapi.dev/api/starships/')
      .then((response) => response.json())
      .then((data) => {
        onSuccess(data);
      })
      .catch(() => {
        onFail();
      });
};

export {getData};
