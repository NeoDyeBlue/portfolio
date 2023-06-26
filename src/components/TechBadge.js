export default function TechBadge({ text = "" }) {
  return (
    <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-bold dark:bg-gray-800">
      {text}
    </span>
  );
}
