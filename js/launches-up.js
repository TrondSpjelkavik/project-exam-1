const upcomingLaunchesUrl = "https://api.spacexdata.com/v4/launches/upcoming/";

let footer = document.querySelector("footer");
footer.style.display = "none";

async function spaceXapi() {
  try {
    const upcomingLaunchesResponse = await fetch(upcomingLaunchesUrl);
    const upcomingLaunchesdata = await upcomingLaunchesResponse.json();
    fetchData(upcomingLaunchesdata);
  } catch (error) {
    console.log(error);
  } finally {
    const loading = document.querySelector(".loading-section");
    loading.style.display = "none";
    let footer = document.querySelector("footer");
    footer.style.display = "block";
  }
}

spaceXapi();

function fetchData(upcomingLaunchesdata) {
  const upcomingLaunchesContainer = document.querySelector(
    ".up-launches-selection"
  );

  for (let i = 0; i < upcomingLaunchesdata.length; i++) {
    if (!upcomingLaunchesdata[i].links.patch.small) {
      upcomingLaunchesdata[i].links.patch.small =
        "https://images2.imgbox.com/9a/96/nLppz9HW_o.png";
    }
    if (!upcomingLaunchesdata[i].details) {
      upcomingLaunchesdata[i].details = `No details yet. Try again later `;
    }
    if (!upcomingLaunchesdata[i].links.webcast) {
      upcomingLaunchesdata[i].links.webcast =
        "https://www.youtube.com/user/spacexchannel";
    }

    upcomingLaunchesContainer.innerHTML += `
    <div class="launches-box"> 
   
        <div class="launches-details">
        <div class="rocket-logo-box">
        <img src="${
          upcomingLaunchesdata[i].links.patch.small
        }" class="launches-img" alt="logo of ${upcomingLaunchesdata[i].name} " >
        </div>
        <p>Name: ${upcomingLaunchesdata[i].name} </p>
        <p>Flight Number: ${upcomingLaunchesdata[i].flight_number} </p>
        <p>Liftoff: ${upcomingLaunchesdata[i].date_local.slice(0, -15)} </p>
        <p class="details-launches">Details  </p>
        <div class="launches-links"> 
        <p onclick="location.href='${
          upcomingLaunchesdata[i].links.article
        }'">ARTICLE</p>
        <p onclick="location.href='${
          upcomingLaunchesdata[i].links.webcast
        }'">WEBCAST</p>
        <p onclick="location.href='${
          upcomingLaunchesdata[i].links.wikipedia
        }'">WIKIPEDIA</p>
        </div>
       

        </div>
        <div class="close">X</div>
        <div class="scroll">
        <span class="details-appear"> ${upcomingLaunchesdata[i].details}</span>
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
