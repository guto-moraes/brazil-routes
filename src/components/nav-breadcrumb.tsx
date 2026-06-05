import { cn } from '@/lib/utils'
import { Link, isMatch, useMatches } from '@tanstack/react-router'
import { ChevronRight, Home } from 'lucide-react'

export const BreadcrumbNav = ({ className }: { className?: string }) => {
  const matches = useMatches()
  const matchesWithCrumbs = matches.filter((match) =>
    isMatch(match, 'loaderData.crumb'),
  )

  const items = matchesWithCrumbs.map(({ pathname, loaderData }) => ({
    href: pathname,
    label: loaderData?.crumb as string,
  }))

  if (items.length === 0) {
    return null
  }

  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1 text-sm", className)}>
      <Link
        to="/"
        className="flex items-center gap-1 text-bone-600 hover:text-bone-400 transition-colors duration-300"
      >
        <Home size={16} />
      </Link>
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center gap-1">
          <ChevronRight size={16} className="text-bone-600" />
          {index === items.length - 1 ? (
            <span className="text-mate-500 font-medium">{item.label}</span>
          ) : (
            <Link
              to={item.href}
              className="text-chocolate -400 hover:text-white transition-colors duration-300"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
