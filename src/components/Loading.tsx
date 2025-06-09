import { Spinner } from '@heroui/react';
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
    <div className="flex flex-col items-center justify-center h-screen">
      <Text as={'p'} title={message} />
      <Spinner />
      <Text as={'i'} title={description} />
    </div>
  );
}
