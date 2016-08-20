/**
* This is an example of implementing the execution time counter in your functions.
* Insert the start & stop parts in every function in your project that's being triggered.
*/

function myFunction() {

  // Start counting execution time
  var runtimeCountStart = new Date();

    /* ----------------
    YOUR CODE GOES HERE
    ---------------- */

  // Stop counting execution time
  runtimeCountStop(runtimeCountStart);

}

/**
* This function sets the new execution time as the 'runtimeCount' script property.
*/
	
function runtimeCountStop(start) {

  var props = PropertiesService.getScriptProperties();
  var currentRuntime = props.getProperty("runtimeCount");
  var stop = new Date();
  var newRuntime = Number(stop) - Number(start) + Number(currentRuntime);
  var setRuntime = {
    runtimeCount: newRuntime,
  }
  props.setProperties(setRuntime);

}

/**
* Here's how you can record the project's total execution time in a sheet.
* Set a daily time-based trigger for this function.
* After being recorder in the sheet, the property is being reset.
*/

function recordRuntime() {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheetName = "Runtime";
  try {
    ss.setActiveSheet(ss.getSheetByName("Runtime"));
  } catch (e) {
    ss.insertSheet(sheetName);
  }
  var sheet = ss.getSheetByName("Runtime");
  var props = PropertiesService.getScriptProperties();
  var runtimeCount = props.getProperty("runtimeCount");
  var recordTime = new Date();

  sheet.appendRow([recordTime, runtimeCount]);
  props.deleteProperty("runtimeCount");

}
