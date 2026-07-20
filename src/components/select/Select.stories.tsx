import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import { primitiveColors } from '../../tokens/colors/primitives/primitive-colors';
import { spacing } from '../../tokens/spacing/spacing-tokens';
import {
  componentHeightKeysInOrder,
  type ComponentHeightToken,
} from '../../tokens/ui-sizes/ui-sizes-tokens';
import { fontWeights, typeScale } from '../../tokens/typography/typography-tokens';
import { Select, SelectItem, type SelectFieldVariant } from './Select';

const pc = primitiveColors;

const SELECT_VARIANTS = ['outline', 'filled', 'soft'] as const satisfies readonly SelectFieldVariant[];

const VARIANT_LABEL: Record<SelectFieldVariant, string> = {
  outline: 'Outline',
  filled: 'Filled',
  soft: 'Soft',
};

const OPTIONS = (
  <>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
    <SelectItem value="kiwi">Kiwi</SelectItem>
  </>
);

const variantGridScrollWrapSx = {
  overflowX: 'auto' as const,
  maxWidth: '100%',
  pb: 0.5,
};

const variantGridSx = {
  display: 'grid',
  gridTemplateColumns: '88px repeat(3, minmax(0, 1fr))',
  gap: spacing[2],
  alignItems: 'start',
  minWidth: 560,
  maxWidth: 880,
} as const;

const variantColHeaderSx = {
  fontSize: typeScale.xs.fontSize,
  fontWeight: fontWeights.semibold,
  textTransform: 'capitalize' as const,
  color: pc.gray[600],
  pb: spacing[1],
};

const meta: Meta<typeof Select> = {
  title: 'Shared/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Dropdown field aligned with Input shells (outline / filled / soft, density). Use `SelectItem` for options. Pass `placeholder` for an empty-state label when `displayEmpty` is true.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['outline', 'filled', 'soft'],
    },
    density: {
      control: 'select',
      options: componentHeightKeysInOrder(),
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    multiple: { control: 'boolean' },
    displayEmpty: { control: 'boolean' },
    sx: { control: false },
    children: { control: false },
    value: { control: false },
    onChange: { control: false },
    defaultValue: { control: false },
  },
  args: {
    label: 'Fruit',
    placeholder: 'Choose one',
    variant: 'outline',
    density: 'md',
    fullWidth: true,
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Playground: Story = {
  render: function PlaygroundRender(args) {
    const [value, setValue] = useState<string>('');
    return (
      <Select
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value as string)}
      >
        {OPTIONS}
      </Select>
    );
  },
};

export const Variants: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
        gap: spacing[4],
        maxWidth: 960,
      }}
    >
      {SELECT_VARIANTS.map((v) => (
        <ControlledSelect
          key={v}
          label={VARIANT_LABEL[v]}
          variant={v}
          placeholder={v}
          fullWidth
        >
          {OPTIONS}
        </ControlledSelect>
      ))}
    </Box>
  ),
};

export const Densities: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: 'repeat(3, minmax(0, 1fr))' },
        gap: spacing[4],
        maxWidth: 960,
        maxHeight: '85vh',
        overflow: 'auto',
        pr: 1,
      }}
    >
      {SELECT_VARIANTS.map((v) => (
        <Box key={v}>
          <Box
            component="h4"
            sx={{
              m: 0,
              mb: spacing[2],
              fontSize: typeScale.sm.fontSize,
              fontWeight: fontWeights.semibold,
              color: pc.gray[800],
            }}
          >
            {VARIANT_LABEL[v]}
          </Box>
          <Box sx={{ display: 'grid', gap: spacing[2] }}>
            {(['sm', 'md', 'lg', 'xl'] satisfies ComponentHeightToken[]).map((d) => (
              <ControlledSelect
                key={`${v}-${d}`}
                variant={v}
                label={`Density · ${d}`}
                density={d}
                placeholder={d}
                fullWidth
              >
                {OPTIONS}
              </ControlledSelect>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  ),
};

export const States: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: spacing[4] }}>
      <Box sx={variantGridScrollWrapSx}>
        <Box sx={variantGridSx}>
          <Box />
          {SELECT_VARIANTS.map((v) => (
            <Box key={v} sx={variantColHeaderSx}>
              {VARIANT_LABEL[v]}
            </Box>
          ))}
          <Box
            sx={{
              fontSize: typeScale.xs.fontSize,
              fontWeight: fontWeights.semibold,
              color: pc.gray[700],
              pt: 1.25,
            }}
          >
            Default
          </Box>
          {SELECT_VARIANTS.map((v) => (
            <ControlledSelect key={`def-${v}`} variant={v} placeholder="Pick" fullWidth>
              {OPTIONS}
            </ControlledSelect>
          ))}
          <Box
            sx={{
              fontSize: typeScale.xs.fontSize,
              fontWeight: fontWeights.semibold,
              color: pc.gray[700],
              pt: 1.25,
            }}
          >
            Disabled
          </Box>
          {SELECT_VARIANTS.map((v) => (
            <Select key={`dis-${v}`} variant={v} placeholder="—" disabled fullWidth defaultValue="">
              {OPTIONS}
            </Select>
          ))}
          <Box
            sx={{
              fontSize: typeScale.xs.fontSize,
              fontWeight: fontWeights.semibold,
              color: pc.gray[700],
              pt: 1.25,
            }}
          >
            Loading
          </Box>
          {SELECT_VARIANTS.map((v) => (
            <Select key={`load-${v}`} variant={v} placeholder="…" loading fullWidth defaultValue="">
              {OPTIONS}
            </Select>
          ))}
        </Box>
      </Box>
    </Box>
  ),
};

export const Validation: Story = {
  parameters: { controls: { disable: true } },
  render: () => (
    <Box sx={variantGridScrollWrapSx}>
      <Box sx={variantGridSx}>
        <Box />
        {SELECT_VARIANTS.map((v) => (
          <Box key={v} sx={variantColHeaderSx}>
            {VARIANT_LABEL[v]}
          </Box>
        ))}
        <Box
          sx={{
            fontSize: typeScale.xs.fontSize,
            fontWeight: fontWeights.semibold,
            color: pc.gray[700],
            pt: 1.25,
          }}
        >
          Error
        </Box>
        {SELECT_VARIANTS.map((v) => (
          <Select
            key={v}
            variant={v}
            label="Team"
            placeholder="Select a team"
            invalid
            errorMessage="This field is required."
            defaultValue=""
            fullWidth
          >
            {OPTIONS}
          </Select>
        ))}
      </Box>
    </Box>
  ),
};

export const Multiple: Story = {
  parameters: { controls: { disable: true } },
  render: function MultipleRender() {
    const [value, setValue] = useState<string[]>([]);
    return (
      <Box sx={{ maxWidth: 400 }}>
        <Select
          label="Tags"
          placeholder="Select tags"
          multiple
          value={value}
          onChange={(e) => setValue(e.target.value as string[])}
          fullWidth
        >
          <SelectItem value="a11y">Accessibility</SelectItem>
          <SelectItem value="perf">Performance</SelectItem>
          <SelectItem value="dx">Developer experience</SelectItem>
        </Select>
      </Box>
    );
  },
};

function ControlledSelect({
  children,
  ...props
}: React.ComponentProps<typeof Select>) {
  const [value, setValue] = useState<string>('');
  return (
    <Select {...props} value={value} onChange={(e) => setValue(e.target.value as string)}>
      {children}
    </Select>
  );
}
