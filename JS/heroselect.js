const jonSnow_portrait = document.getElementById('jonsnow_portrait');
const danny_portrait = document.getElementById('danarys_portrait');

jonSnow_portrait.addEventListener('click', (e) => {
    heroSelected(e);
});
danny_portrait.addEventListener('click', (e) => {
    heroSelected(e);
});

function heroSelected(e) {
       
    e.target.classList.add('selected');

    if(e.target === jonSnow_portrait) {
        danny_portrait.classList.remove('selected') ;
    } else {
        jonSnow_portrait.classList.remove('selected');
    }
}