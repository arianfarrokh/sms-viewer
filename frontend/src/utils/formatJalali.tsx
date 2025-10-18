import { format } from "date-fns-jalali";

export const formatJalali = (date: string | Date) => {
  if (!date) return "-";
  return format(new Date(date), "yyyy/MM/dd HH:mm");
};
