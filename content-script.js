window.addEventListener("load", updatePageContents, false);

function updatePageContents() {
  
    // find existing content
    let paywall = document.querySelector("div.Messari-paywall")
    if (!paywall) return

    let newContent = paywall.cloneNode(true)
    // strip classes (not sure why need to repeat, but do need to)
    for (let i=0; i <= newContent.classList.length; i++) {
        newContent.classList.remove(newContent.classList[i])
    }
    for (let i=0; i <= newContent.classList.length; i++) {
        newContent.classList.remove(newContent.classList[i])
    }

    // remove old paywall content
    paywall.remove()

    // find where to insert copied content
    let h2 = document.querySelector('h2')

    // insert copied content
    h2.parentElement.insertBefore(newContent, h2)
    
}