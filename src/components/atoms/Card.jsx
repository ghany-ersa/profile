import { cn } from '../../utils/cn';

/**
 * Bordered surface panel - the base for every card on the page.
 *
 * @param {'panel'|'dark'|'muted'} [variant] - background treatment.
 * @param {boolean} [hover] - adds the cyan border-highlight on hover.
 * @param {boolean} [lift] - adds the upward translate on hover.
 * @param {'article'|'div'} [as] - rendered element.
 */
const VARIANTS = {
  panel: 'bg-slate-900 border-slate-800',
  dark: 'bg-slate-950 border-slate-800',
  muted: 'bg-slate-900/50 border-slate-800',
};

export default function Card({
  variant = 'panel',
  hover = false,
  lift = false,
  as: Tag = 'div',
  className,
  children,
}) {
  return (
    <Tag
      className={cn(
        'border rounded-2xl transition-all duration-300',
        VARIANTS[variant],
        hover && 'hover:border-cyan-500/30',
        lift && 'hover:-translate-y-1',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
