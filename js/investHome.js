var tabId = ['tab-chain', 'tab-info', 'tab-record', 'tab-comment'];

function showTab(index) {
    for (var i in tabId) {
        var currentTab = document.getElementById(tabId[i]);
        if (currentTab.classList.contains('current')) {
            currentTab.classList.remove('current');
            document.getElementById('content-'.concat(tabId[i].slice(4))).style.display = 'none';
        }
    }
    document.getElementById(tabId[index]).classList.add('current');
    document.getElementById('content-'.concat(tabId[index].slice(4))).style.display = 'block';
}