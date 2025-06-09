
   
   document.addEventListener('DOMContentLoaded', function () {
    new Splide('#client-slider', {
      type: 'loop',
      perPage: 5,
      autoplay: true,
      interval: 1000,
      pauseOnHover: true,
      arrows: false,
      pagination: false,
      breakpoints: {
        991: {
          perPage: 2,
        },
      },
    }).mount();
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#desktop-slider', {
      type       : 'loop',
      perPage    : 1,
      perMove    : 1,
      autoplay   : true,
      interval   : 2000,
      pauseOnHover: true,
      arrows     : true,
      pagination : true,
      breakpoints: {
        1024: {
          perPage: 3,
        },
        768: {
          perPage: 2,
        },
        480: {
          perPage: 1,
        },
      },
    }).mount();
  });




//  new Splide('#splide', {
//     type   : 'loop',
//     perPage: 1,
//     autoplay: true,
//     interval: 3000,
//     pauseOnHover: true,
//     arrows: false,       
//     pagination: false,   
//   }).mount();

// counter
  const counters = document.querySelectorAll('.counter');
  let counterStarted = false;

  function runCounter() {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const speed = 200; // lower is faster

      const updateCount = () => {
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = '+' + target;
        }
      };

      updateCount();
    });
  }

  // Trigger when section is in viewport
  window.addEventListener('scroll', () => {
    const section = document.getElementById('counter-section');
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight && !counterStarted) {
      runCounter();
      counterStarted = true;
    }
  });
  
  //business
  const contentData = [
  {
    title: "AC Sleeper & Passenger Buses",
    video: "assets/FurnishingCoaches.mp4",
    desc: `Our AC Sleeper Buses are built for comfort, reliability, and long-distance travel. Designed with spacious interiors, high-grade insulation, and ergonomic seating or sleeper arrangements, they provide passengers with a safe and luxurious travel experience. We customize each build based on operator needs, ensuring optimal air conditioning, storage space, and aesthetic appeal, perfect for private operators and state transport services.`
  },
  {
    title: "Carrier & Cargo Truck Bodies",
    video: "assets/RefurbishmentCoaches.mp4",
    desc: `Axiom Craft designs and manufactures robust truck bodies for efficient cargo transportation. From open platforms to covered carriers and customized load solutions, our truck bodies are engineered to handle various industries' demands—including logistics, construction, agriculture, and heavy equipment hauling. Each unit is crafted with load-specific reinforcement, rust-resistant materials, and precision fittings for maximum utility and longevity.`
  },
  {
    title: "Container Bodies",
    video: "assets/Training-Simulator.jpg", // This is an image
    desc: `Our container bodies are ideal for transporting goods over long distances with enhanced security and weather protection. Built to national and international logistics standards, these containers are perfect for fleet operators, warehousing solutions, and last-mile delivery companies. We offer customizable sizes, locking mechanisms, and reinforced flooring to match your exact operational requirements..`
  },
  {
    title: "Defense & Specialty Vehicles",
    video: "assets/ComponentManufacturing.mp4",
    desc: `Our defense and specialty vehicle bodies are engineered to meet the stringent standards of government and emergency services. We develop mission-ready solutions for the defense sector, disaster management units, and specialized agencies. These vehicles are designed for rugged terrain, enhanced security, and functional adaptability—providing reliable performance in critical situations.

`
  }
];

const listItems = document.querySelectorAll("#businessList li");
const videoContainer = document.getElementById("videoContainer");
const titleEl = document.getElementById("businessTitle");
const descEl = document.getElementById("businessDesc");

listItems.forEach(item => {
  item.addEventListener("click", () => {
    // Remove active class
    listItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    // Get selected data
    const index = item.getAttribute("data-index");
    const data = contentData[index];

    // Check file type
    const isVideo = data.video.endsWith(".mp4");

    // Update videoContainer
    videoContainer.innerHTML = isVideo
      ? `
        <video muted autoplay loop width="100%" height="100%">
          <source src="${data.video}" type="video/mp4">
        </video>
      `
      : `
        <img src="${data.video}" alt="${data.title}" width="100%" height="100%" style="object-fit: cover;" />
      `;

    // Update title and description
    titleEl.textContent = data.title;
    descEl.textContent = data.desc;
  });
});



 //service page 
  function changeImage(thumbnail, mainId) {
    // Remove 'active' class from all thumbnails
    let allThumbs = thumbnail.parentElement.querySelectorAll('.thumb-img');
    allThumbs.forEach(img => img.classList.remove('active'));

    // Add 'active' class to clicked thumbnail
    thumbnail.classList.add('active');

    // Change the main image
    document.getElementById(mainId).src = thumbnail.src;
  }

