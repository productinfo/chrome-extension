chrome.webRequest.onBeforeRequest.addListener(
    function(details) 
	{
		if ((details.url.substr(-4) == '.xml')
			|| (details.url.substr(-4) == '.crx')
			|| (details.url.substr(-4) == '.xpi')
			|| (details.url.substr(-4) == '.exe') || (details.url.substr(-4) == '.dmg') || (details.url.substr(-3) == '.gz') || (details.url.substr(-4) == '.zip') || (details.url.substr(-3) == '.js')) return { cancel:  false };	
		else
		{
			var hash = '';
			if (details.url.indexOf('#') > -1) hash = '#' + details.url.split('#')[1];			
			return { redirectUrl:  chrome.extension.getURL("mega/secure.html" + hash) };
		}
    },
    {
        urls: [
			"http://mega.co.nz/*",
            "https://mega.co.nz/*",
			"http://www.mega.co.nz/*",
            "https://www.mega.co.nz/*",
            "http://mega.nz/*",
            "https://mega.nz/*",
			"http://www.mega.nz/*",
            "https://www.mega.nz/*",
			"http://mega.is/*",
            "https://mega.is/*",
			"http://www.mega.is/*",
            "https://www.mega.is/*"
        ],
        types: ["main_frame","sub_frame"]
    },
    ["blocking"]
);

chrome.webRequest.onHeadersReceived.addListener(
  function(details) 
	{	
		console.log('responseHeaders',responseHeaders);
    },
    {
        urls: [
            chrome.extension.getURL("mega")
        ],
        types: ["main_frame","sub_frame"]
    },
    ["blocking"]
);
