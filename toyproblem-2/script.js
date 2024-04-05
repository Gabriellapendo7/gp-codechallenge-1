function detectSpeed() {
    var speed = parseInt(document.getElementById("speedInput").value);
    var demeritPoints = 0;
//if speed is less than 70 output, ok
    if (speed <= 70) {
        document.getElementById("result").innerText = "Ok";
        //for every 5km/s above speed limit, deduct a point and output the point
    } else {
        //if the driver get mor than 12points,license is supsended,if not,just
        //print the points
        demeritPoints = Math.floor((speed - 70) / 5);
        if (demeritPoints > 12) {
            document.getElementById("result").innerText = "License suspended";
        } else {
            document.getElementById("result").innerText = "Points: " + demeritPoints;
        }
    }
}