import React, { useState } from "react";
import { Row, Col, Button, FormControl } from "react-bootstrap";
import "./AddTodo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus} from "@fortawesome/free-solid-svg-icons";
function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState("");
  function saveToda(e) {
    if(value !== ""){
      setTodo([
        ...todo,
        {
          id: Math.random(),
          title: value,
          status: true,
        },
      ]);
    }
    
    setValue("");
  }
  function setVal(){
    if(value !== ""){
      setTodo([
        ...todo,
        {
          id: Math.random(),
          title: value,
          status: true,
        },
      ]);
    }
    setValue("");
  }
  return (
    <div>
      <Row>
        <Col className="add-todo">
          <FormControl onKeyPress={(e) => {if(e.code === "Enter"){
            setVal()
          }}}
            type="text"
            placeholder="typing..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button className="btn" type="button" onClick={(e) => saveToda(e.target.value)}>
            <FontAwesomeIcon icon={faCirclePlus} />
          </Button>
        </Col>
      </Row>
    </div>
  );
}
<i class="fa-solid "></i>;
export default AddTodo;
