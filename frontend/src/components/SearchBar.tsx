// src/components/SearchBar.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, InputGroup } from "react-bootstrap";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex">
      <InputGroup>
        <Form.Control
          type="text"
          name="q"
          id="q"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          aria-label="Search Products"
          aria-describedby="button-search"
        ></Form.Control>
        <Button type="submit" id="button-search" variant="outline-primary">
          <i className="fas fa-search"></i>
        </Button>
      </InputGroup>
    </Form>
  );
}
