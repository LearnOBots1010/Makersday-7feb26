const int sensor1Pin = A0; // Sensor 1 AO
const int sensor2Pin = A1; // Sensor 2 AO                  
const int ledPin     = 13; // LED indicator

const int threshold = 400;       // Change this to adjust sensitivity
const unsigned long ledStayTime = 3000; // LED stays on for 3 seconds
unsigned long ledOffTime = 0;

void setup() {
  pinMode(ledPin, OUTPUT);Code:// Two-sensor leak detector using analog AO pins



  digitalWrite(ledPin, LOW);
  Serial.begin(9600); // monitor sensor values
}

void loop() {
  // Read analog sensors
  int sensor1Value = analogRead(sensor1Pin);
  int sensor2Value = analogRead(sensor2Pin);

  Serial.print("Sensor1: "); Serial.print(sensor1Value);
  Serial.print("  Sensor2: "); Serial.println(sensor2Value);

  // Trigger LED if any sensor exceeds threshold
  if (sensor1Value > threshold || sensor2Value > threshold) {
    digitalWrite(ledPin, HIGH);
    ledOffTime = millis() + ledStayTime;
  }

  // Turn off LED after timer
  if (digitalRead(ledPin) == HIGH && millis() >= ledOffTime) {
    digitalWrite(ledPin, LOW);
  }

  delay(100); // stability
}
//https://wokwi.com/projects/454374458698692609
