function $(id) {
    return document.getElementById(id);
}
function init() {
    var lianbiao = $('data-table-lianbiao');
    var yuebiao = $('data-table-yuebiao');
}
function showYuebiao() {
    lianbiao = $('data-table-lianbiao');
    yuebiao = $('data-table-yuebiao');
    lianbiao.style.display = 'none';
    yuebiao.style.display = 'block';
    return false;
}
function showLianbiao() {
    lianbiao = $('data-table-lianbiao');
    yuebiao = $('data-table-yuebiao');
    lianbiao.style.display = 'block';
    yuebiao.style.display = 'none';
    return false;
}