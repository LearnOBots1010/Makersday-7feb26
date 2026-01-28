//https://wokwi.com/projects/454371484096886785
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

Adafruit_SSD1306 display(128, 64, &Wire, -1);

void setup() {
  pinMode(A0, INPUT);

  // Initialize display
  if (!display.begin(SSD1306_SWITCHCAPVCC, 0x3C)) {
    while (true); // Stop if display not found
  }

  display.clearDisplay();

  // Intro screen
  display.setTextColor(WHITE);
  display.setTextSize(2);
  display.setCursor(0, 10);
  display.print("Hiba &");

  display.setCursor(0, 30);
  display.print("Eeshal");

  display.setTextSize(1);
  display.setCursor(30, 55);
  display.print("presents");

  display.display();   // REQUIRED
  delay(2000);
}

void loop() {
  int gas = analogRead(A0);
  String text = String(gas);

  display.clearDisplay();

  // Title
  display.setTextSize(1);
  display.setCursor(30, 0);
  display.print("CO SCANNER");

  // Big centered number
  display.setTextSize(4);
  int16_t x1, y1;
  uint16_t w, h;

  display.getTextBounds(text, 0, 0, &x1, &y1, &w, &h);
  int x = (128 - w) / 2;
  int y = (64 - h) / 2 + 10;

  display.setCursor(x, y);
  display.print(text);

  display.display();
  delay(500);
}
