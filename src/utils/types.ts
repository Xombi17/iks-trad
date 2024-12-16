// Common types used across components
export interface Story {
  title: string;
  preview: string;
  content: string;
  image: string;
  moralLesson: string;
}

export interface NavItem {
  path: string;
  icon: JSX.Element;
  label: string;
}