import React from "react";
import "./App.css";
import H from "./H.js";

function App() {
return (
<>
<H></H>
<div className="footer">
<div className="fonts mx-3 d-flex justify-content-around">
<i className="fa-solid fa-house my-3 "></i>
<i className="fa-regular fa-compass my-3"></i>
<i className="fa-regular fa-square-plus my-3"></i>
<div className="img-cont my-3">
<img
src="https://www.indiafilings.com/learn/wp-content/uploads/2023/03/Can-a-single-person-own-a-firm-in-India.jpg"
alt=""
/>
</div>
</div>
</div>
</>
);
}

export default App;