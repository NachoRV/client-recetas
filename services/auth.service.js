

const url = 'https://irvb-recetas.herokuapp.com/api/auth/signin';

let token = '';

export const login = async (user, pwd) => {

  const data = {
      email: user,
      password: pwd
  }
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
      'Content-Type': 'application/json'
    }
  });
  const json = await response.json();
  token = json.token
  console.log(token)
  return token ? true : false;
}

export const getToken = () => {
  return token;
}

export const hasSession = () => {
  return token ? true : false;
}