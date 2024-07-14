const bgImg = document.querySelector("#bg-img");
async function getData(url) {
  try {
    const request = await axios.get(url);
    const data = await request.data;
    let img = document.createElement("img");

    bgImg.innerHTML += `<div class="relative h-[400px] w-[300px] rounded-md" >
      <img
        src=${(img.src = data.image.medium)}
        alt="AirMax Pro"
        class="z-0 h-full w-full rounded-md object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div class="absolute bottom-4 left-4 text-left">
        <h1 class="text-lg font-semibold text-white">Delba</h1>
        <p class="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          View Profile →
        </button>
      </div>
    </div>`;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
for (let i = 1; i < 22; i++) {
  console.log(i);
  getData(`https://api.tvmaze.com/shows/${i}`);
}
