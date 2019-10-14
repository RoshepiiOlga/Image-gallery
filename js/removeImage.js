function removeImage() {
  var modal = document.getElementById("modal_window");
  var modalCloseButton = document.getElementById("close");
  var cancel = document.getElementById('cancel');
  var consent = document.getElementById('consent');
  var imageIndex = document.getElementById('image-index');
  const elementsArray = document.getElementsByClassName('button_close');
  var blockText = document.getElementById('text-input');

  for (var i=0; i < elementsArray.length; i += 1) {
    elementsArray[i].onclick = function(){
      imageIndex.innerText = this.dataset.index;
      modalText(this.dataset.imageName);
      modal.style.display = "block";
    };
  }
  modalCloseButton.onclick = function() {
    modal.style.display = "none";
  }
  cancel.onclick = function(){
    modal.style.display = "none";
  }
  consent.onclick = function() {
   let index = imageIndex.innerText;
    if(index) {
      images.splice(index, 1);
      displayImages(imagesList, images);
      localStorage.setItem('images', JSON.stringify(images));
    }
    modal.style.display = "none";
  }
}
var changeImageName = document.getElementById('changeImageName');
var nameImage = document.getElementsByClassName('name-image');
var editButtons = document.getElementsByClassName('edit');
var inputChangeName = document.getElementsByClassName('image-input');


function changeName() {
  for(let i = 0; i < editButtons.length; i += 1) {
    editButtons[i].onclick = function() {
      let str = inputChangeName[i].value;
      nameImage[i].innerText = str;
      if (inputChangeName[i].classList.contains('show-input')) {
        hideInput(i);
        clearInput(i);
      }
      else{
      showInput(i);
      }
    }
  }
}

function modalText(imageName) {
  document.getElementById('text-input').innerHTML = 'Are you sure you want to delete' +' ' + imageName;
}

function showInput(i) {
  inputChangeName[i].className += ' show-input';
}

function hideInput(i) {
  inputChangeName[i].classList.remove('show-input');
}

function clearInput(i){
 inputChangeName[i].value = "";
}
