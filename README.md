# Installation

Download this repository.
Inside the main folder, in the terminal, run the following command:

### `npm install`

to install all dependencies, then run the following command:

### `npm start`

to run the application.
The application should run on the 'http://localhost:3000/' url.

# Additional notes

Due to some CORS policy problems when sending requests to postman through browser, I had to make a proxy.

I provided simple unit tests with Jest, but didn't focus to make 100% coverage.

I am aware of one bug when changing to Specific Date schedule, selecting an hour, then changing to Weekly schedule.

I also didn't bother with implementing e-mail correctness checking.

UI doesn't clear the hour, but the code logic do, so when user tries to send request, he gets an error.

One unit tests that mocks the API sometimes doesn't work in random moments (ExportReport.test.tsx => it('should return status 200 on sending correct report'))

Design is quite similar to the task that was given, but i didn't bother with changing radio buttons colors, as well as
design on Firefox and Chrome can differ a little bit.
