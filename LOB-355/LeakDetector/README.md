# Dual Sensor Leak Detector (Arduino)

## Overview

This project implements a simple leak detection system using two analogue sensors
connected to an Arduino. If either sensor detects a value above a predefined
threshold, an LED indicator is activated for a fixed duration.

The project is suitable for educational use and basic safety demonstrations.

Wokwi simulation:  
https://wokwi.com/projects/454374458698692609

---

## Features

- Two analogue input sensors
- Adjustable detection threshold
- LED alert with timed delay
- Serial monitoring of sensor values
- Simple and robust logic

---

## Components Used

- Arduino Uno (or compatible board)
- Two analogue leak or moisture sensors
- LED
- Current-limiting resistor
- Jumper wires
- Breadboard (optional)

---

## Pin Configuration

| Component | Arduino Pin |
|---------|-------------|
| Sensor 1 AO | A0 |
| Sensor 2 AO | A1 |
| LED | 13 |

---

## How It Works

1. The Arduino reads both analogue sensor values continuously.
2. Sensor readings are printed to the Serial Monitor.
3. If either sensor value exceeds the threshold, the LED turns on.
4. The LED remains on for three seconds.
5. The LED turns off automatically once the timer expires.

---

## Notes

- The threshold value can be adjusted to change sensitivity.
- The LED delay prevents rapid flickering.
- Sensor readings are raw analogue values.

---

## Possible Improvements

- Add a buzzer or relay output
- Display readings on an LCD or OLED
- Log data to an SD card
- Implement wireless alerts

---

## Licence

This project is open-source and intended for educational use.
You may modify and distribute it freely with attribution.
