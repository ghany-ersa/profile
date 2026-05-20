/**
 * Small cyan-tinted technology chip — used for project, case-study,
 * and experiment tech stacks.
 */
export default function TechTag({ children }) {
  return (
    <span className="px-2.5 py-1 rounded text-xs font-medium border bg-cyan-950/30 text-cyan-300 border-cyan-900/50">
      {children}
    </span>
  );
}
