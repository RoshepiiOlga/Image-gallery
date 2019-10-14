var imagesList = document.querySelector('.images');
var images = JSON.parse(localStorage.getItem('images')) || [];
var changeNameImage = document.getElementById('button-edit');

function uploadImage() {
  let i, files = this.files, fileLength = files.length, image;
  if(FileReader) {
    for(i = 0; i < fileLength; i += 1) {
      let fileReader = new FileReader(), file = files[i];
      fileReader.addEventListener('load', function (event) {
        image = {};
        image['name'] = file.name;
        image['size'] = file.size;
        image['url'] = event.target.result;
        images.push(image);

        displayImages(imagesList, images);
        localStorage.setItem('images', JSON.stringify(images));
      });
      fileReader.readAsDataURL(file);
    }
  }
}

displayImages(imagesList, images);
document.getElementById('uploader').addEventListener('change', uploadImage);
//changeName();
//changeImageName();
