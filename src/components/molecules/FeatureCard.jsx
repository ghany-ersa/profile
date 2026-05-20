import { getIcon } from '../../constants/icons';
import { Card, IconBox, ListItem } from '../atoms';
import { cn } from '../../utils/cn';

/**
 * Generic icon + title + description card. Drives the services grid and
 * the collaboration-path steps — they share the same shape.
 *
 * @param {{icon: string, title: string, description?: string, body?: string, points?: string[]}} item
 * @param {'card'|'plain'} [layout] - 'card' = bordered surface, 'plain' = bare column.
 * @param {'left'|'center'} [align]
 * @param {'sm'|'md'} [iconSize]
 */
export default function FeatureCard({
  item,
  layout = 'card',
  align = 'left',
  iconSize = 'sm',
}) {
  const Icon = getIcon(item.icon);
  const text = item.description ?? item.body;

  const content = (
    <>
      <IconBox icon={Icon} size={iconSize} className={cn(align === 'center' && 'mx-auto')} />
      <h3 className="text-white font-bold text-lg mt-4 mb-2">{item.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{text}</p>

      {item.points && (
        <ul className="space-y-2 mt-4">
          {item.points.map((point) => (
            <ListItem key={point} className="text-sm text-slate-300">
              {point}
            </ListItem>
          ))}
        </ul>
      )}
    </>
  );

  if (layout === 'plain') {
    return <div className={cn(align === 'center' && 'text-center')}>{content}</div>;
  }

  return (
    <Card
      variant="muted"
      hover
      lift
      className={cn('p-6 flex flex-col', align === 'center' && 'text-center')}
    >
      {content}
    </Card>
  );
}
