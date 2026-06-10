// Ladestationsdatenbank um Informationen der hinterlegten Ladestationen zu speichern
// Hinterlegte Ladestationsinformationen werden global verfügbar sein

    var chargingstationDatabase = [
        {name: "- Bitte wählen -",
        },
        {
            name: "AC - 3,7 kW",
            power: 3.7,  // maximale Ladeleistung der ladestation in kW
            type: "AC",
        },
        {
            name: "AC - 7,4 kW",
            power: 7.4,  // maximale Ladeleistung der ladestation in kW
            type: "AC",
        },
        {
            name: "AC - 11 kW",
            power: 11,  // maximale Ladeleistung der ladestation in kW
            type: "AC",
        },
        {
            name: "AC - 22 kW",
            power: 22,  // maximale Ladeleistung der ladestation in kW
            type: "AC",
        },
        {
            name: "DC - 50 kW",
            power: 50,  // maximale Ladeleistung der ladestation in kW
            type: "DC",
        },
        {
            name: "DC - 100 kW",
            power: 100,  // maximale Ladeleistung der ladestation in kW
            type: "DC",
        },
        {
            name: "DC - 150 kW",
            power: 150,  // maximale Ladeleistung der ladestation in kW
            type: "DC",
        },
        {
            name: "DC - 175 kW",
            power: 175,  // maximale Ladeleistung der ladestation in kW
            type: "DC",
        },
        {
            name: "DC - 200 kW",
            power: 200,  // maximale Ladeleistung der ladestation in kW
            type: "DC",
        },
    ];

    // Anhängen der chargingstationDatabase an das globale Objekt window, um es global verfügbar zu machen
    window.chargingstationDatabase = chargingstationDatabase;
