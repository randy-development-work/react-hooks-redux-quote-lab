import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { addQuote } from "./quotesSlice";
import { useDispatch } from "react-redux";

function QuoteForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    // set up a controlled form with internal state
    // look at the form to determine what keys need to go here
    content: "",
    author: "",
  });

  function handleChange(event) {
    // Handle Updating Component State
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });

    // if state could've been one item:
    //  const [content, setContent] = useState("")
    // then handleContentChange function could've been:
    //
    // function handleContentChange(event) {
    //   setContent(event.target.value);
    // }
  }

  function handleSubmit(event) {
    // Handle Form Submit event default
    event.preventDefault();
    // Create quote object from state
    const newQuote = {
      id: uuid(),
      content: formData.content,
      author: formData.author,
    };
    // Add quote to store
    // Pass quote object to action creator
    dispatch(addQuote(newQuote));
    // Reset form state
    setFormData({
      content: "",
      author: "",
    });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <form className="form-horizontal" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="content" className="col-md-4 control-label">
                    Quote
                  </label>
                  <div className="col-md-5">
                    <textarea
                      onChange={handleChange}
                      className="form-control"
                      id="content"
                      name="content"
                      value={formData.content}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="author" className="col-md-4 control-label">
                    Author
                  </label>
                  <div className="col-md-5">
                    <input
                      onChange={handleChange}
                      className="form-control"
                      type="text"
                      id="author"
                      name="author"
                      value={formData.author}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-6 col-md-offset-4">
                    <button type="submit" className="btn btn-default">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
