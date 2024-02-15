import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function PersonIcon(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1_58)">
        <Path
          d="M15 15c2.762 0 5-2.238 5-5 0-2.763-2.238-5-5-5s-5 2.237-5 5c0 2.762 2.238 5 5 5zm0 2.5c-3.338 0-10 1.675-10 5V25h20v-2.5c0-3.325-6.663-5-10-5z"
          fill={props.color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_58">
          <Path fill="#fff" d="M0 0H30V30H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default PersonIcon
