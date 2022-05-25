import { useEffect, useState } from "react";
import { dbService } from "fbase";
import Nweet from "components/Nweets";

const Home = ({userObj}) => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);
    
    const getNweets = async() => {
        const dbNweets = await dbService.collection("nweets").get();
        dbNweets.forEach((document) =>{
            const nweetObject = {...document.data(), id: document.id}
            console.log(nweetObject);
            
            setNweets((prev) => [nweetObject, ...prev])
        });
        console.log(document);
    };

    useEffect(() => {
        dbService.collection("nweets").onSnapshot((snapshot) => {
          const newArray = snapshot.docs.map((document) => ({
            id: document.id,
            ...document.data()
          }))
          setNweets(newArray)
        })
      }, [])
    
    const onSubmit = async (event) =>{
        event.preventDefault();

        await dbService.collection("nweets").add({
            text     : nweet,
            createAt : Date.now(),
            createId : userObj.uid,
        });
        setNweet("");
    };

    const onChange = (event) => { 
        event.preventDefault();
        const {
            target : {value},
        } = event;
        setNweet(value);
    };
    return(
        <>
        <form onSubmit={onSubmit}>
            <input
                value = {nweet}
                onChange = {onChange}
                type = "text"
                placeholder = "What's on your mind?"
                maxLength = {120}></input>
            <input type="submit" value="Nweet"></input>
        </form>
        <div>
            {nweets.map((nweet) => (
                <Nweet 
                    key={nweet.id} 
                    nweetObj={nweet} 
                    isOwner={nweet.createId == userObj.uid}></Nweet>
            ))}
        </div>
            
        </>
    );
};

export default Home;