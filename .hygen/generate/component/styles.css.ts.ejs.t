---
to: "<%= have_style ? `${abs_path}/styles.css.ts` : null %>"
---
import { style } from '@vanilla-extract/css'
import { vars } from '@/styles/vars.css';

export const container = style({
  padding: `${vars.space[1]} ${vars.space[3]}`,
});