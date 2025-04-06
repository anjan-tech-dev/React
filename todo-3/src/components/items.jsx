import Item from "./item.jsx"
function Items({list,handleOnDelete}){
  return  <>
  {list.map((item,index) =><Item key={index} handleOnDelete={handleOnDelete} item={item}></Item>)}
  </>
}
export default Items;