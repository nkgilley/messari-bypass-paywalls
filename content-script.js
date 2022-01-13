window.addEventListener("load", updatePageContents, false);
window.addEventListener("load", watchForRedirect, false);


function watchForRedirect() {

    // Select the node that will be observed for mutations
    const targetNode = document.querySelector('div#root');

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    const callback = function(mutationsList, observer) {
        for(const mutation of mutationsList) {
            updatePageContents();
        }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
}

function updatePageContents() {
  
    // find existing content
    let paywall = document.querySelector("div.Messari-paywall")
    if (!paywall) return

    // clone existing content and remove all classes
    let newContent = paywall.cloneNode(true)
    newContent.removeAttribute('class')
    newContent.style.cssText = 'text-align: left'
    newContent.children[0].removeAttribute('class')
    let links = newContent.getElementsByTagName('a')
    for (let i = 0; i < links.length; i++) {
        links[i].style.color = '#0091EA'
    }

    // remove old paywall content
    paywall.remove()

    // find where to insert cloned content
    let h2 = document.querySelector('h2')

    // insert cloned content
    h2.parentElement.insertBefore(newContent, h2)
    
}
