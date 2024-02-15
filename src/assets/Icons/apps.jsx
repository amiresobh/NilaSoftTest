import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function AppsIcon(props) {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1_6)">
        <Path
          d="M4.667 9.333h4.666V4.667H4.667v4.666zm7 14h4.666v-4.666h-4.666v4.666zm-7 0h4.666v-4.666H4.667v4.666zm0-7h4.666v-4.666H4.667v4.666zm7 0h4.666v-4.666h-4.666v4.666zm7-11.666v4.666h4.666V4.667h-4.666zm-7 4.666h4.666V4.667h-4.666v4.666zm7 7h4.666v-4.666h-4.666v4.666zm0 7h4.666v-4.666h-4.666v4.666z"
          fill="#E96E6E"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_6">
          <Path fill="#fff" d="M0 0H28V28H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default AppsIcon
