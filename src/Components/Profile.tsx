 import styles from '../styles/Components/Profile.module.css'
 
 export function Profile() {
     return (
         <div className={styles.profileContainer}>
             <img src="https://avatars.githubusercontent.com/u/52923100?s=460&u=89f02cf3eafbbbeeca6748be1b012b4e57c0a245&v=4" alt="user"/>
            <div>
                <strong>Lucas Xavier</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
         </div>
     )
 }