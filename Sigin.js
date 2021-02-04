import React, { useState } from 'react';
import './Refer';

import './index.css'
export default function Sigin(){
     
    
    
    
   
   

    const[name,setName] = useState('')
    const[phone,setPhone]=useState('')
    const[bod,setbod]=useState('')
    const[email,setEmail]=useState('')
    const[gender,setGender]=useState('')
    const[course,setCourse]=useState('')



    const[uname,setNammsg] = useState('')
    const [pn,setPnmsg]=useState('')
    const [bo,setbomsg]=useState('')
    const[emai,setemaimsg]=useState('')
    const[gende,setgendemsg]=useState('')
    const[cours,setcoursmsg]=useState('')



    const handleNameInput = event =>{
        event.preventDefault();
        setName(event.target.value)
    }
    const handlephonenumInput = event => {
        event.preventDefault();
        setPhone(event.target.value)
    }
    const handlebirthdayInput= event =>{
        event. preventDefault();
        setbod(event.target.value)
    }
    const handleEmailInput =event=>{
        event.preventDefault();
        setEmail(event.target.value)
    }
    const handleGenderInput = event =>{
        event.preventDefault();
        setGender(event.target.value)
    }
    const handleCoursesInput =event =>{
        event.preventDefault();
        setCourse(event.target.value)
    }



    const handleSubmit = event => {
        event.preventDefault();
      if (name==''){
        alert('enter the name')
    setNammsg('name is required')
    }
    if(phone==''){
        alert('enter the phone number')

        setPnmsg('phonenum is required')
    }
    if(bod==''){
        alert('enter the birthday date')
        setbomsg('birthday is required')
    }
    if(email=='')
    {
        alert('enter the email')
        setemaimsg('email is required')
    }
    if(gender=='')
    {
        alert('enter the gender')
        setgendemsg('gender is required')
    }
    if(course=='')
    {
        alert('enter the course')
        setcoursmsg('course is required')
    }
    }

    


return(
            <div className='three'>
                <b>!! FYNSIS SOFTLAB !!</b><br/><br/><br/>
                <form onSubmit={handleSubmit}>
                <label for="lname"><b>Name :</b></label>
                
                        <input type="text" onChange={handleNameInput} id="name" name="name"/><br/>
                        <span id='name'>{uname}</span><br/>
                     
                        <label for='Phone number'><b>Phone Number :</b></label>
                        <input placeholder='enter your number' onChange={handlephonenumInput} id  ='Phonenumber' name='Phone number' pattern='{0-9}{10}'></input><br/>
                        <span for='phonenumber'>{pn}</span><br/>
                        <label for="birthday"><b>Birthday:</b></label>
                        <input type="date" onChange={handlebirthdayInput} id="birthday" name="birthday"/><br/>
                        <span for ='birthday'>{bo}</span><br/>
                        <label for="email"><b>Enter your email:</b></label>
                        <input type="email" onChange={handleEmailInput} id="email" name="email"/><br/>
                        <span>{emai}</span><br/>
                        <label><b>Address :</b></label>
                       
                        <textarea rows="4" cols="50" name="comment" form="usrform">
                        Enter text here...</textarea><br/><br/>

                       <b>Gender :</b> 
                    <input type="radio"onChange={handleGenderInput} id="male" name="gender" value="male"/>
                    <label for="male"><b>Male</b></label>
                    <input type='radio' id='female' name='gender' value='female'/>
                    <label for='female'><b>Female</b></label>
                    <input type="radio" id="other" name="gender" value="other"/>
                    <label for="other"><b>Other</b></label><br/>
                    <span>{gende}</span><br/>
                    <label><b>COURSES:</b></label><br/><br/>
                    <input type="checkbox" onChange={handleCoursesInput} id="vehicle1" name="HTML" value="HTML"/>
                    <label for="HTML"><b>HTML</b></label>
                    <input type="checkbox" id="CSS" name="CSS" value="CSS"/>
                    <label for="COURSE"><b>CSS</b> </label>
                    <input type="checkbox" id="CROUSE" name="COURSE" value="JS"/>
                    <label for="COURSE"><b>JS</b> </label>
                    <input type='checkbox' id='reactjs' name='course' value='reactjs'/>
                    <label><b>REACT JS</b></label><br/>
                    <span>{cours}</span><br/>
                    <input type='reset' className='five' />&nbsp;&nbsp;
                    <input type='Submit' className='four'/>
                  </form>
                    
            </div>
             
        )
    }


    

