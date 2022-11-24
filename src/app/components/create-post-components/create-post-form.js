import React from "react";
import "./style.css";
import {MenuItem, Select, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RaisedButton from "material-ui/RaisedButton";
import Container from "@mui/material/Container";
import Section from "../../model/section";

const CreatePostForm = ({
  post,
  sections,
  onSubmit,
  onChange,
  uploadButton,
  uploadedContent,
}) => {
  return (
      <div className="createPostBox">
        <Typography variant="h3" align="center" color={"blue"}
                    gutterBottom>Create a post
        </Typography>
        <Box
            className={"parentBox"}
            sx={{
              width: "600px",
              margin: "auto",
            }}>

          <Box className={"centerBox"}
          >
            <TextField
                name="author"
                className="post"
                placeholder={"author"}
                value={post.author}
                onChange={onChange}
            />
          </Box>
          <Box className={"centerBox"}>
            <TextField
                name="title"
                className="post"
                placeholder={"title"}
                value={post.title}
                onChange={onChange}
            />
          </Box>
          <Box className={"selectBox"}>
            <Select
                sx={{
                  width: "70%"
                }}
                name="section"
                labelId="demo-select-small"
                id="demo-simple-select"
                value={post.section}
                onChange={onChange}
            >
              {sections.map((section: Section) => (
                  <MenuItem value={section.title}>{section.title}</MenuItem>
              ))}
            </Select>
          </Box>
          <Box className={"centerBox"}>
            <TextField
                rows={"5"}
                name="description"
                aria-multiline={true}
                className="post"
                multiline
                placeholder={"Type here..."}
                floatingLabelText="author"
                value={post.description}
                onChange={onChange}
            />
          </Box>
          <Container>
            <RaisedButton
                onClick={onSubmit}
                className="createPostButton"
                primary={true}
                type="submit"
                label="submit"

            />
            {uploadButton}
          </Container>
          {uploadedContent}
        </Box>
      </div>

  );
};

export default CreatePostForm;
