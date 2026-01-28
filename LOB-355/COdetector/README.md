# CO Scanner using OLED Display (Arduino)

## Overview

This project is a simple carbon monoxide (CO) scanner built using an Arduino, an analogue gas sensor, and a 128×64 OLED display. The system continuously reads analogue values from the gas sensor and displays them in large, easy-to-read digits on the OLED screen.

The project is intended for educational and demonstration purposes, focusing on analogue sensor interfacing, OLED display handling via I²C, and basic embedded system programming.

Wokwi simulation link:  
https://wokwi.com/projects/454371484096886785

---

## Features

- Real-time analogue gas sensor reading  
- Large centred numerical display  
- SSD1306 128×64 OLED support  
- Intro screen with presentation text  
- Simple and readable Arduino code  

---

## Components Used

- Arduino Uno (or compatible board)  
- Analogue gas sensor (e.g. MQ-series)  
- 128×64 OLED display (SSD1306, I²C)  
- Jumper wires  
- Breadboard (optional)  

---

## Libraries Required

Install the following libraries using the Arduino Library Manager:

- Wire  
- Adafruit GFX Library  
- Adafruit SSD1306 Library  

---

## Wiring Connections

### OLED Display (I²C)

- VCC → 5V  
- GND → GND  
- SDA → A4  
- SCL → A5  

### Gas Sensor

- AO → A0  
- VCC → 5V  
- GND → GND  

---

## How It Works

1. The OLED display initialises on startup.
2. An intro screen shows the presenters’ names.
3. The Arduino reads an analogue value from the gas sensor on pin A0.
4. The sensor value is displayed in large font at the centre of the screen.
5. The display refreshes every 500 milliseconds.

---

## Notes

- The displayed value is a raw analogue reading.
- No calibration or ppm conversion is applied.
- This project is for learning and simulation purposes only.

---

## Future Improvements

- Convert readings to ppm using calibration data  
- Add visual or audible alerts for high gas levels  
- Display graphs or bar indicators  
- Log data over time  

---

## Authors

Hiba & Eeshal

---

## Licence

This project is open-source and intended for educational use. You are free to modify and distribute it with attribution.
