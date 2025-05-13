const slides = document.querySelectorAll('.carousel-item');
  const carousel = document.getElementById('customCarousel');
  let currentIndex = 0;
  const interval = 6000; // 6 seconds

  function resetProgressBars() {
    document.querySelectorAll('.progress-bar-slide').forEach(bar => {
      bar.style.animation = 'none';
      bar.offsetHeight; // trigger reflow
      bar.style.animation = '';
      bar.style.animation = 'fillBar 6s linear forwards';
    });
  }

  function nextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
    resetProgressBars();
  }

  setInterval(nextSlide, interval);

 const data = [
        {
        title: "Impact with Vision",
        text: "At Kuzhagan, we aim to transform lives through innovation, integrity, and sustainability. Every step we take is guided by a clear purpose — to deliver lasting positive change to society.",
        img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
      },
      {
        title: "Development First",
        text: "We provide unmatched learning experiences, mentorship, and growth paths to empower each individual to reach their full potential.",
        img: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
      },
      {
        title: "Support that Matters",
        text: "Kuzhagan believes in strong support systems. From mental health to tech assistance, we make sure you're never alone.",
        img: "https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg"
      },
      {
        title: "Progress for All",
        text: "Our vision of inclusive growth ensures every stakeholder — from team member to customer — thrives and progresses together.",
        img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
      }
    ];

    function changeTab(index) {
      const tabs = document.querySelectorAll(".tab");
      tabs.forEach((tab, i) => {
        tab.classList.toggle("active", i === index);
      });

      const content = document.getElementById("tabContent");
      content.innerHTML = `
        <div class="text">
          <h3>${data[index].title}</h3>
          <p>${data[index].text}</p>
        </div>
        <div class="image">
          <img src="${data[index].img}" alt="Image ${index + 1}">
        </div>
      `;
    }