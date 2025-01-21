const delay = (ms: number): Promise<any> => new Promise(resolve => setTimeout(resolve, ms));

const showMessage = async ([time, message]) => {
  await delay(time);
  console.log(message);
};

const triggers = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];

const run = triggers => {

  triggers.push(async () => await showMessage([300, "first"]));
  triggers.forEach((t) => t());
};

run(triggers);