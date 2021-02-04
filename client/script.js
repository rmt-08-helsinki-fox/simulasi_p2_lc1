const base_url = "http://localhost:3000/";

function auth() {
  if (!localStorage.getItem("access_token")) {
    $("#login-page").show(); //jangan lupa id pake #
    $("#home-page").show();
    $("#main-page").hide();
    $("#my-gallery-page").hide();
  } else {
    $("#login-page").hide(); //jangan lupa id pake #
    $("#home-page").hide();
    $("#main-page").show();
    $("#my-gallery-page").show();
    getPhotos(); //mulai load photos disini kayknya
    //disini tambah #my-gallery-page kayaknya
    // oke
    //gallerypage itu beda page lagi?
    // okehh, nanti klo berhasil ss yak hahaha
    //siaap
    //barsan liat demo, abis login langsung show galerry page
    //cuma gw bingung getPhotos nya gimana wkwk
    //pake append, oke coba isi getphotos dulu ya
  }
}

function postLogin() {
  let password = $("#password").val();
  let email = $("#email").val();
  $.ajax({
    //command ini buat ngirim data ke server
    //loginnya jalan?
    url: base_url + "login",
    method: "POST",
    data: {
      email,
      password,
    },
  })
    .done((res) => {
      console.log(res);
      localStorage.setItem("access_token", res.access_token); // ini yang dikirim oleh server kalo
      //login sukses,
      //terus kita simpen di client side,
      //di localstorage itu
      auth();
    })
    .fail((xhr, text) => {
      console.log(xhr, text);
    });
}

function postRegister() {
  // gausah dibuat dah ya kan ada htmlnya wkwk
  //di html gak adaregister
}

function getPhotos() {
  $.ajax({
    url: base_url + "photos",
    method: "GET",
    headers: {
      token: localStorage.getItem("access_token"),
    },
  })
    .done((arrphotos) => {
        console.log(arrphotos)
      //kita cari container para photo di html
      //link image di db sama kan ya sama salah satu link di container?

      //beda wkwk
      //photo di db cuma 1
      //di html juga cuma 1 ini kan
      //yaudah gue tambahin aja ya
      //iya gw baru nyadar url nya sama. kalo ga ganti di db aja langsung copas dr index
      //iyaa
      //handling error
      //okee
      //coba login dulu dah
      //wokeh semoga bisaaa x))
      //wkwkw deg2an gua

      // ooh lupa cors

      // kita ke server side dulu lagi
      //di app.js
      //buat refresh
      $("#my-gallery-page").empty()
      arrphotos.forEach((photo) => {
        $("#my-gallery-page").append(`
          <div
          class="card-custom uk-card uk-card-default uk-card-hover uk-card-body"
        >
          <i class="trash far fa-minus-square"></i>
          <img
            src="${photo.imageUrl}"
            alt="image"
          />
        </div>
          `);
      });
    })
    .fail((xhr, text) => {
      console.log(xhr, text);
    });
}

function postLogout() {
    localStorage.clear();
    auth();
}

$(document).ready(() => {
  console.log("masuk script lhoo");
  auth();
  $("#loginForm").on("submit", (event) => {
    console.log("masuk login submit lhoo");
    event.preventDefault();
    postLogin();
  })

  $("#navbar-logout").on("click", (event) => {
      event.preventDefault();
      postLogout();
  })
    //oke lanjut
    //WAAAAAAA MASUK
    //giman a fer?
//
    // UDAH BISA NIH coba gue kirim record nya ya 

    //HOREEEE
    //push aja lah ya wkwk
    //udah bisa niih jalan wkwk
    //tinggal coba logout 

    //ini invoke photos 2 kali ya? pas di auth jg invoke kan ya
    //iya tambahin sendiri ya
    //gak bs langsung pake id "login-page" aja?
    // ga bisa soalnya pake method on submit itu
    //yang bisa submit cuma form
    //bentar gue bingung munculin getphotosnnya kapan
    // wkwk
});

//baru sadar ga ada section untuk register
// iya ini nyari lah kok ga ada wkwkkw
//bentar baca ulang md nya wah parah
// oke emang ga ada

//gimana tuh wkwk..
//wkakaka ini nih gua kurang, kemarin ga masuk soalnya
// wkwkwk susah ga boleh ga masuk hacktiv8 mah
// tapi bisa nonton ulang recording siih

//hahahaha betul
//udah instll live-servernya?
//pake extension wkwk
//

//btw gw belom coba yang ini, kalo disini kan get item nya "Access_token", tp sebenrnya di authenticate gw tuh
// nulisnya req.decoded.token

//ohh iyaa betul2
//OOOH baru tau gw, oke2 tengkyu fer
//lanjut ga nih? wkwk dikit lagi

// coba dah, cuma 3 kan wkwk

// beda , kalo itu kan kita di server,
//ini tuh kayak kerja dua kali, ini client side,
// makanya ini function2 kita bikin juga jumlah nya kira2 sama kayak yang di controller
// kalo disini tokennya disimpen di local storage browsernya dulu
