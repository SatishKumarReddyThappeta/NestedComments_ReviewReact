import { useState } from "react";
import Comment from "./compoenent/Comment";
import initialData from "./Data/Data";
import InputText from "./compoenent/InputText";
import useComment from "./compoenent/useComment";

const App = () => {
  const [initialComments, setInitialComments] = useState(initialData);
  const { insertNode, insertNodeInput, deleteNode } = useComment();
  console.log(initialComments);

  const handleInputext = (text)=>{
    console.log(text);
    const newComments = insertNodeInput(initialComments, text)
    setInitialComments(newComments);
  }

  const handleAddNewComment = (text, id)=>{
    const newData = insertNode(initialComments, id, text);
    setInitialComments(newData);
    console.log(text, id)
  }

  const handleDeleteComment = (id)=>{
    const newData = deleteNode(initialComments, id);
    setInitialComments(newData);
  }

console.log(initialComments);
  return (
    <div>
      <InputText handleInputext={handleInputext}/>
      <div>
        {initialComments?.map((comment) => (
          <Comment key={comment.id} initialComments={comment} handleAddNewComment={handleAddNewComment} handleDeleteComment={handleDeleteComment} />
        ))}
    </div>
    </div>
  )
}

export default App