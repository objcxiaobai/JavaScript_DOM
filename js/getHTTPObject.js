//兼容所有的浏览器请求
function getHTTPObject() {
    //最终返回false
    if (typeof XMLHttpRequest === "undefined"){
        XMLHttpRequest = function () {
            try{
                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            }
            catch (e) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            }
            catch (e) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e) {}

        }
        return false;
    }

    return new XMLHttpRequest();

}