// Zoo Exercise
// We are building a zoo inside a computer. Each animal species in our zoo has lots
// of different, particular, behaviors, but all animals talk to each other in a similar
// way. Specifically, they all implement a speak method, the output of which is the
// arbitrary input string interspersed with an "animal sound" that is particular to that
// type of animal. For example, the lion's speak function behaves like so:
// > lion.speak( "I'm a lion" );
// < "I'm roar a roar lion roar"

// The tiger's speak function behaves similarly but with a different sound:
// > tiger.speak( "Lions suck" );
// < "Lions grrr suck grrr"

// Please write logic and classes to support our zoo in JavaScript (using whatever
// class model you like) with attention to code structure and readability.

export class Animal {
  private _sound: string;

  constructor(sound: string) {
    this._sound = sound;
  }

  public get sound() {
    return this._sound;
  }

  public set sound(value: string) {
    this._sound = value;
  }

  public speak(phrase: string): string {
    return phrase
      .split(" ")
      .map((word) => `${word} ${this._sound}`)
      .join(" ");
  }
}

export class Lion extends Animal {
  constructor() {
    super("roar");
  }
}

export class Tiger extends Animal {
  constructor() {
    super("grrr");
  }
}