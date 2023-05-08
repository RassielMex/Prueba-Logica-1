const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t = 0;
let n = [];
let m = [];

//Obtener el valor de T
rl.question("Escribe el valor de T: ", (tInput) => {
  t = parseInt(tInput);
  if (t >= 1 && t < 5000) {
    getInputs(t, 1);
  } else {
    console.log("El valor de t no es valido");
    rl.close();
  }
});

//Obtiene valores del usuario tantas veces nTimes de manare recursiva
const getInputs = (nTimes, i) => {
  if (i <= nTimes) {
    rl.question("Introduce N: ", (nInput) => {
      if (parseInt(nInput) >= 1 && parseInt(nInput) < 1000000000) {
        n.push(parseInt(nInput));
        rl.question("Introduce M: ", (mInput) => {
          if (parseInt(mInput) >= 1 && parseInt(mInput) < 1000000000) {
            m.push(parseInt(mInput));
            getInputs(nTimes, i + 1);
          } else {
            console.log("El valor de m debe ser 1 < n < 10^9");
            rl.close();
          }
        });
      } else {
        console.log("El valor de n debe ser 1 < n < 10^9");
        rl.close();
      }
    });
  } else {
    getDirection(n, m);
    rl.close();
  }
};

//Obtener la direccion de acuerdo a los valores de n y m
const getDirection = (n, m) => {
  for (let index = 0; index < n.length; index++) {
    if (n[index] > m[index]) {
      if (m[index] % 2 === 0) {
        console.log("U");
      } else {
        console.log("D");
      }
    } else {
      if (n[index] % 2 === 0) {
        console.log("L");
      } else {
        console.log("R");
      }
    }
  }
};
