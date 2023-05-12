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
      const [xa, ya] = A_ordenado[ia];
      const [xb, yb] = B_ordenado[ib];
      console.log("----");
      console.log(`A[${ia}](x:${xa} y:${ya})`);
      console.log(`B[${ib}](x:${xb} y:${yb})`);
      console.log(`if ${xa} >= ${xb} ${xa >= xb}-x`);
      console.log(`   ${ya} >= ${yb} ${ya >= yb}-y`);

      if (xa >= xb && ya >= yb) {
        m3.push(
          `${xa.toFixed(1)} ${ya.toFixed(1)} -> ${xb.toFixed(1)} ${yb.toFixed(1)}`
        );
        console.log(`M: A[${ia}](x:${xa} y:${ya}) -> B[${ib}](x:${xb} y:${yb})`);
        ia++; // aqui si a -many-> b: commet
        ib++;
      } else if (xa < xb && ya < yb) {
        console.log(`R: A(x:${xa} y:${ya}) -> B(x:${xb} y:${yb})`);
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

// node ./file_1.js 9999 ./a_0.txt ./b_0.txt
// node ./file_1.js 9999 ./a_1.txt ./b_1.txt
// node ./file_1.js 9999 ./a_2.txt ./b_2.txt
// node ./file_1.js 9999 ./a_3.txt ./b_3.txt
