import Svg, { Path } from "react-native-svg";

// The Mioo brand symbol — a Fibonacci "o": head Ø55, centre Ø21 (vazado), pingo Ø13.
// The transparent centre lets the background colour show through (works on any surface).
// Isolated in a single component so it can be swapped trivially (identity still in flux).
export function MiooSymbol({
  width = 40,
  color = "#FFFFFF",
}: {
  width?: number;
  color?: string;
}) {
  const height = (width * 160) / 110;
  return (
    <Svg width={width} height={height} viewBox="0 0 110 160" fill={color}>
      <Path
        fillRule="evenodd"
        d="M55 43A55 55 0 1 0 55 153A55 55 0 1 0 55 43ZM55 77A21 21 0 1 0 55 119A21 21 0 1 0 55 77ZM55 5A13 13 0 1 0 55 31A13 13 0 1 0 55 5Z"
      />
    </Svg>
  );
}
