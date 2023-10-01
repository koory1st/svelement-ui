import { TinyColor } from '@ctrl/tinycolor';

export function darken(color: TinyColor, amount = 20) {
  return color.mix('#141414', amount).toString();
}

export function getButtonStyle(props: {
  dark: boolean;
  disabled: boolean;
  plain: boolean;
  color: string | null;
}): string | null {
  if (!props.color) {
    return null;
  }

  const color = new TinyColor(props.color);
  const activeBgColor = props.dark ? color.tint(20).toString() : darken(color, 20);

  if (props.plain) {
    return '';
  }

  return '';
}
