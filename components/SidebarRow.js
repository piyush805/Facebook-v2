import Image from "next/image";

function SidebarRow({ src, Icon, title }) {
    return (
        <div className='flex items-center space-x-2 pt-4 hover:bg-gray-200 rounded-xl cursor-pointer'>
            {src && (
                <Image
                    className='rounded-full'
                    src={src}
                    width={30}
                    height={30}
                    alt={src}
                />
            )}
            {Icon && (
                <Icon className="h-5 w-5 sm:h-7 sm:w-7 text-blue-500"/>
            )}
            <p className='hidden sm:inline-flex font-medium'>{title}</p>
        </div>
    )
}

export default SidebarRow