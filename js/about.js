const spacexCompanyInfo = "https://api.spacexdata.com/v4/company";

async function spaceXapi() {
  try {
    const spacexCompanyResponse = await fetch(spacexCompanyInfo);

    const spacexCompanyData = await spacexCompanyResponse.json();

    fetchData(spacexCompanyData);
  } catch (error) {
    console.log(error);
  }
}

spaceXapi();

function fetchData(spacexCompanyData) {
  console.log(spacexCompanyData);
  const spacexCompanyContainer = document.querySelector(".company-info");

  spacexCompanyContainer.innerHTML += `
  <div class="company-box">
  <div class="landings-box">
    <div class="landings-info">
    <div class="total-info">
    <h2> 96 </h2>
    <p> Total Launches </p>
    </div>
    <div class="total-info">
    <h2> 59 </h2>
    <p> Total Landings </p>
    </div>
    <div class="total-info">
    <h2> 41 </h2>
    <p> Reflown Rockets </p>
    </div>
    </div>
  </div>
  </div>
  <div class="company-paragraph">
  <p> ${spacexCompanyData.summary}</p>
  <div class="company-links">
        <ul class="company-links-list">
            <li>TWITTER</li>
            <li>INSTAGRAM</li>
            <li>FLICKR</li>
            <li>YOUTUBE</li>
            <li>CREDITS</li>
            <li>SpaceX</li>
        </ul>
    </div>
    </div>
  <div class="company-staff-box">
  <div class="company-img-box">
  <div class="staff-box">
  <img src="./img/Gwynne.jpg" class="staff-img">
  <p> COO: ${spacexCompanyData.coo} </p>
  </div>
  <div class="staff-box">
  <img src="./img/musk.jpg" class="staff-img">
  <p> COO: ${spacexCompanyData.founder} </p>
  </div>
  </div>
  </div>
  `;
}

const nav = document.querySelector("nav");

window.onscroll = function scrollEvent(e) {
  if (e.currentTarget.pageYOffset > 50) {
    nav.style.backgroundColor = "#0f1112";
    nav.style.top = "0";
    nav.style.width = "100%";
    nav.style.transition = "0.2s ease-in";
  } else {
    nav.style.backgroundColor = "rgb(22, 26, 29, 0.6)";
    nav.style.top = "2%";
    nav.style.width = "850px";
  }
};
