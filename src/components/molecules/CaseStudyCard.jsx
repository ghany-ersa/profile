import { Target, Wrench, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, ListItem, TechTag } from '../atoms';
import DecisionItem from './DecisionItem';

/** Coloured label above each Problem/Action/Decision/Result block. */
function BlockLabel({ icon: Icon, color, children }) {
  return (
    <div className={`flex items-center gap-2 text-sm font-semibold ${color} mb-2`}>
      <Icon className="w-4 h-4" /> {children}
    </div>
  );
}

/**
 * A full case study: Problem → Action → Key Decisions → Result + tech stack.
 *
 * @param {object} caseStudy - an item from data/caseStudies.js
 */
export default function CaseStudyCard({ caseStudy, t = {} }) {
  const { role, title, problem, action, decisions, result, stack } = caseStudy;
  const keyDecisionsLabel = t.keyDecisions ?? 'Key Decisions';

  return (
    <Card variant="dark" hover as="article" className="overflow-hidden">
      <div className="p-6 sm:p-8">
        <p className="text-xs font-mono text-cyan-400 mb-2">{role}</p>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>

        <div className="space-y-5 text-slate-300">
          <div>
            <BlockLabel icon={Target} color="text-rose-300">
              Problem
            </BlockLabel>
            <p className="text-slate-400 leading-relaxed">{problem}</p>
          </div>

          <div>
            <BlockLabel icon={Wrench} color="text-amber-300">
              Action
            </BlockLabel>
            <ul className="space-y-1.5 text-slate-400">
              {action.map((item) => (
                <ListItem key={item} marker="arrow">
                  {item}
                </ListItem>
              ))}
            </ul>
          </div>

          {decisions && (
            <div>
              <BlockLabel icon={Lightbulb} color="text-violet-300">
                {keyDecisionsLabel}
              </BlockLabel>
              <div className="space-y-3">
                {decisions.map((decision) => (
                  <DecisionItem key={decision.q} decision={decision} />
                ))}
              </div>
            </div>
          )}

          <div>
            <BlockLabel icon={TrendingUp} color="text-emerald-300">
              Result
            </BlockLabel>
            <ul className="space-y-1.5 text-slate-400">
              {result.map((item) => (
                <ListItem key={item} marker="check-emerald">
                  {item}
                </ListItem>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-slate-800">
          {stack.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </div>
      </div>
    </Card>
  );
}
