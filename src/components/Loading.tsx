import { Spinner } from '@nextui-org/react';
import Text from './Text';

/**
 * Renders a loading component with different sizes and types of spinners.
 * @param message - the message to display in the alert
 * @param description - the description to display in the alert
 */
export default function Loading({
  message = 'Đang xử lý...',
  description = message,
}: {
  message?: string;
  description?: string;
}) {
  return (
    <>
      <Spinner />
      <Text as={'p'} title={message} />
      <Text as={'i'} title={description} />
    </>
  );
}
