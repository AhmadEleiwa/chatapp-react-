import React ,{useReducer, useEffect} from "react";
import { validate } from "../../../utils/validators";
import './Input.css'

const inputReducer = (state, action) => {
    switch (action.type) {
        
      case 'CHANGE':
         
        return {
          ...state,
          value: action.val,
          isValid: action.validators ? validate(action.val, action.validators) : true
        };
      case 'TOUCH': {
        return {
          ...state,
          isTouched: true
        }
      }
      default:
        return state;
    }
  };

const Input = props => { 
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || '',
        isTouched: false,
        isValid: props.initialValid || props.validators ? props.validators===0 : true
      });
      
      const changeHandler = event => {
        dispatch({
          type: 'CHANGE',
          val: event.target.value,
          validators: props.validators
        });
      };
    
      const touchHandler = () => {
        dispatch({
          type: 'TOUCH'
        });
      };
    
    useEffect(() => {
        props.onInput((props.id ? props.id : props.label ),inputState.value, inputState.isValid)
    }, [inputState.value, inputState.isValid, props.onInput]);
    let content ;
    if(props.type.trim() === 'textarea' ){
    content =(
        <textarea
        width={props.width}
        height={props.height}
        maxLength={props.maxLength || 350}
        spellCheck={props.spellCheck || true}
        rows={props.rows? props.rows : 3}
        cols={props.cols? props.cols : 5}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        style={props.style}
        onFocus={props.onFocus}
        className={`textarea input input-${props.color} ${props.noOutLine? 'input-no_outline': ''}`}
        placeholder={props.placeholder? props.placeholder : ''} 
        />
        )
    }
    else{
        content = (<input 
        title={props.errorText}
        width={props.width}
        height={props.height}
        maxLength={props.maxLength || 60}
        style={props.style}
        spellCheck={props.spellCheck || false}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        onFocus={props.onFocus}
        className={`input  input-${props.color} ${props.noOutLine? 'input-no_outline': ''}`} 
        placeholder={props.placeholder? props.placeholder : props.noPlaceHolder?'' : 'Text'} 
        type={props.type}/>
        )
    }
    return <div  className={`input-dev   ${!inputState.isValid && inputState.isTouched && 'input-dev--invalid'}${props.color=='dark'?'-'+props.color: ' '} ${props.className} `} style={{position:'relative'}} >
        {props.label ? <label htmlFor={props.id} style={{color:props.labelColor}}>{props.label}</label> : ''}
      {content}
      {!inputState.isValid && inputState.isTouched && props.errorText &&<p>{props.errorText}</p>}
    </div>
}


export default Input