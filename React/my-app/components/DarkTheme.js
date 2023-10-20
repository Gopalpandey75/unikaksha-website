import React from 'react'

function darkTheme() {
    function redchng(){
     
            document.body.style.backgroundColor = "red";
           document.body.style.color = "white";
         }
         function greenchng(){
     
            document.body.style.backgroundColor = "green";
           document.body.style.color = "white";
         }
         function bluechng(){
     
            document.body.style.backgroundColor = "blue";
           document.body.style.color = "white";
         }
    function handleDark() {
        if(document.body.style.backgroundColor === "black"){
          
           document.body.style.backgroundColor = "white";
          document.body.style.color = "black";
        }else{
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        }
          
    
}
  return (
   <>
   <h1>Dark/light Theme</h1>
   <div className="form-check form-switch">
<input onClick={handleDark} className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
<label className="form-check-label" htmlfor="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div>
<button onClick={redchng} style={{backgroundColor:"red", color:"white "}} type="button" class="btn">red</button>
<button onClick={greenchng} style={{backgroundColor:"green", color:"white"}} type="button" class="btn">green</button>
<button onClick={bluechng} style={{backgroundColor:"blue", color:"white"}} type="button" class="btn">blue</button>


   </>
  )
}

export default darkTheme
