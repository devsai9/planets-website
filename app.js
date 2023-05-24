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

createDiv('https://assets.stickpng.com/images/580b585b2edbce24c47b2714.png', 'Sun Image', 'The Sun', 'The sun is the center of the solar system and provides heat and light to us on Earth!<br>It is the only star in our solar system and its huge gravitational pull is what holds the solar system together.<br>The surface temperature of the sun is 5772 degrees Kelvin (9929 Fahrenheit, 5498 Calsius).');

createDiv('https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcTFFRKg1XEC7kNu58XVZi9vPh6F9ii0FhevCdEAUKyMEtSdx4HLLLNBMacXXX0Y0gLv', 'Mercury Image', 'Mercury', 'The first planet in a ring of 8 (sorry Pluto 🙁).<br>It is the closest to the sun and is the smallest planet in the solar system.');

createDiv('https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRtqGYOVmn7rlUHM47dO2MUGjjqp-NkClqUJ7QIxAwGAulcM5kvScQrZSkfglqd92ua', 'Venus Image', 'Venus', 'The second planet from the sun.<br>It spins backward and is the slowest spinning planet in the solar system,<br>with each rotation lasting 243 Earth days.');

createDiv('https://upload.wikimedia.org/wikipedia/commons/2/22/Earth_Western_Hemisphere_transparent_background.png', 'Earth Image', 'Earth', 'The third planet from the sun<br>And the one that humans currently inhabit.<br>It is the only known planet in our solar system to be able to support human life!');

createDiv('https://upload.wikimedia.org/wikipedia/commons/0/0e/Tharsis_and_Valles_Marineris_-_Mars_Orbiter_Mission_%2830055660701%29.png', 'Mars Image', 'Mars (The Red Planet)', 'The fourth planet from the sun.<br>It has its reddish color (and the nickname of "the Red Planet")<br>because of the finely grained Iron Oxide dust in its soil.');

createDiv('https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRS5G-fpV8aDvEWIAPzCqEL1jEWMJl5d2YxkLcVUhNlbFJSasq1s4dNjaJpj4Tgldcl', 'Jupiter Image', 'Jupiter', 'The fifth planet from the sun.<br>It is also the largest planet in our solar system being 2.5x larger than all of the planets in our solar system combined!<br>Jupiter is also the fastest revolving planet with an average day length of 10 Earth Hours.');

createDiv('https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQUNGwc8h9VqUTHCmp-42Ph6G4YbjA6N2sCxtCTjNgkCFuw0Ms5eZMzZDZI9y97Rh2I', 'Saturn Image', 'Saturn', 'The sixth planet from the sun.<br>It is the second-largest planet in our solar system with a radius 9.5x that of Earth<br>Saturn is also the second-fastest revolving planet with an average day length of 10.5 Earth Hours.<br>It is also known for its rings, which are made of ice and rock.');

createDiv('https://nineplanets.org/wp-content/uploads/2020/03/uranus.png', 'Uranus Image', 'Uranus', 'The seventh planet from the sun.<br>Uranus has rings like Saturn and is even titled about 98 degrees.<br>It is mostly composed of water, ice, ammonia, and methane.');

createDiv('https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT9RN79wn9Nw-Bt_dn2TjGwLmVo7kxccffCzGa6e1onKI_QyOinDXZ-MMqL_McsRcR1', 'Neptune Image', 'Neptune', 'The eighth and final planet from the sun (in our solar system).<br>It is the fourth largest planet with a mass 17x that of Earth and is slightly larger than Uranus.');