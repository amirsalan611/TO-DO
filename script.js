const baseURL = `https://675f29cb1f7ad2426997bda6.mockapi.io/amirSalan`
const cardsBody = document.getElementById("cards-body")

fetch(`${baseURL}/user`).then((response)=>{
    return response.json();
}).then((result)=>{
result.forEach(item => {
    console.log(result);
    cardsBody.innerHTML += `<div id="card" class="flex flex-col shadow-md w-full items-center justify-center p-5">
                <img src="./assets/image/download.png" alt="">  
                <h2 id="user-name" class="text-[20px]">${item.name}</h2>
                <p id="nID">national ID : ${item["national-id"]}</p>
                <p id="city">City : ${item.city}</p>
            </div>`
});
})
