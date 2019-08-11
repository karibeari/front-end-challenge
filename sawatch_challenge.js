const sortByVehicleModel = vehicles => {
  return vehicles.sort( function( a, b ) {
    if ( a.vehicle_model < b.vehicle_model ) {
      return -1
    }
    if ( a.vehicle_model > b.vehicle_model ) {
      return 1
    }
    return 0
  })
}

const appendRowsToTable = vehicles => vehicles.forEach( vehicle => {
  document.querySelector( '#swt-table-body' ).innerHTML +=
    `<tr>
      <td> ${ vehicle.vehicle_year } </td>
      <td> ${ vehicle.make } </td>
      <td> ${ vehicle.vehicle_model } </td>
      <td> ${ vehicle.displacement } </td>
      <td> ${ vehicle.cylinders } </td>
      <td> ${ vehicle.class } </td>
    </tr>`
})

fetch( 'https://api.sawatchlabs.com/models/13/2017' )
  .then( response => response.json() )
  .then( vehicles => appendRowsToTable( sortByVehicleModel( vehicles.data )))
  .catch( console.error())
