const reducer = (state,action)=>{
    return action.payload?action.payload:"CH";
  }

module.exports = reducer;
