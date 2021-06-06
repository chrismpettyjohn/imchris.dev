import {ReactNode} from 'react';

export interface TimelineProps {
  items: TimelineItem[];
}

export interface TimelineItem {
  year: number;
  name: ReactNode;
  desc: ReactNode;
  icon: ReactNode;
}
