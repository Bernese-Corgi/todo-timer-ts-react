import { theme } from './../styles/theme';

const { colors, fonts } = theme;

export const handleHoverColorType = (shape: string | undefined) => {
  switch (shape) {
    case 'pen':
      return colors.green;
    case 'eraser':
      return colors.red;
    case 'checked-circle':
      return colors.blue;
    case 'checked-star':
      return colors.yellow;
    case 'checked-like':
      return colors.red;
    default:
      return;
  }
};

export const handleColorType = (color: string | undefined) => {
  switch (color) {
    case 'primary':
      return colors.primary.base;
    case 'primary-dark':
      return colors.primary.dark;
    case 'primary-light':
      return colors.primary.light;
    case 'secondary':
      return colors.secondary.base;
    case 'secondary-dark':
      return colors.secondary.dark;
    case 'secondary-light':
      return colors.secondary.light;
    case 'gray':
      return colors.gray.base;
    case 'gray-dark':
      return colors.gray.dark;
    case 'gray-light':
      return colors.gray.light;
    case 'red':
      return colors.red;
    case 'orange':
      return colors.orange;
    case 'yellow':
      return colors.yellow;
    case 'green':
      return colors.green;
    case 'blue':
      return colors.blue;
    case 'pink':
      return colors.pink;
    case 'purple':
      return colors.purple;
    case 'white':
      return colors.white;
    default:
      return colors.gray.dark;
  }
};

export const handleIconSize = (size: string | undefined) => {
  switch (size) {
    case 'sm':
      return fonts.size.sm;
    case 'base':
      return fonts.size.base;
    case 'lg':
      return fonts.size.lg;
    case 'xl':
      return fonts.size.xl;
    default:
      return fonts.size.base;
  }
};
