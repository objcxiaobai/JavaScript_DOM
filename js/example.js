function inserParagraph(text) {
    var str ="<p>";
    str += text;
    str += "</p>";
    document.write(str);

}


// //毫无细节可以，比DOM节点树，省事多了
// window.onload = function () {
//     var testdiv = document.getElementById("testdiv");
//     alert(testdiv.innerHTML);
//     testdiv.innerHTML = "<h1>test</h1>";
// }

 window.onload = function (){
    var para = document.createElement("p");
    var info = "nodeName: ";
    info+=para.nodeName;
    info+=" nodeType: ";
    info+=para.nodeType;
    alert(info);

    var testdiv = document.getElementById("testdiv2");
    testdiv.appendChild(para);;

    var text = document.createTextNode("nihao");
    para.appendChild(text);
 }