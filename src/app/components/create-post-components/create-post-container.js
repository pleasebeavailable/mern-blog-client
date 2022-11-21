import React from "react";
import {useDispatch, useSelector} from "react-redux";
import CreatePostForm from "./create-post-form";
import {createPost, handleChange} from "../../redux/actions/post";
import {useFilePicker} from "use-file-picker";
import {RaisedButton} from "material-ui";
import Box from "@mui/material/Box";

export default function CreatePostContainer() {
  const dispatch = useDispatch();
  const post = useSelector(state => state.post.newPost);
  const [openFileSelector, {filesContent, loading}] = useFilePicker({
    readAs: 'DataURL',
    accept: 'image/*',
  });
  const handleFormChange = (event) => {
    let newPost = {...post}
    const field = event.target.name;
    newPost[field] = event.target.value;
    dispatch(handleChange(newPost));
  }

  function chooseFile() {
    openFileSelector();
    let newPost = {...post}
    newPost["imageContent"] = JSON.stringify(filesContent[0].content);
    dispatch(handleChange(newPost));
  }

  const UploadButton = () => {
    return (<RaisedButton style={{marginLeft: "10px"}}
                          onClick={chooseFile}>
      Select files
    </RaisedButton>)
  };

  const UploadedContent = () => {
    return (filesContent.map((file, index) => (<Box>
      <img alt={file.name} src={file.content} width={"100px"} height={"100px"}/>
      <br/>
    </Box>)))
  };

  const submitPost = () => {
    dispatch(createPost(post));

  }
  return (<div>
    <CreatePostForm
        onSubmit={submitPost}
        onChange={handleFormChange}
        uploadButton=<UploadButton/>
    uploadedContent=<UploadedContent/>
    post={post}
    />
  </div>);
}


