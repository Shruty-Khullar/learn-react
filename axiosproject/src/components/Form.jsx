import { useEffect, useState } from "react"
import { postData, putData } from "../api/PostApi";

export const Form = ({data, setData, updatedData, setUpdatedData}) => {
    const [formData, setFormData] = useState({
        title: "",
        body: ""
    });  
    // When you type in an input, React gives you an event object:
    //So for this input:
    // <input name="title" ... />
    // Typing inside it gives:
    // e.target = {
    // name: "title",
    // value: "Hello",
    // ...
    // }
    const updateFormData = (e) => {
       const name = e.target.name;
       const value = e.target.value;
       setFormData((prevData)=> {
            return {
                ...prevData,
                [name]: value
            }
       })
    }
    const addPostData = async () => {
        const res = await postData(formData);   
        console.log(res);
        if(res.status === 201){
            setData((prevData)=> [...prevData, res.data]);
            setFormData({body: '', title: ''})
             //setData([...data, res.data])
        } 
    }
    const updatePostData = async () => {
        try {
            const res = await putData(updatedData.id, formData)
            console.log(res)
            if(res.status === 200) {
                setData((prev) => {
                    return prev.map((currElem) => currElem.id === res.data.id ? res.data : currElem)
                })
            }
            setFormData({title: '', body: ''});
            setUpdatedData({});
        } catch(err) {  
            console.log(err);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        //It gives value of form button
        const action = e.nativeEvent.submitter.value;
        if(action === "Add") {
            addPostData()
        } else if(action==="Edit") {
            updatePostData();
        }  
    }
    
    let isUpdatedDataEmpty = Object.keys(updatedData).length === 0
    useEffect(()=> {
        updatedData && setFormData({
            title: updatedData.title || "",
            body: updatedData.body || ""
        })
    }, [updatedData])
    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="title"></label>
                {/* 👉 id = “who am I in the DOM”
                👉 name = “what data am I sending” */}
                <input
                    type="text"
                    autoComplete="off"
                    id="title"
                    name="title"
                    placeholder="Add Title"
                    value={formData.title}
                    onChange={updateFormData}
                />
            </div>
            <div>
                <label htmlFor="body"></label>
                <input
                    type="text"
                    autoComplete="false"
                    placeholder="Add Post"
                    id="body"
                    name="body"
                    value={formData.body}
                    onChange={updateFormData}
                />
            </div>
            <button type="submit" value={isUpdatedDataEmpty ? "Add" : "Edit"}>
                {isUpdatedDataEmpty ? "Add" : "Edit"}
            </button>
       </form>
    )
}