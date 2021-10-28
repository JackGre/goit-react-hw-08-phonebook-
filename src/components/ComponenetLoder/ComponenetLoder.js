import React from "react";
import Loader from 'react-loader-spinner';
import { FallbackContainer } from './ComponenetLoder.styles';


export default function ComponenetLoder() {
    return (
        <FallbackContainer>
            <Loader type="ThreeDots" color="#FF4500" height={50} width={50} />
        </FallbackContainer>
    );
}
