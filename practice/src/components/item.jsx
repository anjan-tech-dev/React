import css from "./item.module.css"
function Item({fooditem}){
  // let items=['dal','kulche'];
  return <>
    <li className={` ${css["list-item"]} `}>{fooditem}</li>
  </>
}
export default Item;