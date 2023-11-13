// Error Alarm Exercise
// Suppose we have a web application that runs on a single server. Errors that
// occur from time to time during normal operation of the application are logged to a
// text file that is stored in the file system on the server.

// We are not concerned about these errors when their frequency is low. However,
// when lots of errors occur in a short period of time, there may be a problem with
// the application and we want to be notified immediately. Specifically, when more
// than ten errors occur in one minute, we want to receive an email notification.
// In general terms or pseudo code, how would you implement such an alarm?

// Please assume:
// 1. The general paradigm of logging errors to a text file will be kept in place.
// 2. There exists a function
// function logError( error )
// This function is called each time there is an error and appends the error to
// the end of the log file.

// 3. We never want to receive more than one email notification per minute.

// Assuming you have access to a function logError(error) to log errors

let errorCount = 0;
let lastNotificationTime = 0;

export function checkErrorThreshold() {
  const currentTime = getCurrentTimestamp();

  if (currentTime - lastNotificationTime >= 60) {
    errorCount = 0;
    lastNotificationTime = currentTime;
  }

  errorCount += 1;

  if (errorCount > 10) {
    sendEmailNotification();

    errorCount = 0;
    lastNotificationTime = currentTime;
  }
}

export function getCurrentTimestamp() {
  return Math.floor(Date.now() / 1000);
}

export function sendEmailNotification() {
  console.log("Sending email notification: Too many errors in a short period!");
}

export function logError(error: Error) {
  // Log the error
  // ...

  // Check the error threshold after logging each error
  checkErrorThreshold();
}
