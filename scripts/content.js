let addedEventListener = false;
let lastInp = null;

// Function to handle mutations
function handleMutations(mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            let inp = document.getElementsByClassName("form-control")[0];
            if (inp) {
                if (inp == lastInp) return;
                lastInp = inp;
                inp.removeAttribute("readonly");
                // observer.disconnect(); // Stop observing once element is found
                inp.addEventListener('keydown', function (e) {
                    if (e.repeat) return;
                    if (e.key === 'Enter') {
                        const enterBtn = document.querySelector("#virtualKeyboard > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > button");
                        if (!enterBtn) return;
                        const mousedownEvent = new MouseEvent('mousedown', {
                            bubbles: true,
                            cancelable: true,
                            view: window
                        });
                        enterBtn.dispatchEvent(mousedownEvent);
                    }
                })
            }
        }
    }
}

// Options for the observer (which mutations to observe)
const config = { childList: true, subtree: true };

// Create a new observer instance
const observer = new MutationObserver(handleMutations);

// Start observing the document for mutations
observer.observe(document.body, config);
