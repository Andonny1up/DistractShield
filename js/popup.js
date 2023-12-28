// let btn_add = document.getElementById('add-block');
let btn_options = document.getElementById('btn-options');
let v_domain = document.getElementById('view-domain');

//events
// btn_add.addEventListener('click',addBlock);
btn_options.addEventListener('click',showOptions);

//funtions
function addBlock(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let url = new URL(tabs[0].url);
        let domain = url.hostname;

        // Obtén la lista actual de dominios bloqueados
        chrome.storage.sync.get('blockedDomains', function(data) {
            let blockedDomains = data.blockedDomains || [];

            // Añade el nuevo dominio a la lista
            blockedDomains.push(domain);

            // Guarda la lista actualizada de dominios bloqueados
            chrome.storage.sync.set({blockedDomains: blockedDomains}, function() {
                console.log('Dominio ' + domain + ' añadido a la lista de bloqueo');
            });
        });
    });
}

function showOptions(){
    chrome.tabs.create({url: "options.html"});
}
//funcions helpers
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let url = new URL(tabs[0].url);
    let domain = url.hostname;
    v_domain.innerText = domain;
});