import Item from "./item.jsx"
function Items({fooditems}){
  // let items=['dal','kulche'];
  return <>
    <ul className="list">{fooditems.map(item=><Item fooditem={item}></Item>)}</ul>
  </>
}
export default Items;