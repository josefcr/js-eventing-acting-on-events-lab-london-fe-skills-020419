function moveDodgerRight() {
  var RightNumbers = dodger.style.left.replace('px', '')
  var Right = parseInt(RightNumbers, 10)
 
  if (right > 0) {
    dodger.style.right = `${right  1}px`
  }
}