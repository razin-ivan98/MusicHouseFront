import styled from "styled-components"
import { Colors, ColorVariant, Size } from "../consts"

interface Props {
    variant: ColorVariant
    size: Size
}

const spinnerSizes: Record<Size, {size: string, weight: string}> = {
    large: {size: "48px", weight: "10px"},
    medium: {size: "36px", weight: "8px"},
    small: {size: "24px", weight: "5px"}
}

export const Spinner = styled.div<Props>`

    &, &::after {
        border-radius: 50%;
        width: ${({size}) => spinnerSizes[size].size};
        height: ${({size}) => spinnerSizes[size].size};
    }
    position: relative;
    text-indent: -9999em;
    border-top: ${({size}) => spinnerSizes[size].weight} solid rgba(0,0,0, 0.0);
    border-right: ${({size}) => spinnerSizes[size].weight} solid rgba(0,0,0, 0.0);
    border-bottom: ${({size}) => spinnerSizes[size].weight} solid rgba(0,0,0, 0.0);
    border-left: ${({size}) => spinnerSizes[size].weight} solid ${({variant}) => Colors[variant]?.common || "white"};

    transform: translateZ(0);
    animation: load 1.1s infinite linear;

    @keyframes load {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

`
