import cn from 'classnames'

export default function Section ({
  bgColor = 'transparent',
  children,
  className
}) {
  return (
    <section className={cn(className)} style={{ backgroundColor: bgColor }}>
      {children}
    </section>
  )
}
