const albumContainer = document.getElementById('fg-album')
const fantAlbum = "./assets/img-optimized/fant-glam/"

const fileNames = [
'fair1.jpg',
'fair2.jpg',
'fair3.jpg',
'fair4.jpg',
'fair5.jpg',
'fair6.jpg',
'fair7.jpg',
'fair8.jpg',
'fair9.jpg',
'fair10.jpg',
'fair11.jpg',
'fair12.jpg',
'gat1.jpg',
'gat2.jpg',
'gat3.jpg',
'gat4.jpg',
'gat5.jpg',
'gat6.jpg',
'trix1.jpg',
'trix2.jpg',
'trix3.jpg',
'trix4.jpg',
'trix5.jpg',
'trix6.jpg']
    const fantArr = []

const images = fileNames.map(x => {
    return {
        url: fantAlbum + x
    }
});

console.log(images);

