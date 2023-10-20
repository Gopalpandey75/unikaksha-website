import React from 'react'
import "./Instagram.css"
function Instagram() {
  function likecount(){
    document.getElementById("like").style.Color = "red";
  }
  return (
   
    <>



<div><nav class="navbar">
  <div class=" container">
    
  <a class="navbar-brand" href="#">
  <img src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
    <h1>unigram</h1>
    </a>
    <div className='message'>
  <i class="bi bi-heart"></i> 
  <i class="bi bi-chat-dots"></i>
  </div>
  </div>
  

</nav></div>
<div>
  <br/>
</div>

<div class="card-fluid">
  <div class='nor'>
  <img src="https://thumbs.dreamstime.com/b/dark-skinned-entrepreneur-wearing-glasses-working-modern-office-african-american-man-white-shirt-looking-smiling-79328202.jpg" width="100%" height="100%" alt="..."/>
  <div className='likedip'>
  <i onClick={likecount} id='like' class="bi bi-heart-fill"></i>
  <i class="bi bi-chat"></i>
  <i class="bi bi-send"></i>
  </div>
  <div>
    
   
   
  </div>
  </div>
 
  
 
  
</div>
    </>
   
  );
}


export default Instagram;




