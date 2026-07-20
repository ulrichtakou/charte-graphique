/**
 * Insights CopyButton — copy value on hover with check feedback.
 */

import { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { Check, Copy } from 'lucide-react';

export function DetailCopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    void navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <Tooltip title={copied ? 'Copied!' : 'Copy'} placement="top" arrow>
      <IconButton
        size="small"
        onClick={handleCopy}
        sx={{
          p: 0.3,
          flexShrink: 0,
          color: copied ? 'success.main' : 'text.disabled',
          transition: 'color 200ms ease',
          '&:hover': { color: 'text.secondary', bgcolor: 'action.hover' },
        }}
      >
        {copied ? (
          <Check size={12} strokeWidth={2.5} />
        ) : (
          <Copy size={12} strokeWidth={1.8} />
        )}
      </IconButton>
    </Tooltip>
  );
}
