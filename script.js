function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // ubah tinggi dari cm ke meter
  
    if (isNaN(weight) || isNaN(height) || height === 0) {
      document.getElementById("bmi-result").innerHTML =
        "<p>Masukkan berat dan tinggi yang valid.</p>";
      return;
    }
  
    const bmi = weight / (height * height); // Rumus BMI
  
    let category = "";
  
    if (bmi < 18.5) {
      category = "Kurus";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Kelebihan Berat Badan";
    } else {
      category = "Obesitas";
    }
  
    document.getElementById("bmi-result").innerHTML = `
      <p>BMI Anda: ${bmi.toFixed(2)}</p>
      <p>Kategori: <strong>${category}</strong></p>
    `;
  }
  let currentSlide = 0;
const reviews = document.querySelectorAll(".review__content");

function showSlide(index) {
    reviews.forEach((review, i) => {
        review.classList.remove("active");
        if (i === index) review.classList.add("active");
    });
}

function changeSlide(step) {
    currentSlide = (currentSlide + step + reviews.length) % reviews.length;
    showSlide(currentSlide);
}

// Autoplay setiap 5 detik
setInterval(() => {
    changeSlide(1);
}, 5000);

// Tampilkan slide pertama saat halaman dimuat
showSlide(currentSlide);

document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Mencegah perilaku default klik link
    const targetId = this.getAttribute('href'); // Mengambil nilai href
    const targetElement = document.querySelector(targetId); // Menemukan elemen dengan id target

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop, // Posisi elemen dari atas
        behavior: 'smooth', // Scroll dengan efek smooth
      });
    }
  });
});

let lastScrollY = window.scrollY;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Scroll ke bawah: sembunyikan navbar
    navbar.classList.add("hidden");
  } else {
    // Scroll ke atas: tampilkan navbar
    navbar.classList.remove("hidden");
  }
  lastScrollY = window.scrollY; // Update posisi scroll terakhir
});

