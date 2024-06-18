import { ReactElement } from "react";

export interface Props {
  title: string;
  icon?: ReactElement;
  onPress: () => void;
  customClassName?: string;
  disabled?: boolean;
}
