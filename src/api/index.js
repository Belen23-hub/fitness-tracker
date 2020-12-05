const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

export const getToken = () => {
  return localStorage.getItem("auth-token");
};

export const clearToken = () => {
  localStorage.removeItem("auth-token");
};

const setToken = (token) => {
  localStorage.setItem("auth-token", token);
};

function buildHeaders() {
  let base = {
    "Content-Type": "application/json",
  };

  if (getToken()) {
    base["Authorization"] = `Bearer ${getToken()}`;
  }

  return base;
}

export const auth = async (username, password, isNew = false) => {
  const url = `${BASE_URL}/users` + (isNew ? "/register" : "/login");
  console.log("U n P in auth", username, password);
  const response = await fetch(url, {
    method: "POST",
    headers: buildHeaders(),
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  //const { error, data } = await response.json();
  const data = await response.json();
  console.log("data in auth file", data);

  if (data.error) {
    //throw Error(error.message);
    console.log(data.error);
  }

  if (data && data.token) {
    setToken(data.token);
  }

  return data;
};

export const hitAPI = async (method, endpoint, bodyObj) => {
  const payload = {
    method: method,
    headers: buildHeaders(),
  };

  if (bodyObj) {
    payload.body = JSON.stringify(bodyObj);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, payload);

  const data = await response.json();

  console.log("data inside of hit api", data);

  if (data.error) {
    // throw Error(error.message);
    console.log("data.error", data.error);
  }

  if (data && data.token) {
    setToken(data.token);
  }

  return data;
};
