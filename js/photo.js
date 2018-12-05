<!--whichpic -->
function showPic(whichpic) {
    //whichpic 元素节点，指向某个a元素
    var source =whichpic.getAttribute("href");
    var text = whichpic.getAttribute("title");

    var placeholder = document.getElementById("placeholder");
    var description = document.getElementById("description");

    placeholder.setAttribute("src",source);

    description.firstChild.nodeValue = text;

}

//   只有添加事件处理函数，才能达成目标
/**
 *  onmouseover 悬停触发
 *  onmouseout  离开某个元素触发
 *  onclick  点击某个链接触发
 * **/
//    这个点击的《a》的对象
// showPic(this)


//     //添加事件处理语法
//     //onclick = "showPic(this);return false;"
//
//


//     function  countBodyChildren() {
//     var body_element = document.getElementsByTagName("body")[0];
//     alert(body_element.childNodes.length);
// }
//
// //页面加载时执行。
//     /**
//      *
//      * 加了括号，先弹出弹窗
//      * 没有加，内容跟弹窗一起出现。
//      * **/
// window.onload = countBodyChildren;

