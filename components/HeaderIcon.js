function HeaderIcon({ Icon, active }) {
    return (
        <div className="flex items-center cursor-pointer 
                px-1 sm:px-3
                md:px-10 sm:h-10 
                md:hover:bg-gray-100 
                rounded-xl 
                active:border-b-2 group active:border-blue-500 ">
            <Icon className={`h-5 text-gray-500 
            group-hover:text-blue-500 
            text-center 
            sm:h-7 mx-auto ${active && 'text-blue-500'}`} />

        </div>
    )
}

export default HeaderIcon