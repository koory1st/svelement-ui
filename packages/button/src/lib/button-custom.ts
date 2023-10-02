import { TinyColor } from '@ctrl/tinycolor';
import a2s from '@svelement-ui/util-array-2-style-string';

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

  let styleList;

  if (props.plain) {
    const colorWhite = 'var(--svel-color-white)';
    styleList = [
      ['--svel-bg-color', props.dark ? darken(color, 90) : color.tint(90).toString()],
      ['--svel-text-color', props.color],
      ['--svel-border-color', props.dark ? darken(color, 50) : color.tint(50).toString()],
      ['--svel-hover-text-color', colorWhite],
      ['--svel-hover-bg-color', props.color],
      ['--svel-hover-border-color', props.color],
      ['--svel-active-bg-color', activeBgColor],
      ['--svel-active-text-color', colorWhite],
      ['--svel-active-border-color', activeBgColor],
    ];

    if (props.disabled) {
      styleList.push([
        '--svel-disabled-bg-color',
        props.dark ? darken(color, 90) : color.tint(90).toString(),
      ]);
      styleList.push([
        '--svel-disabled-text-color',
        props.dark ? darken(color, 50) : color.tint(50).toString(),
      ]);
      styleList.push([
        '--svel-disabled-border-color',
        props.dark ? darken(color, 80) : color.tint(80).toString(),
      ]);
    }

    return a2s(styleList);
  }

  const hoverBgColor = props.dark ? darken(color, 30) : color.tint(30).toString();
  const textColor = color.isDark() ? `var('--svel-color-white'})` : `var('--svel-color-black')`;
  styleList = [
    ['--svel-bg-color', props.color],
    ['--svel-text-color', textColor],
    ['--svel-border-color', props.color],
    ['--svel-hover-text-color', textColor],
    ['--svel-hover-bg-color', hoverBgColor],
    ['--svel-hover-border-color', hoverBgColor],
    ['--svel-active-bg-color', activeBgColor],
    ['--svel-active-border-color', activeBgColor],
    ['--svel-disabled-bg-color', activeBgColor],
  ];

  if (props.disabled) {
    const disabledButtonColor = props.dark ? darken(color, 50) : color.tint(50).toString();
    styleList.push(['--svel-disabled-bg-color', disabledButtonColor]);
    styleList.push([
      '--svel-disabled-text-color',
      props.dark ? 'rgba(255, 255, 255, 0.5)' : `--svel-var(color-white)`,
    ]);
    styleList.push(['--svel-disabled-border-color', disabledButtonColor]);
  }
  console.log('🚀 ~ file: button-custom.ts:65 ~ styleList:', styleList);

  return a2s(styleList);
}
