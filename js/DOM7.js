

function styleHeaderSibling() {
    if (!document.getElementsByTagName)return false;
    // 找出文档中的所有h1元素。
    var headers = document.getElementsByTagName("h1");
    var elem;
    for (var i=0;i<headers.length;i++){
        //给每个h1元素后面的哪个元素，添加样式。
        elem = getNextElement(headers[i].nextSibling);
        elem.style.fontWeight = "bold";
        elem.style.fontSize = "1.2em";

    }
}


//获取下一个元素节点，而不是下一个节点,下一节点可以通过nextsibling获取
function getNextElement(node) {
    if (node.nodeType === 1){
        return node;
    }

    if (node.nextSibling){
        return getNextElement(node.nextSibling);
    }

    return null;
}

addLoadEvent(styleHeaderSibling);