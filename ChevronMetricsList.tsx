import React from 'react';

import ChevronMetricItem from '@/components/chevrons/ChevronMetricItem';

type Metrics = {
  count?: number;
  text: string;
};

export interface ChevronMetricItemListProps {
  metrics: Metrics[];
}

export default function ChevronMetricItemList({
  metrics,
}: ChevronMetricItemListProps) {
  /** Determine the `position` attribute for a single chevron */
  const determineChevronPosition = (index: number) => {
    if (index === 0) return 'first';
    else if (index === metrics.length - 1) return 'last';
    else return undefined;
  };

  /** Turn `Metrics` info and an index into a `<ChevronMetricItem />` component */
  const transformMetricToChevron = (metric: Metrics, index: number) => {
    return (
      <ChevronMetricItem
        count={metric.count}
        key={index} // Important! We need this since we are mapping later
        position={determineChevronPosition(index)}
        text={metric.text}
      />
    );
  };

  return (
    <ul className='flex -space-x-6'>{metrics.map(transformMetricToChevron)}</ul>
  );
}
