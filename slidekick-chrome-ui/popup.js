var container = document.createElement("div");
container.style.backgroundColor = "lightblue";

var textbox = document.createElement("input");
textbox.placeholder = "Tell slidekick what to generate...";
textbox.style.width = "500px";
textbox.style.height = "25px";


container.style.position = "fixed";
container.style.bottom = "40px";
container.style.left = "50%";
container.style.transform = "translateX(-50%)";
container.style.width = "700px";
container.style.height = "40px";
container.style.zIndex = "1000";
container.style.layout = "flex";
document.body.appendChild(container);
container.justifyContent = "center";
container.alignItems = "center";
container.appendChild(textbox);

var dragHandle = document.createElement("div");
dragHandle.style.position = "fixed";
dragHandle.style.width = "200px"; // Same width as the input
dragHandle.style.height = "10px"; // A small area above the element for dragging
dragHandle.style.backgroundColor = "grey"; // Just to make it visible
dragHandle.style.cursor = "move";
dragHandle.style.bottom = "40px"; // Positioned above the input element
// dragHandle.style.left = "50%";
// dragHandle.style.transform = "translateX(-50%)";
// dragHandle.style.zIndex = "1001"; // Higher than the input to ensure it's on top
container.appendChild(dragHandle);

function draggable(element, handle) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    handle.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();
        // Get the mouse cursor position at startup
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // Call a function whenever the cursor moves
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        // Calculate the new cursor position
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // Set the element's new position
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
        handle.style.top = (handle.offsetTop - pos2) + "px";
        handle.style.left = (handle.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // Stop moving when mouse button is released
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

draggable(container, dragHandle);
