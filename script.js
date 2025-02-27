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

    // Gestion des commentaires
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
});