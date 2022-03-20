interface Aircraft {
    refuel: () => number;
    landingGear: () => string;
    rudderDirection: () => string;
    elevatorDirection: () => string;
    startEngine: () => string;
    radio: () => string;
    weight: () => number;
    airSpeed: () => number;
    altitudeLevel: () => number;
    isStalling: () => boolean;
}

abstract class Aircraft {
    private fuselageLength: number;
    private wingsWidth: number;
    public passengerCapacity: number;
    private weightLimit: number;
    public callSign: string;
    private planeRegistration: string;
    public reverseThrust: boolean;
    public takeOffThrust: boolean;
    public landingLights: boolean;
    private aircraftType: string;
}
class commercialAircraft extends Aircraft {
    private fuelLevel: string;
    public incomingPassengers: number;
    private foodStorage: number;
    private baggageCompartment: number;
    private passengerSeats: number;
}
