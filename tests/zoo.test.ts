// animalZoo.test.ts

import { Animal, Lion, Tiger } from "../zoo";

describe("Animal Zoo", () => {
  test("Lion speaks correctly", () => {
    const lion = new Lion();
    expect(lion.speak("I'm a lion")).toBe("I'm roar a roar lion roar");
  });

  test("Tiger speaks correctly", () => {
    const tiger = new Tiger();
    expect(tiger.speak("Lions suck")).toBe("Lions grrr suck grrr");
  });
});
