## AES Cipher Encryption Algorithm

### Description.

- AES (Advanced Encryption Standard ) Algorithm is a symmetric cipher encryption scheme.
- There are npm libraries such as crypto-js which implement this encryption stsnderd as described below.

### Implementation.

- This code-base implements AES algorith using npm package called crypto-js.
  ` npm install crypto-js`
- Data is presented as byte matrix as an array of 4 by 4 bytes.
- Operations are performed on the data stored as an array(state)
- The basic operations on this data are `substitute, shift rows, mix columns, add round key`.
- The encryption function takes two params `data, secret_key`
- Since it is a symmetric encryption scheme is uses same `secret_key` for encryption and decryption.
