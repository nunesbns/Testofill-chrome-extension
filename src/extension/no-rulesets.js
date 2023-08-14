document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentTab = tabs[0]; // Aqui está sua aba atual
    var currentTabUrl = currentTab.url; // E aqui está a URL dela
    document.getElementById('url').textContent = ' ' + currentTabUrl;
  });
});
