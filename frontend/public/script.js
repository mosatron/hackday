
const id = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

window.onload = () => {
  const button = document.getElementById('imagebutton');
        const thumbDiv = document.getElementById("thumbDiv");
        
        button.addEventListener('click', () => {
        button.textContent = 'Hide Images';
        
        if(thumbDiv.style.display === 'none'){
          thumbDiv.style.display = 'block';
          button.textContent = 'Hide Images';
          return;
        }  

        if(thumbDiv.childElementCount !== 0){
           thumbDiv.style.display = 'none';
           button.textContent = 'Show Images';
           return;
        };
       getImages()
  });
}

const getImages = async () => {
  let thumbDiv = document.getElementById('thumbDiv');
  
  for(let i = 0; i < id.length; i++){
    let img = document.createElement('img');
        thumbDiv.className = "pics"; 
    const res = await fetch(`http://localhost:3000/thumbs/${id[i]}`);
    const url = res.url;
    img.setAttribute('src', url);
    img.setAttribute('id', id[i] );
    img.setAttribute('width', 200);
    thumbDiv.appendChild(img);
  }
getRealImages();  
return;
}

const getRealImages = async () => {
  let imgDiv = document.getElementById('imgDiv');
      imgDiv.style.display = 'none';
  
  for(let i = 0; i < id.length; i++){
    let img = document.createElement('img');
        imgDiv.className = "largepics"; 
    const res = await fetch(`http://localhost:3000/${id[i]}`);
    const url = res.url;
    img.setAttribute('src', url);
    img.className = 'modal-content';
    img.setAttribute('id', 0 + id[i] );
    imgDiv.appendChild(img);
  }
return;
}

