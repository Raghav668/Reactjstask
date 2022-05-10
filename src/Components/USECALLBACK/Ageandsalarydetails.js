import React, { useState } from 'react';
import { useCallback } from 'react';
import Age from './Age';
import Incrementedage from './Incrementedage';
import Incrementedsalary from './Incrementedsalary';
import Salary from './Salary';

function Ageandsalarydetails() {

const [age,setAge] = useState(0)
const [salary,setSalary] = useState(0)

const Incrementage = useCallback(()=>{
    setAge(age+1)
},[age])

const Incrementsalary = useCallback(()=>{
    setSalary(salary+1)
},[salary])
  return (  
        <div>
            <Age value = {age}/>
            <Incrementedage func = {Incrementage}/>
            <Salary value = {salary}/>
            <Incrementedsalary func = {Incrementsalary}/>
        </div>
  )
}

export default Ageandsalarydetails;
