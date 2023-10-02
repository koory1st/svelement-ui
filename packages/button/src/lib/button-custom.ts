import { TinyColor } from '@ctrl/tinycolor';
import a2st from '@svelement-ui/util-array-2-style-string';

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
  const activeBgColor = !props.dark ? color.tint(20).toString() : darken(color, 20);
  let styleList;

  if (props.plain) {
    const colorWhite = 'var(--svel-color-white)';
    styleList = [
      ['--svel-button-bg-color', !props.dark ? darken(color, 90) : color.tint(90).toString()],
      ['--svel-button-text-color', props.color],
      ['--svel-button-border-color', !props.dark ? darken(color, 50) : color.tint(50).toString()],
      ['--svel-button-hover-text-color', colorWhite],
      ['--svel-button-hover-bg-color', props.color],
      ['--svel-button-hover-border-color', props.color],
      ['--svel-button-active-bg-color', activeBgColor],
      ['--svel-button-active-text-color', colorWhite],
      ['--svel-button-active-border-color', activeBgColor],
    ];

    if (props.disabled) {
      styleList.push([
        '--svel-button-disabled-bg-color',
        !props.dark ? darken(color, 90) : color.tint(90).toString(),
      ]);
      styleList.push([
        '--svel-button-disabled-text-color',
        !props.dark ? darken(color, 50) : color.tint(50).toString(),
      ]);
      styleList.push([
        '--svel-button-disabled-border-color',
        !props.dark ? darken(color, 80) : color.tint(80).toString(),
      ]);
    }

    return a2st(styleList);
  }

  const hoverBgColor = !props.dark ? darken(color, 30) : color.tint(30).toString();
  const textColor = color.isDark() ? `var(--svel-color-white)` : `var(--svel-color-black)`;
  styleList = [
    ['--svel-button-bg-color', props.color],
    ['--svel-button-text-color', textColor],
    ['--svel-button-border-color', props.color],
    ['--svel-button-hover-text-color', textColor],
    ['--svel-button-hover-bg-color', hoverBgColor],
    ['--svel-button-hover-border-color', hoverBgColor],
    ['--svel-button-active-bg-color', activeBgColor],
    ['--svel-button-active-border-color', activeBgColor],
    ['--svel-button-disabled-bg-color', activeBgColor],
  ];

  if (props.disabled) {
    const disabledButtonColor = !props.dark ? darken(color, 50) : color.tint(50).toString();
    styleList.push(['--svel-button-disabled-bg-color', disabledButtonColor]);
    styleList.push([
      '--svel-button-disabled-text-color',
      !props.dark ? 'rgba(255, 255, 255, 0.5)' : `var(--svel-color-white)`,
    ]);
    styleList.push(['--svel-button-disabled-border-color', disabledButtonColor]);
  }

  return a2st(styleList);
}
