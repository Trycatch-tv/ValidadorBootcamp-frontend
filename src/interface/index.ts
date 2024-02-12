import { MouseEventHandler } from "react";

export interface buttonProps {
  icon?: JSX.Element;
  title: string;
  btnType?: "button" | "submit";
  handleOnclick?: MouseEventHandler<HTMLButtonElement>;
  classes?: string;
}

export interface HeadingProps {
  title: string;
  text: string;
}

export interface describeProps {
  image: string;
  title: string;
  text: string;
  imageClass?: string;
}

export interface selectionTitleProps {
  title1: string;
  title2: string;
  text: string;
  sizeTitle: string;
  sizeText: string;
}

export interface classes {
  classes: string;
}

export interface childrenProp {
  children: React.ReactNode;
  classes?: string;
}

export interface imageClass {
  classes: string;
}