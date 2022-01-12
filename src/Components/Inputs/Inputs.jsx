import styles from  './Inputs.module.css';

const Inputs = ({label, ...rest}) => {
    return(
<div className={styles.inputs}> 
    <label>{label}</label>
    <input {...rest} /> 
</div>
    )
}

export default Inputs;