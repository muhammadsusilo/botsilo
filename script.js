const buttonKlik = document.getElementById("btn");
const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
let init = 0;

const bot = (data) => {
  return [
    "Halo, Perkenalkan nama saya Silobot, siapa nama kamu",
    `Halo ${data?.nama}, berapa umur kamu `,
    `Umur saya ${data?.umur}, Sekarang kuliah dimana??`,
    `Kuliah di ${data?.kuliah},Jurusannya apa mas?`,
    `Jurusannya ${data?.jurusan}, Semangat belajarnya`,
  ];
};

pertanyaan.innerHTML = bot()[0];

buttonKlik.addEventListener("click", function () {
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ umur: jawaban.value });
  } else if (init === 3) {
    botDelay({ kuliah: jawaban.value });
  } else if (init === 4) {
    botDelay({ jurusan: jawaban.value });
  } else if (init === 5) {
    bot2();
  } else {
    putar();
  }
});

// buttonKlik.addEventListener("click", function () {
//   init++;
//   switch (init) {
//     case "  === 1":
//       botDelay({ nama: jawaban.value });
//       break;
//     case "  === 1 ":
//       botDelay({ umur: jawaban.value });
//       break;
//     case "  === 1 ":
//       botDelay({ kuliah: jawaban.value });
//       break;
//     case "  === 1 ":
//       botDelay({ jurusan: jawaban.value });
//       break;
//     case "  === 1 ":
//       bot2();
//       break;
//     default:
//       putar();
//   }
// });

function botDelay(jawabanUser) {
  setTimeout(() => {
    pertanyaan.innerHTML = bot(jawabanUser)[init];
  }, [1500]);
  jawaban.value = "";
}

function bot2() {
  pertanyaan.innerHTML = "Yaudah, terima kasih telah bermain di Silobot";
}

function putar() {
  window.location.reload();
}
