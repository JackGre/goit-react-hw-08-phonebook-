import React from "react";
import { StyledContainer, FallbackContainer } from "./Conteiner.styles";
import { useSelector } from "react-redux";
import { getLoader } from "../../redux/contacts/contacts-selector";
import authSelectors from "../../redux/auth/auth-selector";
import Loader from "react-loader-spinner";

export default function Conteiner({ children }) {
    const state = useSelector((state) => state)
    const isContactLoading = getLoader(state);
    const isUserLoading = authSelectors.isUserLoading(state)
    const loader = isContactLoading || isUserLoading;
    return (
        <StyledContainer>
            {children}
            {loader && (
                <FallbackContainer>
                    <Loader type="Circles" color="#FF4500" height={80} width={80} />
                </FallbackContainer>
            )}
        </StyledContainer>
    );
}