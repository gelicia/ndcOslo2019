# ndcOslo2019

Presentation slides are in `oslo2019.pdf`.

## Hardware
The hardware code is for the Particle, and is under `/particle-examples/` 
1. Pair a Particle Photon to your account [https://setup.particle.io/](https://setup.particle.io/)
1. Create a new app, and add the code in one of the demos to it [https://build.particle.io/build/new](https://build.particle.io/build/new)
    1. `particle-examples/led-test.ino` is a simple example that lights up an LED (of the Neopixel/WS2812 type) on the D3 pin.
    1. `particle-examples/oslo-demo.ino` is an example that reads data from a temperature sensor (DS18B20) on the D0 pin and allows the user to light up 1 LED in a string of 5 (Neopixel/WS2812) on the D3 pin
1. Add the Neopixel and DS18B20 libraries [https://docs.particle.io/tutorials/developer-tools/build/photon/#using-libraries](https://docs.particle.io/tutorials/developer-tools/build/photon/#using-libraries)
1. Flash it to your device

### About particle-examples/oslo-demo.ino
Note: The slides show a `temp` variable and for NDC Oslo, I split it up to tempC and tempF to be more international.

The code exposes two variables, tempF and tempC
`GET https://api.particle.io/v1/devices/[deviceId]/tempC?access_token[accessToken]`
`GET https://api.particle.io/v1/devices/[deviceId]/tempF?access_token[accessToken]`

And one function, setLED
`POST  https://api.particle.io/v1/devices/4a0025001151373331333230/setLED`
With the header of `content-type: application/x-www-form-urlencoded'`
And two form values:
1. `args`, a comma delimited string of values that mean the index, the red value, the green value, and the blue value. Colors are a number between 0 and 255. Example string is `0,0,0,255` which would turn the first LED blue
1. `access_token`, your access token

You can test the functionality via the Particle console [https://console.particle.io](https://console.particle.io/devices)

## Server
An express / node server runs to expose an API without exposing the Particle access keys and serve a webpage for interaction.
1. `cd` into the `server` directory
1. Run `npm install`
1. Rename `particleInfoTEMP.js` to `particleInfo.js` and add your Photon's device ID and access token.
1. Run `npm start`
1. Go to [http://localhost:3000/](http://localhost:3000/)
### Details
- Two endpoints are exposed that passthrough to the Particle API
    - `temperature` gets the value from the temperature sensor
        - A query parameter of `scale` of value `F` or `C` will use choose Fahrenheit or Celcius. If none is defined, Celcius is used.
    - `setLED` sets an LED to a color, using params in a form
        - `ledIdx` is the address of the LED (starting at 0)
        - `ledR` is the red value to send (0-255)
        - `ledG` is the green value to send (0-255)
        - `ledB` is the blue value to send (0-255)
 - The `server/public/` directory is served as a static webpage and is intended to have a UI to interact with the endpoints.