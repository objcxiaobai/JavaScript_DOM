function displayCitations() {


    if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;

    //找出blockquote
    var quotes = document.getElementsByTagName("blockquote");
    

    for (var i = 0 ; i<quotes.length;i++){

        if (!quotes[i].getAttribute("cite")) continue;

        var url = quotes[i].getAttribute('cite');
        //包含全体元素节点。
        var quoteElements = quotes[i].getElementsByTagName('*');

        if (quoteElements.length<1) continue;

        //最后一个元素对应着数组最后一个元素。
        var elem = quoteElements[quoteElements.length-1];


        var link = document.createElement("a");

        var link_text = document.createTextNode("source");

        link.appendChild(link_text);
        link.setAttribute("href",url);

        var superscript = document.createElement("sup");
        superscript.appendChild(link);


        elem.appendChild(superscript);



    }
    
}

addLoadEvent(displayCitations);