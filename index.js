function moveDodgerRight() {
  var RightNumbers = dodger.style.right.replace('px', '')
  var right = parseInt(RightNumbers, 10)
 
  if (right > 0) {
    dodger.style.right = `${left + 1}px`
  }
}

var dodger = document.getElementById('dodger')

document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerLeft()
  }
})