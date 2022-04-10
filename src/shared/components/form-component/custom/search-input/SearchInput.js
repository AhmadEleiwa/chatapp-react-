import React,{ useState}from "react";
import Button from "../../button/Button";
import Input from "../../input/Input";

import './search.css'
const SearchInput = props =>{
    const [isfocus, setIsFocus ]= useState(true)
    const searchInput =  document.querySelector('.search-input')
    const color = props.color =='dark'?'#31313173' :'#ff646473'
    const onFocusHandler = event =>{
        searchInput.style.outline = isfocus ?  color+' 5px solid' : 'none'
        setIsFocus(false)
    }
    const onBlurHandler = event =>{
        searchInput.style.outline = isfocus ?  '#ff646473 5px solid' : 'none'
        setIsFocus(!isfocus)
    }

    return <div className="search-input" onBlur={onBlurHandler}>
            {props.additionContent}
            <Input   {...props} onFocus={onFocusHandler} type='search' className='search'  noOutLine/>
            {props.searchIcon ?<button  className={`search-btn ${props.searchIconClassName}`}>{props.children}</button> 
            :<Button className={`search-btn ${props.searchIconClassName}`} style={{borderRadius:'0px 5px 5px 0px'}} color={props.searchIconColor? props.searchIconColor : props.color }>{props.children}</Button>}
        </div>
}


export default SearchInput