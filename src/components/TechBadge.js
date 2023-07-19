export default function TechBadge({ text = "" }) {
  return (
    <span className="rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold dark:border-cod-gray-700">
      {text}
    </span>
  );
}
