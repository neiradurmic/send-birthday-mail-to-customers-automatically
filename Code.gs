function sendBirthdayWishes() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  SpreadsheetApp.setActiveSheet(spreadsheet.getSheets()[0]);
  var sheet = spreadsheet.getActiveSheet();
 
  var lastRow = sheet.getLastRow();
  var startRow = 5;

  var msg = "";
 
  for (var i =startRow ; i <= lastRow; i++) {
    if(sheet.getRange(i, 4).getValue()==true) {
       MailApp.sendEmail(sheet.getRange(i, 3).getValue(),
        "Subject",  "Happy Birthday \n" + sheet.getRange(i, 1).getValue() + "\n\n" + sheet.getRange(1, 2).getValue() + "\n\n" + "Greetings,\n" + "Company Name,\n");
    }
  } 
}
