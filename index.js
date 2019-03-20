function moveDodgerRight() {
  var RightNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(RightNumbers, 10)
 if (left < 360) {
   dodger.style.left = `${left + 1}px`
 }
  else if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}


