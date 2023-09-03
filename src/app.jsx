import React,{useState} from "react";
function App()
{
const [inpval,setVal]=useState('')
const [arr,setArr]=useState([])

function getValue(e)
{
    setVal(e.target.value)
}
function valueAdd(e)
{
    const obj={
        name:inpval
    }
    setArr([...arr,obj])
    setVal('')
}
 const clearData=()=>
{
    setArr([])
}
function delFunction(i)
{
      const updatearr=arr
      updatearr.splice(i,1)
      setArr([...updatearr])
      console.log(arr);
    //   setArr([...arr,obj])
}
const ShiftUp=(i)=>
{
if(i===0)
{
    alert("already at the top")
}
else
{
    var temp=arr[i];
    arr[i]=arr[i-1];
    arr[i-1]=temp;
    console.log(arr);
    setArr([...arr])

}
}
function ShiftDown(index)
{

    if(index === arr.length-1)
{
    alert("already at the bottom")
}

else
{
    var temp=arr[index];
    arr[index]=arr[index+1];
    arr[index+1]=temp;
    console.log(arr);
    setArr([...arr])

}

}
const [cheack , setCheack]= useState(1)
const [index , setIndex]= useState()

const updateData=(i)=>
{
    setVal(arr[i].name);
    setCheack(0)
    setIndex(i)
}
const updateVal=()=>{
var newArr=arr;
newArr[index].name = inpval;
setArr([...newArr])
setCheack(1)
}

const map=arr.map((obj,i)=>{
return<li key={i}>
    <span>{i}</span>
    <span>{obj.name}</span>
    <button onClick={()=>{updateData(i)}}>edit</button>
    <button onClick={()=>{delFunction(i)}}>delete</button>
    <button onClick={()=>{ShiftUp(i)}}>ShiftUp</button>
    <button onClick={()=>{ShiftDown(i)}}>ShiftDown</button>
</li>

})
// console.log(arr);
// 03005036628
// umer bajwa

return(
    <div className="main">
        <h1>TodoList</h1>
        <input type="Text" placeholder="enter the name" onChange={getValue} value={inpval} />
         {/* <button onClick={valueAdd}>Add</button> */}
        {cheack===0 &&(
        <button onClick={updateVal}>update</button>

        )}
        {cheack===1 &&(
        <button onClick={valueAdd}>Add</button>

        )}

        <button onClick={clearData}>Clear All</button>
        <ul>{map}</ul>
    </div>
)
}export default App






