

window.onload = () => {
 
  const button = document.getElementById('imagebutton');
        const imgDiv = document.getElementById("imgDiv");
        
        button.addEventListener('click', () => {
        button.textContent = 'Hide Images';
        
        if(imgDiv.style.display === 'none'){
          imgDiv.style.display = 'block';
          button.textContent = 'Hide Images';
          return;
        }  

        if(imgDiv.childElementCount !== 0){
           imgDiv.style.display = 'none';
           button.textContent = 'Show Images';
           return;
        };
       getImages()
  });
}

const getImages = async () => {
  const id = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let imgDiv = document.getElementById('imgDiv');
  
  for(let i = 0; i < id.length; i++){
    let img = document.createElement('img');
        imgDiv.className = "pics"; 
    const res = await fetch(`http://localhost:3000/${id[i]}`);
    const url = res.url;
    img.setAttribute('src', url);
    img.setAttribute('id', id[i] );
    img.setAttribute('width', 200);
    imgDiv.appendChild(img);
  }
return;
}