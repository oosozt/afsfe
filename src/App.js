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
fetchData();
}, [activate]);

useEffect(() => {
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
addData();
}, [activate2]);

  return (
    <div className="App">
      <h1>Hello</h1>
      <Deneme/>
      <button onClick = {()=> setActivated(true)}>Press To Retrieve Student Data</button>
      <button onClick = {()=> setActivated2(true)}>Press To Add a Student</button>
      <div>
        <h3>name:</h3>
        <input 
          type="text" 
          id="name"
          placeholder="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div>
        <h3>surname:</h3>
        <input 
          type="text" 
          id="surname"
          placeholder="surname"
          value={surname} 
          onChange={(e) => setSurname(e.target.value)} 
        />
      </div>
      <div>
        <h3>gpa:</h3>
        <input 
          type="text" 
          id="gpa" 
          placeholder="gpa"
          value={gpa} 
          onChange={(e) => setGpa(e.target.value)} 
        />
      </div>
      <div>
        <h3>studentId:</h3>
        <input 
          type="text" 
          id="studentId" 
          placeholder="studentId"
          value={studentId} 
          onChange={(e) => setStudentId(e.target.value)} 
        />
      </div>
    </div>
  );
}

export default App;
