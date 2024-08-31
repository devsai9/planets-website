function createDiv(url, alt, title, content) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const img = document.createElement('img');
    img.src = url;
    img.alt = alt;

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('card-content');

    const h1 = document.createElement('h1');
    h1.textContent = title;
    contentDiv.appendChild(h1);

    const p = document.createElement('p');
    p.innerHTML = content;
    contentDiv.appendChild(p);

    cardDiv.appendChild(img);
    cardDiv.appendChild(contentDiv);

    document.getElementsByClassName('card-container')[0].appendChild(cardDiv);
    console.log("Done: " + title);
}

createDiv('https://images.nationalgeographic.org/image/upload/v1638882786/EducationHub/photos/sun-blasts-a-m66-flare.jpg', 'Sun Image', 'The Sun', 'The sun is the center of the solar system and provides heat and light to us on Earth!<br>It is the only star in our solar system and its huge gravitational pull is what holds the solar system together.<br>The surface temperature of the sun is 5772 degrees Kelvin (9929 Fahrenheit, 5498 Calsius).<br><br>Image from National Geographic');

createDiv('https://science.nasa.gov/wp-content/uploads/2023/11/mercury-messenger-globe-pia15162.jpg', 'Mercury Image', 'Mercury', 'The first planet in a ring of 8 (sorry Pluto 🙁).<br>It is the closest to the sun and is the smallest planet in the solar system.<br><br>Image from NASA');

createDiv('https://images-assets.nasa.gov/image/PIA00271/PIA00271~large.jpg?w=1920&h=1920&fit=clip&crop=faces%2Cfocalpoint', 'Venus Image', 'Venus', 'The second planet from the sun.<br>It spins backward and is the slowest spinning planet in the solar system,<br>with each rotation lasting 243 Earth Days.<br><br>Image from NASA');

createDiv('https://upload.wikimedia.org/wikipedia/commons/2/22/Earth_Western_Hemisphere_transparent_background.png', 'Earth Image', 'Earth', 'The third planet from the sun,<br>and the one that humans currently inhabit.<br>It is the only known planet in our solar system to be able to support any form of life!<br><br>Image from Wikimedia');

createDiv('https://upload.wikimedia.org/wikipedia/commons/0/0e/Tharsis_and_Valles_Marineris_-_Mars_Orbiter_Mission_%2830055660701%29.png', 'Mars Image', 'Mars (The Red Planet)', 'The fourth planet from the sun.<br>It has its reddish color (and the nickname of "the Red Planet")<br>because of the finely grained Iron Oxide dust in its soil.<br><br>Image from Wikimedia');

createDiv('https://www.solarsystemscope.com/spacepedia/images/handbook/renders/jupiter.png', 'Jupiter Image', 'Jupiter', 'The fifth planet from the sun.<br>Jupiter is home to the largest storm in the solar system called the "Great Red Spot"<br>and the earliest observarions of this date back 385 years ago to 1665!<br>The average wind speeds of this srorm are 432 km/h (268 mi/h).<br>It is also the largest planet in our solar system being 2.5x larger than all of the planets in our solar system combined!<br>Jupiter is also the fastest revolving planet with an average day length of 10 Earth Hours.<br><br>Image from spacepedia.com');

createDiv('https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg', 'Saturn Image', 'Saturn', 'The sixth planet from the sun.<br>It is the second-largest planet in our solar system with a radius 9.5x that of Earth.<br>Saturn is also the second-fastest revolving planet with an average day length of 10.5 Earth Hours.<br>It is also known for its rings, which are made of ice and rock.<br><br>Image from Wikimedia');

createDiv('https://nineplanets.org/wp-content/uploads/2020/03/uranus.png', 'Uranus Image', 'Uranus', 'The seventh planet from the sun.<br>Uranus has rings like Saturn and its axis is actually tilted about 98 degrees.<br>It is mostly composed of water, ice, ammonia, and methane.<br><br>Image from nineplanets.org');

createDiv('https://nineplanets.org/wp-content/uploads/2020/03/neptune.png', 'Neptune Image', 'Neptune', 'The eighth and final planet from the sun (in our solar system).<br>It is the coldest planet in the solar system with a temperature of -373 degrees Fahrenheit (-225 Celsius).<br>It is the fourth largest planet with a mass 17x that of Earth and is slightly larger than Uranus.<br><br>Image from nineplanets.org');
