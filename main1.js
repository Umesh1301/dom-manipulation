var form = document.getElementById("addForm");
var itemlist = document.getElementById("items");
var filter = document.getElementById("filter");

// form submit event
form.addEventListener("submit", addItem);
// delete event
itemlist.addEventListener("click", removeitem);
// filter event
filter.addEventListener("keyup", filterItems);
// add item
function addItem(e) {
  e.preventDefault();

  // console.log(2);
  //   get input value
  var newItem1 = document.getElementById("item1");
  var newItem2 = document.getElementById("item2");
  //   create new li element.value
  var li = document.createElement("li");
  //   add class
  li.className = "list-group-item";

  //   add text node with input value
  li.appendChild(document.createTextNode(`${newItem1.value} ${newItem2.value}`));


  //   create del button
  var delbutton = document.createElement("button");
  // add class to del button
  delbutton.className = "btn btn-danger btn-sm float-right delete";
  // append text node
  delbutton.appendChild(document.createTextNode("X"));
  // append button to li
  li.appendChild(delbutton);
  // append li to list

  itemlist.appendChild(li);
   //   create Add button
   var Add = document.createElement("button");
   // add class to del button
   Add.className = "btn btn-success btn-sm float-right delete";
   // append text node
   Add.appendChild(document.createTextNode("Edit"));
   // append button to li
   li.appendChild(Add);
   // append li to list
   itemlist.appendChild(li);

  newItem1.value= "";
  newItem2.value= "";

}

// remove item
function removeitem(e) {
  //   console.log(1);
  if (e.target.classList.contains("delete")) {
    // console.log(1);
    if (confirm("are you sure?")) {
      var li = e.target.parentElement;
      itemlist.removeChild(li);
    }
  }
}

// filter items
function filterItems(e) {
  // convert text to lower case
  var text = e.target.value.toLowerCase();
  console.log(text);
//   // get lis
  var items = itemlist.getElementsByTagName('li');
  // console.log(items);
//   // convert to an array
  Array.from(items).forEach(function(item) {
    var itemName = item.firstChild.textContent;
// console.log(itemName);
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
    } else{
        item.style.display = 'none';
    }
});
}

