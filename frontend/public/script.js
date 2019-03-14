

window.onload = () => {

const button = document.getElementById('request');
button.addEventListener('click', () => {
    
  let img = document.createElement('img');
  let imgDiv = document.createElement('div');
      imgDiv.className = "pics";  
 

  fetch('http://localhost:3000/')
    .then(res => res.url)
    .then(url => {
      img.setAttribute('src', url);
      console.log(img);
      imgDiv.appendChild(img);
      document.body.appendChild(imgDiv);
    });
});

}