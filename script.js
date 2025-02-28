document.addEventListener('DOMContentLoaded', function() 
{
    // Gestion des likes
    const likeBtn = document.getElementById('like-btn');
    const likeCounter = document.getElementById('like-count');
    let likeCount = 0;
    let isLiked = false;

    likeCounter.innerText = "";
    likeBtn.addEventListener('click', function() 
    {
        if(isLiked == false){
        isLiked = true;
        likeCount++;
        likeCounter.innerText = likeCount;
        }
        else{
            isLiked = false;
            likeCount--;
            likeCounter.innerText = "";
        }
    
    });

    // Gestion de l'interface des commentaires
    const commentBtn = document.getElementById('comment-btn');
    const commentCounter = document.getElementById('comment-count');
    let commentCount = 0;
    const commentSection = document.getElementById('comment-section');
    commentCounter.innerText = "";
    commentSection.style.display = 'none';
    commentQuitBtn = document.getElementById('comment-quit');
    commentBtn.addEventListener('click', function() 
    {
        commentSection.style.display = 'flex';
        console.log('comment');
    });
    commentQuitBtn.addEventListener('click', function() 
    {
        commentSection.style.display = 'none';
    });

    // Envoi de commentaire
    const commentForm = document.getElementById('comment-input');
    const sendBtn = document.getElementById('sendbtn');

    sendBtn.addEventListener('click', function()
    {
        let commentText = commentForm.value.trim();
        if(commentText != ""){
            // Création d'un élément de commentaire
            let commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerHTML = 
            `<p class='comment_username'>Utilisateur</p>
            <p class='comment'>${commentText}</p>`;

            commentSection.prepend(commentElement);
            commentForm.value = "";
            commentCount++;
            commentCounter.innerText = commentCount;
        }
    });

    // Gestion de la pause de la vidéo
    const video = document.getElementById('video');

    video.addEventListener('click', function()
    {
        if(video.paused){
            video.play();
            ShowPauseBtn();
        }
        else{
            video.pause();
            ShowPauseBtn();
        }
    });

    // Fonction pour faire apparaitre un symbole de pause

    ShowPauseBtn = function()
    {
        const pauseBtn = document.getElementById('pause-btn');
        pauseBtn.style.display = 'block';
        setTimeout(HidePauseBtn, 500);
    }

    HidePauseBtn = function()
    {
        const pauseBtn = document.getElementById('pause-btn');
        pauseBtn.style.display = 'none';
    }

});