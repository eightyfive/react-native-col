import { ViewStyle } from 'react-native';

type Dial = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export default function getStyle(
  flexDirection: 'row' | 'column',
  dial: Dial
): ViewStyle {
  // Main-axis
  const justifyContent = flexDirection === 'row' ? dialX(dial) : dialY(dial);

  // Cross-axis
  const alignItems = flexDirection === 'row' ? dialY(dial) : dialX(dial);

  return {
    flexDirection,
    justifyContent,
    alignItems,
  };
}

function dialX(dial: Dial) {
  if (dial % 3 === 0) return 'flex-end';

  if (dial % 3 === 2) return 'center';

  return 'flex-start';
}

function dialY(dial: Dial) {
  if (dial > 6) return 'flex-end';

  if (dial > 3) return 'center';

  return 'flex-start';
}
