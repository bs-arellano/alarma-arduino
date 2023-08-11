# Alarma Arduino
This repository contains the code for an Arduino-based alarm. The alarm uses an ESP32 to connect to the internet, take a picture, and upload it to Firebase. It also includes code for a web client that can be used to request the images that have been saved in Firebase.

## Description
The alarm works as follows:

The ESP32 connects to the internet.
The ESP32 takes a picture.
The ESP32 uploads the picture to Firebase.
The web client requests the images that have been saved in Firebase.
The web client displays the images on a web page.
## Installation
To install the alarma-arduino repository, you will need to have the following:

- An Arduino IDE
- Nodejs
- An ESP32
- A camera module for the ESP32
- A Firebase account

Once you have the necessary hardware and software, you can install the project by following these steps:

1. Clone the repository from GitHub.
2. Open the main.ino file in the Arduino IDE.
3. Enter your Firebase credentials and wifi credentials.
4. Upload the code to the ESP32.
5. Intall the nodejs dependecies from 'package.json' by running `npm run`.
6. Deploy the web client by running `npm run dev`
## Usage
To use the alarm, you will need to do the following:

1. Make sure that the ESP32 is connected to the internet.
2. Press the button on the ESP32 to take a picture.
3. The picture will be uploaded to Firebase.
4. The web client will request the images that have been saved in Firebase.
5. The web client will display the images on a web page.
## Contributing
If you would like to contribute to the alarma-arduino project, you can do so by following these steps:

1. Fork the repository on GitHub.
2. Create a new branch.
3. Make your changes.
4. Commit your changes.
5. Push your changes to your fork.
6. Open a pull request.
## License
The alarma-arduino project is released under the MIT License.
