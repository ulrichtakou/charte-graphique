export * from './brand-foundation';
export * from './yaoundelogis-colors';
export * from './yaoundelogis-typography';
export * from './yaoundelogis-radius';

import { yaoundeLogisBrandToStyleObject } from './brand-foundation';
import { yaoundeLogisTypographyToStyleObject } from './yaoundelogis-typography';

export function yaoundeLogisTokensToStyleObject(): Record<string, string> {
  return {
    ...yaoundeLogisBrandToStyleObject(),
    ...yaoundeLogisTypographyToStyleObject(),
  };
}
