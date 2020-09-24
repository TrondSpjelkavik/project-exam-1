const spacexNextLaunch = "https://api.spacexdata.com/v4/launches/next";
const spacexCrewInfo = "https://api.spacexdata.com/v4/crew";

const spacexRockets = "https://api.spacexdata.com/v4/rockets/";

async function spaceXapi() {
  try {
    const nextLaunchResponse = await fetch(spacexNextLaunch);
    const spacexCrewResponse = await fetch(spacexCrewInfo);
    const nextRocketsResponse = await fetch(spacexRockets);

    const nextLaunchdata = await nextLaunchResponse.json();
    const rocketsData = await nextRocketsResponse.json();
    const spacexCrewData = await spacexCrewResponse.json();

    fetchData(nextLaunchdata, spacexCrewData, rocketsData);
  } catch (error) {
    console.log(error);
  }
}

spaceXapi();

function fetchData(nextLaunchdata, spacexCrewData, rocketsData) {
  const nextLaunchRocket =
    "https://api.spacexdata.com/v4/rockets/" + nextLaunchdata.rocket;
  async function nextRocketData() {
    try {
      const nextLaunchRocketResponse = await fetch(nextLaunchRocket);
      const nextLaunchRocketData = await nextLaunchRocketResponse.json();
      fetchNextRocket(nextLaunchRocketData);
    } catch (error) {
      console.log(error);
    }
  }
  nextRocketData();

  function fetchNextRocket(nextLaunchRocketData) {
    const nextLaunchContainer = document.querySelector(".next-launch");
    const nextLaunchRocketContainer = document.querySelector(
      ".next-launch-details-box"
    );
    if (!nextLaunchdata.links.webcast) {
      nextLaunchdata.links.webcast =
        "https://www.youtube.com/user/spacexchannel";
    }

    const nextLaunchDate = new Date(`${nextLaunchdata.date_local}`).getTime();

    setInterval(function () {
      const DateNow = new Date().getTime();

      let newLaunch = nextLaunchDate - DateNow;

      let days = Math.floor(newLaunch / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (newLaunch % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((newLaunch % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((newLaunch % (1000 * 60)) / 1000);

      document.querySelector(".next-launch-timer").innerHTML =
        `<span> LIFTOFF: </span>  ` +
        days +
        "d " +
        hours +
        "h " +
        minutes +
        "m " +
        seconds +
        "s ";
    }, 1000);

    nextLaunchRocketContainer.innerHTML += `

  <div class="close-details">X</div>
  <p class="next-launch-details-headline">Details </p>
 
  <p class="next-launch-details-text"> ${nextLaunchdata.details} </p>
  <div class="next-launch-img-container"> 
  <img class="next-rocket-img" alt="image of '${nextLaunchRocketData.name}'" onclick="location.href='${nextLaunchRocketData.flickr_images[0]}'" src="${nextLaunchRocketData.flickr_images[0]}" >
  <img class="next-rocket-img" alt="image of '${nextLaunchRocketData.name}'" onclick="location.href='${nextLaunchRocketData.flickr_images[1]}'" src="${nextLaunchRocketData.flickr_images[1]}" >
  <img class="next-rocket-img" alt="image of '${nextLaunchRocketData.name}'" onclick="location.href='${nextLaunchRocketData.flickr_images[2]}'" src="${nextLaunchRocketData.flickr_images[2]}" >
  </div>
 
  `;

    nextLaunchContainer.innerHTML += `
  <div class="next-launch-container">
    <h1 class="next-launch-headline"> NEXT LAUNCH </h1>
    <div class="next-launch-name"> <img src="./img/rocket-icon-fp.svg"  alt="rocket icon" class="icon-fp"> <p class="rocket-name"> ${nextLaunchRocketData.name} </p> </div>
    <div class="next-launch-name"><img src="./img/payload.svg" alt="suitcase icon" class="icon-fp">  ${nextLaunchdata.name}</div>
    <div class="next-launch-timer"></div>
    <div class="next-launch-buttons">
    <div class="details-button"> Details 
    </div>
    <div class="next-launch-webcast" onclick="location.href='${nextLaunchdata.links.webcast}'"> Webcast</div>
    </div>
    </div>
   
  `;
    const nextLaunchBoxAppear = document.querySelector(
      ".next-launch-details-box"
    );
    const detailsBtn = document.querySelector(".details-button");
    let closeBtn = document.querySelector(".close-details");

    detailsBtn.addEventListener("click", () => {
      nextLaunchBoxAppear.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      nextLaunchBoxAppear.style.display = "none";
    });

    for (let i = 0; i < spacexCrewData.length; i++) {
      const spacexCrewContainer = document.querySelector(".spacex-crew");
      spacexCrewContainer.innerHTML += `
    
  <div class="crew-container">
  
   <img src="${spacexCrewData[i].image}" alt="${spacexCrewData[i].name}" class="crew">
   
   <div class="crew-info">
    <p> Name: ${spacexCrewData[i].name} </p> 
    <p> Agency: ${spacexCrewData[i].agency} </p> 
    <p> Status: <span class="green">${spacexCrewData[i].status} </span> </p> 
    <div class="crew-mission" <p> Mission:  </p> 
    <p> Name: CCtCap Demo Mission 2  </p> 
    <p> Liftoff: 2020-05-30 </p> 
    <div class="mission-img-box">
    <img class="mission-img mission-img-hidden2" alt="Robert Behnken and Douglas Hurley in astronaut suit" onclick="location.href='https://www.flickr.com/photos/spacex/49928343022/'" src="./img/demo-2-crew.jpg">
    <img class="mission-img mission-img-hidden" alt="Robert Behnken and Douglas Hurley in astronaut suit" onclick="location.href='https://www.flickr.com/photos/spacex/49971436642/'" src="./img/demo-2-crew-2.jpg">
    <img class="mission-img mission-img-hidden" alt="SpaceX Dragon 2 on loading dock" onclick="location.href='https://www.flickr.com/photos/spacex/49971441962/'" src="./img/demo-2-rocket.jpg">
    </div> 
   <div class="mission-links">
   <p  onclick="location.href='${spacexCrewData[i].wikipedia}'"> WIKIPEDIA </p>
   <p onclick="location.href='https://www.youtube.com/watch?v=xY96v0OIcK4'"> WEBCAST </p>
    </div>
    
  </div>
  `;
    }
    for (let i = 0; i < rocketsData.length; i++) {
      if (rocketsData[i].active) {
        rocketsData[i].active = `<span class="green"> In use </span>`;
      } else {
        rocketsData[i].active = `<span class="red"> Not in use </span>`;
      }

      const spacexRocketsContainer = document.querySelector(".spacex-rockets");
      spacexRocketsContainer.innerHTML += `
   
    <div class="spacex-rockets-box"> <div class="spacex-rockets-name"> <img src="./img/rocket-icon-fp.svg" class="icon-fp"> <p>${rocketsData[i].name} </p></div>
    <div class="spacex-rockets-innerbox">
    <p class="inner-text"> Country: ${rocketsData[i].country} </p>
    <p class="inner-text"> Engine:  ${rocketsData[i].engines.type} ${rocketsData[i].engines.version}  </p>
    <p class="inner-text"> Propellant:<span class="flex-column">  1. ${rocketsData[i].engines.propellant_1} 2. ${rocketsData[i].engines.propellant_2} </p>
    <p class="inner-text"> Volume: <span class="flex-column"> 
                                  Diameter: ${rocketsData[i].diameter.feet}feet / ${rocketsData[i].diameter.meters}m</span>
                                  <span class="flex-column">        Height: ${rocketsData[i].height.feet}feet / ${rocketsData[i].height.meters}m </span>
                                  <span class="flex-column">      Mass: ${rocketsData[i].mass.lb}lb / ${rocketsData[i].mass.kg}kg  </span> </p>
    <p class="inner-text"> Cost Per Launch: $ ${rocketsData[i].cost_per_launch} </p>
    <p class="inner-text"> Active: ${rocketsData[i].active} </p>
    <p class="inner-text"> First Flight: ${rocketsData[i].first_flight} </p>
    </div>
    <div class="spacex-rockets-description">${rocketsData[i].description} </div>
    <div class="spacex-rockets-imgs-box"><img class="spacex-rockets-imgs" alt="image of ${rocketsData[i].name}" onclick="location.href='${rocketsData[i].flickr_images[i]}'" src="${rocketsData[i].flickr_images[i]}">
    <img class="spacex-rockets-imgs" alt="image of ${rocketsData[i].name}" onclick="location.href='${rocketsData[i].flickr_images[0]}'" src="${rocketsData[i].flickr_images[0]}"> 
    
    </div>
    </div>

    `;
    }
  }
}

const nav = document.querySelector("nav");
const arrowDown = document.querySelector(".bottomMenu");

window.onscroll = function scrollEvent(e) {
  if (e.currentTarget.pageYOffset > 200) {
    nav.style.backgroundColor = "#0f1112";
    nav.style.top = "0";
    nav.style.width = "100%";
    nav.style.transition = "0.2s ease-in";
    arrowDown.style.display = "none";
  } else {
    nav.style.backgroundColor = "rgb(22, 26, 29, 0.7)";
  }
};
