import * as React from "react"
import Svg, { Path } from "react-native-svg"

function VectorIcon(props) {
  return (
    <Svg
      width={props.size / 2}
      height={props.size}
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.67 1.87L9.9.1 0 10l9.9 9.9 1.77-1.77L3.54 10l8.13-8.13z"
        fill={props.color}
      />
    </Svg>
  )
}

export default VectorIcon
