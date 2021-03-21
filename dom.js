// traversing the DOM -- 

var itemList=document.querySelector('#items');
//parentNode

// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor='#ccc';
// console.log(itemList.parentNode.parentNode);

// itemList.parentNode.parentNode.style.backgroundColor="pink";

// console.log(itemList.childNode);

// console.log(itemList.children);
// console.log(itemList.children[1]);  
// itemList.children[1].style.backgroundColor='#ccc';

//firstchild
// console.log(itemList.firstChild);

//firstElementChild

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.color="red";

//lastchild

// console.log(itemList.lastChild);

//lastElementChild
// console.log(itemList.lastElementChild);

// itemList.lastElementChild.textContent="Hello World";

// sibblings

console.log(itemList.nextSibling);

//nextElementSibbling
 //console.log(itemList.nextElementSibling);


//createElement

//create a div

//var newDiv=document.createElement('div');

//add class
//newDiv.className='hello';

//add id
//newDiv.id='hello1';

//add attribute

//newDiv.setAttribute('title','Hello Div');

//create text node
//var newDivText=document.createTextNode('hello world');

//add text to div
// newDiv.appendChild(newDivText);

// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize='30px';
// container.insertBefore(newDiv, h1);

var list = document.createElement("p");
var node = document.createTextNode("Hello!");
list.appendChild(node);

var element = document.getElementById("add-items");
element.appendChild(list);




