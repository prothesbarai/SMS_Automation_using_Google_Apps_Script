function sendBulkSMS() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var statusColumn = 7; // 7th column for status update

  for (var i = 1; i < data.length; i++) { // Start from 1 to skip headers
    var phone = data[i][2]; // 3rd column (Phone)
    var message = data[i][5]; // 6th column (SMS Body)
    
    if (!phone || !message) {
      Logger.log("Empty cell found. Stopping execution.");
      break; // Stop execution if an empty cell is found
    }
    
    var url = "http://bulksmsbd.net/api/smsapi?api_key=r8T6VScD&type=text&number=" + phone + "&senderid=SDF&message=" + encodeURIComponent(message) + "&submit";
    
    try {
      var response = UrlFetchApp.fetch(url);
      sheet.getRange(i + 1, statusColumn).setValue("Sent"); // Update status
      Logger.log("SMS sent to: " + phone);
    } catch (e) {
      sheet.getRange(i + 1, statusColumn).setValue("Failed");
      Logger.log("Failed to send SMS to: " + phone + " | Error: " + e.toString());
    }
  }
}
