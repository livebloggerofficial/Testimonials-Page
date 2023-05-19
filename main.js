const data = [
  {
    videoUrl: "videos/testimonial1.mp4",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "John Smith",
    designation: "Software Engineer, ABC Technologies",
  },
  {
    videoUrl: "videos/testimonial2.mp4",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, enim.",
    name: "Michael Davis",
    designation: "Marketing Manager, XYZ Corporation",
  },
  {
    videoUrl: "videos/testimonial3.mp4",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    name: "Emily Johnson",
    designation: "Senior Accountant, QRS Solutions",
  },
  {
    videoUrl: "videos/testimonial4.mp4",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, enim.",
    name: "Sarah Thompson",
    designation: "Graphic Designer, PQR Studios",
  },
  {
    videoUrl: "videos/testimonial5.mp4",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, enim.",
    name: "Robert Wilson",
    designation: "Sales Executive, MNO Corporation",
  },
];

const showMoreBtn = document.querySelector(
  ".testimonials-container .show-more-btn"
);
const testimonials = document.querySelector(".testimonials");
let latestTestimonialIndex = 0;

const generateTestimonial = (videoUrl, review, name, designation) => {
  const htmlCode = `<div class="testimonial">
  <div class="video">
    <video
      controls
      width="100%"
      src="${videoUrl}"
    ></video>
  </div>
  <div class="review">
    ${review}
  </div>
  <div class="bottom">
    <div class="name">${name}</div>
    <div class="designation">${designation}</div>
  </div>
</div>`;

  return htmlCode;
};

const showTestimonial = () => {
  let index = latestTestimonialIndex;

  for (let i = index; i < index + 2; i++) {
    if (!data[i]) {
      showMoreBtn.style.display = "none";
      return;
    }

    testimonials.innerHTML += generateTestimonial(
      data[i].videoUrl,
      data[i].review,
      data[i].name,
      data[i].designation
    );

    latestTestimonialIndex++;
  }
};

showTestimonial();

showMoreBtn.addEventListener("click", showTestimonial);
