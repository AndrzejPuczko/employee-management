import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html {
	font-size: 62.5%;
	scroll-behavior: smooth;
}

body {
	font-family: 'Montserrat', sans-serif;
	font-size: 1.6rem;
}
a, button {
	font-family: "Montserrat", sans-serif;
}
`
