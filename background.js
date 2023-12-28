// var blocked_domains = ["*://*.facebook.com/*", "*://*.twitter.com/*"]; // Añade aquí los sitios que quieres bloquear

// chrome.webRequest.onBeforeRequest.addListener(
//   function(details) { return {cancel: true}; },
//   {urls: blocked_domains},
//   ["blocking"]
// );

// var blocking_time = 1; // Tiempo de bloqueo en minutos
// chrome.storage.sync.set({blocking_time: blocking_time});

// chrome.alarms.create("unblockWebsites", {delayInMinutes: blocking_time});

// chrome.alarms.onAlarm.addListener(function(alarm) {
//     if (alarm.name === "unblockWebsites") {
//       blocked_domains = []; // Desbloquea todos los sitios web
//     }
//   });