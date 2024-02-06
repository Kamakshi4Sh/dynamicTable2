import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const initialList=[
  {
    name: "abc",
    age: 12,
    gender: 'male'
  },
  {
    name: 'abdc',
    age: 12,
    gender: 'male'
  },
  {
    name: 'abxc',
    age: 12,
    gender: 'male'
  },
  {
    name: 'aabc',
    age: 12,
    gender: 'male'
  },
  {
    name: 'abcc',
    age: 12,
    gender: 'male'
  }
];



function App() {

  const handleDelete=(index)=>{
    const newList=list.filter((item,i)=>i!=index);
    setList(newList);
  }
  

 const[list, setList] = useState(initialList);
 const[editIndex, setEditIndex]= useState(null);
 const[ editData, setEditData] =useState({
  Name:"",
  Age:"",
  Gender:""
 });

 const handleEdit=(index)=>{
  setEditIndex(index);
  const item= list[index];
  setEditData({
    Name:"item.name",
    Age:"item.age",
    Gender:"item.gender"
  });
 };

 const handleSaveEdit=()=>{
  const newList=[...list];
  newList[editIndex]={...editData};
  setList(newList);
  setEditIndex(null);
  setEditData({
    Name:"",
    Age:"",
    Gender:""
  });
 };


  return (
    <div className="App">
     <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Function</th>
        </tr>
      </thead>
      <tbody>
        {list.map((value,key)=>{
          // console.log(value);
          //console.log(key);
          return(
            <tr key={key}>
            <td>{editIndex === key ? <input type="text" value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} /> : value.name}</td>
            <td>{editIndex === key ? <input type="text" value={editData.age} onChange={(e) => setEditData({ ...editData, age: e.target.value })} /> : value.age}</td>
            <td>{editIndex === key ? <input type="text" value={editData.gender} onChange={(e) => setEditData({ ...editData, gender: e.target.value })} /> : value.gender}</td>
            <td>
              {editIndex === key ?
                <button className="save" onClick={handleSaveEdit} type='button'>Save</button> :
                <div>
                  <button className="edit" onClick={() => handleEdit(key)} type='button'> Edit</button>
                  <button className="delete" onClick={() => handleDelete(key)} type='button'>Delete</button>
                </div>
              }
            </td>
          </tr>
          )
        })}

      </tbody>
     </table>
     
    </div>
  );
}

export default App;


