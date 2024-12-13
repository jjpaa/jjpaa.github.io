binaryFall()

function binaryFall()
{

  let divIdHeader = "dynamicDiv"
  let divName = ""

  for (let i = 0; i < 500; i++) {
    divName = divIdHeader.concat(i)
    var elemDiv = document.createElement('div');
    elemDiv.className = "scroll-text-" + (getRandomInt(3) + 1)
    elemDiv.innerHTML = createText()

    let randRight = getRandomInt(100) + 1
    let randBottom = getRandomInt(100) + 1

    elemDiv.style.cssText = 'position:absolute;right:' + randRight +'%;bottom:' + randBottom + '%;opacity:1.0;z-index:100;'

    document.getElementById('scroll-container').appendChild(elemDiv);
  } 
}

function createText()
{
  let contentString = createContent()
  let chars = contentString.split("")
  let returnString = chars.join('<br>');
  return returnString
}

function createContent()
{
    let myString = ""
    let length = getRandomInt(10)

    for (let i = 0; i < length; i++) {
        let randomValue = getRandomInt(2)
        myString = myString.concat(randomValue)
      } 

    return myString 
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}