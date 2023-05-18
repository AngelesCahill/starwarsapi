const URL_BASE = "https://swapi.dev/api";
let peopleId = 1;
const request = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    return result;
}

const getUser = async (id) => {
    const url = `${URL_BASE}/people/${id}`;
    return request(url);
};

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const resp = await Promise.all([getUser(peopleId)]);
    console.log("resp:", resp);
    const user = resp[0];
    const name = user.name;
    const height = user.height;
    const mass = user.mass;
    console.log("name:", name);
    console.log("height:", height);
    console.log("mass:", mass);
    user.forEach((p) => {

    });
  } catch (error) {
    console.log("Error: ", error);
  }
});

(async () => {
  console.log("Esto es una IIFE");
})();