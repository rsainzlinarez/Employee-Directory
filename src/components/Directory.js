import React, {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap';
// import Api from '../Utils/Api';

export default function Directory() {
    const [results, setResults] = useState([])

    useEffect(() => {
        
        fetch(`https://randomuser.me/api/?results=10&nat=us`)
        .then(res => res.json())
        .then((res) => setResults(res.results))
}, [])

return(
    <>

<Table striped bordered hover>
  <thead>
    <tr>
      <th>E-Photo</th>
      <th>Employee-ID</th>
      <th>Last Name</th>
      <th>First Name</th>
      <th>Home Phone</th>
      <th>Cell Phone</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    {results
        .map(({ name, picture, phone, cell, email, id }) => (
            <Row 
            picture={picture}
            id={id}
            name={name}
            phone={phone}
            cell={cell}
           email={email} 
        //    
            />
          ))}
 
    </tbody>
  
</Table>
</>

);
    
}


const Row= ({ picture, name, phone, cell, email, id }) => {
     
    return (
        <tr>
             <td><img src={picture.large} alt="employee"/></td>
           <td>{id.value}</td>
            <td>{name.last}</td>
            <td>{name.first}</td>
            <td>{phone}</td>
            <td>{cell}</td>
            <td>{email}</td>
        </tr>
    )


}

