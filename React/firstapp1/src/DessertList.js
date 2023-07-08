function DessertsList(props) {
    const lowCaloriesList = props.data
    .filter((desserts) => {
    return desserts.calories < 500 })
    .sort((a, b) => {
    return a.calories - b.calories })
    .map((dessert) =>{
    return
    <li> 
    {dessert.name} - {dessert.calories} cal 
    </li>
    })
  
    return (
     <ul>{lowCaloriesList}</ul>
  )
  }
  
  export default DessertsList;
  