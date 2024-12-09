let contentString = createContent()
let chars = contentString.split("")
document.getElementById('scroll-text').innerHTML = chars.join('<br>');

function createContent()
{
    let myString = ""

    for (let i = 0; i < 100; i++) {
        let randomValue = getRandomInt(2)
        myString = myString.concat(randomValue)
      } 

    return myString 
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }