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
      .sort((a, b) => a[0] - b[0] || b[1] - a[1]); // se ordena segun X e Y (si la x es igual)
    return coords;
  };

  let A_ordenado = readFile(fileA);
  let B_ordenado = readFile(fileB);

  console.log({ A_ordenado, B_ordenado });

  for (let ia=0; ia < A_ordenado.length;  ia++) {
    let newB;
    let resta;
    for (let ib =0; ia < A_ordenado.length && ib < B_ordenado.length; ib++) {
    
      const [xa, ya] = A_ordenado[ia];
      const [xb, yb] = B_ordenado[ib];
      console.log("----");
      console.log(`A[${ia}](x:${xa} y:${ya})`);
      console.log(`B[${ib}](x:${xb} y:${yb})`);
      console.log(`if ${xa} >= ${xb} ${xa >= xb}-x`);
      console.log(`   ${ya} >= ${yb} ${ya >= yb}-y`);

      if (xa < xb && ib < B_ordenado.length ) {
        console.log(`Restart B: A(x:${xa} y:${ya}) -> B(x:${xb} y:${yb})`);
        break;
      }else {
        if (ya >= yb) {
          let nuevaResta =  ya-yb
          console.log('comparando: resta anterior', resta,' resta actual:', nuevaResta)
          resta = resta < nuevaResta ? resta : nuevaResta;
          if(resta < nuevaResta) {
            console.log(' me quede con', newB)

            console.log('ya no vas a contrar nada mejor')
            let m= `${xa.toFixed(1)} ${ya.toFixed(1)} -> ${newB[0].toFixed(1)} ${newB[1].toFixed(1)}`

            console.log(`M: A[${ia}](x:${xa} y:${ya}) -> B[${ib}](x:${newB[0]} y:${newB[1]})`);

            A_ordenado.splice(ia, 1);
            B_ordenado.splice(ib-1, 1);

            console.log('A despues de match', A_ordenado)
            console.log('B despues de match', B_ordenado)

            ia = ia -1;
            b=0

            m3.push(m);
          } else {
          newB = [xb, yb]

          if (!B_ordenado[ib+1]) {
            let m= `${xa.toFixed(1)} ${ya.toFixed(1)} -> ${newB[0].toFixed(1)} ${newB[1].toFixed(1)}`
            console.log(`M: A[${ia}](x:${xa} y:${ya}) -> B[${ib}](x:${newB[0]} y:${newB[1]})`);
            A_ordenado.splice(ia, 1);
            B_ordenado.splice(ib, 1);

            console.log('A despues de match', A_ordenado)
            console.log('B despues de match', B_ordenado)

            ia = ia -1;
            b=0
            m3.push(m);
          }

            continue
          }
            
          } else {
          //  console.log(' el q viene no sirve', 'quedo', newB)
          //  let m= `${xa.toFixed(1)} ${ya.toFixed(1)} -> ${newB[0].toFixed(1)} ${newB[1].toFixed(1)}`

          //  console.log(`M: A[${ia}](x:${xa} y:${ya}) -> B[${ib}](x:${newB[0]} y:${newB[1]})`);
          //  m3.push(m)
          }
      } 
    }

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

// node ./file_22.js 9999 ./a_0.txt ./b_0.txt
// node ./file_22.js 9999 ./a_1.txt ./b_1.txt
// node ./file_22.js 9999 ./a_2.txt ./b_2.txt
// node ./file_22.js 9999 ./a_3.txt ./b_3.txt
// node ./file_22.js 9999 ./a_no.txt ./b_no.txt
// node ./file_22.js 9999 ./a_n1.txt ./b_n1.txt


/**
 * 8 30 6 10
 * 9 15 7 25
 * 9 30 7 29
 */