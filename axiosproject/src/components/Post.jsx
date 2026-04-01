import { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import { Form } from "./Form";
import '../App.css'
export const Post = () => {
    const [data, setData] = useState([]);
    const [updatedData, setUpdatedData] = useState({});
    const getPostData = async () => {
        const res = await getPost();
        setData(res.data);
        console.log(res.data);
    }
    useEffect(()=> {
        getPostData();
    }, [])
    const handleDeletePost = async (id) => {
        try {
            //axios delete returned promise
            const resp = await deletePost(id);
            if(resp.status === 200) {

                const newUpdatedPosts = data.filter((currPost) => {
                    return (currPost.id != id);
                });
                setData(newUpdatedPosts);
            } 
        } catch(err) {
            console.log(`Error Occurred while trying to delete post: `, err.message)
        }
    }
    const handleEditData = (currEle) => setUpdatedData(currEle);

    return (
        <>
            <section className="section-form">
                <Form data={data} setData={setData} updatedData={updatedData} setUpdatedData={setUpdatedData}/>
            </section>
            <section className="section-post">
                {
                    <ol>
                        {   
                            data.map((currEle) => {
                                const {id, title, body} = currEle;
                                return (
                                    <li key={id}>
                                        <p>{id}</p>
                                        <p>Title: {title}</p>
                                        <p>Body: {body}</p>
                                        <div className="btn-group">
                                            <button onClick={()=> handleEditData(currEle)}>Edit</button>
                                            <button className="btn-delete" onClick={()=> handleDeletePost(id)}>Delete</button>
                                        </div>
                                        {/* <button>Edit</button>
                                        <button className="btn-delete">Delete</button> */}
                                    </li>
                                )
                            })
                        }
                    </ol>
                }
            </section>
        </>
    )
};