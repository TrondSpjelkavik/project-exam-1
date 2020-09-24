const previousLaunchesUrl = "https://api.spacexdata.com/v4/launches/past";

let footer = document.querySelector("footer");
footer.style.display = "none";
async function spaceXapi() {
  try {
    const previousLaunchesResponse = await fetch(previousLaunchesUrl);
    const previousLaunchesdata = await previousLaunchesResponse.json();
    fetchData(previousLaunchesdata);
  } catch (error) {
    console.log(error);
  } finally {
    const loading = document.querySelector(".loading-section");
    loading.style.display = "none";
    let sortBtn = document.querySelector(".sort-btn");
    sortBtn.style.display = "block";

    footer.style.display = "block";
  }
}

spaceXapi();

function fetchData(previousLaunchesdata) {
  const previousLaunchesContainer = document.querySelector(
    ".up-launches-selection"
  );

  let sortBtn = document.querySelector(".sort-btn");

  sortBtn.addEventListener("click", () => {
    previousLaunchesdata.sort((a, b) => b.flight_number - a.flight_number);
    previousLaunchesContainer.innerHTML = "";
    fetchData(previousLaunchesdata);
  });

  for (let i = 0; i < previousLaunchesdata.length; i++) {
    if (!previousLaunchesdata[i].links.patch.small) {
      previousLaunchesdata[i].links.patch.small =
        "https://images2.imgbox.com/9a/96/nLppz9HW_o.png";
    }
    if (!previousLaunchesdata[i].details) {
      previousLaunchesdata[
        i
      ].details = `No details available. Read more about this mission on Wikipedia: 
      <div class="launches-links-appear"> 
        <p onclick="location.href='${previousLaunchesdata[i].links.wikipedia}'">WIKIPEDIA</p>
        </div>`;
    }

    previousLaunchesContainer.innerHTML += `
    
    <div class="launches-box"> 
   
        <div class="launches-details">
        <div class="rocket-logo-box">
        <img src="${
          previousLaunchesdata[i].links.patch.small
        }" class="launches-img" alt="Logo of ${previousLaunchesdata[i].name}" >
        </div>
        <p>Name: ${previousLaunchesdata[i].name} </p>
        <p>Flight Number: ${previousLaunchesdata[i].flight_number} </p>
        <p>Liftoff: ${previousLaunchesdata[i].date_local.slice(0, -15)} </p>
        <p class="details-launches">Details </p>
        <div class="launches-links"> 
        <p onclick="location.href='${
          previousLaunchesdata[i].links.article
        }'">ARTICLE</p>
        <p onclick="location.href='${
          previousLaunchesdata[i].links.webcast
        }'">WEBCAST</p>
        <p onclick="location.href='${
          previousLaunchesdata[i].links.wikipedia
        }'">WIKIPEDIA</p>
        </div>
       

        </div>
        <div class="close">X</div>
        <div class="scroll">
        <span class="details-appear"> ${previousLaunchesdata[i].details}</span>
        </div>
    </div>
    `;

    let detailsBtn = document.querySelectorAll(".details-launches");
    let closeBtn = document.querySelectorAll(".close");
    let detailsAppear = document.querySelectorAll(".details-appear");
    let launchDetails = document.querySelectorAll(".launches-details");
    let launchesBox = document.querySelectorAll(".launches-box");
    let detailsArray = [];
    for (let j = 0; j < detailsBtn.length; j++) {
      detailsArray.push(detailsBtn[j]);
      detailsBtn[j].addEventListener("click", () => {
        launchesBox[j].style.transition = "0.3s ease-in";
        launchesBox[j].style.transform = "scale(1.04)";
        launchesBox[j].style.width = "350px";
        launchDetails[j].style.display = "none";
        detailsAppear[j].style.display = "flex";
        closeBtn[j].style.display = "flex";
      });
      closeBtn[j].addEventListener("click", () => {
        launchesBox[j].style.transition = "0.3s ease-out";
        launchesBox[j].style.transform = "scale(1)";
        launchesBox[j].style.width = "300px";
        launchDetails[j].style.display = "flex";
        detailsAppear[j].style.display = "none";
        closeBtn[j].style.display = "none";
      });
    }
  }
}

const nav = document.querySelector("nav");

window.onscroll = function scrollEvent(e) {
  if (e.currentTarget.pageYOffset > 200) {
    nav.style.backgroundColor = "#0f1112";
    nav.style.top = "0";
    nav.style.width = "100%";
    nav.style.transition = "0.2s ease-in";
  } else {
    nav.style.backgroundColor = "rgb(22, 26, 29, 0.7)";
  }
};
