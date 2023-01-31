import { AcademicCapIcon } from '@heroicons/react/24/outline'


const GlobalLoading = () => {
    return (
        <div className="z-50 bg-nothing fixed inset-0 flex justify-center items-center">
            <AcademicCapIcon className="h-[60px] md:h-[70px] w-[60px] md:w-[70px]  text-primary" />
        </div>
    )
}
export default GlobalLoading