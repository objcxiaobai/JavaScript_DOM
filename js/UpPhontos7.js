//页面加载完毕的时候执行
addLoadEvent(preparePlaceholder);
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

            return !showPic(this);
        }
    }

}
//插入到目标元素后插入新的
function inserAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild === targetElement){
        parent.appendChild(newElement);
    } else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}


//改进假设肯定有showpic的元素的值
function showPic(whichpic) {

    if (!document.getElementById("placeholder")) return false;
    var source =whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName !== "IMG") return false;
    placeholder.setAttribute("src",source);

    if (document.getElementById("description")) {

        var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";

        var description = document.getElementById("description");

        if (description.firstChild.nodeType === 3){
            description.firstChild.nodeValue = text;
        }

    }

    //成功调用，并且能切换图片，不考虑title
    return true;

}


function preparePlaceholder() {
    if (!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src",'images/placeholder.jpg');
    placeholder.setAttribute("alt","my image gallery");

    var description = document.createElement("p");
    description.setAttribute("id","description");

    var descrtext = document.createTextNode("Choose an image");

    description.appendChild(descrtext);

    //插到</body之前
    // document.getElementsByTagName("body")[0].appendChild(placeholder);
    // document.getElementsByTagName("body")[0].appendChild(description);

    var gallery = document.getElementById("imagegallery");
    inserAfter(placeholder,gallery);
    inserAfter(description,placeholder);

}