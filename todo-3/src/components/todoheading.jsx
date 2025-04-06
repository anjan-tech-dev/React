import { useState } from "react";
import styles from "./todoheading.module.css";
import { BiMessageAdd } from "react-icons/bi";
function Heading({onNewItemAdd}) 


{

  let [name,setname]=useState("")
  let [dueDate,setdueDate]=useState("")
  function handleOnChangeName(event){
     setname(event.target.value);

  }
  function handleOnChangeDueDate(event){
     setdueDate(event.target.value);
  }

  function afterOnClick(event){
    event.preventDefault();
    onNewItemAdd(name,dueDate);
    setname("");
    setdueDate("");
  }

  return (
    <form  action="" className="row row2" onSubmit={afterOnClick}>
      <div className="col-6">
        <input type="text" placeholder="Enter todo here" onChange={handleOnChangeName}
        value={name}/>
      </div>
      <div className="col-3">
        <input type="date"
        onChange={handleOnChangeDueDate}
        value={dueDate} />
      </div>
      <div className="col-2">
        <button className="btn btn-success btn2 " >
        <BiMessageAdd />

        </button>
      </div>
    </form>
  );
}
export default Heading;
