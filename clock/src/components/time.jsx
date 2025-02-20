function Time (){
  let time=new Date();
  return <div><center>Date:{time.toLocaleDateString()} &nbsp;&nbsp;&nbsp; Time:{time.toLocaleTimeString()}</center></div>
 }
 export default Time;