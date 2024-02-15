import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function DeleteOutlineIcon(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1_92)">
        <Path
          d="M7.5 23.75c0 1.375 1.125 2.5 2.5 2.5h10c1.375 0 2.5-1.125 2.5-2.5v-15h-15v15zm2.5-12.5h10v12.5H10v-12.5zM19.375 5l-1.25-1.25h-6.25L10.625 5H6.25v2.5h17.5V5h-4.375z"
          fill="#F68CB5"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_92">
          <Path fill="#fff" d="M0 0H30V30H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default DeleteOutlineIcon
