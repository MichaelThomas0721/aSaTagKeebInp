const TAB_NAME = "AGF Standard Shipping Ticket (Load ID Grouped) - Print Reports"
let focused = false
let unfocused = false

function CheckVisibility() {
    if (!focused) {
        focused = document.hasFocus()
    } else if (focused && !unfocused) {
        unfocused = !document.hasFocus()
    } else {
        if (document.hasFocus()) {
            window.close()
        }
    }
    setTimeout(() => {
        CheckVisibility()
    }, 500);
}
let title = document.getElementsByTagName("title")[0].innerHTML;
if (title == TAB_NAME) {
    CheckVisibility()
}