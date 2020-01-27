console.log('we are live');

/*
let data = fetch('http://127.0.0.1:5500/got.json')
.then(res => {return res.json()})
.then(resJson => { main(resJson)});

function main(data) {
  
  //  console.log(data);
  //  let edited = filter(data)
  //  console.log(edited);
    
    
}



function filter(data) {
    let filteredData = [];
    const filtered = data.forEach(object => {
        if (object.Name !== "" && object.Culture !== "" && object.PlayedBy[0] !== "" && object.Allegiances[0] !== undefined) {

            console.log("name: " + object.Name + " Allegiance: " + object.Allegiances[0]);
            object.Allegiances = object.Allegiances[0];
            filteredData.push(object)
        }
    });

    let sortedData = filteredData.sort((a, b) => (a.Allegiances > b.Allegiances) ? 1 : -1);
    
    sortedData.forEach(item => {
        console.log("name: " + item.Name + " Allegiance: " + item.Allegiances);
    })   
  
  return JSON.stringify(sortedData);
}


*/



//console.log(JSON.stringify(Factions));

/*
epic stats: 18
rare stats: 12
common stats: 6
*/

var tID; //we will use this variable to clear the setInterval()

function stopAnimate() {
  clearInterval(tID);
} //end of stopAnimate()


function animateScript() {

  var position = 256; //start position for the image slicer
  const interval = 100; //100 ms of interval for the setInterval()
  const diff = 256; //diff as a variable for position offset
  
  tID = setInterval(() => {
  
    document.getElementById("image").style.backgroundPosition =
      `-${position}px 0px`;
    //we use the ES6 template literal to insert the variable "position"
    
    if (position < 1536) {
      position = position + diff;
    }
    //we increment the position by 256 each time
    else {
      position = 256;
    }
    //reset the position to 256px, once position exceeds 1536px
    
  }, interval); //end of setInterval
} //end of animateScript()
