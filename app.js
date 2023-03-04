const albumContainer = document.getElementById('fg-album')
const fantAlbum = "./assets/img-optimized/fant-glam/"

const fileNames = [
'fair1-horizontal.jpg',
'fair2.jpg',
'fair5.jpg',
'fair6.jpg',
'fair9-horizontal.jpg',
'fair7.jpg',
'fair12.jpg',
'fair4.jpg',
'fair10-horizontal.jpg',
'fair11.jpg',
'fair8-horizontal.jpg',
'fair3.jpg',
'trix1-horizontal.jpg',
'gat1.jpg',
'trix5.jpg',
'trix2.jpg',
'gat3.jpg',
'gat2-horizontal.jpg',
'gat4.jpg',
'trix4.jpg',
'trix3.jpg',
'gat5.jpg',
'gat6.jpg',
'trix6-horizontal.jpg']
    const fantArr = []

const images = fileNames.map(x => {
    const [a,b] = x.split('-')
    return {
        url: fantAlbum + x,
        orientation: b ? b.split('.')[0] : ''
    }
});

for (let i = 0; i < images.length; i++) {
    const fantImage = `
    <div class="${images[i].orientation}"><a href = "${images[i].url}" data-lightbox="fairy1" data-title="Image Caption"><img src="${images[i].url}" class="pic"></a></div>
    `
    albumContainer.innerHTML += fantImage

    console.log('working')
}

console.log(images);

