//import React from 'react'
import PropTypes from 'prop-types';
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
    
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipiscing elit sollicitudin sapien montes imperdiet platea habitant, potenti fusce et lacus dis ridiculus vestibulum nullam proin quam ligula. Suscipit purus ridiculus dictum euismod bibendum mattis mauris at interdum, ante</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-item">
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
  category: PropTypes.string.isRequired, // Ensures 'category' is a required string
  setCategory: PropTypes.func.isRequired, // Ensures 'setCategory' is a required function
};


export default ExploreMenu