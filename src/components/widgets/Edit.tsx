import styled from "styled-components";
import {Outlet} from "react-router-dom";

export function Edit() {
    return (<Main2>
        <h1>Edit Mode... with following Outlet child</h1>
        <Outlet />
    </Main2>);
}

const Main2 = styled.main`
  margin: 10px;
`