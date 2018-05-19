$(document).ready(  function() {

  tilesPicked = 0

  // When a button is clicked 
  $('.buttons').on('click', function() {
    pick = '#' + event.target.id
    pickColor = "" + $(pick).prop('value')
    $(pick).prop('disabled', true)
    $(pick).prop('style', 'color:' + pickColor)
    alert(pickColor)
  })

  function pickTile(tile) {
    tilesPicked++

  }


})