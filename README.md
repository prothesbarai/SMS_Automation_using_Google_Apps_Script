# ✅ "Bulk SMS Automation with Google Sheets and API"

✅ "Google Apps Script for SMS Broadcasting"

✅ "API Integration in Google Sheets"


This script automates the process of sending bulk SMS from Google Sheets using the BulkSMSBD API.

## Features
- **Reads Data from Google Sheets**: Extracts phone numbers and custom SMS content.
- **Ignores the First Row**: Skips the header row to avoid processing column titles.
- **Stops on Empty Cells**: If an empty cell is found in the phone number or message column, execution stops immediately.
- **Logs Sent Status**: Updates the 7th column with "Sent" or "Failed" based on SMS delivery status.

## How to Use
### Step 1: Add the Script
1. Open your Google Sheet.
2. Go to **Extensions** → **Apps Script**.
3. Copy and paste the provided script.
4. Click **Save** (Ctrl + S).

### Step 2: Run the Script
#### Method 1: Manual Execution
1. In Apps Script, select `sendBulkSMS` from the function dropdown.
2. Click the **Run** button ▶.
3. Grant necessary permissions when prompted.

#### Method 2: Using a Button
1. Insert a button in Google Sheets (`Insert` → `Drawing`).
2. Click on the button and select `Assign Script`.
3. Enter `sendBulkSMS` and click OK.
4. Click the button to run the script.

### Step 3: Check Status
- The 7th column in Google Sheets will show "Sent" or "Failed".
- Open **Apps Script → View → Logs** to see logs.

## Requirements
- A Google Sheet with the following columns:
  1. SL
  2. Name
  3. Phone (Used for SMS sending)
  4. District
  5. Donation Amount
  6. SMS Body (Custom message for each recipient)
- An active **BulkSMSBD API key**.

## Notes
- Ensure that phone numbers are correctly formatted before running the script.
- If an empty cell is found in the `Phone` or `SMS Body` column, the script will **stop immediately**.
- API response is logged for debugging purposes.

## Troubleshooting
- If the script doesn't run, check if Google Sheets has the correct permissions.
- Ensure that the API key is valid and the BulkSMSBD service is active.
- Check if all required columns contain valid data.

---

This script simplifies bulk SMS sending using Google Sheets, making it easy to manage personalized messages efficiently! 🚀



