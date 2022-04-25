import React, {useState} from "react";

import Form from '../../../shared/components/form-component/Form'
import Input from '../../../shared/components/form-component/input/Input'
import { useForm } from "../../../shared/components/hooks/form-hook";
import Button from '../../../shared/components/form-component/button/Button'

import './FormSender.css'
const FormSender = props =>{
    const [formState,  onInput,setFormState] = useForm({
        },
        true
    )
    const [reset, setReset] = useState(false)
    const onSubmitHandler = event =>{
        event.preventDefault();
        props.getMessage({id:'5', message:formState.inputs.sender.value, user:'ahmadeleiwa'})

        onInput('sender','',true)
        setReset(!reset)
        // console.log(formState)

    }
    if(document.getElementsByClassName('scroll').length != 0){
        document.getElementsByClassName('scroll')[0].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }

    return <Form onSubmit={onSubmitHandler} className='form-sender' >
        <Input reset={reset} className='Input' type='text' onInput={onInput} id='sender' noPlaceHolder />
        <Button submit color='darkblue' inverse>send</Button>
    </Form>
}


export default  FormSender