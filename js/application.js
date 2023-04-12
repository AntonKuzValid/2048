// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});

const button = document.getElementById('post-btn');

button.addEventListener('click', async _ => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
                    get: (searchParams, prop) => searchParams.get(prop),
    });
    data = {"token": params.token, "message" : "молодец ты набрал 8 очков, а здесь бы мог быть лид магнит если бы я что то продавала"}
    fetch('https://proxy-gpt.herokuapp.com/api/salesbot/message', {
      method: 'post',
      headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
       return response.json()
    })
    .then(response => {
       alert(response)
    })
    .catch(error => {
      alert(error)
    });
});