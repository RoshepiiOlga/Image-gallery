function displayImages(imagesList, images) {
  imagesList.innerHTML = images.map(function (image, index) {
    return `
      <li>
        <figure>
          <button class='button_close' data-index="${index}" data-image-name = "${image.name}"
          data-toggle="modal" data-target="#exampleModal">X</button>
          <img src=${image.url} alt="Image ${index + 1}">
          <figcaption>
            <div id='changeImageName' class='button-appearance'>
              <p class='name-image'>${image.name}</p>
              <input type='text' class='image-input'></input>
              <button class='edit' type="button" data-index="${index}">Redact</button>
            </div>
            <p>${(image.size / 1000).toFixed(1)} kB</p>
          </figcaption>

        </figure>
      </li>
    `
  }).join('');
  removeImage();
changeName();
}
