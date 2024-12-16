// import React, { useContext } from 'react'
// import './ExploreMenu.css'
// import { StoreContext } from '../../Context/StoreContext'

// const ExploreMenu = ({category,setCategory}) => {

//   const {menu_list} = useContext(StoreContext);
  
//   return (
//     <div className='explore-menu' id='explore-menu'>
//       <h1>Explore our menu</h1>
//       <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
//       <div className="explore-menu-list">
//         {menu_list.map((item,index)=>{
//             return (
//                 <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
//                     <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
//                     <p>{item.menu_name}</p>
//                 </div>
//             )
//         })}
//       </div>
//       <hr />
//     </div>
//   )
// }

// export default ExploreMenu
import React, { useContext } from 'react';
import './ExploreMenu.css';
import { StoreContext } from '../../Context/StoreContext';

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext); // Correctly fetching menu_list from context

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>
        Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <div className='explore-menu-list'>
        {menu_list?.length > 0 ? (
          menu_list.map((item, index) => (
            <div
              key={index}
              className={`explore-menu-list-item ${category === item.menu_name ? 'active' : ''}`}
              onClick={() => setCategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))}
            >
              <img src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          ))
        ) : (
          <p>No menu items available</p> // Fallback for empty or undefined menu_list
        )}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
