// Add a listener for tab updates
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let currentTab = tabs[0];
    if (changeInfo.url) {
        if (changeInfo.url.includes("localhost:3000/success")) {
          chrome.storage.local.get('originalUrl', function(result) {
            if (result.originalUrl) {
                console.log('Original URL:', result.originalUrl);
                // Use the original URL as needed
                chrome.tabs.update(0, {url: result.originalUrl});
            }
          });
        }
    }
  });
});
