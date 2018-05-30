// VERSION 1
// var token;

// function getCookies(domain, name, callback) {
//   chrome.cookies.getAll({"url": domain, "name": name}, function(cookie) {
//       if(callback) {
//       	callback(cookie.value);
//       }
//    });
// }

// getCookies("https://experience-v2.aiesec.org/#/", "expa_token", function(id) {
// 	// alert(id);
// 	token = id;
// 	document.getElementById("token").innerHTML = token
// });

//VERSION 2

chrome.tabs.getSelected(null, function(tab) {
	chrome.cookies.get({url: tab.url, name: 'expa_token'}, function(cookie) {
  	document.getElementById("token").innerHTML = cookie.value
	});
});

// chrome.cookies.get({url: 'https://experience-v2.aiesec.org/#/', name: 'expa_token'}, function(cookie) {
//   document.getElementById("token").innerHTML = cookie.value
// });