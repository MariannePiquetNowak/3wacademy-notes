import { useDispatch } from "react-redux";
import { DELETE_DRAGON } from "../../contants/actions";
import styled from "styled-components";

const Title = styled.h2`
    color: #333333
`

export default function Dragon({dragon, idDragon}) {
    const dispatch = useDispatch();

    const deleteDragon = () => {
        dispatch({type: DELETE_DRAGON, idDragon});

    }

    return (
        <>
        {dragon &&
            (
                <>
                    <Title>{dragon}</Title>
                    <button onClick={deleteDragon}>Delete Dragon</button>
                </>
            )
        }
        </>

    )
}
