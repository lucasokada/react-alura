/* Guard */
function checkDoorState(state) {
    console.log("enum value is : ".concat(state));
    switch (state) {
        case "open" /* DoorStateString.OPEN */:
            console.log("Door is open");
            break;
        case "closed" /* DoorStateString.CLOSED */:
            console.log("Door is closed");
            break;
    }
}
checkDoorState("closed" /* DoorStateString.CLOSED */);
checkDoorState("open" /* DoorStateString.OPEN */);
