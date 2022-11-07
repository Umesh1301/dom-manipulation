// console.dir(document);
// console.dir(document.title);
// console.dir(document.domain);
// console.dir(document.URL);
// document.title=123;
// console.dir(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all[10]);
// document.all[10].textContent = "Hello";
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);
//console.log(document.getElementById('header-title'));
var headertitle=document.getElementById('header-title');
var header=document.getElementById('main-header');

console.log(headertitle);
//headertitle.textContent = "hello";
//headertitle.innerText = "Goodboy";
//console.log(headertitle.innerText);
//headertitle.innerHTML = '<h3>hello</h3>';
header.style.borderBottom = 'solid 3px #000';
console.log(document.images);
//   var item =document.getElementsByClassName('list-group-item'); console.log(item[0]);
//  item[1].textContent= 'hello7';
//  item[1].style.fontWeight = 'bold';
//  item[1].style.backgroundColor = 'blue';
//  item[2].style.fontWeight= 'bold';
//  for(i=0;i<item.length;i++)
//  {
//     item[i].style.backgroundColor ='#ffffff';
//  }
// var li =document.getElementsByTagName('li');
// console.log(li[0]);
// li[0].textContent= 'hello7';
// li[0].style.fontWeight = 'bold';
// li[0].style.backgroundColor = 'blue';
// for(i=0;i<li.length;i++)
// {
//     li[i].style.backgroundColor ='#136352';
// }
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #555';
// var input = document.querySelector('input');
// input.value = 'hello shri ';
// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'next';
// var item = document.querySelector('.list-group-item');
// item.style.color = 'yellow';
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'red';
// var second =document.querySelector('.list-group-item:nth-child(3)');
// second.style.color = 'blue';
// Query selector all
// var tit = document.querySelectorAll('.title');
// console.log(tit);
// tit[0].textContent = 'Shri ram';
// tit[0].style.color = 'red';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// var second = document.querySelectorAll('li:nth-child(1)');
// for(i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor = 'blue';
// }
// odd[1].style.backgroundColor = 'green';

var itemlist = document.querySelector('#items')
// parent Node
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor ='pink';
// console.log(itemlist.parentNode.parentNode.parentNode);

// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor ='Orange';
// console.log(itemlist.parentElement.parentElement.parentElement);

// Childnode
// console.log(itemlist.childNodes);
// console.log(itemlist.children);
// console.log(itemlist.children[3]);
// itemlist.children[3].style.backgroundColor = 'yellow';

// console.log(itemlist.firstChild);
// firstElementChild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'Hello 2';
// itemlist.firstElementChild.style.color= 'green';
// last Child
// console.log(itemlist.lastChild);
// lastElementChild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = 'Hello 4';
// itemlist.lastElementChild.style.color= 'red';

// nextSibling
// console.log(itemlist.nextSibling);
// nextElementSibling
// console.log(itemlist.nextElementSibling);

// previousSibling
// console.log(itemlist.previousSibling);
// previousElementSibling
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color = 'orange';

// create Element
var newdiv = document.createElement('DIV');
console.log(newdiv);
// ADD class
newdiv.className = 'Hello ji';
// ADD id
newdiv.id = 'hello';
// add Attribute
newdiv.setAttribute('title','Hello div');
// create text Node
// var newdivtext = document.createTextNode('hello world');
// // //  Add text to div
// newdiv.appendChild(newdivtext);
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newdiv);
// newdiv.style.fontSize = '20px';
// container.insertBefore(newdiv,h1);
// Add textnode to List Item
// var list1 = document.createTextNode('hello hero');
// newdivtext.appendChild(list1);
// var itemz = document.querySelector('div .list-group');
// var l1 = document.querySelector('div li[0]');
// console.log(newdivtext);
// newdivtext.style.fontSize = '15px';
// list-group.insertBefore(newdivtext,l1);
var a = document.getElementById('items');
a.innerHTML = 'HelloWorld' + a.innerHTML;


