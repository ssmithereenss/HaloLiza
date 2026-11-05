// ===== Pengaturan login (ganti di sini kalau mau) =====
const LOGIN = {
  username: "liza",
  password: "azil",
};
// ======================================================

const form = document.getElementById("loginForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim().toLowerCase();

  if (username === LOGIN.username && password === LOGIN.password) {
    Swal.fire({
      icon: "success",
      title: "Login berhasil!",
      text: "Selamat datang, Liza 💕",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.href = "birthday.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Login gagal!",
      text: "Coba cek lagi ya sayang :)",
      confirmButtonText: "Coba lagi",
      confirmButtonColor: "#ff7675",
    });
  }
});
