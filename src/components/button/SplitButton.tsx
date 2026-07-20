import { useState } from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import type { SxProps, Theme } from '@mui/material/styles';
import { ChevronDown } from 'lucide-react';
import { primitiveColors } from '../../tokens/colors/primitives/primitive-colors';
import { controlDensityPairing } from '../../tokens/ui-sizes/ui-sizes-tokens';
import type { ComponentHeightToken } from '../../tokens/ui-sizes/ui-sizes-tokens';
import { Button } from './Button';

const pc = primitiveColors;

export type SplitButtonOption = {
  label: string;
  onClick: () => void;
};

export type SplitButtonProps = {
  mainLabel: string;
  onMainClick: () => void;
  options: SplitButtonOption[];
  density?: ComponentHeightToken;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'inherit';
  sx?: SxProps<Theme>;
  /** Appliqué aux deux boutons (principal + menu), ex. couleurs primitives via `color="inherit"`. */
  buttonSx?: SxProps<Theme>;
  menuTriggerAriaLabel?: string;
};

/**
 * Action principale + menu d’options (pattern “split”).
 */
export function SplitButton({
  mainLabel,
  onMainClick,
  options,
  density = 'md',
  variant = 'contained',
  color = 'primary',
  sx,
  buttonSx,
  menuTriggerAriaLabel = 'Ouvrir le menu',
}: SplitButtonProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const pair = controlDensityPairing[density];
  const iconPx =
    pair.body === 'sm' ? 16 : pair.body === 'base' ? 18 : 20;

  const groupVariant =
    variant === 'text' ? 'outlined' : variant === 'outlined' ? 'outlined' : 'contained';

  return (
    <>
      <ButtonGroup
        variant={groupVariant}
        sx={[
          {
            '& .MuiButton-root': { borderRadius: 0 },
            '& .MuiButtonGroup-grouped:not(:last-of-type)': {
              borderRightColor:
                variant === 'outlined' || variant === 'text'
                  ? pc.gray[300]
                  : 'rgba(255,255,255,0.35)',
            },
          },
          ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
        ]}
      >
        <Button
          variant={variant}
          color={color}
          density={density}
          onClick={onMainClick}
          {...(buttonSx ? { sx: buttonSx } : {})}
        >
          {mainLabel}
        </Button>
        <Button
          variant={variant}
          color={color}
          density={density}
          aria-label={menuTriggerAriaLabel}
          aria-expanded={open}
          aria-haspopup="true"
          onClick={(e) => setAnchorEl(e.currentTarget)}
          sx={[
            ...(buttonSx ? (Array.isArray(buttonSx) ? buttonSx : [buttonSx]) : []),
            {
              minWidth: 44,
              px: 1.25,
              borderLeft:
                variant === 'contained'
                  ? '1px solid rgba(255,255,255,0.35) !important'
                  : `1px solid ${pc.gray[300]}`,
            },
          ]}
        >
          <ChevronDown size={iconPx} strokeWidth={2.25} aria-hidden />
        </Button>
      </ButtonGroup>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {options.map((opt) => (
          <MenuItem
            key={opt.label}
            onClick={() => {
              opt.onClick();
              setAnchorEl(null);
            }}
          >
            {opt.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
