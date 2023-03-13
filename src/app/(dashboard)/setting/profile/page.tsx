import UserView from '../../../../features/Setting/components/SettingProfile';

export const dynamic = "force-dynamic";

const page = async () => {
    return (
        <div className="w-full">
            <UserView />
        </div>
    )
}
export default page