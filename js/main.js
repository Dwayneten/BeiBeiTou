function $(id) {
    return document.getElementById(id);
}

function showYuebiao() {
    var lianbiao = $('data-table-lianbiao'),
        yuebiao = $('data-table-yuebiao'),
        lianbiaoTab = $('data-tab-lianbiao'),
        yuebiaoTab = $('data-tab-yuebiao');

    lianbiao.style.display = 'none';
    yuebiao.style.display = 'block';
    lianbiaoTab.classList.remove('data-current-tab');
    yuebiaoTab.classList.add('data-current-tab');
    return false;
}
function showLianbiao() {
    var lianbiao = $('data-table-lianbiao'),
        yuebiao = $('data-table-yuebiao'),
        lianbiaoTab = $('data-tab-lianbiao'),
        yuebiaoTab = $('data-tab-yuebiao');

    lianbiao.style.display = 'block';
    yuebiao.style.display = 'none';
    lianbiaoTab.classList.add('data-current-tab');
    yuebiaoTab.classList.remove('data-current-tab');
    return false;
}