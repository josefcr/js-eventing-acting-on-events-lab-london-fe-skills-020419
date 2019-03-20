function moveDodgerRight() {
  var RightNumbers = dodger.style.left.replace('px', '')
  var right = parseInt(RightNumbers, 10)
 if (right < 360)
  else if (right > 0) {
    dodger.style.left = `${left + 1}px`
  }
}



var dodger = document.getElementById('dodger')

document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerRight()
  }
})