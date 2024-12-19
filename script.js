const baseURL = `https://675f29cb1f7ad2426997bda6.mockapi.io/amirSalan`;
const cardsBody = document.getElementById("cards-body");

renderUsers();

function renderUsers() {
  fetch(`${baseURL}/user`)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      cardsBody.innerHTML = "";
      const sortedResult = result.sort((a, b) => {
        return b.id - a.id;
      });
      sortedResult.forEach((item) => {
        cardsBody.innerHTML += `<div id="card" class="flex flex-col shadow-md w-full items-center justify-center p-5">
                <img src="./assets/image/download.png" alt="">  
                <h2 id="user-name" class="text-[20px]">${item.name}</h2>
                <p id="nID">national ID : ${item["national-id"]}</p>
                <p id="city">City : ${item.city}</p>
                <button onclick='deleteUser(${item.id})' class="w-full m-2 p-2 bg-blue-500 rounded text-white">DELETE</button>
            </div>`;
      });
    });
}
function addUser() {
  const userName = document.getElementById("name-input").value;
  const userNID = document.getElementById("nid-input").value;
  const userCity = document.getElementById("city-input").value;

  fetch(`${baseURL}/user`, {
    method: "POST",
    headers: { "content-type": "application/JSON" },
    body: JSON.stringify({
      name: userName,
      "national-id": userNID,
      city: userCity,
    }),
  }).then((res) => {
    res.ok && alert("User Sended");
    renderUsers();
  });
}

function deleteUser(id) {
  fetch(`${baseURL}/user/${id}`, {
    method: "DELETE",
  }).then((res) => {
    res.ok && alert(`User ${id} Deleted`);
    renderUsers();
  });
}
