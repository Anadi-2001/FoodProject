import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({category}) => {

  const {food_list} = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {food_list.map((item)=>{
          if (category==="All" || category===item.category) {
            return <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
// import React, { useContext } from 'react';
// import './FoodDisplay.css';
// import FoodItem from '../FoodItem/FoodItem';
// import { StoreContext } from '../../Context/StoreContext';

// const FoodDisplay = ({ category }) => {
//   const { foodList } = useContext(StoreContext); // Correct variable from context

//   return (
//     <div className='food-display' id='food-display'>
//       <h2>Top dishes near you</h2>
//       <div className='food-display-list'>
//         {foodList?.length > 0 ? (
//           foodList
//             .filter((item) => category === 'All' || category === item.category) // Filter items based on category
//             .map((item) => (
//               <FoodItem
//                 key={item._id}
//                 image={item.image}
//                 name={item.name}
//                 desc={item.description}
//                 price={item.price}
//                 id={item._id}
//               />
//             ))
//         ) : (
//           <p>No dishes available</p> // Fallback for empty food list
//         )}
//       </div>
//     </div>
//   );
// };

// export default FoodDisplay;
