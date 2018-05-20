$(document).ready(  function() {

  var actions = 0
  var tilesPicked = 0
  var pick1

  // When a button is clicked 
  $('.buttons').on('click', function() {

    // Grabs the button and its' value
    pick = '#' + event.target.id

    pickTile(pick)
  })

  // What happens when a tile is picked
  function pickTile(tile) {
    tilesPicked++

    // Attempt counter
    actions++
    $('#counter').text('Attempts: ' + actions)
    
    if (tilesPicked < 2) {
      $(tile).prop('disabled', true)
      $(tile).addClass($(tile).prop("value"))
      
      pick1 = tile
    }
    else {
      tilesPicked = 0
      $(tile).addClass($(tile).prop("value"))
      $(tile).prop('disabled', true)
      
      checkTiles(pick1, tile)
    }
  }

  // Check if two tiles match
  function checkTiles(tile1, tile2) {
    var tile1Value = $(tile1).prop("value");
    var tile2Value = $(tile2).prop("value");

    if (tile1Value === tile2Value) {
      console.log('yay')
    }
    else {
      $(tile1).prop('disabled', false)
      $(tile2).prop('disabled', false)
      setTimeout(function() {
        $(tile1).delay( 300 ).removeClass()
      }, 300)

      setTimeout(function() {
        $(tile2).delay( 300 ).removeClass()
      }, 300)
      
      
      console.log('nay')
    }
  }


})