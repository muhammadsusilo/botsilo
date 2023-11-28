const buttonKlik = document.getElementById("btn");
const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
let init = 0;

const bot = () => {
  return ["Halo, Perkenalkan nama saya bot, siapa nama kamu"];
};

pertanyaan.innerHTML = bot()[0];
buttonKlik.addEventListener("click", function () {
  init++;
  if (init === 1) {
    console.info({ nama: jawaban.value });
  } else if (init === 2) {
    console.info({ Kuliah: jawaban.value });
  } else if (init === 3) {
    console.info({ TTL: jawaban.value });
  } else {
    bot2();
  }
});

function bot2() {
  console.info("terima kasih telah bermain");
}
