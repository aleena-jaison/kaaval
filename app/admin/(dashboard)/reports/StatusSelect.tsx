"use client";

import { useTransition } from "react";
import { updateReportStatus } from "@/app/actions/reportActions";

export function StatusSelect({ id, currentStatus }: { id: string, currentStatus: string }) {
  const [isPending, startTransition] = useTransition();

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    startTransition(async () => {
      await updateReportStatus(id, newStatus);
    });
  };

  return (
    <select 
      value={currentStatus}
      onChange={handleStatusChange}
      disabled={isPending}
      className={`text-xs font-bold px-3 py-1.5 rounded-full border outline-none transition-colors cursor-pointer ${
        currentStatus === 'Pending' 
          ? 'bg-yellow-100 text-yellow-800 border-yellow-200'
          : currentStatus === 'Resolved'
            ? 'bg-green-100 text-green-800 border-green-200'
            : currentStatus === 'In Progress'
              ? 'bg-blue-100 text-blue-800 border-blue-200'
              : 'bg-slate-100 text-slate-800 border-slate-200'
      } disabled:opacity-50`}
    >
      <option value="Pending">Pending</option>
      <option value="In Progress">In Progress</option>
      <option value="Resolved">Resolved</option>
      <option value="Invalid">Invalid</option>
    </select>
  );
}
