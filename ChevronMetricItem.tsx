import styles from './ChevronMetricItem.module.css';

export interface ChevronMetricItemProps {
  count?: number;
  text: string;
  position?: 'first' | 'last';
}

export default function ChevronMetricItem({
  count,
  text,
  position,
}: ChevronMetricItemProps) {
  return (
    <div className='relative flex h-20 w-full rounded'>
      {/** Chevron body */}
      <div className={styles.body} />
      {/** Clip the beginning of the chevron */}
      {position !== 'first' && (
        <>
          <div className={`${styles.arrow} ${styles.arrowTailTop}`} />
          <div className={`${styles.arrow} ${styles.arrowTailBottom}`} />
        </>
      )}
      {/** Clip the end of the chevron */}
      {position !== 'last' && (
        <div className={`${styles.arrow} ${styles.arrowTip}`} />
      )}
      {/** Metrics information */}
      <div className='z-10 m-auto text-center text-white'>
        <p className='text-xl font-bold'>{count ? count : '--'}</p>
        <p className='text-lg'>{text}</p>
      </div>
    </div>
  );
}
