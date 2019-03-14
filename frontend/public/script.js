

window.onload = () => {

const button = document.getElementById('request');
button.addEventListener('click', () => {
    
  let img = document.createElement('img');
  let imgDiv = document.createElement('div');
      imgDiv.className = "pics";  
 

    getImages()
    .then(res => res.url)
    .then(url => {
      img.setAttribute('src', url);
      img.setAttribute('width', 200);
      imgDiv.appendChild(img);
      document.body.appendChild(imgDiv);
    });
});

}


const getImages = () => {
  const id = '1'
  return fetch(`http://localhost:3000/${id}`)
}