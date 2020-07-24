/**
* Set image files in spreadsheet that have an assigned script
* 
*/

function setScriptOnImageInSheet() {
  
  //Define variables
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().activate();
  
  //Get image from Google Drive
  var setPermissionSheetsIcon = DriveApp.getFileById("1e1XW5hNXqEIxa-VA9N-0taCcxazfyMtZ").getBlob().getAs("image/png");
  var setImageInSheet = sheet.insertImage(setPermissionSheetsIcon, 1, 1);
  
  //Add image to Permissions sheet
//  var setImageInSheet = sheet.insertImage("https://developers.google.com/sheets/images/example-sheets-addon-use.png", 1, 1);
  
  //Assign script to picture
  setImageInSheet.assignScript('helloWorld').setHeight(422).setWidth(700); 
}

//**********************************************************************************************************************************

/**
* Display 'Hello World!' in the UI box.
* 
*/

function helloWorld(){
  
  var helloWorld = SpreadsheetApp.getUi().alert("Hello World!");
  
}

//**********************************************************************************************************************************

/**
* Add functions to spreadsheet menu when spreadsheet is opened
*
*/

function onOpen() {
  var spreadsheet = SpreadsheetApp.getActive();
  var menuItems = [  
    {name: 'Add Button with Script', functionName: 'setScriptOnImageInSheet'}];
  spreadsheet.addMenu('Functions', menuItems);
}