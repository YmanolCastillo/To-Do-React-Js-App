import { EnumTaskStatus } from "@/constants/enumTaskStatus";

export interface Props {
  id: number;
  title: string;
  dueDate: string;
  status: EnumTaskStatus;
  onDelete: () => void;
  onToggle: () => void;
}
