import { ShieldOff } from 'lucide-react';
import { EmptyState } from '../empty-state/EmptyState';

export type PermissionDeniedViewProps = {
  title?: string;
  description?: string;
  backLabel?: string;
  onBack: () => void;
};

export function PermissionDeniedView({
  title = 'Access denied',
  description = "You don't have permission to view this page.",
  backLabel = 'Back to dashboard',
  onBack,
}: PermissionDeniedViewProps) {
  return (
    <EmptyState
      title={title}
      description={description}
      icon={ShieldOff}
      action={{ label: backLabel, onClick: onBack }}
    />
  );
}
