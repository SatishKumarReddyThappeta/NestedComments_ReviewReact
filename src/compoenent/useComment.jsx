const useComment = () => {
    function insertNode(comments, id, text) {
      return comments.map(comment =>
        comment.id === id
          ? { ...comment, replies: [{ id: Date.now(), text, replies: [] }, ...comment.replies] }
          : { ...comment, replies: insertNode(comment.replies, id, text) }
      );
    }

    function insertNodeInput(comments, text){
        return [{id:Date.now(), text, replies:[]}, ...comments]
    }

    function deleteNode(comments, id){
      return comments.map(comment =>
        comment.id === id
          ? null
          : { ...comment, replies: deleteNode(comment.replies, id) }
      ).filter(Boolean);
    }
  
    return { insertNode, insertNodeInput, deleteNode };
  };
  
  export default useComment;
  