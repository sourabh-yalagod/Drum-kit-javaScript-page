const keys = document.querySelectorAll('#sound');

keys.forEach((e)=>{
    e.addEventListener('click',()=>{
        const audio = document.querySelector(`audio[data-key = "${e.dataset.key}"]`);
        audio.currentTime=0;
        audio.play();
    });
})

const body = document.querySelector('body');
window.addEventListener('keydown',(e)=>{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key_sound = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return; 
    audio.currentTime=0;
    audio.play();
    key_sound.classList.add('scale-[1.1]')
    key_sound.classList.add('border-[rgb(212,212,90)]')
    key_sound.classList.add('shadow-[2px_2px_50px_10px_rgb(212,212,90)]')
    
});

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
function removeTransition(e){
    e.target.classList.remove('border-[rgb(212,212,90)]')
    e.target.classList.remove('scale-[1.1]');
    e.target.classList.remove('shadow-[2px_2px_50px_10px_rgb(212,212,90)]')
    console.log(e)
}