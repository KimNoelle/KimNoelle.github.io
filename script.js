const images = document.querySelectorAll('.design-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');

images.forEach(img => {
  img.addEventListener('click', () => {
    const fullImg = img.getAttribute('data-full');
    lightboxImg.src = fullImg;
    lightbox.classList.remove('hidden');
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add('hidden');
  }
});

//other projects slider
const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");

let currentIndex = 0;

function updateSlider() {
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

window.addEventListener("resize", updateSlider); // Adjust on window resize

// Portfolio  page 
function previewProject(element) {
    const link = element.getAttribute("data-preview");
    window.location.href = link;
  }
//mian page portfolio
  const projectListItems = document.querySelectorAll(".project-list li");
  const previewImg = document.getElementById("preview-img");

  projectListItems.forEach(item => {
    item.addEventListener("mouseover", () => {
      const previewSrc = item.getAttribute("data-preview");
      previewImg.src = previewSrc;
    });

    item.addEventListener("mouseout", () => {
      previewImg.src = "/img/default-thumbnail.jpg"; // or keep the last image
    });
  });

 