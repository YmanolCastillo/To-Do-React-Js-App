import React from "react";
import { Props } from "./types";
import { EnumTaskStatus } from "../../../constants/enumTaskStatus";

const TaskItem = ({ title, dueDate, status, onDelete, onToggle }: Props) => {
  return (
    <li className="flex items-center justify-between w-full p-2 shadow-sm rounded-md bg-gray-100 mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={status === EnumTaskStatus.CLOSED}
          onChange={onToggle}
          className="mr-2"
        />
        <div>
          <span
            className={status === EnumTaskStatus.CLOSED ? "line-through" : ""}
          >
            {title}
          </span>
          <br />
          <span className="text-sm text-gray-500">Fecha límite: {dueDate}</span>
        </div>
      </div>
      <button className="ml-4 text-red-500" onClick={onDelete}>
        Eliminar
      </button>
    </li>
  );
};

export default TaskItem;
