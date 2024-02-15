import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function SearchIcon(props) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1_11)">
        <Path
          d="M16.792 15.167h-.856l-.303-.293a7.01 7.01 0 001.7-4.582 7.041 7.041 0 10-7.041 7.041 7.01 7.01 0 004.582-1.7l.293.303v.856l5.416 5.405 1.615-1.614-5.406-5.416zm-6.5 0a4.868 4.868 0 01-4.875-4.875 4.868 4.868 0 014.875-4.875 4.868 4.868 0 014.875 4.875 4.868 4.868 0 01-4.875 4.875z"
          fill="silver"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_11">
          <Path fill="#fff" d="M0 0H26V26H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SearchIcon
