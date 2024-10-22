import MainLayout from '@/components/layout/MainLayout';
import LinkButton from '@/components/buttons/LinkButton';

export default function NotFound() {
  return (
    <MainLayout>
      <div className='text-slate-700 dark:text-dark-text flex flex-col items-center justify-center min-h-screen space-y-2'>
        <p className='text-9xl'>404</p>
        <p className='text-3xl pb-4'>Page Not Found</p>
        <LinkButton text='Go Home' link='/' />
      </div>
    </MainLayout>
  );
}