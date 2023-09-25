const login = async (username, password) => {
  // * fill here...
  const loginBody = { username, password };
  try {
    const res = await fetch("https://api.learnhub.thanayut.in.th/auth/login", {
      // * fill here...
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginBody),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`${res.status} - ${data.message}`);
    }

    return data.accessToken;
  } catch (err) {
    alert(err);
  }
};

const setToken = () => {
  const usernameInput = document.getElementById("username");

  const passwordInput = document.getElementById("password");

  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", async (e) => {
    e.preventDefault();

    if (!passwordInput.value || !usernameInput.value) {
      alert("Please input something");
      return;
    }

    // * fill here...?
    const accessToken = await login(usernameInput.value, passwordInput.value);
    if (!accessToken) return;
    localStorage.setItem("token", accessToken);
  });
};

//* Get User Information

const getUser = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("token is not valid !!");
    return;
  }
  try {
    const res = await fetch("https://api.learnhub.thanayut.in.th/auth/me", {
      // * fill here...
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`${res.statusCode} - ${data.message}`);
    }
    return data;
  } catch (err) {
    alert(err);
  }
};

const displayUserInfo = () => {
  const getInfoBtn = document.getElementById("get-info");

  getInfoBtn.addEventListener("click", async () => {
    const infoData = await getUser();
    if (!infoData) return;
    console.log(infoData);
  });
};

const main = async () => {
  setToken();
  displayUserInfo();
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
