import Item from "./item.jsx"
function Items({list}){
  return  <>
  {list.map(item =><Item item={item}></Item>)}
  </>
}
export default Items;