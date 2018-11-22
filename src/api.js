import * as path from 'path';

const apiBaseUrl = 'http://localhost:5000'
const gameBaseUrl = path.join(apiBaseUrl, 'game');

const api = {
  createGame: function (rows, cols) {
    const body = JSON.stringify({
      rows,
      cols
    });

    return fetch(gameBaseUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body
    })
      .then((response) => response.json())
      .catch(handleNetworkError)
  },
  
  updateGame (gameId, action, location) {
    const body = JSON.stringify({
      gameId,
      action,
      location
    });

    return fetch(gameBaseUrl, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body
    })
      .then((response) => response.json())
      .catch(handleNetworkError)
    
  }
}

function handleNetworkError (error) {
  // TODO => handle network error.
  console.error('NetworkError', error);
}

export default api;