class Airport {
    city;
    code;

    constructor(city, code) {
        this.city = city;
        this.code = code;
    }
}

class AirportsList {
    airports;
    constructor(airports) {
        this.airports = airports;
    }

    getAirportsList(search) {
        if (search === "" || search === null) {
            return;
        }
        else {
           return this.airports.filter(
                airport => {
                    if (airport.city.toUpperCase().startsWith(search)) {
                        return airport;
                    }
                });
        }
    }
}










class Flight {
    from;//: Airport,
    to;//: Airport,
    departureDate;//: Date,
    arrivalDate;
    // price;//: number,
    // airline;//: string

    setFlight(from, to, departureDate, arrivalDate/*, airline*/) {
        this.from = from;
        this.to = to;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
        // this.airline = airline;
    }
}