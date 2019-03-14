

window.onload = () => {
  const imgDiv = document.getElementById('imgDiv')
        
  const button = document.getElementById('imagebutton');
        button.addEventListener('click', () => {
  
  getImages()
    .then(div => imgDiv.appendChild(div) )
      });

  };




const getImages = async () => {
  const id = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let imgDiv = document.createElement('div');
  
  for(let i = 0; i < id.length; i++){
    let img = document.createElement('img');
        imgDiv.className = "pics"; 
    const res = await fetch(`http://localhost:3000/${id[i]}`);
    const url = res.url;
    img.setAttribute('src', url);
    img.setAttribute('width', 200);
    imgDiv.appendChild(img);
  
  }
  
  return imgDiv;
  
}