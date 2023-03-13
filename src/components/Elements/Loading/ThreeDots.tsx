const ThreeDots = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="animate-[bounce_1s_infinite_100ms]  h-3 w-3 bg-gray-300 rounded-full"></div>
            <div className="animate-[bounce_1s_infinite_250ms]  h-3 w-3 bg-gray-300 rounded-full mx-3"></div>
            <div className="animate-[bounce_1s_infinite_500ms]  h-3 w-3 bg-gray-300 rounded-full"></div>
        </div>
    )
}
export default ThreeDots