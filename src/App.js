import './App.css';
import Deneme from './Deneme';
import { useEffect, useState } from 'react';

function App() {
  const [activate, setActivated] = useState(false)
  const [activate2, setActivated2] = useState(false)
  const [name, setName] = useState(null)
  const [surname, setSurname] = useState(null)
  const [gpa, setGpa] = useState(null)
  const [studentId, setStudentId] = useState(null)

  const optionsGet = {
    method: 'GET',
  };
  const optionsPost = {
    method: 'POST',
    
  };
  
useEffect(() => {
  const fetchData = async () => {
    if(activate === true) {
      await fetch(
        'http://localhost:8080/afs/getStudents?message=hello', optionsGet
    )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch(err => console.error(err));
    }
  }
  const addData = async () => {
    if(activate2 === true) {
      await fetch(
        'http://localhost:8080/afs/addStudent?gpa='+ gpa +'&name='+ name +'&surname='+ surname +'&studentId='+ studentId + '', optionsPost
    )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch(err => console.error(err));
    }
  }   
fetchData();
addData();
}, [activate]);


  return (
    <div className="App">
      <h1>Hello</h1>
      <Deneme/>
      <button onClick = {()=> setActivated(true)}>Press To Retrieve Student Data</button>
      <button onClick = {()=> setActivated2(true)}>Press To Add a Student</button>
      <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      <input 
          type="text" 
          id="surname" 
          value={surname} 
          onChange={(e) => setSurname(e.target.value)} 
        />
      <input 
          type="text" 
          id="gpa" 
          value={gpa} 
          onChange={(e) => setGpa(e.target.value)} 
        />
        <input 
          type="text" 
          id="studentId" 
          value={studentId} 
          onChange={(e) => setStudentId(e.target.value)} 
        />
    </div>
  );
}

export default App;
