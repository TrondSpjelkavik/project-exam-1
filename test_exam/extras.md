 <p class="headquarters"> Headquarters</p>
 <div class="company-info-container">
 <div class="company-adress">
 <p>Address: ${spacexCompanyData.headquarters.address}</p>
 <p>City: ${spacexCompanyData.headquarters.city}</p>
 <p>State: ${spacexCompanyData.headquarters.state}</p>
 </div>
 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.7700282147316!2d-118.32906698441981!3d33.921317932064824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b5ded9a490b5%3A0x3095ae5795c500b3!2sRocket%20Rd%2C%20Hawthorne%2C%20CA%2090250%2C%20USA!5e0!3m2!1sno!2sno!4v1598286682769!5m2!1sno!2sno" width="350" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
 </div>

spacexCompanyContainer.innerHTML += `

  <div class="company-logo">
  <img  class="logo-img-company" src="./img/SpaceX-Logo.svg" alt="">
  <p class="headquarters"> Headquarters</p>
  <div class="company-info-container">
  <div class="company-adress">
  <p>Address: ${spacexCompanyData.headquarters.address}</p>
  <p>City: ${spacexCompanyData.headquarters.city}</p>
  <p>State: ${spacexCompanyData.headquarters.state}</p>
  </div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.7700282147316!2d-118.32906698441981!3d33.921317932064824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b5ded9a490b5%3A0x3095ae5795c500b3!2sRocket%20Rd%2C%20Hawthorne%2C%20CA%2090250%2C%20USA!5e0!3m2!1sno!2sno!4v1598286682769!5m2!1sno!2sno" width="350" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
  </div>

spacexCompanyContainer.innerHTML += `

  <div class="company-logo">
  <img  class="logo-img-company" src="./img/SpaceX-Logo.svg" alt="">
  <p class="headquarters"> Headquarters</p>
  <div class="company-info-container">
  <div class="company-adress">
  <p>Address: ${spacexCompanyData.headquarters.address}</p>
  <p>City: ${spacexCompanyData.headquarters.city}</p>
  <p>State: ${spacexCompanyData.headquarters.state}</p>
  </div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.7700282147316!2d-118.32906698441981!3d33.921317932064824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b5ded9a490b5%3A0x3095ae5795c500b3!2sRocket%20Rd%2C%20Hawthorne%2C%20CA%2090250%2C%20USA!5e0!3m2!1sno!2sno!4v1598286682769!5m2!1sno!2sno" width="350" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
  </div>
 
  <div class="company-summary">${spacexCompanyData.summary}
  <div class="social-container"><ul class="company-social">
  <li><p> TWITTER</p></li>
  <li><p> INSTAGRAM</p></li>
  <li><p> FLICKR</p></li>
  <li><p> SPACEX</p></li>
  </ul></div>
  </div>
  <div class="board">
  <img src="./img/musk.jpg"  class="board-img">
  <img src="./img/Gwynne.jpg"  class="board-img">
  </div>
  <div class="board">
  <p> CEO/CTO ${spacexCompanyData.ceo}</p>
  <p> COO ${spacexCompanyData.coo}</p>
  
  </div>
  </div>
  `;

const spacexCompanyContainer = document.querySelector(".company-info");
const spacexCompanyData = await spacexCompanyResponse.json();
const spacexCompanyResponse = await fetch(spacexCompanyInfo);
const spacexCompanyInfo = "https://api.spacexdata.com/v4/company";

  <section class="company-info"></section>

ABOUT PICTURES AND STUFF

<div class="board">
 <img src="./img/musk.jpg"  class="board-img">

 <img src="./img/Gwynne.jpg"  class="board-img">
 </div>
 <div class="board">
 <p> CEO/CTO ${spacexCompanyData.ceo}</p>
 <p> COO ${spacexCompanyData.coo}</p>
 
 </div>

ABOUT INFO

spacexCompanyContainer.innerHTML += `

 <div class="company-logo">

 <div class="company-summary">${spacexCompanyData.summary}
 <div class="social-container"><ul class="company-social">
 <li><p> TWITTER</p></li>
 <li><p> INSTAGRAM</p></li>
 <li><p> FLICKR</p></li>
 <li><p> SPACEX</p></li>
 </ul></div>
 </div>
 
 </div>

border-left: 50px solid transparent;
border-right: 50px solid var(--main-bg-color);
border-bottom: 50px solid transparent;
border-top: 50px solid transparent;
