import {ReactNode} from 'react';

export interface ProjectCardProps {
  title: ReactNode;
  technologies: string[];
  children: ReactNode;
  imageURL: string;
}
