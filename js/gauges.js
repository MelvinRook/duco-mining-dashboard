function gauge01(inputval){//Registered Gauge
    var opts = {
        angle: -0.29, // The span of the gauge arc
        lineWidth: 0.15, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
        length: 0.61, // // Relative to gauge radius
        strokeWidth: 0.051, // The thickness
        color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        
        limitMin: false,     // If true, the min value of the gauge will be fixed
        color: "#000000",
        strokeColor: '#EEEEEE',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support
        staticLabels: {
            font: "10px sans-serif",  // Specifies font
            labels: [0, 1000, 3000],  // Print labels at these values
            color: "#000000",  // Optional: Label text color
            fractionDigits: 0  // Optional: Numerical precision. 0=round off.
        },
        staticZones: [
            {strokeStyle: "#F03E3E", min: 0, max: 1000}, // Red from 100 to 130
            {strokeStyle: "#FFDD00", min: 1000, max: 1500}, // Yellow
            {strokeStyle: "#30B32D", min: 1500, max: 5000}, // Green
            {strokeStyle: "#FFDD00", min: 5000, max: 5500}, // Yellow
            {strokeStyle: "#F03E3E", min: 5500, max: 7000}  // Red
         ],
          

        
    };
    var target = document.getElementById('gauge01'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!



    
    gauge.maxValue = 7000; // set max gauge value
    gauge.minValue = 0;  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 1; // set animation speed (32 is default value)
    gauge.set(inputval); // set actual value

    
}

function gauge02(inputval){ //Connection Gauge for Network
    var opts = {
        angle: -0.29, // The span of the gauge arc
        lineWidth: 0.15, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
        length: 0.61, // // Relative to gauge radius
        strokeWidth: 0.051, // The thickness
        color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        
        limitMin: false,     // If true, the min value of the gauge will be fixed
        color: "#000000",
        strokeColor: '#EEEEEE',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support
        staticLabels: {
            font: "10px sans-serif",  // Specifies font
            labels: [0, 2000,8000],  // Print labels at these values
            color: "#000000",  // Optional: Label text color
            fractionDigits: 0  // Optional: Numerical precision. 0=round off.
        },
        staticZones: [
            {strokeStyle: "#F03E3E", min: 0, max: 1000}, // Red from 100 to 130
            {strokeStyle: "#30B32D", min: 1000, max: 7000}, // Green
            {strokeStyle: "#FFDD00", min: 7000, max: 8000}, // Yellow
            {strokeStyle: "#F03E3E", min: 8000, max: 10000}  // Red
         ],
          

        
    };
    var target = document.getElementById('gauge02'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!

    
    gauge.maxValue = 10000; // set max gauge value
    gauge.minValue = 0;  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 1; // set animation speed (32 is default value)
    gauge.set(inputval); // set actual value

    
}
function gauge03(inputval){
    var opts = {
        angle: -0.29, // The span of the gauge arc
        lineWidth: 0.15, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
        length: 0.61, // // Relative to gauge radius
        strokeWidth: 0.051, // The thickness
        color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        
        limitMin: false,     // If true, the min value of the gauge will be fixed
        color: "#000000",
        strokeColor: '#EEEEEE',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support
        staticLabels: {
            font: "10px sans-serif",  // Specifies font
            labels: [0, 600, 2000],  // Print labels at these values
            color: "#000000",  // Optional: Label text color
            fractionDigits: 0  // Optional: Numerical precision. 0=round off.
        },
        staticZones: [
            {strokeStyle: "#F03E3E", min: 0, max: 200}, // Red from 100 to 130
            {strokeStyle: "#FFDD00", min: 200, max: 600}, // Yellow
            {strokeStyle: "#30B32D", min: 600, max: 2000}, // green
            {strokeStyle: "#F03E3E", min: 2000, max: 3000}  // Red
         ],
          

        
    };
    var target = document.getElementById('gauge03'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!



    
    gauge.maxValue = 3000; // set max gauge value
    gauge.minValue = 0;  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 1; // set animation speed (32 is default value)
    gauge.set(inputval); // set actual value

    
}
function gauge04(inputval){ //Price Gauge
    var opts = {
        angle: -0.29, // The span of the gauge arc
        lineWidth: 0.15, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
        length: 0.61, // // Relative to gauge radius
        strokeWidth: 0.051, // The thickness
        color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        
        limitMin: false,     // If true, the min value of the gauge will be fixed
        color: "#000000",
        strokeColor: '#EEEEEE',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support
        staticLabels: {
            font: "10px sans-serif",  // Specifies font
            labels: [0.001, 0.005, 0.01],  // Print labels at these values
            color: "#000000",  // Optional: Label text color
            fractionDigits: 3  // Optional: Numerical precision. 0=round off.
        },
        staticZones: [
            {strokeStyle: "#F03E3E", min: 0, max: 0.001}, // Red from 100 to 130
            {strokeStyle: "#FFDD00", min: 0.001, max: 0.005}, // Yellow
            {strokeStyle: "#30B32D", min: 0.005, max: 0.015}, // Green
         ],
          

        
    };
    var target = document.getElementById('gauge04'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!



    
    gauge.maxValue = 0.015; // set max gauge value
    gauge.minValue = 0;  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 1; // set animation speed (32 is default value)
    gauge.set(inputval); // set actual value

    
}
function gauge05(inputval){ //CPU
    var opts = {
        angle: -0.29, // The span of the gauge arc
        lineWidth: 0.15, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
        length: 0.61, // // Relative to gauge radius
        strokeWidth: 0.051, // The thickness
        color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        percentColors: [[0.0, "#30B32D" ], [0.50, "#30B32D"], [1.0, "F03E3E"]],
        limitMin: false,     // If true, the min value of the gauge will be fixed
        color: "#000000",
        strokeColor: '#EEEEEE',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support
          

        
    };
    var target = document.getElementById('gauge05'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!



    
    gauge.maxValue = 100; // set max gauge value
    gauge.minValue = 0;  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 1; // set animation speed (32 is default value)
    gauge.set(inputval); // set actual value

    
}

function gauge06(inputval){
    var opts = {
        angle: -0.29, // The span of the gauge arc
        lineWidth: 0.15, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
        length: 0.61, // // Relative to gauge radius
        strokeWidth: 0.051, // The thickness
        color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        
        limitMin: false,     // If true, the min value of the gauge will be fixed
        color: "#000000",
        strokeColor: '#EEEEEE',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support
          

        
    };
    var target = document.getElementById('gauge06'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!



    
    
    gauge.minValue = 0;  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 1; // set animation speed (32 is default value)
    gauge.set(inputval); // set actual value

    
}
function gauge07(inputval, max){
    var opts = {
        angle: -0.29, // The span of the gauge arc
        lineWidth: 0.15, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
        length: 0.61, // // Relative to gauge radius
        strokeWidth: 0.051, // The thickness
        color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        percentColors: [[0.0, "#30B32D" ], [0.50, "#30B32D"], [1.0, "F03E3E"]],
        limitMin: false,     // If true, the min value of the gauge will be fixed
        color: "#000000",
        strokeColor: '#EEEEEE',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support
          

        
    };
    var target = document.getElementById('gauge07'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!



    
    gauge.maxValue = max; // set max gauge value
    gauge.minValue = 0;  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 1; // set animation speed (32 is default value)
    gauge.set(inputval); // set

    
}

function gauge08(inputval){ //Price Gauge
    var opts = {
        angle: -0.29, // The span of the gauge arc
        lineWidth: 0.15, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
        length: 0.61, // // Relative to gauge radius
        strokeWidth: 0.051, // The thickness
        color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        
        limitMin: false,     // If true, the min value of the gauge will be fixed
        color: "#000000",
        strokeColor: '#EEEEEE',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support
        staticLabels: {
            font: "10px sans-serif",  // Specifies font
            labels: [30, 34],  // Print labels at these values
            color: "#000000",  // Optional: Label text color
            fractionDigits: 0  // Optional: Numerical precision. 0=round off.
        },
        staticZones: [
            {strokeStyle: "#F03E3E", min: 0, max: 1}, // Red 
            {strokeStyle: "#30B32D", min: 1, max: 26}, // YGreen
            {strokeStyle: "#FFDD00", min: 26, max: 30}, // Yellow
            {strokeStyle: "#F03E3E", min: 30, max: 34}  // Red
         ],
          

        
    };
    var target = document.getElementById('gauge08'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!



    
    gauge.maxValue = 36; // set max gauge value
    gauge.minValue = 0;  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 1; // set animation speed (32 is default value)
    gauge.set(inputval); // set actual value

    
}