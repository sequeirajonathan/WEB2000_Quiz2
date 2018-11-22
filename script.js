var title = document.createElement("h1");
var titleText = document.createTextNode("Making Ice Cream Sandwiches");
title.style.color = "orange";
document.body.appendChild(title);

var para1 = document.createElement("p");
para1.innerHTML = "Kids and adults alike will be fighting over these big monster ice cream sandwiches! The best part about these things is that they are no bake. You don't even need to warm up your oven if you purchased cookies. Makes early to use the mini M&Ms or the large ones will fall off. As a volunteer field editor for Taste of Home magazine, I love recipes that can be assembled quickly and still make a quick presentation.";
para1.style.fontSize = "20px";
document.body.appendChild(para1);

var divisor = document.createElement("div");
document.body.appendChild(divisor);

var header = document.createElement("h3");
title.innerHTML = "Ingredients";
divisor.appendChild(header);

var list = document.createElement("ul");
var listItem1 = document.createElement("li");
var listItem2 = document.createElement("li");
var listItem3 = document.createElement("li");
var listItem4 = document.createElement("li");
var textNode1 = document.createTextNode("Cookies and Cream ice cream");
var textNode2 = document.createTextNode("Large chocolate chip cookies");
var textNode3 = document.createTextNode("M&M's minis");
var textNode4 = document.createTextNode("Reese's mini peanut butter cups");

listItem1.appendChild(textNode1);
listItem2.appendChild(textNode2);
listItem3.appendChild(textNode3);
listItem4.appendChild(textNode4);

list.appendChild(listItem1);
list.appendChild(listItem2);
list.appendChild(listItem3);
list.appendChild(listItem4);
divisor.appendChild(list);


var pic1 = document.createElement("img");
pic1.src = "ice-cream.jpg";
document.body.appendChild(pic1);

var pic2 = document.createElement("img");
pic2.src = "cookies.jpg";
document.body.appendChild(pic2);

var pic3 = document.createElement("img");
pic3.src = "mmminis.jpg";
document.body.appendChild(pic3);

var pic4 = document.createElement("img");
pic4.src = "pb.jpg";
document.body.appendChild(pic4);

var para2 = document.createElement("p");
var paraText2 = document.createTextNode("For more information about this recipe, please visit");
document.body.appendChild(paraText2);

var anchor = document.createElement("a");
anchor.href = "https://www.tasteofhome.com/recipes/candy-craze-ice-cream-sandwiches/"
anchor.innerHTML = "The Taste of Home website"

para2.appendChild(anchor);

var para2 = document.createElement("p");
var para2Text = document.createTextNode("The show was about eCommerce, and I shared the microphone with some employees from the company named Daily Steals. They are an online store that sells items for WAY lower then the price that you see it at other sites.  But the products are only available for a limited time, and you have to get them while they are hot.  Genius!");
para2.appendChild(para2Text);
document.body.appendChild(para2);
var link = document.createElement("a");
link.href = "https://www.facebook.com/AnalyticalBeat/videos/2243350782591242/"
link.innerHTML = "To see the episode, click here.";
document.body.appendChild(link);




divisor.style.backgroundColor = "orange";
divisor.style.padding = "20px";
pic1.style.width = "24%";
pic2.style.width = "24%";
pic3.style.width = "24%";
pic4.style.width = "24%";
