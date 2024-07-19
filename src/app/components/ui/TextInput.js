import React from 'react'
import styles from './textInput.module.css'

const TextInput = () => {
  return (
    <div><input className={styles.inputEl}  type='text' placeholder='Email'/></div>
  )
}

export default TextInput