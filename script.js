$( 'button' ).click( filterItems );
function filterItems() {
    let button = this;
    let selector = $( button ).data( 'filter' );
    $( '#products img' ).not( selector ).hide(500);
    $( selector ).show(500);

}