import React, { useState } from 'react'
import "./TweetBox.css"
import { Avatar, Button } from "@material-ui/core"
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();
        db.collection("posts").add({
            displayName: "Dinis Mustafin",
            username: "tavsheng",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://i.mycdn.me/image?id=855856921377&ts=0000000000000102e1&plc=WEB&tkn=*AaCNJvXFV4rRZnp85Z8bUkoaJTE&fn=sqr_288"
        });
        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src = "https://i.mycdn.me/image?id=855856921377&ts=0000000000000102e1&plc=WEB&tkn=*AaCNJvXFV4rRZnp85Z8bUkoaJTE&fn=sqr_288"/>
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text" />
                </div>
                <input
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text" />
                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton"
                >Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
