document.addEventListener('DOMContentLoaded', () => {
    auth()
});

// function nextSlide() {
//     let authUrl = `http://localhost:3000/auth/google/`;
//     chrome.tabs.create({ url: authUrl });
//     console.log('Slidekick activated!');
// }

function auth() {
    let authUrl = `http://localhost:3000/auth/google`;


    // Open the authentication URL in the current tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let currentTab = tabs[0];
        if (currentTab && currentTab.url) {
            // Store the URL in chrome.storage.local
            chrome.storage.local.set({ 'originalUrl': currentTab.url }, function() {
                console.log('Original URL is stored.');
            });
        }
        chrome.tabs.update(currentTab.id, {url: authUrl});
        
    });
    
}

