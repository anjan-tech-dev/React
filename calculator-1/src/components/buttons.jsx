import styles from "./buttons.module.css"
function ButtonsContainer()

{

  let buttons=['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=','9', '0','.'];
  return <div className={styles.buttonsContainer}> {buttons.map(item=>
    <button className={styles.btn}>{item}</button>)}
   </div>
  
 }
export default ButtonsContainer;