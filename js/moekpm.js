var arrows = {
      top:[],
      down:[],
      right:[],
      left:[]
    },
    types = ['top','down','left','right'],
    center = getCenter(),
    arrowLength = check('leftTest','left'),
    
    scoreNum = 0,
    score = document.getElementById('score'),
    pausing = false,
    //also number of arrows
    idNum = 0,
    finalResult = {
      score: 0, highestCombos: 0, level: ''},
    combosNum =0,
    
    comment = document.getElementsByClassName('comment')[0],
    combos = document.getElementById('combos');

function createArrow(condition){
  if(condition){
    var arrow = document.createElement('I'),
        type = types[Math.floor(Math.random()*4)],
        id = 'a'+idNum,
        group;

    arrow.id = id;
    
    switch(type){
      case 'top':
        arrow.className = 'fa fa-arrow-up top ';
        group = arrows.top;
        group.push(id);
        break;
      case 'down':
        arrow.className = 'fa fa-arrow-down down';
        group = arrows.down;
        group.push(id);
        break;
      case 'left':
        arrow.className = 'fa fa-arrow-left left';
        group = arrows.left;
        group.push(id);
        break;
      case 'right':
        arrow.className = 'fa fa-arrow-right right';
        group = arrows.right;
        group.push(id);
        break;
    }
    
    document.body.appendChild(arrow);  
    idNum += 1;
    
    setTimeout(function(){
      if(arrow.parentNode == document.body){                      document.body.removeChild(arrow);
        group.splice(0,1);
      }

    },1190);
     }
  
}


function keypressHandle(event){
  event.preventDefault();
  var key = getKey(event),
      direction, group, result,
      distance, id, target;
    
  switch(key){
    case 65:
    case 37:
      direction = 'left';
      group = arrows.left;
      id = group[0];
      distance = check(id,direction);
      result = giveScore(distance);
      break;
    case 87:
    case 38:
      direction = 'top';
      group = arrows.top;
      id = group[0];
      distance = check(id,direction);
      result = giveScore(distance);
      break;
    case 68:
    case 39:
      direction = 'right';
      group = arrows.right;
      id = group[0];
      distance = check(id,direction);
      result = giveScore(distance);
      break;
    case 83:
    case 40:
      direction = 'down';
      group = arrows.down;
      id = group[0];
      distance = check(id,direction);
      result = giveScore(distance);
      break;
    default:
      return;
  }
  
  target = document.getElementById(id);
  
  // handle class
  addClass(direction);
  if(target) target.style.color = result.color;
    // target.classList.add('arrowPressed');
  
  if(result.comment){
  //handle score & comment data, UI
  scoreNum += result.score;
  score.innerHTML = scoreNum;
  comment.classList.add('commentPressed');
  if(result.comment == 'Miss'){
    comment.innerHTML = result.comment + '!!';
  }else{
    comment.innerHTML = result.comment + '!!'+ "<br>" +'+ ' + result.score +' !!!';
  }
}
  
  setTimeout(function(){
    // find time to remove
    remove(id,group);
  },1600);
}

document.addEventListener('keydown',function(event){
  keypressHandle(event);
});

setInterval(function(){
  createArrow(!pausing);
},600);

/*--Function for generating final result--*/
function generateFinalResult(){
  finalResult.score = scoreNum;
  
  var levelCheck =  scoreNum/(idNum * 1100);
  
  if(levelCheck > 0.85){
    finalResult.level = 'A';   
  }else if(levelCheck > 0.60){
    finalResult.level = 'B';   
  }else if(levelCheck>0.40){
    finalResult.level = 'C';              
  }else{
    finalResult.level = 'D';              
  }
  
}


/*functions to generate dynamic data*/

function getCenter(){
  var centerDom = document.getElementById('center'), centerRect, center = {};
  if(centerDom){
    centerRect = centerDom.getBoundingClientRect();
    center.x = centerRect.right;
    center.y = centerRect.bottom;
    
    return center;
  }
}

/*Functions to use for keypressHandle*/

// a function that returns an element's distance from the center 
function check(id,direction){
  var arrow = document.getElementById(id),
      result, rect;
  if(arrow){
    rect = arrow.getBoundingClientRect();}
  else{
    return;
  }
  
  if(direction == 'left' || direction == 
  'right'){
    
    if(rect.right > center.x){
      result = rect.left - center.x;
    }else{
      result = center.x - rect.right;
    }
    
  }else if(direction == 'top' || direction == 'down'){
    if(rect.bottom > center.y){
      result = rect.top - center.y;
    }else{
      result = center.y - rect.bottom;
    }
  }
  return Math.abs(result);
}

function getKey(event){
  var keynum;
  keynum = event.keyCode;
  return keynum;
}

// remove DOM & delete elements from arrows object
function remove(id,group){
  var arrow = document.getElementById(id);
  group.slice(0,1);
  if(arrow){
    document.body.removeChild(arrow);
  }
}

// dispatch result and score of every event
function giveScore(val){
  var result = {score:0,
                comment:''}, percentage,
                check;
  // 誤差率
  check = Math.abs((val/arrowLength)-1);
  
  // console.log((val));
  // console.log(arrowLength);
  console.log(check);
  
  if(check <= 0.7){
    //perfect
    result.score = 1100;
    result.comment = 'Perfect!';
    result.color = 'green';
    combosNum += 1;
  }else if(check <= 1){
    //great
    result.score = 700;
    result.comment = 'Great!';
    result.color = 'orange';
    combosNum += 1;
  }else if(check <= 1.3){
    //good
    result.score = 500;
    result.comment = 'Good!';
    result.color = 'purple';
    combosNum += 1;
  }else if(check > 1.3){
    result.score = 0;
    result.comment = 'Miss';
    result.color = 'red';
    combosNum = 0;
  }
  if(combosNum >= 2){
    combos.innerHTML = combosNum + " combos!";
   }
  
  if(combosNum > finalResult.highestCombos){
     finalResult.highestCombos = combos.Num;
  }
  
  return result;
}

//handle class when event triggered
function addClass(direction){
   var tester = document.getElementById(direction+"Test");
    if(tester.className.indexOf(' testPressed' == 0)){
    tester.classList.add('testPressed');
  }
}

var testers = document.querySelectorAll('.tester');
testers.forEach(function(tester){
  tester.addEventListener('transitionend',function(event){
  if(event.propertyName !== 'transform') return;  
  tester.classList.remove('testPressed');
  });
})

comment.addEventListener('transitionend',function(){
  if(event.propertyName !== 'transform') return;
  this.classList.remove('commentPressed');
});

/*--- Trigger events on mobile ---*/
function triggerKeydown(keycode){
  triggerEvent(document,'keydown',keycode);
}

function triggerEvent(element,type,keycode){
if ('createEvent' in document) {
        // modern browsers, IE9+
        var event = document.createEvent('HTMLEvents');
        event.initEvent(type, false, true);   
        event.keyCode = keycode;
        element.dispatchEvent(event);
  
    } else {
        // IE 8
        var event = document.createEventObject();
        event.eventType = type;
       event.keyCode = keycode; element.fireEvent('on'+event.eventType, event);
  }
}

/*
1. keydown event
2. comment
3.判定
*/