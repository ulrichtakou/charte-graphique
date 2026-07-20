import { Chip, type ChipProps } from '@mui/material';

export type ClassificationChipProps = {
  label: string;
  color?: ChipProps['color'];
  size?: ChipProps['size'];
};

const classificationChipSx = {
  fontWeight: 600,
  '& .MuiChip-label': { px: 1 },
} as const;

export const ClassificationChip = ({
  label,
  color = 'default',
  size = 'small',
}: ClassificationChipProps) => (
  <Chip label={label} size={size} color={color} variant="outlined" sx={classificationChipSx} />
);
