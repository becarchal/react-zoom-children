import * as React from 'react';


type IStringOrHtmlElement = string | HTMLElement;

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface IProps extends Omit<React.HTMLAttributes<any>, 'onChange'> {
}

export interface IDrawerProps extends IProps {
  wrapperClassName?: string;
  forceRender?: boolean;
}

export interface IDrawerChildProps extends IProps {
  getContainer?: () => HTMLElement;
  getOpenCount?: () => number;
  switchScrollingEffect?: (close?: boolean) => void;
}
