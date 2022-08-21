const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
var totalBatteries = 0;
// Code your solution here

function reducer (array) {
  totalBatteries = array.reduce((sum, element) => sum += element, totalBatteries)
}

reducer(batteryBatches)