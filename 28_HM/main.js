const sleep = (delay) => new Promise((resolve) => {
    setTimeout(() => {
      console.log("Ничего не делали, просто ждали " + delay + " миллисекунд");
      resolve(delay);
    }, delay);
});

window.addEventListener("load", async () => {
    console.log("Начинаем работу");

    await sleep(1000);

    console.log("Ну, пора и честь знать");
});