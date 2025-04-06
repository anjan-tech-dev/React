import { MdDelete } from "react-icons/md";
function Item({item,handleOnDelete}) {
  return (
    <>
      <div className="row row2">
        <div className="col-6">{item.Name}</div>
        <div className="col-3">{item.Date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger btn2" onClick={()=>handleOnDelete(item.Name)}>
          <MdDelete/>
          </button>
        </div>
      </div>
    </>
  );
}
export default Item;









