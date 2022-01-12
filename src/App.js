import { useState } from 'react';
import CardContainer from './Components/CardContainer/CardContainer';
import CardForm from './Components/CardForm/CardForm';
import UserForm from './Components/UserForm/UserForm';

function App() {
const [usuarios,setUsuarios] = useState([])

  const submit = usuario => {
  setUsuarios([
    ...usuarios,
    usuario,
])
  }

  return (
    <div style={{marginTop:'15%'}}>
    <h3 style={{marginTop:'15%', textAlign: 'center'}}>Complete sus datos</h3>
    <CardContainer>
    <CardForm>
    <div style={{padding: 20}}>
    <UserForm submit={submit}/>
   </div>
   </CardForm>
   <CardForm>
     <ul>
       {usuarios.map(x => 
       <li key={x.correo}>{`${x.name} ${x.lastname}: ${x.correo}`}</li>)
       }
     </ul>
   </CardForm>
   </CardContainer>
   </div>
  );
}

export default App;
