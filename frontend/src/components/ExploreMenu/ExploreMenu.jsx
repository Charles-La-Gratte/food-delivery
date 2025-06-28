//import React from 'react'
import PropTypes from 'prop-types';
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

  const ExploreMenu = ({category,setCategory}) => {
    
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Discover the heart of African cuisine with our curated menu, featuring rich, bold, and unforgettable flavors.
        From hearty stews and spicy rice dishes to tasty street snacks and refreshing drinks, there is something for every craving.
        Select a category below and dive into the AfroTastes experience.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                      <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                      <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}
ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired, // or whatever type it should be
  setCategory: PropTypes.string.isRequired, // or whatever type it should be
};

export default ExploreMenu