// Fahrzeugdatenbank um Informationen der hinterlegten Fahrzeuge zu speichern
// Hinterlegte Fahrzeuginformationen werden global verfügbar sein
const vehicleDatabase = [
            {name: "- Bitte wählen -",
            },
            {
                name: "Audi Q4 e-tron 40",
                consumption: 20.46,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 76.6,      // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },     // Nicht Quelle  
                    { station: "DC - 150 kW", power: 143 },     
                    { station: "DC - 175 kW", power: 143 },       
                    { station: "DC - 200 kW", power: 143 },
                ]
            },
            {
                name: "Audi Q8 e-tron 50 quattro",
                consumption: 24.26,     // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 89,        // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 22 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },     // Nicht Quelle  
                    { station: "DC - 150 kW", power: 150 },     // Nicht Quelle
                    { station: "DC - 175 kW", power: 155 },       
                    { station: "DC - 200 kW", power: 155 },
                ]
            },
            {
                name: "BMW iX xDrive 40",
                consumption: 22.99,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 71,        // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 46 },
                    { station: "DC - 100 kW", power: 100 },     // Nicht Quelle
                    { station: "DC - 150 kW", power: 148 },
                    { station: "DC - 175 kW", power: 148 },       
                    { station: "DC - 200 kW", power: 148 },
                ]
            },
            {
                name: "BMW iX1 xDrive 30",
                consumption: 19.25,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 64.7,      // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 22 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },     
                    { station: "DC - 150 kW", power: 130 },     // Auf 130 kW begrenzt
                    { station: "DC - 175 kW", power: 130 },       
                    { station: "DC - 200 kW", power: 130 },
                ]
            },
            {
                name: "BMW iX3",
                consumption: 20.9,        // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 74,        // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 48 },
                    { station: "DC - 100 kW", power: 100 },     // Nicht Quelle  
                    { station: "DC - 150 kW", power: 136 },     
                    { station: "DC - 175 kW", power: 136 },     
                    { station: "DC - 200 kW", power: 155 },  
                ]
            },
            {
                name: "BMW i4 eDrive35",
                consumption: 19.03,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 67,        // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },     
                    { station: "DC - 150 kW", power: 150 },
                    { station: "DC - 175 kW", power: 175 },     
                    { station: "DC - 200 kW", power: 180 },     
                ]
            },
            {
                name: "BMW i4 eDrive40",
                consumption: 19.36,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 80.7,      // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },     // Nicht Quelle
                    { station: "DC - 150 kW", power: 150 }, 
                    { station: "DC - 175 kW", power: 175 },     // Nicht Quelle 
                    { station: "DC - 200 kW", power: 207 },    
                ]
            },
            {
                name: "BMW i7 xDrive60",
                consumption: 20.9,        // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 101.7,     // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },     // Nicht Quelle  
                    { station: "DC - 150 kW", power: 150 },
                    { station: "DC - 175 kW", power: 175 },     // Nicht Quelle 
                    { station: "DC - 200 kW", power: 200 },     
                ]
            },
            {
                name: "BYD ATTO 3",
                consumption: 17.16,  // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 60.5,   // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 89 },       
                    { station: "DC - 150 kW", power: 89 },
                    { station: "DC - 175 kW", power: 89 },      
                    { station: "DC - 200 kW", power: 89 },    
                ]
            },
            {
                name: "Citroen e-SpaceTourer M 50 kWh",
                consumption: 27.72,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 46.3,      // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },         // Nicht Quelle      
                    { station: "DC - 150 kW", power: 101 },         
                    { station: "DC - 175 kW", power: 101 },         // Nicht Quelle, begrenzt auf 101 kW
                    { station: "DC - 200 kW", power: 101 },         // Nicht Quelle, begrenzt auf 101 kW
                ]
            },
            {
                name: "Citroen e-Jumpy Kombi XL 75 kWh",
                consumption: 29.04,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 68.0,      // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },         // Nicht Quelle      
                    { station: "DC - 150 kW", power: 100 },         
                    { station: "DC - 175 kW", power: 100 },         // Nicht Quelle, begrenzt auf 100 kW
                    { station: "DC - 200 kW", power: 100 },         // Nicht Quelle, begrenzt auf 100 kW
                ]
            },
            {
                name: "Fiat 500 Cabrio 42 kWh",
                consumption: 16.06,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 37.3,      // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 49 },
                    { station: "DC - 100 kW", power: 85 },        
                    { station: "DC - 150 kW", power: 85 },
                    { station: "DC - 175 kW", power: 89 },      
                    { station: "DC - 200 kW", power: 89 },    
                ]
            },
            {
                name: "Fiat 600e",
                consumption: 16.61,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 50.8,      // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },      
                    { station: "DC - 150 kW", power: 100 },
                    { station: "DC - 175 kW", power: 100 },      
                    { station: "DC - 200 kW", power: 100 },    
                ]
            },
            {
                name: "Fiat E-Ulysse L2 75 kWh",
                consumption: 28.27,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 68.0,      // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },      
                    { station: "DC - 150 kW", power: 100 },     // Nicht Quelle, begrenzt auf 100 kW 
                    { station: "DC - 175 kW", power: 100 },     // Nicht Quelle, begrenzt auf 100 kW 
                    { station: "DC - 200 kW", power: 100 },     // Nicht Quelle, begrenzt auf 100 kW
                ]
            },
            {
                name: "Fiat E-Ulysse L3 50 kWh",
                consumption: 22.11,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 46.3,      // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },      
                    { station: "DC - 150 kW", power: 101 },
                    { station: "DC - 175 kW", power: 101 },      
                    { station: "DC - 200 kW", power: 101 },    
                ]
            },
            {
                name: "Honda e Advance",
                consumption: 18.92,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 28.5,      // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 6.6 },
                    { station: "AC - 11 kW", power: 3.7 },            //  ????
                    { station: "AC - 22 kW", power: 6.6 },
                    { station: "DC - 50 kW", power: 46 },
                    { station: "DC - 100 kW", power: 46 },     
                    { station: "DC - 150 kW", power: 46 },     
                    { station: "DC - 175 kW", power: 46 },      
                    { station: "DC - 200 kW", power: 46 }, 
                ]
            },
            {
                name: "Hyundai IONIQ 5 77.4 kWh",
                consumption: 19.25,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 74,        // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },     // Nicht Quelle   
                    { station: "DC - 150 kW", power: 150 },     // Nicht Quelle 
                    { station: "DC - 175 kW", power: 175 },     // Nicht Quelle  
                    { station: "DC - 200 kW", power: 200 },     // Nicht Quelle, Begrenzung auf 233 kW
                ]
            },
            {
                name: "Hyundai IONIQ 6 77.4 kWh",
                consumption: 16.72,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 74,        // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },      
                    { station: "DC - 150 kW", power: 150 },
                    { station: "DC - 175 kW", power: 175 },      
                    { station: "DC - 200 kW", power: 200 },     // Nicht Quelle, Begrenzung auf 233 kW 
                ]
            },
            {
                name: "Hyundai KONA Elektro 64 kWh",
                consumption: 16.17,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 64,        // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 49 },
                    { station: "DC - 100 kW", power: 77 },      
                    { station: "DC - 150 kW", power: 77 },    
                    { station: "DC - 175 kW", power: 77 },      
                    { station: "DC - 200 kW", power: 77 },      
                ]
            },
            {
                name: "Kia EV6 GT",
                consumption: 22.66,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 74,      // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },    // Nicht Quelle    
                    { station: "DC - 150 kW", power: 150 },
                    { station: "DC - 175 kW", power: 175 },    // Nicht Quelle   
                    { station: "DC - 200 kW", power: 200 },    // Nicht Quelle, Begrenzung auf 233 kW   
                ]
            },
            {
                name: "Kia e-Soul 64 kWh",
                consumption: 17.27,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 64,      // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 49 },
                    { station: "DC - 100 kW", power: 77 },      
                    { station: "DC - 150 kW", power: 77 },
                    { station: "DC - 175 kW", power: 77 },      
                    { station: "DC - 200 kW", power: 77 },      
                ]
            },
            {
                name: "Kia Niro EV",
                consumption: 18.04,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 64.8,      // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 80 },       
                    { station: "DC - 150 kW", power: 80 },
                    { station: "DC - 175 kW", power: 80 },      
                    { station: "DC - 200 kW", power: 80 },      
                ]
            },
            {
                name: "Mercedes eVito Tourer Lang 90 kWh",
                consumption: 30.91,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 90,        // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },     // Nicht quelle       
                    { station: "DC - 150 kW", power: 110 },     // Nicht Quelle, begrenzt auf 101 kW
                    { station: "DC - 175 kW", power: 110 },     // Nicht Quelle, begrenzt auf 101 kW  
                    { station: "DC - 200 kW", power: 110 },     // Nicht Quelle, begrenzt auf 101 kW 
                ]
            },
            {
                name: "MG MG4 Electric 64 kWh",
                consumption: 17.93,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 61.7,      // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },       
                    { station: "DC - 150 kW", power: 135 },       
                    { station: "DC - 175 kW", power: 135 },      
                    { station: "DC - 200 kW", power: 135 },   
                ]
            },
            {
                name: "Opel Zafira-e Life M 50 kWh",
                consumption: 22.11,      // Keine WLTP Werte, da keine Daten vorhanden, lediglich Schätzwerte
                batterySize: 46.3,      // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },     // Nicht Quelle      
                    { station: "DC - 150 kW", power: 101 },     // Nicht Quelle, begrenzt auf 101 kW  
                    { station: "DC - 175 kW", power: 101 },     // Nicht Quelle, begrenzt auf 101 kW 
                    { station: "DC - 200 kW", power: 101 },     // Nicht Quelle, begrenzt auf 101 kW
                ]
            },
            {
                name: "Skoda Enyaq iV 50",
                consumption: 17.49,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 52,        // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.2 },
                    { station: "AC - 11 kW", power: 7.2 },
                    { station: "AC - 22 kW", power: 7.2 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 50 },       
                    { station: "DC - 150 kW", power: 50 },
                    { station: "DC - 175 kW", power: 50 },      
                    { station: "DC - 200 kW", power: 50 },      
                ]
            },
            {
                name: "Skoda Enyaq iV 80",
                consumption: 19.37,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 77,        // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },     // Nicht Quelle     
                    { station: "DC - 150 kW", power: 143 },
                    { station: "DC - 175 kW", power: 143 },      
                    { station: "DC - 200 kW", power: 143 },       
                ]
            },
            {
                name: "Skoda Enyaq iV RS",
                consumption: 18.59,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 77,        // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 49 },
                    { station: "DC - 100 kW", power: 100 },     // Nicht Quelle       
                    { station: "DC - 150 kW", power: 150 },
                    { station: "DC - 175 kW", power: 175 },      
                    { station: "DC - 200 kW", power: 175 },      
                ]
            },
            {
                name: "Tesla Model 3",
                consumption: 15.84,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 57.5,      // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },     // Nicht Quelle
                    { station: "DC - 150 kW", power: 150 },     // Nicht Quelle
                    { station: "DC - 175 kW", power: 170 },      
                    { station: "DC - 200 kW", power: 170 },
                ]
            },
            {
                name: "Tesla Model 3 Maximale Reichweite",
                consumption: 16.28,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 75,        // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },     // Nicht Quelle
                    { station: "DC - 150 kW", power: 150 },     // Nicht Quelle, nur supercharher v2 (150 kW DC)
                    { station: "DC - 175 kW", power: 175 },      
                    { station: "DC - 200 kW", power: 200 },     // Nicht Quelle
                ]
            },
            {
                name: "Tesla Model S Plaid",
                consumption: 20.57,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 95,        // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },     // Nicht Quelle
                    { station: "DC - 150 kW", power: 150 },     // Nicht Quelle, nur supercharher v2 (150 kW DC)
                    { station: "DC - 175 kW", power: 175 },      
                    { station: "DC - 200 kW", power: 200 },     // Nicht Quelle
                ]
            },
            {
                name: "Tesla Model Y",
                consumption: 17.27,      // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 57.5,      // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },     // Nicht Quelle
                    { station: "DC - 150 kW", power: 150 },     // Nicht Quelle, nur supercharher v2 (150 kW DC)
                    { station: "DC - 175 kW", power: 170 },      
                    { station: "DC - 200 kW", power: 170 },
                ]
            },
            {
                name: "Volvo EX30 Single Motor ER",
                consumption: 17.27,  // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 64,    // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 22 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },     
                    { station: "DC - 150 kW", power: 150 }, 
                    { station: "DC - 175 kW", power: 153 },      
                    { station: "DC - 200 kW", power: 153 },       
                ]
            },
            {
                name: "Volkswagen ID.3 Pro",
                consumption: 16.83,  // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 58,    // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },     
                    { station: "DC - 150 kW", power: 120 }, 
                    { station: "DC - 175 kW", power: 120 },      
                    { station: "DC - 200 kW", power: 120 },     
                ]
            },
            {
                name: "Volkswagen ID.4 Pro Performance",
                consumption: 19.25,  // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 77,    // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },     // Nicht Quelle  
                    { station: "DC - 150 kW", power: 143 },
                    { station: "DC - 175 kW", power: 143 },      
                    { station: "DC - 200 kW", power: 143 },      
                ]
            },
            {
                name: "Volkswagen ID.5 Pro",
                consumption: 18.37,  // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 77,    // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },     // Nicht Quelle  
                    { station: "DC - 150 kW", power: 143 },
                    { station: "DC - 175 kW", power: 143 },      
                    { station: "DC - 200 kW", power: 143 },      
                ]
            },
            {
                name: "Volkswagen ID.7 Pro",
                consumption: 15.51,  // Fahrzeugverbrauch (WLTP - Durchschnitt aus TEL (Test Energy Low) und TEH (Test Energy High)) in kWh/100 km
                batterySize: 77,    // Nutzbare Speicherkapazität in kWh
                supportedChargingPowers: [
                    { station: "AC - 3,7 kW", power: 3.7 },     
                    { station: "AC - 7,4 kW", power: 7.4 },
                    { station: "AC - 11 kW", power: 11 },
                    { station: "AC - 22 kW", power: 11 },
                    { station: "DC - 50 kW", power: 50 },
                    { station: "DC - 100 kW", power: 100 },     
                    { station: "DC - 150 kW", power: 150 },    
                    { station: "DC - 175 kW", power: 175 },      
                    { station: "DC - 200 kW", power: 175 },
                ]
            },
        ];

    // Anhängen der vehicleDatabase an das globale Objekt window, um es global verfügbar zu machen
    window.vehicleDatabase = vehicleDatabase;