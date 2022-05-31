import Dragon from "./Dragon";
import { useSelector, useDispatch } from "react-redux";
import { SORT_DRAGONS } from "../../contants/actions";
import styled from "styled-components";

const DivTitle = styled.div`
  padding: 1rem;
  background-color: #333333;
  color: white;
`;

export default function DragonList() {
  const { dragons, count } = useSelector((state) => state);

  const dispatch = useDispatch();

  const changeOrder = () => {
    dispatch({ type: SORT_DRAGONS, dragons });
  };

  return (
    <>
      <DivTitle>
        <h1>Dragon List, Number of dragon : {count}</h1>
      </DivTitle>

      {dragons &&
        dragons.map((dragon, index) => {
          return <Dragon key={index} idDragon={index} dragon={dragon} />;
        })}
      <button onClick={changeOrder}>Changer l'ordre</button>
    </>
  );
}
