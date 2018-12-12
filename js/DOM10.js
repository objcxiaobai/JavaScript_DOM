function positionMessage() {
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
    var message = document.getElementById("message");
    //给属性赋值的时候，记得双引号;
    message.style.position = "absolute";
    message.style.top = "50px";
    message.style.left = "100px";
    //全局变量，声明未使用关键字：var;
    //取消操作，可以在函数以外的地方。
    // movement = setTimeout("movemessage2()",1000);
    moveElement("message", 125, 25, 20);

    if (!document.getElementById("message2")) return false;
    var elem = document.getElementById("message2");
    elem.style.position = "absolute";
    elem.style.left = "50px";
    elem.style.top = "50px";
    moveElement("message2",125,125,20);


}

function movemessage(){
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;

    var  element = document.getElementById("message");

    element.style.left = "100px";
}

function movemessage2(){
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;

    var element = document.getElementById("message");
    // var message = element.getAttribute("left");
    //
    // if (message === "500px"){
    //     clearTimeout(movement)
    // }
    // message.style.left += "100px";

    //获取元素位置
    //我们需要的是数值，而不是字符串
    // var xpos = element.style.left;
    // var ypos = element.style.top;
    //100px -> 100
    var xpos = parseInt(element.style.left);
    var ypos = parseInt(element.style.top);
    if (xpos === 200 && ypos === 100){
        return true;
    }
    if (xpos < 200){
        xpos++;
    }
    if (xpos > 200){
        xpos--;
    }
    if (ypos < 100){
        ypos++;
    }

    if (ypos > 100){
        ypos--;
    }

        element.style.left = xpos + "px";
        element.style.top = ypos + "px";
        movement = setTimeout("movemessage2()",10);
}



//复用：
function moveElement(elementID,final_x,final_y,interval){
    if (!document.getElementById)return false;
    if (!document.getElementById(elementID)) return false;

    var elemt = document.getElementById(elementID);
    if (elemt.movement){
        clearTimeout(elemt.movement);
    }
    var xpos = parseInt(elemt.style.left);
    var ypos = parseInt(elemt.style.top);

    if (xpos === final_x || ypos === final_y){
        return true;
    }
    if (xpos < final_x){
        xpos++;
    }
    if (xpos > final_x){
        xpos--;
    }

    if (ypos < final_y){
        ypos++;
    }
    if (ypos > final_y){
        ypos--;
    }

    elemt.style.left = xpos + 'px';
    elemt.style.top = ypos + 'px';
    //拼接字符串
    var  repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    elemt.movement = setTimeout(repeat,interval);

}



// addLoadEvent(positionMessage);
//继续添加修改位置的函数，最后的位置会覆盖前面的。
addLoadEvent(positionMessage);
addLoadEvent(moveElement);
