import styles from './TextInput.module.css'

const TextInput = ({props, onChange}) =>{
  return (
    <input className={styles.input} onChange={onChange}  {...props}></input>
  )
}

export default TextInput;