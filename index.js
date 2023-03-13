function $(id) {
    return document.getElementById(id);
}

function seePictures(element) {
    element.style.animationName = 'showPictures';
    $('cameraIcon').setAttribute('src', './IMAGES/close.svg')
    element.setAttribute('onclick', 'hidePictures(this)')
    $('pictureContainer').classList.add('closeDesign');
    $('pictureContainer').firstElementChild.innerHTML = '';
}

function hidePictures(element) {
    element.style.animationName = '';
    $('cameraIcon').setAttribute('src', './IMAGES/camera.svg')
    element.setAttribute('onclick', 'seePictures(this)')
    $('pictureContainer').classList.remove('closeDesign');
    $('pictureContainer').firstElementChild.innerHTML = 'see pictures';
}