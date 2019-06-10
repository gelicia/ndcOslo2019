# ndcOslo2019

## Hardware
The hardware code is for the Particle, and is under `/particle-examples/` 
1. Pair a Particle Photon to your account [https://setup.particle.io/](https://setup.particle.io/)
1. Create a new app, and add the code to it [https://build.particle.io/build/new](https://build.particle.io/build/new)
1. Add the Neopixel and DS18B20 libraries [https://docs.particle.io/tutorials/developer-tools/build/photon/#using-libraries](https://docs.particle.io/tutorials/developer-tools/build/photon/#using-libraries)
1. Flash it to your device

Note: The slides show a `temp` variable and for NDC Oslo, I split it up to tempC and tempF to be more international ;)

You can test the functionality via the Particle console [https://console.particle.io](https://console.particle.io/devices)

The code exposes two variables, tempF and tempC
`GET https://api.particle.io/v1/devices/[deviceId]/tempC?access_token[accessToken]`
`GET https://api.particle.io/v1/devices/[deviceId]/tempF?access_token[accessToken]`

And one function, setLED
`POST  https://api.particle.io/v1/devices/4a0025001151373331333230/setLED`
With the header of `content-type: application/x-www-form-urlencoded'`
And two form values:
1. args, a comma delimited string of values that mean the index, the red value, the green value, and the blue value. Colors are a number between 0 and 255. Example string is `0,0,0,255` which would turn the first LED blue
1. access_token, your access token