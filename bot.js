let init = 0;

const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");
const loaders = document.getElementById("loaders");
const container = document.getElementsByClassName("container");

const botSay = (data) => {
  return [
    "Hello, perkenalkan saya fazrilbot, siapa nama kamu.? ",
    `Hallo ${data?.nama}, Berapa Usia Kamu?`,
    `Ouh ${data?.usia}, Hoby kamu apa?`,
    `Oww sama dong aku juga hobi ${data?.hobi}, Btw Punya pacar gak.?`,
    `Ouh ${data?.pacar}, Yaudah kalo gitu, Aku Pamit Dulu yaa.`,
  ];
};

pertanyaan.innerHTML = botSay()[0];

function bootStart() {
  if (jawaban.value.length < 1 ) return alert("Silahkan Isi Jawaban dulu")
  init++;
  if (init == 1) {
    bootDelay({ nama: jawaban.value });
  } else if (init == 2) {
    bootDelay({ usia: jawaban.value });
  } else if (init == 3) {
    bootDelay({ hobi: jawaban.value });
  } else if (init == 4) {
    bootDelay({ pacar: jawaban.value });
  } else if (init == 5) {
    finishing();
  } else {
    bootEnd();
  }
}

function bootDelay(jawabanUser) {
  loaders.style.display = "block"
  container[0].style.filter = "blur(8px)"
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
    loaders.style.display = "none"
    container[0].style.filter = "none"
  }, [1500]);
  jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = "Thanks ya udah main ke fazrilbot"
    jawaban.value = ""
}

function bootEnd() {
  window.location.reload()
  alert(`Terima Kasih ${usersData[0]} Sudah Berkunjung, Anda akan diarahkan ke tampilan awal`)
}
