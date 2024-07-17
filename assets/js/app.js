const dataMain = [];
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

for (let i = 0; i < 44; i += 2) {
  //   console.log(i);
  getData(`https://api.tvmaze.com/shows/${i}`);
}
// console.log(dataMain);
// console.log(...dataMain);

const bgImg = document.querySelector("#bg-img");
const mainEle = document.querySelector("main");
dataMain.forEach((card) => {
  console.log(card);
});
// console.log(dataMain);
async function getData(url) {
  try {
    const request = await fetch(url);
    const data = await request.json();
    // const bgImg = document.getElementById('bgImg'); // assuming an element with id "bgImg"

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

    const h1 = document.createElement("h1");
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

    const button = document.createElement("button");
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

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
for (let i = 1; i < 22; i++) {
  console.log(i);
  getData(`https://api.tvmaze.com/shows/${i}`);
}
