import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="what are you looking for?"
        />
        <FaSearch />
      </div>
    </FormStyle>
  );
};

export default Search;

const FormStyle = styled.form`
  margin: 0rem 0rem;

  div {
    position: relative;
    width: 100%;
  }
  input {
    width: 100%;
    border: none;
    background: linear-gradient(35deg, bisque, beige);
    font-size: 1.5rem;
    color: gray;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: gray;
  }
`;
