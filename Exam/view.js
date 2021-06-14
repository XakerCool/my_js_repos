class View {
    controller;
    
    isFromFocus = false;
    isToFocus = false;

    airportFromSearchValue = null;
    airportToSearchValue = null;

    departureDate = null;
    arrivalDate = null;

    isDeparture = null;
    isArrival = null;


    setController(controller) {
        this.controller = controller;
    }

    renderAirport(airport) {
        const element = $("div", { classList: "airport" }, 
            $("span", { classList: "airport__name" }, airport.city),
            $("span", { classList: "airport__code" }, " (" + airport.code + ")")
        );
        element.onclick = () => {
            if (this.isFromFocus) {
                this.airportFromSearchValue = element.innerText;
            } else if (this.isToFocus) {
                this.airportToSearchValue = element.innerText;
            }
            this.clearDropDownList();
        };
        return element;
    }

    renderAirportsList(airports) {
        let container = document.getElementById("airports__list");
        if (container !== null) {
            container.remove();
        }
        return $("div", { classList: "airportList", id: "airports__list" }, 
            ...airports.map(airport => { return this.renderAirport(airport) })
        );
    }

    renderDatepicker() {
        const container = $("div", { classList: "departure_datepicker", id: "departure_datepicker" });

        const datepickerDays = $("div", { classList: "departure_days", id: "departure_days" });

        let currentDate = null;
        let currentYear = 0;

        if (this.isDeparture) {
            this.departureDate = new Date();
            currentDate = this.departureDate;
            currentDate.setMonth(this.departureDate.getMonth());
            currentDate.setYear(this.departureDate.getFullYear());
        } else if (this.isArrival) {
            this.arrivalDate  = new Date();
            currentDate = this.arrivalDate;
            currentDate.setMonth(this.arrivalDate.getMonth());
            currentDate.setYear(this.arrivalDate.getFullYear());
        } else {
            return;
        }
        currentYear = currentDate.getFullYear();

        let monthContainer = $("div", { classList: "month_value_container", style: { width: 70 + "px"} }, this.getMonthName(currentDate.getMonth()));
        let yearContainer = $("div", { classList: "year_value_container" }, currentDate.getFullYear());

        const rightButton = $("button", { type: "button", classList: "change_month_button", id: "right_button" }, "Вперёд");
        rightButton.onclick = () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            
            yearContainer.innerText = currentDate.getFullYear();
            this.isDeparture ? this.departureDate.setYear(currentDate.getFullYear()) : this.isArrival ? this.arrivalDate.setYear(currentDate.getFullYear()) : null;
            this.isDeparture ? this.departureDate.setMonth(currentDate.getMonth()) : this.isArrival ? this.arrivalDate.setMonth(currentDate.getMonth()) : null;
            monthContainer.innerText = this.getMonthName(currentDate.getMonth());
        }
        const leftButton = $("button", { type: "button", classList: "change_month_button", id: "left_button" }, "Назад");
        leftButton.onclick = () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            if (currentDate.getMonth() - 1 < 0) {

                if (this.isArrival) {
                    if (this.arrivalDate.getMonth() < this.departureDate.getMonth() || this.arrivalDate.getFullYear() < this.departureDate.getFullYear()) {
                        return;
                    }
                }

                if (currentDate.getFullYear() <= currentYear) {
                    currentDate.setYear(currentYear + 1);
                    return;
                }

                yearContainer.innerText = currentDate.getFullYear();
                this.isDeparture ? this.departureDate.setYear(currentDate.getFullYear()) : this.isArrival ? this.arrivalDate.setYear(currentDate.getFullYear()) : null;
            }
            this.isDeparture ? this.departureDate.setMonth(currentDate.getMonth()) : this.isArrival ? this.arrivalDate.setMonth(currentDate.getMonth()) : null;
            monthContainer.innerText = this.getMonthName(currentDate.getMonth());
        }

        container.append($("div", { classList: "datepicker_component" },
            $("div", { classList: "month_change" }, 
                $("div", { classList: "change_month_button_container" }, 
                    leftButton
                ),
                yearContainer,
                monthContainer,
                $("div", { classList: "change_month_button_container" },
                    rightButton
                )
            ),
            $("div", { classList: "day_change" })
        ));
        
        document.getElementById("departure_container").append(container);
    }

    getMonthName(month) {
        const MONTHS = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        return MONTHS[month];
    }

    render() {
        let airportsList = null;
        document.body.append( 
            $("div", { classList: "form-container" },
                $("form", { name: "mainform", classList: "mainform" },
                    $("div", { classList: "from_container airport_input_container", id: "from_container"}, 
                        $("input", { name: "airport_from", id: "airport_from", type: "text", required: true,
                            onfocus: () => {
                                this.isFromFocus = true;
                            },
                            onblur: (e) => {
                                this.airportFromSearchValue = null;
                                const timeOut = setTimeout(() => {
                                    if (e.target.value !== "") {
                                        if (this.airportFromSearchValue === null && airportsList) {
                                            this.airportFromSearchValue = airportsList[0].city + " (" + airportsList[0].code + ")";
                                        }
                                    }
                                    if (this.airportFromSearchValue !== null) {
                                        e.target.value = this.airportFromSearchValue;
                                    }
                                    this.isFromFocus = false;
                                    this.clearDropDownList();
                                    clearTimeout(timeOut);
                                }, 200);
                            },
                            oninput: (e) => {
                                if (e.target.value !== "") {
                                    airportsList = this.controller.model.getAirportsList(
                                        this.searchAirport(e.target.value)
                                    ).slice(0, 6);
                                }
                                if (airportsList !== null) {
                                    this.renderDropDownList(
                                        this.renderAirportsList(
                                            airportsList
                                        )
                                    );
                                }
                            }
                        }),
                    ),
                    $("div", { classList: "to_container airport_input_container", id: "to_container" }, 
                        $("input", { name: "airport_to", id: "airport_to", type: "text", required: true,
                            onfocus: () => {
                                this.isToFocus = true;
                            },
                            onblur: (e) => {
                                this.airportToSearchValue = null;
                                const timeOut = setTimeout(() => {
                                    if (e.target.value !== "") {
                                        console.log(this.airportToSearchValue);
                                        if (this.airportToSearchValue === null && airportsList) {
                                            this.airportToSearchValue = airportsList[0].city + " (" + airportsList[0].code + ")";
                                        }
                                    }
                                    if (this.airportToSearchValue !== null) {
                                        e.target.value = this.airportToSearchValue;
                                    }
                                    this.isToFocus = false;
                                    this.clearDropDownList();
                                    clearTimeout(timeOut);
                                }, 200);
                            },
                            oninput: (e) => {
                                if (e.target.value !== "") {
                                    airportsList = this.controller.model.getAirportsList(
                                        this.searchAirport(e.target.value)
                                    ).slice(0, 6);
                                }
                                if (airportsList !== null) {
                                    this.renderDropDownList(
                                        this.renderAirportsList(
                                            airportsList
                                        )
                                    );
                                }
                            }
                        })
                    ),
                    $("div", { classList: "departure_input_container date_input_container", id: "departure_container" },
                        $("input", { classList: "departure_input date_input", id: "departure_date", type: "text", readonly: true,
                        onclick: () => {
                            if (document.getElementById("departure_datepicker") !== null) {
                                // document.getElementById("departure_datepicker").remove();
                            }
                            this.isDeparture = true;
                            this.isArrival = false;
                            this.renderDatepicker();
                        }
                    })
                    ),
                    $("div", { classList: "departure_input_container date_input_container", id: "departure_container" })
                )
            )
        )
    }

    fillInput() {
        const fromInput = document.getElementById("airport_from");
        const toInput = document.getElementById("airport_to");
        console.log(this.airportFromSearchValue, this.airportToSearchValue);
        if (this.airportFromSearchValue) {
            fromInput.value = this.airportFromSearchValue;
            fromInput.blur();
            toInput.focus();
        } 
        if (this.airportToSearchValue) {
            toInput.value = this.airportToSearchValue;
            toInput.blur();
        }
    }

    changeByArrows() {
        let index = -1;
        const container = document.getElementById("airports__list");
        const elements = Array.from(container.children);
        if (elements.length > 0)
        {
            window.addEventListener("keydown", (e) => {
                switch(e.key) {
                    case "ArrowDown": {
                        index++;
                        if (index > elements.length - 1) {
                            index = 0;
                        }
                        elements[index].classList.add("airport-focus");
                        elements[index].setAttribute("id", "selectedOption");
                        elements[(index - 1) < 0 ? elements.length - 1 : index - 1].classList.remove("airport-focus");
                        elements[(index - 1) < 0 ? elements.length - 1 : index - 1].removeAttribute("id");
                    } break;
                    case "ArrowUp": {
                        index--;
                        if (index < 0) {
                            index = elements.length - 1;
                        }
                        elements[index].classList.add("airport-focus");
                        elements[index].setAttribute("id", "selectedOption");
                        elements[(index + 1) > elements.length - 1 ? 0 : index + 1].classList.remove("airport-focus");
                        elements[(index + 1) > elements.length - 1 ? 0 : index + 1].removeAttribute("id");
                    } break;
                    case "Enter": {
                        if (this.isFromFocus) {
                            this.airportFromSearchValue = elements[index].innerText;
                        } else if (this.isToFocus) {
                            this.airportToSearchValue = elements[index].innerText;
                        }
                        this.fillInput();
                        this.clearDropDownList();
                        return;
                    };
                }
            });
            container.addEventListener("mouseenter", () => {
                elements.forEach(item => {
                    item.removeAttribute("id");
                    item.classList.remove("airport-focus");
                });
            });
        }
    }

    clearDropDownList() {
        const element = document.getElementById("dropDownList");
        if (element !== null) {
            element.remove();
        } else {
            return;
        }
    }

    renderDropDownList(airports) {
        let container = false;
        if (this.isFromFocus) {
            container = document.getElementById("from_container");
        } else if (this.isToFocus) {
            container = document.getElementById("to_container");
        } else {
            return;
        }
        Array.from(container.children).map(item => {
            if (item.id === "dropDownList") {
                item.remove();
            }
        });
        container.append(
            $("div", { classList: "dropdown_list", id: "dropDownList" }, 
                airports
            )
        );
        this.changeByArrows();
    }

    searchAirport(value) {
        if (value === "" || value === null) {
            console.log("asd");
            return [];
        }
        if (!value.match(/<\/?.+>/)) {
            let predicate = value.toUpperCase();
            return predicate;
        }
    }
}



