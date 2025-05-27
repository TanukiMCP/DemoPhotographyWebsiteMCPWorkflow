import { cn } from '@/lib/utils';

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-charcoal-100',
        className
      )}
    />
  );
}

export function ImageSkeleton({ className }: SkeletonProps) {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <Skeleton className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
    </div>
  );
}