data = [{
    'img': 'Assets/benjamin-voros-phIFdC6lA4E-unsplash.jpg',
    'title': 'Editing',
    'subtitle': 'CapCut',
    'desc': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque asperiores nihil aliquam, repellendus praesentium nisi doloribus nostrum."
}, {
    'img': 'Assets/benjamin-voros-phIFdC6lA4E-unsplash.jpg',
    'title': 'Editing',
    'subtitle': 'CapCut',
    'desc': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque asperiores nihil aliquam, repellendus praesentium nisi doloribus nostrum."
}]

var container = document.querySelector('.container-project')

data.forEach(element => {
    container.innerHTML +=
    `<div class="project">
    <div class="img-project">
        <img src="`+element.img`" alt="">
        <img src="${element.img}" alt="">
    </div>
    <div class="desc-project">
        <h1>${element.title}</h1>
        <h2>${element.subtitle}</h2>
        <p>${element.desc}</p>
    </div>
    <button class="read-more">Read</button>
    </div>`

});

