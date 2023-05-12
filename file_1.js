const fs = require("fs");

function start(n, fileA, fileB) {
  const m3 = [];
  const readFile = (file) => {
    const txt = fs.readFileSync(file).toString();

    // Separo el archivo en las diferentes lineas, limpieza de EOL
    const arr = txt.split("\n").filter(Boolean);

    const coords = arr
      .map((str) => str.replace(/(,)/g, ".").split(" ")) // Se separa el texto en lo que será X e Y
      .map(([x, y]) => [Number(x), Number(y)]) // y se lo transforma en numeros reales
      .sort((a, b) => a[0] - b[0] || a[1] - b[1]); // se ordena segun X e Y (si la x es igual)
    return coords;
  };

  const A_ordenado = readFile(fileA);
  const B_ordenado = readFile(fileB);

  console.log({ A_ordenado, B_ordenado });

  let ib = 0;
  let ia = 0;
  while (ia < A_ordenado.length) {
    while (ia < A_ordenado.length && ib < B_ordenado.length) {
      console.log('----')
      console.log(`A: i${ia} - ${A_ordenado[ia]}`);
      console.log(`B: i${ib} - ${B_ordenado[ib]}`);
      console.log(`if ${A_ordenado[ia][0]} >= ${B_ordenado[ib][0]} ${A_ordenado[ia][0] >= B_ordenado[ib][0]}`)
      console.log(`   ${A_ordenado[ia][1]} >= ${B_ordenado[ib][1]} ${A_ordenado[ia][1] >= B_ordenado[ib][1]}`)

      if (
        A_ordenado[ia][0] >= B_ordenado[ib][0] &&
        A_ordenado[ia][1] >= B_ordenado[ib][1]
      ) {
        m3.push(
          `${A_ordenado[ia][0].toFixed(1)} ${A_ordenado[ia][1].toFixed(
            1
          )} -> ${B_ordenado[ib][0].toFixed(1)} ${B_ordenado[ib][1].toFixed(1)}`
        );
        console.log(`M: ia:${ia} ib:${ib} - ${A_ordenado[ia]} -> ${B_ordenado[ib]}`);
        ia++;
        ib++;
      } else if (
        A_ordenado[ia][0] < B_ordenado[ib][0] &&
        A_ordenado[ia][1] < B_ordenado[ib][1]
      ) {
        console.log(`R: ${A_ordenado[ia]} -> ${B_ordenado[ib]}`)
        ia++;
        ib = 0;
      } else {
        ib++;
      }
    }
    ia++;
    ib = 0;
  }

  return m3;
}

const [_n, _s, num, pathA, pathB] = process.argv;

const matchings = start(Number(num), pathA, pathB);
console.log("Tamaño del matching:", matchings.length);
console.log(
  "Matches:",
  `\n(A -> B)\n${matchings.join("\n").replace(/(\.)/g, ",")}`
);

// node ./file_1.js 9999 ./a_1.txt ./b_1.txt
// node ./file_1.js 9999 ./a_2.txt ./b_2.txt
// node ./file_1.js 9999 ./a_3.txt ./b_3.txt
