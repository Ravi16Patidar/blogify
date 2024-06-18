import React, { Fragment, useState } from "react";
import "./BlogCreation.css";

const BlogCreation = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selected, setSelected] = useState("");
  const [blogData,setBlogData]=useState({
    "title":'',
    "content":'',
    "image":'',
    "category":''
  })

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    console.log("Selected file:", file);
  };
  let options = ["one", "two", "three"];
  const handleChange = (event) => {
      setSelected(event.target.value);
    };
    const handleTitleInputChange=(e)=>{
        const {name,value}=e.target;
        setBlogData({...blogData,[name]:value})
    }
    const handleSubmit=()=>{
        console.log(blogData)
    }
  return (
    <Fragment>
        {/* title field */}
      <label htmlFor="title" className="blog-label">
        Title
      </label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Enter the title of your post"
        className="blog-input-field"
        onChange={handleTitleInputChange}
      />
      {/* content field */}
      <label htmlFor="content" className="blog-label">
        Content
      </label>

      <textarea
        name="content"
        id="content"
        cols="46"
        rows="8"
        className="blog-textarea-field"
        placeholder="Write your post content here"
      ></textarea>
      {/* file input */}
      <input
        type="file"
        id="file-input"
        className="file-input"
        onChange={handleFileChange}
      />
      <br />
      <label htmlFor="file-input" className="file-label">
        <span className="file-icon">📁</span> Choose image
      </label>
      {selectedFile && <p className="selected-file">{selectedFile.name}</p>}
      {/* drop down */}<br/>
      <div className="dropdown">
          <select value={selected} onChange={handleChange}>
            <option value="" disabled>Select an Category</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          {/* {selected && <p>You selected: {selected}</p>} */}
        </div>
        <button onClick={handleSubmit}>Submit</button>
    </Fragment>
  );
};
export default BlogCreation;
