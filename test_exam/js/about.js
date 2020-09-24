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
  <h1 class="about-headline">About SpaceX</h1>
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
  
  <div class="company-paragraph">
  <p> ${spacexCompanyData.summary}</p>
  <div class="company-links">
        <ul class="company-links-list">
        <li onclick="window.open('https://twitter.com/spacex')">TWITTER</li>
        <li onclick="window.open('https://www.instagram.com/spacex/')">
          INSTAGRAM
        </li>
        <li class="hidden" onclick="window.open('https://www.flickr.com/photos/spacex')">
          FLICKR
        </li>
        <li class="hidden" onclick="window.open('https://www.youtube.com/spacex')">
          YOUTUBE
        </li>
        <li onclick="window.open('https://www.spacex.com/')">SpaceX</li>
        </ul>
  </div>
    </div>
    </div>

    <div class="company-staff-box">
  <div class="company-img-box">
  <div class="staff-box">
  <img src="./img/Gwynne.jpg" class="staff-img">
  <p> COO: ${spacexCompanyData.coo} </p>
  <img onclick="window.open('https://www.linkedin.com/in/gwynneshotwell/')" src="./img/LinkedIn.png" class="social-media_2">
  </div>
  <div class="staff-box">
  <img src="./img/musk.jpg" class="staff-img">
  <p> COO: ${spacexCompanyData.founder} </p>
  <img onclick="window.open('${spacexCompanyData.links.elon_twitter}')"  src="./img/twitterlogo2.png" class="social-media">
  </div>
  </div>
  </div>
  

  `;
}
