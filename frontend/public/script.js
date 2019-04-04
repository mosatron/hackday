
const id = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

window.onload = () => {
  const thumbDiv = document.getElementById("thumbDiv");
  getImages();
  getRealImages();
  
  const button = document.getElementById('imagebutton');
  button.addEventListener('click', () => {
    button.textContent = 'Hide Images';
        
    if(thumbDiv.style.display === 'none'){
      thumbDiv.style.display = 'flex';
      button.textContent = 'Hide Images';
      return;
  }  
    if(thumbDiv.childElementCount !== 0){
      thumbDiv.style.display = 'none';
      button.textContent = 'Show Images';
      return;
    };
  
  });
}

const getImages = async () => {
      thumbDiv.style.display = 'none';
      thumbDiv.className = "pics"; 
  
  for(let i = 0; i < id.length; i++){
    let img = document.createElement('img');
    const res = await fetch(`http://localhost:3000/thumbs/${id[i]}`);
    const url = res.url;
    img.setAttribute('src', url);
    img.setAttribute('id', id[i] );
    thumbDiv.appendChild(img);
  }
  return;
}
    
const getRealImages = async () => {
  let imgDiv = document.getElementById('imgDiv');
     
  for(let i = 0; i < id.length; i++){
    let img = document.createElement('img');
    const res = await fetch(`http://localhost:3000/${id[i]}`);
    const url = res.url;
    img.setAttribute('src', url);
    img.className = 'modal-content';
    img.setAttribute('id', 0 + id[i] );
    imgDiv.appendChild(img);
  }
  addClickFunction();
return;
}

const enLargeImage = (id) => {
  const div = document.getElementById('myModal');
  const modal = document.getElementById('largeImg');
  const img = document.getElementById(`0${id}`);
  modal.src = img.src;
  div.style.display = 'block';
  div.addEventListener('click', () => { 
    div.style.display = 'none';
    thumbDiv.style.display = 'flex';
  });
}
  
const addClickFunction = () => {
  for(let child =thumbDiv.firstChild; child!==null; child = child.nextSibling ) {
    child.addEventListener('click', () => {enLargeImage(child.id)
    thumbDiv.style.display = 'none';
    });
  }

}

 