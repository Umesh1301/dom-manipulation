var form = document.getElementById("addForm");
var itemlist = document.getElementById("items");
var filter = document.getElementById('filter');
var fire = document.getElementById('items');

// form submit event
form.addEventListener("submit", addItem);
// delete event
itemlist.addEventListener("click", removeitem);
// filter event
filter.addEventListener('keyup', filterItems);
// add item
function addItem(e) {
  e.preventDefault();

    // console.log(2);
  //   get input value
  var newItem = document.getElementById("item").value;
  //   create new li element
  var li = document.createElement("li");
  //   add class
  li.className = "list-group-item";
  console.log(li);

  //   add text node with input value
  li.appendChild(document.createTextNode(newItem));
  //   create del button
  var button = document.createElement("button");
  // add class to del button
  button.className = "btn btn-danger btn-sm float-right delete";
  // append text node
  button.appendChild(document.createTextNode("X"));
  // append button to li
  li.appendChild(button);
  // append li to list

  itemlist.appendChild(li);
}

// remove item
function removeitem(e) {
//   console.log(1);
if(e.target.classList.contains('delete')){
    // console.log(1);
    if(confirm('are you sure?')){
        var li = e.target.parentElement;
        itemlist.removeChild(li);
    }
}
}


// filter items
function filterItems(e){
    // convert text to lower case
    var text = e.target.value.toLowerCase();
    console.log(text);
    // get lis
    var items = itemlist.getElementsByTagName('li');
    // convert to an array

}




function addItem(e) {
  e.preventDefault();

    // console.log(2);
  //   get input value
  var newitem = document.getElementById("item").value;
  //   create new li element
  var li1 = document.createElement("li");
  //   add class
  li1.className = "list-group-item";
  console.log(li1);

  //   add text node with input value
  li1.appendChild(document.createTextNode(newitem));
  //   create del button
  var button = document.createElement("button");
  // add class to del button
  button.className = "btn btn-danger btn-sm float-right delete";
  // append text node
  button.appendChild(document.createTextNode("X"));
  // append button to li
  li1.appendChild(button);
  // append li to list

  itemlist.appendChild(li1);


  var edit = document.createElement("button");
  // add class to del button
  edit.className = "btn btn-success btn-sm float-right";
  // append text node
 edit.appendChild(document.createTextNode("edit"));
  // append button to li
  li1.appendChild(edit);
  // append li to list

  itemlist.appendChild(li1);



}