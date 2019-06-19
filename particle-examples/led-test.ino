// This #include statement was automatically added by the Particle IDE.
#include <neopixel.h>

Adafruit_NeoPixel strip = Adafruit_NeoPixel(1, D3, WS2812);

void setup() {
    strip.begin();
}

void loop() {
    displayColor();

}
void displayColor() {
    strip.setPixelColor(0,0,0,255);
    strip.show();
}