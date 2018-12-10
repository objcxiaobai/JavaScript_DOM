function displayAbbreviations() {

    //检查兼容性
    if (!document.getElementsByTagName || !document.createElement||!document.createTextNode)return false;

    //拿到abbr所有数组
    var abbreviations = document.getElementsByTagName("abbr");
    //判断有无缩略语
    if (abbreviations.length < 1) return false;
    //保存abbr元素提供的信息
    var defs = new Array();

    //遍历
    for (var i = 0; i<abbreviations.length;i++){
        var current_abbr = abbreviations[i];

        //保证在ie浏览器能平稳退化
        if (current_abbr.childNodes.length < 1) continue;

        //获属性取
        var definition = current_abbr.getAttribute("title");
        //获取abbr文本节点
        //注意，文本节点也可能嵌套其他节点
        var key = current_abbr.lastChild.nodeValue;

        defs[key] = definition;

    }

    //创建列表
    var dlist = document.createElement("dl");
    //快速创建标题、描述
    for (key in defs){
        //变量key的值就是当前正在处理的数组元素的建，拿到title属性
        var definnition = defs[key];

        var dtitle = document.createElement("dt");
        //用变量key得值去创建一个文本节点。
        var dttitle_text = document.createTextNode(key);
        dtitle.appendChild(dttitle_text);

        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definnition);
        ddesc.appendChild(ddesc_text);

        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);

    }

    if (dlist.childNodes.length <1) return false;

    //标题
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);

    document.getElementsByTagName("body")[0].appendChild(header);
    document.getElementsByTagName("body")[0].appendChild(dlist);

}

addLoadEvent(displayAbbreviations);