import { useState } from "react"

const Comment = ({initialComments, handleAddNewComment, handleDeleteComment}) => {
// console.log(initialComments)

  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const addComment = (e)=>{
    setInputValue(e.target.value.trim());
  }
  
  const handleAdd =()=>{
    if(inputValue.length !=0){
      handleAddNewComment(inputValue, initialComments.id);
      setShowInput(false)
      setInputValue('');
    }
  }

  const handledDelete =()=>{
    handleDeleteComment(initialComments.id);
  }

  return (
      <div style={{marginLeft:25}}>
          <div className="container">
              <div className="commentText">{initialComments.text}</div>
              {
                  !showInput ? (<div className="buttons">
                  <button onClick={()=>setShowInput(true)}>Reply</button>
                  <button onClick={handledDelete}>Delete</button>
              </div>) : (
                  <div className="buttons">
                  <input type="text" value={inputValue} onChange={addComment} autoFocus />
                  <button onClick={handleAdd}>Add</button>
                  <button onClick={()=>setShowInput(false)}>Cancel</button>
              </div>
              )
              }
          </div>
          {
              initialComments?.replies?.map((ele)=>{
                  return <Comment key={ele.id} initialComments={ele} handleAddNewComment={handleAddNewComment} handleDeleteComment={handleDeleteComment}/>
              })
          }
      </div>
      
    )
}

export default Comment