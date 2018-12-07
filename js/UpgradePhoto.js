// 共享onload时件
// window.onload = function () {
//     prepareGallery();
// }


//页面加载完毕的时候执行
addLoadEvent(prepareGallery);

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function"){
        window.onload = func;
    } else{
        window.onload = function () {
            oldonload();
            func();
        }
    }
}


function prepareGallery() {
    if (!document.getElementsByTagName || !document.getElementById) return false;
    var gallery = document.getElementById("imagegallery");
    if (!gallery) return false;

    var links = gallery.getElementsByTagName("a");

    for (var i = 0 ; i<links.length; i++){
        
        links[i].onclick = function () {
            //this 代表着links[i]
            showPic(this);
            return false;
        }
    }

}

//改进假设肯定有showpic的元素的值
function showPic(whichpic) {

    if (!document.getElementById("placeholder")) return false;
    var source =whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);

    if (document.getElementById("description")) {

        var text = whichpic.getAttribute("title");

        var description = document.getElementById("description");

        description.firstChild.nodeValue = text;
    }

    return true;

}