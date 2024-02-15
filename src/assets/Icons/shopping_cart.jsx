import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function ShoppingCartIcon(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1_50)">
        <Path
          d="M8.75 22.5A2.497 2.497 0 006.263 25c0 1.375 1.112 2.5 2.487 2.5s2.5-1.125 2.5-2.5-1.125-2.5-2.5-2.5zm-7.5-20V5h2.5l4.5 9.488-1.688 3.062c-.2.35-.312.762-.312 1.2 0 1.375 1.125 2.5 2.5 2.5h15v-2.5H9.275a.31.31 0 01-.313-.313l.038-.15 1.125-2.037h9.313c.937 0 1.762-.512 2.187-1.287L26.1 6.85A1.254 1.254 0 0025 5H6.512L5.338 2.5H1.25zm20 20a2.497 2.497 0 00-2.488 2.5c0 1.375 1.113 2.5 2.488 2.5s2.5-1.125 2.5-2.5-1.125-2.5-2.5-2.5z"
          fill={props.color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_50">
          <Path fill="#fff" d="M0 0H30V30H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ShoppingCartIcon
