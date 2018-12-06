window.onload = prepareLinks;

function prepareLinks () {
    var isDocument = document.getElementsByTagName;
    if (!isDocument) return false;
    var links = document.getElementsByTagName('a');
    for (var i = 0 ; i<links.length;i++){
        if (links[i].getAttribute('class') !== 'popUp') {
            continue;
        }
        links[i].onclick = function () {
            popUp(this.getAttribute("href"));
            return false
        }
    } 

}

function popUp(winURL) {
    window.open(winURL,'popup','width=320,height=480');
}