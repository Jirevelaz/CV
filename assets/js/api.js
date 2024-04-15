fetch("https://restcountries.com/v3.1/name/Mexico")
  .then((response) => response.json())
  .then((data) => {
    // Procesar los datos de la respuesta de la API
    const countryData = data[0];

    // Mostrar la información en el currículum
    const countryContainer = document.getElementById("country-container");
    countryContainer.innerHTML = `
      <ul class="list-unstyled interests-list english">
      <li>Country: <span class="lang-desc">${countryData.name.common}</span></li>
        <li>Capital: <span class="lang-desc">${countryData.capital}</span></li>
        <li><img class = "countryimg" src="${countryData.flags.png}" alt="Bandera de ${countryData.name.common}"></li>
      </ul>
      
    `;
  })
  .catch((error) => {
    console.error("Error al obtener los datos del país:", error);
  });
