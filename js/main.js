/**
 * 切换面板的函数
 * @param contentClassName - 面板容器的类名
 * @param index - 标签的对应下标(第几个标签)
 * @returns {boolean}
 */
function showTab(contentClassName, index) {
    // switch tab
    if (event.target.classList.contains('current'))
        return false;
    var targetParentNode = event.target.parentNode;
    for (var curNode = targetParentNode.firstElementChild; curNode; curNode = curNode.nextElementSibling) {
        if (curNode.classList.contains('current'))
            curNode.classList.remove('current');
    }
    event.target.classList.add('current');

    // switch content
    var content = document.getElementsByClassName(contentClassName);
    for (var i = 0; i<content.length; ++i) {
        if (content[i].classList.contains('current'))
            content[i].classList.remove('current');
    }
    content[index].classList.add('current');

    return false;
}

/**
 * 当点击页脚微信时使微信公众号放大的动作
 * @returns {boolean}
 */
function showWechat() {
    var qrCode = document.getElementsByClassName('footer-col-qrcode')[0].firstElementChild;
    qrCode.style.margin = '0 auto';
    qrCode.style.width = '155px';
    qrCode.style.height = '155px';
    setTimeout(function () {
        qrCode.style.width = '144px';
        qrCode.style.height = '144px';
        qrCode.style.margin = '10px auto';
    }, 1000);

    return false;
}

function showVideo() {
    document.getElementsByClassName('video-wrapper')[0].style.display = 'block';
    document.getElementsByClassName('video-bg')[0].style.display = 'block';
    document.getElementById('my-video').firstElementChild.play();
    return false;
}
function closeVideo() {
    document.getElementsByClassName('video-wrapper')[0].style.display = 'none';
    document.getElementsByClassName('video-bg')[0].style.display = 'none';
    document.getElementById('my-video').firstElementChild.pause();
    return false;
}