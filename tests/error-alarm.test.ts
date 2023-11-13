// errorAlarm.test.ts

import * as errorAlarm from "../error-alarm";

describe("Error Alarm", () => {
  test("Check error threshold and send email notification", () => {
    // Mock the functions or use spies as needed
    jest.spyOn(console, "log").mockImplementation(() => {});
    jest
      .spyOn(errorAlarm, "sendEmailNotification")
      .mockImplementation(() => {});

    // Simulate errors to trigger email notification
    for (let i = 0; i < 11; i++) {
      errorAlarm.checkErrorThreshold();
    }

    // Expect the email notification to be called
    expect(errorAlarm.sendEmailNotification).toHaveBeenCalled();

    // Clean up mocks
    jest.restoreAllMocks();
  });
});
