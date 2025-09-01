 const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
      faq.addEventListener("click", () => {
        faq.classList.toggle("active");
      });
    });


    const cars = [
      {
        name: "MAHINDRA",
        image: "Image/image 7 1.png",
        gradient: "linear-gradient(90deg,  #f7f7f5, #535455)" 
      },
      {
        name: "TATA",
        image: "Image/image 6 2.png",
        gradient: "linear-gradient(90deg,  #e5ee91, #f1ee34)" 
      },
      {
        name: "MG",
        image: "Image/MG.png",
        gradient: "linear-gradient(90deg, #756346, #5e3819)" 
      },
      {
        name: "SKODA",
        image: "Image/image 3 1.png",
        gradient: "linear-gradient(90deg, #c8e44f, #a3e40c)"
      },
      {
        name: "MARUTHI",
        image: "Image/swift2.png",
        gradient: "linear-gradient(90deg, #93a1f1, #052cda)" 
      },
      
    ];

    let currentIndex = 0;
    const banner = document.getElementById("banner");
    const carImage = document.getElementById("carImage");
    const bannerTitle = document.getElementById("bannerTitle");
    const featuresContainer = document.getElementById("featuresContainer");

    function showCar(index) {
      const car = cars[index];
      bannerTitle.textContent = car.name;
      bannerTitle.style.background = car.gradient;

      // 🚗 Dynamic background change
      banner.style.background = car.gradient;
      featuresContainer.style.background = car.gradient;

      // Fade transition for image
      carImage.style.opacity = "0";
      setTimeout(() => {
        carImage.src = car.image;
        carImage.style.opacity = "1";
      }, 300);
    }

    function prevCar() {
      currentIndex = (currentIndex - 1 + cars.length) % cars.length;
      showCar(currentIndex);
    }

    function nextCar() {
      currentIndex = (currentIndex + 1) % cars.length;
      showCar(currentIndex);
    }

    // Initial load
    showCar(currentIndex);



      const minRange = document.getElementById("minRange");
  const maxRange = document.getElementById("maxRange");
  const tooltip = document.getElementById("rangeTooltip");

  function updateTooltip() {
    let minVal = parseInt(minRange.value);
    let maxVal = parseInt(maxRange.value);

    if (minVal > maxVal) {
      [minVal, maxVal] = [maxVal, minVal]; // swap if crossed
    }

    tooltip.textContent = Math.round(minVal / 1000) + "k–" + Math.round(maxVal / 1000) + "k";

    const percent = ((minVal + maxVal) / 2 - minRange.min) / (minRange.max - minRange.min) * 100;
    tooltip.style.left = `calc(${percent}% + (${8 - percent * 0.15}px))`;
  }

  minRange.addEventListener("input", updateTooltip);
  maxRange.addEventListener("input", updateTooltip);

  updateTooltip(); // initialize