import React from "react";

const TimeAgo = ({ date }: { date: string | Date }) => {
  const created = new Date(date);
  const now = new Date();
  const diffMs = now.getTime() - created.getTime();

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  return (
    <span className="text-[12px]">
      {days === 0 ? "Today" : `${days} days ago`}
    </span>
  );
};

export default TimeAgo;
