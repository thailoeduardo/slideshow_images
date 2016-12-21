var btnProximoImg = document.getElementById('btnProximoImg');

btnProximoImg.addEventListener('click', proximaImg)

setInterval(proximaImg,3000);

function proximaImg() {
	var myImage = document.querySelector('img');
	var mySrc = myImage.getAttribute('src');

	if(mySrc == 'img_1.jpg') {
		myImage.setAttribute ('src','img_2.jpg');
	}

	else if  (mySrc == 'img_2.jpg'){
		myImage.setAttribute ('src','img_3.jpg');
	}

	else {
		myImage.setAttribute ('src','img_1.jpg');
	}
};

var btnAnteriorImg = document.getElementById('btnAnteriorImg');

btnAnteriorImg.addEventListener('click', anteriorImg)

function anteriorImg() {
	var myImage = document.querySelector('img');
	var mySrc = myImage.getAttribute('src');

	if(mySrc == 'img_2.jpg') {
		myImage.setAttribute ('src','img_1.jpg');
	}

	else if  (mySrc == 'img_3.jpg'){
		myImage.setAttribute ('src','img_2.jpg');
	}

	else {
		myImage.setAttribute ('src','img_3.jpg');
	}
};
