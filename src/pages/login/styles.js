import styled from "styled-components";
import { themeColor, lightColor, greyColor } from "../../styles/theme";

const Container = styled.div`
    padding: 70px 0;
    text-align: center;
`;

const MainFlex = styled.div`
    display: flex;
    max-width: 1600px;
    margin: 5rem auto;
    background-color: ${themeColor};
`;

const InputArea = styled.div`
    min-width: 368px;
    padding: 70px 0;
    text-align: center;
    border-radius: 5px;
`;

const DisplayArea = styled.div`
    flex-grow: 1;
    padding: 1rem;
    background-color: ${greyColor};
`;

const FormArea = styled.form`
    color: ${lightColor};
`;

const FormItem = styled.div`
    margin-bottom: 1rem;
`;

const FormLabel = styled.label`
    width: 100px;
`;

const FormInput = styled.input``;

export {
    Container,
    MainFlex,
    InputArea,
    DisplayArea,
    FormArea,
    FormItem,
    FormLabel,
    FormInput,
};
