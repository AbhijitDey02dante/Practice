let header = document.getElementById("main-header");
let addItem = document.getElementById("addItem");
let headerTitle = document.getElementById("header-title");
let listItems = document.getElementsByClassName('list-group-item');

listItems[2].style.backgroundColor='green';
for(let i of listItems){
    i.style.fontWeight='bold';
}
// header.style.borderBottom="2px solid black";
headerTitle.style.borderBottom="2px solid black";
addItem.style.fontWeight="bold";
addItem.style.color="green";
let testClassLi = document.getElementsByClassName('test-class');
testClassLi[0].style.backgroundColor='red';
let li=document.getElementsByTagName('li');
for(let i of li){
    i.style.backgroundColor='yellow';
}