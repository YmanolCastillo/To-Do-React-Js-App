import { EnumTaskStatus } from "../../constants/enumTaskStatus";

export interface Task {
  id: number;
  title: string;
  dueDate: string;
  status: EnumTaskStatus;
}

export type TaskStatus = EnumTaskStatus.PENDING | EnumTaskStatus.CLOSED;
