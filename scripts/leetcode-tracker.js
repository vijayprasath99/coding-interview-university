// This script is to keep track of problems which are already done or being re-done
// I know "sessions" give you a cleaner way but if you for some reason can't use
// it, this is the way to go. Just update "finished" and copy paste this in terminal of
// the browser, you'll see all question which you finished striken off

var finished = new Set([
    1, 9, 13
])
var extractQNoFromNode = (node) => Number(node.innerText.split('. ')[0])
var strikeThoughNode = (node) => node.style.setProperty("text-decoration", "line-through");
var nodes = document.querySelectorAll('[role="table"] [role="row"] [role="cell"]:nth-child(2)')
nodes.forEach((node) => {
    var qNo = extractQNoFromNode(node);
    if (finished.has(qNo)) {
        strikeThoughNode(node)
    }
})
