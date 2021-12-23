const container = document.querySelector(".container");
const preloader = document.querySelector(".preloader");

const getData = async () => {
  const response = await fetch("https://randomuser.me/api/?results=10", {
    method: "GET",
  });

  const data = await response.json();
  preloader.style.display = "none";

  data.results.forEach((element) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.innerHTML = `
                 <div>
                    <img src=${element.picture.medium}>
                    <p>Пол: <span>${element.gender}</span></p>
                    <p>Имя: ${element.name.first} ${element.name.last} </p>
                    <p>Адрес: <span>${element.location.country} 
                    ${element.location.state}
                    ${element.location.city}
                    ${element.location.street.name},
                    ${element.location.street.number}</span></p>
                    <p>Email: <span>${element.email}</span></p>
                    <p>Телефон: <span>${element.phone}</span></p>
                    <p>Дата рождения: <span>${element.dob.date
                      .substring(0, 10)
                      .split("-")
                      .reverse()
                      .join("/")}</span></p>
                    <p>Возраст: <span>${element.dob.age}</span></p>
                </div>
                    `;

    container.appendChild(card);
  });
};

window.onload = () => getData();