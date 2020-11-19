var menu_list=["Chiken Tandori Pizza",
"Veg Supreme Pizza",
"Paneer Tikka Pizza",
"Deluxe Veggie Pizza",
"Veg Extravaganza Pizza"]
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>";
    menu_list.sort();
    for(var i=0;i<menu_list.length;i++){
        htmldata=htmldata+'<li>'+menu_list[i]+'</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML=htmldata;
}
function additem(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list.push(item);
    menu_list.sort();
    htmldata="<section class='cards'>";
    for(var i=0;i<menu_list.length;i++){
htmldata=htmldata+'<div class="cards">'+'<img src="images/pizzaImg.png"/>'+ menu_list[i] +'</div>';
    }
    htmldata=htmldata+"</section>";
    document.getElementById("display_addedmenu").innerHTML=htmldata;
}