import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Category() {
  return (
    <List>
      <SLink to={"/cuisine/German"}>
        <FaPizzaSlice />
        <h4>German</h4>
      </SLink>
      <SLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisine/Korean"}>
        <GiChopsticks />
        <h4>Korean</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, beige, lightblue);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: black;
    font-size: 0.8rem;
  }

  svg {
    color: gray;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, pink, lightyellow);

    svg {
      color: gray;
    }
    h4 {
      color: black;
    }
  }
`;
export default Category;
