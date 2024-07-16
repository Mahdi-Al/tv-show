const dataMain = [];
async function getData(url) {
  try {
    const request = await axios.get(url);
    dataMain.push(request.data);
  } catch (error) {
    console.log(error);
  }
}

for (let i = 1; i < 22; i++) {
  //   console.log(i);
  getData(`https://api.tvmaze.com/shows/${i}`);
}
console.log(dataMain);
export { dataMain };
