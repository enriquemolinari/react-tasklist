const STOREUNAME = "username";
const STOREUROLES = "roles";
const STOREUID = "id";

export default class User {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  userId() {
    return sessionStorage.getItem(STOREUID);
  }

  userName() {
    return sessionStorage.getItem(STOREUNAME);
  }

  hasRole(role) {
    let userRoles = sessionStorage.getItem(STOREUROLES);
    return role.indexOf(userRoles) >= 0;
  }

  static current(apiUrl) {
    if (!sessionStorage.getItem(STOREUID)) {
      throw Error("There is no current user...");
    }
    return new User(apiUrl);
  }

  logout() {
    return fetch(this.apiUrl + "/auth/logout", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        sessionStorage.clear();
        return Promise.resolve();
      });
  }

  login(userName, password) {
    return fetch(this.apiUrl + "/auth/login", {
      method: "POST",
      body: JSON.stringify({
        user: userName,
        pass: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (response.status === 401) {
          return Promise.reject({
            msg: "Username or password incorrect...",
            error: true,
          });
        }
        if (response.status !== 200) {
          return Promise.reject({
            msg: "Something bad has happened...",
            error: true,
          });
        }
        return response.json();
      })
      .then((json) => {
        if (json.result === "success") {
          sessionStorage.setItem(STOREUNAME, json.user.name);
          sessionStorage.setItem(STOREUROLES, json.user.roles);
          sessionStorage.setItem(STOREUID, json.user.id);
          return Promise.resolve();
        } else {
          return Promise.reject({
            msg: json.message,
            error: true,
          });
        }
      });
  }
}
