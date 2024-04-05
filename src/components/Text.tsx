import { ElementType } from 'react';

/**
 * This is a React component that renders text with a space replaced by a non-breaking space between the last two words.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {React.ElementType} [props.as] - The type of element to render. Defaults to an empty string.
 * @param {string} [props.className] - The CSS class to apply to the element.
 * @param {string} [props.title] - The title of the element. If `children` is not provided, `title` will be used as the content.
 * @param {string} [props.children] - The children to be rendered within the element. If provided, this will override the `title`.
 * @returns {React.Element|null} The rendered element, or null if neither `title` nor `children` are provided.
 */
export default function Text({
  title,
  as,
  className,
  children,
  ...props
}: {
  as?: ElementType;
  className?: string;
  title?: string;
  children?: string | string[];
}) {
  const As = as || 'span';
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
        <As
          className={
            (className || '') + ' break-words non-break' ||
            'break-words non-break'
          }
          {...props}
        >
          {str}
        </As>
      );
    }
    return (
      <As
        className={
          (className || '') + ' break-words non-break' ||
          'break-words non-break'
        }
        {...props}
      >
        {str.slice(0, str.lastIndexOf(' ')).trimEnd()}&nbsp;
        {str.slice(str.lastIndexOf(' ') + 1).trimStart()}
      </As>
    );
  }
  return null;
}
