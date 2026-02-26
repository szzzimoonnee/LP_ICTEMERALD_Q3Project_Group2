function showInstructions() {
    const box = document.getElementById("instructionBox");
    box.classList.toggle("hidden");
}



function computeFare(isDiscounted) {

    const baseFare = 50;
    const perKMrate = 15;
    const baseKM = 2;

    const pickup = parseInt(document.getElementById("pickup").value);
    const dropoff = parseInt(document.getElementById("dropoff").value);

    if (pickup === dropoff) {
        document.getElementById("fareResult").innerText = "₱0.00";
        return;
    }

    let distance = Math.abs(dropoff - pickup);

    let totalFare = baseFare;

    if (distance > baseKM) {
        totalFare += (distance - baseKM) * perKMrate;
    }

    if (isDiscounted) {
        totalFare = totalFare * 0.80; // 20% discount
    }

    document.getElementById("fareResult").innerText = "₱" + totalFare.toFixed(2);
}