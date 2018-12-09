function getNewContent() {
    var request = getHTTPObject();
    if (request){
        //第三步是否异步
        request.open("GET","example.txt",true);
        request.onreadystatechange = function () {
            if (request.readyState === 4){
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    } else {
        alert("sorry,请求失败")
    }
}

addLoadEvent(getNewContent);