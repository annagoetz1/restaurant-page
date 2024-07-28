

import loafImageSrc from './loaf.jpg';
import './styles.css'; 

console.log("Hello, Webpack!");

let content = document.getElementById('content');
let heading = document.createElement('h1');
heading.textContent = 'Our Sourdough Bakery';

let loafImage = document.createElement('img');
loafImage.src = loafImageSrc;
loafImage.alt = 'Sourdough Loaf on the counter';

let secondHeader = document.createElement('h2');
secondHeader.textContent = 'Welcome to my bakery! Where we sell sourdough loaves, sandwich breads, english muffins, bagels, and many different sourdough based pastries for optimal gut health and flavor. We sell at the Market District Farmers Market weekly during the summers from 11am-1pm on Thursdays. You can pre-order by clicking the button below to place an order for pickup and secure your items for the week!';
 
let newButton = document.createElement('button');
newButton.textContent = 'Preorders';
newButton.id = 'preorder-button';

content.appendChild(heading);
content.appendChild(loafImage);
content.appendChild(secondHeader);
content.appendChild(newButton);
