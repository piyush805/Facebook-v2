import { useCollection } from "react-firebase-hooks/firestore";
import Post from "./Post";
import { db } from "../firebase";

function Posts({ posts }) {
    const [realTimePosts] = useCollection(
        db.collection("posts").orderBy("timestamp", "desc")
    );
    return (
        <div>
            {
            realTimePosts ?
                realTimePosts?.docs.map((post) => (
                    <Post
                        key={post.id}
                        name={post.data().name}
                        message={post.data().message}
                        email={post.data().email}
                        timestamp={post.data().timestamp}
                        image={post.data().image}
                        postImage={post.data().postImage}
                    />
                )) : (
                    posts.map((post) => (
                        <Post
                            key={post.id}
                            name={post.name}
                            message={post.message}
                            email={post.email}
                            timestamp={post.timestamp}
                            image={post.image}
                            postImage={post.postImage}
                        />
                    ))
                )
            }
        </div>
    )
}

export default Posts