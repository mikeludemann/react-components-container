import { css } from "styled-components";

const breakpoints = {
	xxl: 1800,
	xl: 1200,
	l: 992,
	m: 768,
	s: 576,
	xs: 400,
}

const mediaqueries = Object.keys(breakpoints).reduce((result, index) => {

	result[index] = (...args) => css`
		@media (min-width: ${breakpoints[index] / 16}em) {
			${css(...args)}
		}
	`

  return result;
  
}, {})

export default mediaqueries;
