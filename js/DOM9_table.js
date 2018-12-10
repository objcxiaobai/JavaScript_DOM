function stripeTables() {
    if (!document.getElementsByTagName) return false;
    //拿到table
    var tables = document.getElementsByTagName("table");
    //定义行、记录颜色
    var odd,rows;
    //遍历table,所有数据行
    for (var i = 0; i<tables.length;i++ ){
        //让列
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for (var j = 0;j<rows.length;j++){

            if (odd === true){
                rows[j].style.backgroundColor = "#ffc";
                odd = false;
            } else{
                odd = true;
            }
        }
    }
}

addLoadEvent(stripeTables);