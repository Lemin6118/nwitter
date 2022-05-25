import { dbService } from "fbase"
import { useState } from "react"

const Nweet = ({ nweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);

  const onDeleteClick = async () => {
    const ok = window.confirm("삭제하시겠습니까?")
    console.log(ok)
    if(ok) {
      console.log(nweetObj.id);
      const data = await dbService.doc(`nweets/${nweetObj.id}`).delete()
      console.log(data);
    }
  }

  const toggleEditing = () => setEditing((prev) => !prev);
  
  const onChange = (event) =>{
      const {
          target: {value},
      } = event;
      setNewNweet(value);
  };

  const onSubmit = (event) =>{
      event.preventDefault();
      console.log(nweetObj.id,newNweet);
      dbService.doc(`nweets/${nweetObj.id}`).update({ text:newNweet});
      setEditing(false);
  };

  return(
    <div>
      {editing ? (
          <>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={newNweet} required></input>
                <input type="submit" value="수정완료"></input>
            </form>
            <button onClick={toggleEditing}>취소</button>
          </>
      ):(
          <>
            <h4>{nweetObj.text}</h4>
            { isOwner && (
              <>
                <button onClick={onDeleteClick}>삭제</button>
                <button onClick={toggleEditing}>수정</button>
              </>
           )}
        </>
      )}
    </div>
  );
};

export default Nweet