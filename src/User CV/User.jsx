import React from 'react'
import PersonalInfo from '../PersonalInfo/PersonalInfo'
import Experience from '../Experience/Experience'
import Contacts from '../Contacts/Contacts'
import './User.css'
const User = () => {
  return (
    <div>
    <PersonalInfo/>
    <Experience/>
    <Contacts/>
    </div>
  )
}

export default User