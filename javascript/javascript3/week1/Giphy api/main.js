const input = document.getElementById('giphy_name');
const totalGifs = document.getElementById('totalGifs');
const btn = document.getElementById('btn');
const msg=document.getElementById('errorMsg')

btn.addEventListener('click', () => {
  if (input.value) {
    const gifName = input.value.toLowerCase();
    if (totalGifs.value) {
      url='https://api.giphy.com/v1/gifs/search?q=' +gifName+'&limit=' +totalGifs.value +'&api_key=HCRI89ixujLx2ZrfrZEmkrItQzVetl68'
    } else {
      url='https://api.giphy.com/v1/gifs/search?q=' +gifName+'&api_key=HCRI89ixujLx2ZrfrZEmkrItQzVetl68'
    }
    fetch(url)
    .then(respnse=>respnse.json())
    //.then(response=>console.log(response))
    .then (response => renderGifData (response));
  } else {
    msg.innerHTML='Please enter the gif name';
    return false;
  }
});
function renderGifData(response) {
  msg.innerHTML=" ";
  const outputDiv = document.querySelector("#output");
  //console.log(response.data)
  const urlArray = response.data.map(element => element.images.original.url);
  //console.log( urlArray)
  urlArray.forEach(element => {
    const img = document.createElement("img");
    outputDiv.appendChild(img);
    img.src=element;
  })
 
}
 