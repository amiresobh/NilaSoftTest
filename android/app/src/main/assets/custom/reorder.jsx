import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function ReorderIcon(props) {
  return (
    <Svg
      width={28}
      height={30}
      viewBox="0 0 28 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1_55)">
        <Path
          d="M3.5 18.75h21v-2.5h-21v2.5zm0 5h21v-2.5h-21v2.5zm0-10h21v-2.5h-21v2.5zm0-7.5v2.5h21v-2.5h-21z"
          fill={props.color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_55">
          <Path fill="#fff" d="M0 0H28V30H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default ReorderIcon
