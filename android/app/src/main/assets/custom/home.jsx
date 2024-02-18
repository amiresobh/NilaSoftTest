import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function HomeIcon(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1_47)">
        <Path
          d="M12.5 25v-7.5h5V25h6.25V15h3.75L15 3.75 2.5 15h3.75v10h6.25z"
          fill={props.color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_47">
          <Path fill="#fff" d="M0 0H30V30H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default HomeIcon
