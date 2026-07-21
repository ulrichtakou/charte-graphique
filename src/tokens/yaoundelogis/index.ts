export * from './brand-foundation';
export * from './yaoundelogis-colors';
export * from './yaoundelogis-typography';
export * from './yaoundelogis-radius';
export * from './surface-tokens';

import { yaoundeLogisBrandToStyleObject } from './brand-foundation';
import { yaoundeLogisTypographyToStyleObject } from './yaoundelogis-typography';
import {
  yaoundeLogisSurfacesToStyleObject,
  type YaoundeLogisThemeMode,
} from './surface-tokens';

export function yaoundeLogisTokensToStyleObject(
  mode: YaoundeLogisThemeMode = 'light',
): Record<string, string> {
  return {
    ...yaoundeLogisBrandToStyleObject(),
    ...yaoundeLogisTypographyToStyleObject(),
    ...yaoundeLogisSurfacesToStyleObject(mode),
  };
}
