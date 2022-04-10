import React, { useReducer } from "react";
import Input from "./input/Input";
import { useForm } from "../hooks/form-hook";
import './Form.css'

const Form = props => {

    return <form
    
     className={`Form ${props.className} Form-${props.color} ${ props.noborder? 'Form-noborder':''} ${props.nocolor?'Form-nocolor':''}`}
     onSubmit={props.onSubmit}
     method={props.method}
     >
        {props.children}
    </form>
}

export default Form