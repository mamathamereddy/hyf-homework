fetch ('https://official-joke-api.appspot.com/jokes/programming/ten')
  .then (response => response.json ())
  .then (data => {
    setTimeout (() => {
      console.log (data);
    }, 3 * 1000);
  });
