// Guarda las URLs y el estado de los checkboxes
function saveOptions() {
    let urls = {
        'youtube': 'https://www.youtube.com',
        'twitter': 'https://www.twitter.com',
        'facebook': 'https://www.facebook.com',
        'tiktok': 'https://www.tiktok.com'
    };

    let settings = {};

    for (let site in urls) {
        let checkbox = document.getElementById(site);
        settings[urls[site]] = checkbox.checked;
    }

    chrome.storage.sync.set(settings, function() {
        console.log('Settings saved');
    });
}

// Carga las URLs y el estado de los checkboxes
function loadOptions() {
    chrome.storage.sync.get(null, function(settings) {
        for (let url in settings) {
            let site = url.split('.').slice(-2, -1)[0];
            let checkbox = document.getElementById(site);
            if (checkbox) {
                checkbox.checked = settings[url];
            }
        }
    });
}

// Guarda las opciones cuando se hace clic en el botón "Guardar"
document.getElementById('save-button').addEventListener('click', saveOptions);

// Carga las opciones cuando se carga la página
document.addEventListener('DOMContentLoaded', loadOptions);