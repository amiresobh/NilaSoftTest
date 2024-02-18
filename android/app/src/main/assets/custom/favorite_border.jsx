import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function FavoriteBorderIcon(props) {
  return (
    <Svg
      width={props.size}
      height={props.size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1_32)">
        <Path
          d="M13.75 2.5A4.99 4.99 0 0010 4.242 4.99 4.99 0 006.25 2.5c-2.567 0-4.583 2.017-4.583 4.583 0 3.15 2.833 5.717 7.125 9.617L10 17.792l1.208-1.1c4.292-3.892 7.125-6.459 7.125-9.609 0-2.566-2.016-4.583-4.583-4.583zm-3.667 12.958l-.083.084-.083-.084C5.95 11.867 3.333 9.492 3.333 7.083c0-1.666 1.25-2.916 2.917-2.916 1.283 0 2.533.825 2.975 1.966h1.558c.434-1.141 1.684-1.966 2.967-1.966 1.667 0 2.917 1.25 2.917 2.916 0 2.409-2.617 4.784-6.584 8.375z"
          fill={props.color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_32">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default FavoriteBorderIcon
