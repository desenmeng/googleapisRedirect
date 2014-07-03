chrome.webRequest.onBeforeRequest.addListener(
    function(data) {
        var url = data.url.replace('googleapis', 'useso');
        return {redirectUrl: url};
    },
    {
        urls: [
            "http://fonts.googleapis.com/*"
        ]
    },
    ["blocking"]
);
