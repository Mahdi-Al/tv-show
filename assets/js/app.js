const carouselItem = document.querySelectorAll(".carousel-item");
const dataMain = [];
const dataCarousel = [];
const getData2 = async (url) => {
  try {
    const request = await fetch(url);
    // console.log(request);
    const data = await request.json();
    // console.log(data);
    dataCarousel.push(data);
    const imhEle = document.createElement("img");
  } catch (error) {
    console.log(error);
  }
};

// carouselItem.forEach((item, i) => {
//   const imgEleCarousel = document.createElement("img");
//   console.log(dataCarousel[i]);
//   // console.log(i);
//   // imgEleCarousel.src = dataCarousel.image.medium;

//   item.append(imgEleCarousel);
// });

console.log(dataCarousel);
// const imgEleCarousel = dataCarousel.forEach((obj) => {
//   imgEleCarousel.src = obj.image.medium;
// });

async function getData(url) {
  try {
    const request = await fetch(url);
    // console.log(request);
    const data = await request.json();
    console.log(data);
    dataMain.push(data);
  } catch (error) {
    console.log(error);
  }
}

for (let i = 1; i < 44; i += 2) {
  //   console.log(i);
  getData(`https://api.tvmaze.com/shows/${i}`);
}
// console.log(dataMain);
// console.log(...dataMain);

const bgImg = document.querySelector("#bg-img");
const mainEle = document.querySelector("main");
// dataMain.forEach((card) => {
//   console.log(card);
// });
// console.log(dataMain);
async function getData(url) {
  try {
    const request = await fetch(url);
    const data = await request.json();
    //  const bgImg = document.getElementById('bgImg'); // assuming an element with id "bgImg"

    const cardDiv = document.createElement("div");
    cardDiv.classList.add("relative", "h-[400px]", "w-[300px]", "rounded-md");

    const img = document.createElement("img");
    img.src = data.image.medium;
    img.alt = "AirMax Pro";
    img.classList.add("z-0", "h-full", "w-full", "rounded-md", "object-cover");
    cardDiv.appendChild(img);

    const overlayDiv = document.createElement("div");
    overlayDiv.classList.add(
      "absolute",
      "inset-0",
      "bg-gradient-to-t",
      "from-gray-900",
      "to-transparent"
    );
    cardDiv.appendChild(overlayDiv);

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("absolute", "bottom-4", "left-4", "text-left");

    const h1 = document.createElement("h2");
    h1.textContent = `${data.name}`;
    h1.classList.add(
      "text-lg",
      "font-semibold",
      "text-white",
      "text-centre",
      "z-99"
    );
    contentDiv.appendChild(h1);

    const p = document.createElement("strong");
    p.textContent = `${data.genres.join("|")}`;
    p.classList.add("mt-2", "text-sm", "text-gray-300", "block");
    contentDiv.appendChild(p);

    const button = document.createElement("a");
    button.textContent = `${data.rating.average}`;
    button.classList.add(
      "mt-2",
      "inline-flex",
      "cursor-pointer",
      "items-center",
      "text-sm",
      "font-semibold",
      "text-white"
    );
    contentDiv.appendChild(button);

    cardDiv.appendChild(contentDiv);
    mainEle.appendChild(cardDiv);

    // console.log(data);
  } catch (error) {
    console.log(error);
  }
}
for (let i = 1; i < 22; i++) {
  // console.log(i);
  getData(`https://api.tvmaze.com/shows/${i}`);
}
// bgImg.innerHTML +=
const promises = [];
for (let i = 40; i < 45; i++) {
  promises.push(getData2(`https://api.tvmaze.com/shows/${i}`));
}

Promise.all(promises).then(() => {
  carouselItem.forEach((item, i) => {
    const imgEleCarousel = document.createElement("img");
    imgEleCarousel.classList.add("w-full", "h-96", "object-cover");
    imgEleCarousel.src = dataCarousel[i].image.medium;
    // ...
    item.append(imgEleCarousel);
  });
});
//   item.append(imgEleCarousel);
