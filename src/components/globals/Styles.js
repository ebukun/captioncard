import { css } from "styled-components";

export const setColor = {
  primaryColor: "#2200bd",
  mainWhite: "#fff",
  mainRed: "#FF0000",
  secondaryColor: "#f5f7fa",
  mainGrey: "#3C3B3D",
  mainBlue: "#EC87C0"
};

const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
