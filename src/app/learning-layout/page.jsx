import styles from './layout.module.css'

const page = () => {
  return (
    <div>
        <header className={styles.container}>
            <div>
                logo
            </div>
            <ul className={styles.links}>
                <li>about</li>
                <li> contact</li>
                <li>direction</li>
                <li>goal</li>
            </ul>
        </header>
      <div>
      <div>
          block1
        </div>
        <div>
          block2 Lorem, ipsum dolor.
        </div>
      </div>
       
    </div>
  )
}

export default page
///learning-layout