import Inputs from '../Inputs/Inputs';
import Button from '../Button/Button';
import useFormulario from '../../Hooks/useFormulario';

const UserForm = ({submit}) => {
    //const [usuarios,setUsuarios] = useState([])
    const [formulario, handleChange, reset] = useFormulario({
name:'',
lastname:'',
correo:''});
console.log(formulario)

const handleSubmit = (e) => {
e.preventDefault()
submit(formulario)
reset()
}

    return(
        <form onSubmit={handleSubmit}>
    <Inputs 
    label="Nombre"
    name="name"
     value={formulario.name}
    onChange={handleChange}
    placeholder='Nombre...'
    />
    <Inputs 
    label="Apellido"
    name="lastname"
     value={formulario.lastname}
    onChange={handleChange}
    placeholder='Apellido...'
    />
    <Inputs 
    label="Correo"
    name="correo"
     value={formulario.correo}
    onChange={handleChange}
    placeholder='Correo electrónico...'
    />
    <Button
    
    >Enviar</Button>
   </form>
    )
}

export default UserForm;