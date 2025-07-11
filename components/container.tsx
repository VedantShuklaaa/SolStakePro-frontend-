import { cn } from '@/lib/utils';
import React from 'react';

export const Container = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return <div className={cn("max-w-8xl mx-auto", className)}>{children}</div>;
}
