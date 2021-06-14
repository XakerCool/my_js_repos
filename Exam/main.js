window.addEventListener("load", () => {
    const airports = getAirport(1000);
    // console.log(airports);

    const model = new AirportsList(airports);
    const view = new View();
    const controller = new Controller(model, view);
});