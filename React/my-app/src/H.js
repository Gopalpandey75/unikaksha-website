import React, {useState} from "react";
import "./Feeds.css"; // custom css

function H() {
    // usestate
    let [like, setLike] = useState(0);
    let [second, setsecond] = useState(0);
    let [thirdheart, setthirdheart] = useState(0);
    let [comments, setComments] = useState(['nice']);
    let [commentsone, setCommentsone] = useState(['hello']);
    function handleLike(){
        document.querySelector('.iconsone').childNodes[0].setAttribute('class','fa-solid fa-heart mx-2 py-2');
        document.querySelector('.iconsone').childNodes[0].setAttribute('style','color:red');
        setLike(like+1)
        
    }
    function secondlike(){
        document.querySelector('.iconstwo').childNodes[0].setAttribute('class','fa-solid fa-heart mx-2 py-2');
        document.querySelector('.iconstwo').childNodes[0].setAttribute('style','color:red');
        setsecond(second+1)
    }
    function third(){
        document.querySelector('.iconsthree').childNodes[0].setAttribute('class','fa-solid fa-heart mx-2 py-2');
        document.querySelector('.iconsthree').childNodes[0].setAttribute('style','color:red');
        setthirdheart(thirdheart+1)
    }
    function firstComment(){
        console.log(document.querySelector('#comment_box').value);
        let newComment=document.querySelector('#comment_box').value
        setComments([...comments,newComment])
        document.querySelector('#comment_box').value=''
    }
    function oneComment(){
        console.log(document.querySelector('#onecomment_box').value);
        let newCommentone=document.querySelector('#onecomment_box').value
        setCommentsone([...commentsone,newCommentone])
        document.querySelector('#onecomment_box').value=''
    }
  
    

return (
<div>
<div className="header p-2">
<span className="py-1 display-6">Instagram </span>
{/* <input
className="form-control ms-2"
type="search"
placeholder="Search"
aria-label="Search"
id="sea"
/> */}
<span className="icons2">
<i className="fa-regular fa-heart mx-2 py-2 display-6"></i>
<i class="fa-brands fa-facebook-messenger py-2 display-6"></i>
</span>


</div>

<div className="home-main  pt-3">
{/* Feed One Start */}
<div className="abc">
<div className="user-id d-flex flex-row">
<div className="img-cont">
<img
src="https://www.syfy.com/sites/syfy/files/2021/04/film-review-thor-2011.jpg"
alt=""
/>
</div>
<div className="user-name my-auto mx-2">
<label>Thor Rangrok <i class="bi bi-patch-check-fill text-primary"></i></label>
<p>Sponsored <i class="fa-solid fa-music"> ohh-nna-na-na virel song</i></p>
</div>
</div>
<img
src="https://media.tenor.com/0wuOlAz-ZaEAAAAM/thor.gif"
className="card-img-top"
alt="..."
/>
<div className="card-body">
<div className="colection d-flex">
    <div className="iconsone d-flex flex-row mx-2 display-6">
    <i onClick={handleLike} className="fa-regular fa-heart mx-2 py-2"></i>
<i className="fa-regular fa-comment mx-2 py-2"></i>
<i className="fa-regular fa-paper-plane mx-2 py-2"></i>
    </div>
<div><i class="bi bi-bookmark mx-3 py-2 display-6"></i></div>
</div>
<div className="feedc">
<label className="mx-3 my-2">Liked by Rudrapandey57 and {like} others</label>
<label className="mx-3 my-2">#thor #marvel #shorts #avengers #viral</label>
<label className=" view mx-3 my-2">View all Comments</label>
</div>

<ul>
    {comments.map((element)=>{
        console.log(element);
        return <li><b>@Gopal Pandey </b>{element}</li>
    })}

</ul>
<input type="text" id="comment_box" placeholder="Add a comment..." style={{width:"70%",borderRadius:"12px ",border:"2px solid rgb(111, 111, 111)"}}/>
<i class="bi bi-emoji-heart-eyes mx-3  display-6"></i>
<i onClick={firstComment} type="submit" class="bi bi-send-fill display-6"></i>
</div>
</div>

{/* Feed One End */}

{/* Feed One Start */}
<div className="abc">
<div className="user-id d-flex flex-row">
<div className="img-cont">
<img
src="https://www.pmindia.gov.in/wp-content/uploads/2022/12/twitter_2.jpg"
alt=""
/>
</div>
<div className="user-name my-auto mx-2">
<label>PM Modi <i class="bi bi-patch-check-fill text-primary"></i></label>
<p>Sponsored <i class="fa-solid fa-music"> makaiya me raja ji</i></p>
</div>
</div>
<img

src="https://media.tenor.com/o0kkMEBHvQgAAAAC/dancing-modi-ji-pm-modi.gif"
className="card-img-top"
alt="..."
/>
<div className="card-body">
<div className="colection d-flex">
    <div className="iconstwo d-flex flex-row mx-2 display-6">
    <i onClick={secondlike} className="fa-regular fa-heart mx-2 py-2"></i>
<i className="fa-regular fa-comment mx-2 py-2"></i>
<i className="fa-regular fa-paper-plane mx-2 py-2"></i>
    </div>
<div><i class="bi bi-bookmark mx-3 py-2 display-6"></i></div>
</div>
<div className="feedc">
<label className="mx-3 my-2">Liked by Rudrapandey57 and {second} others</label>
<label className="mx-3 my-2">#thor #marvel #shorts #avengers #viral</label>
<label className=" view mx-3 my-2">View all Comments</label>
</div>

<ul>
    {comments.map((element)=>{
        console.log(element);
        return <li><b>@Gopal Pandey </b>{element}</li>
    })}

</ul>
<input type="text" id="onecomment_box" placeholder="Add a comment..." style={{width:"70%",borderRadius:"12px ",border:"2px solid rgb(111, 111, 111)"}}/>
<i class="bi bi-emoji-heart-eyes mx-3  display-6"></i>
<i onClick={oneComment} type="submit" class="bi bi-send-fill display-6"></i>
</div>
</div>

{/* Feed One End */}

{/* Feed One Start */}
<div className="abc">
<div className="user-id d-flex flex-row">
<div className="img-cont">
<img
src="https://www.syfy.com/sites/syfy/files/2021/04/film-review-thor-2011.jpg"
alt=""
/>
</div>
<div className="user-name my-auto mx-2">
<label>Thor Rangrok <i class="bi bi-patch-check-fill text-primary"></i></label>
<p>Sponsored <i class="fa-solid fa-music"> ohh-nna-na-na virel song</i></p>
</div>
</div>
<img
src="https://media.tenor.com/0wuOlAz-ZaEAAAAM/thor.gif"
className="card-img-top"
alt="..."
/>
<div className="card-body">
<div className="colection d-flex">
    <div className="iconsthree d-flex flex-row mx-2 display-6">
    <i onClick={third} className="fa-regular fa-heart mx-2 py-2"></i>
<i className="fa-regular fa-comment mx-2 py-2"></i>
<i className="fa-regular fa-paper-plane mx-2 py-2"></i>
    </div>
<div><i class="bi bi-bookmark mx-3 py-2 display-6"></i></div>
</div>
<div className="feedc">
<label className="mx-3 my-2">Liked by Rudrapandey57 and {thirdheart} others</label>
<label className="mx-3 my-2">#thor #marvel #shorts #avengers #viral</label>
<label className=" view mx-3 my-2">View all Comments</label>
</div>

<ul>
    {comments.map((element)=>{
        console.log(element);
        return <li><b>@Gopal Pandey </b>{element}</li>
    })}

</ul>
<input type="text" id="comment_box" placeholder="Add a comment..." style={{width:"70%",borderRadius:"12px ",border:"2px solid rgb(111, 111, 111)"}}/>
<i class="bi bi-emoji-heart-eyes mx-3  display-6"></i>
<i onClick={firstComment} type="submit" class="bi bi-send-fill display-6"></i>
</div>
</div>

{/* Feed three End */}
</div>
</div>
);
}

export default H;