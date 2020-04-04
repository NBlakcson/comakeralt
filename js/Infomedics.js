//test variabels
var testArray = [];

//test objects
var testObjectA = {
    processingAddress: "tim_clearing_requestgeneratorA",
    timeStampOldestMessage: new Date(2020, 01, 26, 13, 26, 00)
};
var testObjectB = {
    processingAddress: "tim_clearing_requestgeneratorB",
    timeStampOldestMessage: new Date(2020, 00, 26, 11, 50, 00)
};
var testObjectC = {
    processingAddress: "tim_clearing_requestgeneratorC",
    timeStampOldestMessage: new Date(2019, 01, 25, 14, 50, 00)
};

/**
 * this function creates a table with the infromation provided by @param delayArray  
 */
function DisplayDelay(delayArray) {
    //html location and tabel
    var displayHTML = document.getElementById("displayHTML");
    displayHTML.innerHTML = " ";
    var tableElement = document.createElement("table");

    //head of tabel
    var tableHeadElement = document.createElement("thead");
    tableElement.appendChild(tableHeadElement);

    var trElement = document.createElement("tr");
    tableHeadElement.appendChild(trElement);

    var tdElementDelay = document.createElement("td");
    var tdElementTimestamp = document.createElement("td");
    var tdElementAction = document.createElement("td");

    tdElementDelay.appendChild(document.createTextNode("Delay in Min"));
    trElement.appendChild(tdElementDelay);
    tdElementTimestamp.appendChild(document.createTextNode("Timestamp of the oldest message"));
    trElement.appendChild(tdElementTimestamp);
    tdElementAction.appendChild(document.createTextNode("Action"));
    trElement.appendChild(tdElementAction);

    //body of tabel
    var tableBodyElement = document.createElement('tbody');
    tableElement.appendChild(tableBodyElement);

    for (var i = 0; i < delayArray.length; i++) {
        //variabels for body of the cels
        var oldestTimestamp = delayArray[i].timeStampOldestMessage;
        var processingAddress = delayArray[i].processingAddress;
        var timeDelay = DelayTimeCalc(oldestTimestamp);
        oldestTimestamp = oldestTimestamp.toLocaleString('nl'); //changing the time log to a dutch increment


        //elements for the cels
        var trElement = document.createElement("tr");
        tableBodyElement.appendChild(trElement);
        var tdElementDelay = document.createElement("td");
        var tdElementTimestamp = document.createElement("td");
        var tdElementAction = document.createElement("td");

        //adding up all the previous elements
        tdElementDelay.appendChild(document.createTextNode(timeDelay));
        tdElementTimestamp.appendChild(document.createTextNode(oldestTimestamp));
        tdElementAction.appendChild(document.createTextNode(processingAddress));
        trElement.appendChild(tdElementDelay);
        trElement.appendChild(tdElementTimestamp);
        trElement.appendChild(tdElementAction);
    }
    displayHTML.appendChild(tableElement);
}

/**
 * this function calculates the diffrence in time inbetween the oldes message and the current time,
 * and returns the value in the form of hours and minutes.
 */
function DelayTimeCalc(oldestTimestamp) {
    var currentDate = new Date();
    var timeDelayMs = Math.round(currentDate - oldestTimestamp);
    var timeDelayHour = timeDelayMs / 3600000
    timeDelayMin = Math.floor((timeDelayHour - Math.floor(timeDelayHour)) * 60);

    /**
     * if statements to display the correct medium
     */

    //if there are no minutes, only show the houres
    if (timeDelayMin === 0) {
        timeDelay = Math.floor(timeDelayHour) + " uur";
        return timeDelay;
    }

    //if there are no houres, only show the minuts. als check there are more than one minut to check if the plural noun of minutes had to be used
    if (Math.floor(timeDelayHour) == 0) {
        if (Math.floor(timeDelayMin) == 1) {
            timeDelay = Math.floor(timeDelayMin) + " minuut";
            return timeDelay;
        } else {
            timeDelay = Math.floor(timeDelayMin) + " minuten";
            return timeDelay;
        }
    }

    //if there are minutes and houres, display both of them. als check there are more than one minut to check if the plural noun of minutes had to be used
    if (Math.floor(timeDelayMin) == 1) {
        timeDelay = Math.floor(timeDelayHour) + " uur en " + timeDelayMin + " minuut";
        return timeDelay;
    } else {
        timeDelay = Math.floor(timeDelayHour) + " uur en " + timeDelayMin + " minuten";
        return timeDelay;
    }
}



testArray.push(testObjectA, testObjectB, testObjectC); //pushing the objects in the test array
DisplayDelay(testArray);