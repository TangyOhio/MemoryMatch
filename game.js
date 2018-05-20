$(document).ready(  function() {

  var actions = 0
  var tilesPicked = 0
  var pick1

  // When a button is clicked 
  $('.buttons').on('click', function() {
    // Attempt counter
    actions++
    $('#counter').text('Attempts: ' + actions)

    // Grabs the button and its' value
    pick = '#' + event.target.id
    pickColor = "" + $(pick).prop('value')

    pickTile(pick)
    
    //$(pick).prop('style', 'color:' + pickColor)
  })

  // What happens when a tile is picked
  function pickTile(tile) {
    tilesPicked++
    
    if (tilesPicked < 2) {
      $(pick).prop('disabled', true)
      pick1 = tile
    }
    else {
      tilesPicked = 0
      $(pick1).prop('disabled', false)
      
      checkTiles(pick1, tile)
    }
  }

  // Check if two tiles match
  function checkTiles(tile1, tile2) {
    if ($(tile1).isEqualNode($(tile2))) {
      output.log('yay')
    }
    else {
      output.log('nay')
    }
  }


})