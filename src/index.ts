import * as tessel from 'tessel';
import * as servo from 'servo-pca9685';

const servoPortA = servo.use(tessel.port['A']);

servoPortA.on('ready', () => {
  servoPortA.configure(1, 0.05, 0.12, () => {
    let position = 0;
    // setTimeout(() => {
    //   console.log('done');
    // }, 5000);
    setInterval(() => {
      console.log('Position (in range 0-1):', position);
      //  Set servo #1 to position pos.

      // Increment by 10% (~18 deg for a normal servo)
      position += 0.1;
      if (position > 1) {
        position = 0; // Reset servo position
      }

      servoPortA.move(1, position);
    }, 500); // Every 500 milliseconds
  });
});
