import { useEffect, useState } from "react"
import { postData } from "../api/PostApi";

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
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const res = await postData(formData);
        console.log(res);
        if(res.status === 201){
            setData((prevData)=> [...prevData, res.data]);
            setFormData({body: '', title: ''})
        } 
        //setData([...data, res.data])
    }

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
            <button type="submit">
                Add
            </button>
       </form>
    )
}