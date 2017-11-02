const changeLang = (event)=>{
    if(event.target.innerHTML=="中") return { type: "CHANGE_LANG", payload: "CH" };
    else
      return { type: "CHANGE_LANG", payload: "EN" };
}  

module.exports = changeLang;