import BackHome from '@/components/BackHome';
import Loading from '@/components/Loading';

export function generateMetadata({ status = 404 }) {
  return {
    title: {
      default: 'Ôi, lỗi ' + status,
    },
    description: 'Xin lỗi, trang web này không tồn tại',
    openGraph: {
      title: {
        default: 'Ôi, lỗi' + status,
      },
      description: 'Xin lỗi, trang web này không tồn tại',
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_HOST as string),
  };
}
const NotFound = ({ status = 404 }) => {
  return (
    <>
      <Loading
        message={status.toString()}
        description={
          status === 404
            ? 'Xin lỗi, trang web này không tồn tại'
            : 'Lỗi của chúng tôi, không phải của bạn'
        }
      />
      <BackHome isError />
    </>
  );
};

export default NotFound;
