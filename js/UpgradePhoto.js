// 共享onload时件
// window.onload = function () {
//     prepareGallery();
// }


//页面加载完毕的时候执行
addLoadEvent(prepareGallery);

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function"){
        window.onload = func
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

function showPic(whichpic) {
    var source =whichpic.getAttribute("href");
    var text = whichpic.getAttribute("title");

    var placeholder = document.getElementById("placeholder");
    var description = document.getElementById("description");

    placeholder.setAttribute("src",source);

    description.firstChild.nodeValue = text;

}