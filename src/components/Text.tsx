import cn from '@/utils/tailwind';

export default function Text({
  title,
  as,
  className,
  children,
  dangerouslySetInnerHTML,
  ...props
}: {
  as?: any;
  className?: string;
  title?: string;
  children?: string | string[];
  dangerouslySetInnerHTML?: { __html: string };
}) {
  const As = as || 'span';
  if (dangerouslySetInnerHTML) {
    return (
      <As
        className={cn(className, 'break-words non-break')}
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
        {...props}
      />
    );
  }
  let str = title?.trim();
  if (children) {
    if (typeof children === 'string') {
      str = children;
    }
    if (Array.isArray(children)) {
      str = children.join(' ');
    }
  }
  if (str) {
    if (!str.includes(' ')) {
      return (
        <As className={cn(className, 'break-words non-break')} {...props}>
          {str}
        </As>
      );
    }
    return (
      <As className={cn(className, 'break-words non-break')} {...props}>
        {str.slice(0, str.lastIndexOf(' ')).trimEnd()}&nbsp;
        {str.slice(str.lastIndexOf(' ') + 1).trimStart()}
      </As>
    );
  }
  return null;
}
