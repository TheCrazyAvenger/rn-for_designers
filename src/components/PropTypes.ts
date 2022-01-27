export type HeaderCardProps = {
  image: any;
  title: string;
};

export type CoursesCardProps = {
  title: string;
  image: any;
  subtitle: string;
  caption: string;
  logo: any;
  content: string;
};

export type PopularCoursesCardProps = {
  title: string;
  image: any;
  sections: number;
  subtitle: string;
  taughtBy: string;
  accountImage: any;
  logo: any;
};

export type MenuItemProps = {
  icon: string;
  title: string;
  text: string;
};

export type ProjectProps = {
  image: any;
  title: string;
  author: string;
  text: string;
  canOpen?: boolean;
};
