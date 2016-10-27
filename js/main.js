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