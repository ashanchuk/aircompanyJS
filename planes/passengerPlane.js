const Plane = require('./plane');

class PassengerPlane extends Plane {

    constructor(model, maxSpeed, maxFlightDistance, maxLoadCapacity, passengersCapacity) {
        super(model, maxSpeed, maxFlightDistance, maxLoadCapacity);
        this.passengersCapacity = passengersCapacity;
    }

    getPassengersCapacity() {
        return this.xpassengersCapacity;
    }

    setPassengersCapacity(value) {
        this.passengersCapacity = value;
    }
}

module.exports = PassengerPlane;