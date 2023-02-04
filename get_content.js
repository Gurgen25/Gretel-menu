setTimeout(function (){
    var get_class=document.getElementsByClassName("menu-cont");
for(var i=0;i<=get_class.length-1;i++){
    var get_elements=get_class[i];
    var elements=get_elements.getElementsByTagName("li");
    for(var i_elem=0;i_elem<=elements.length-1;i_elem++){
        var id_elem=i*4+i_elem+1;
        elements[i_elem].id="id_"+id_elem;
        elements[i_elem].className="menu_lists";
        elements[i_elem].setAttribute("contenteditable","");
    }
}
var get_form=document.getElementById("form");
for(var i_form=1;i_form<=id_elem;i_form++){
    var create_inputs=document.createElement("input");
    create_inputs.name="name_"+(i_form);
    create_inputs.type="hidden";
    get_form.appendChild(create_inputs);
}
var create_submit=document.createElement("input");
create_submit.name="submit";
create_submit.type="submit";
get_form.appendChild(create_submit);
setInterval(function (){
var get_class_menu_lists=document.getElementsByClassName("menu_lists");
var get_form_inputs=get_form.getElementsByTagName("input");
for(var i_i=0;i_i<=get_class_menu_lists.length-1;i_i++){
get_form_inputs[i_i].value=get_class_menu_lists[i_i].innerHTML;
}
},10);
},1500);