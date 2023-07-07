export default function Page({actions,title,children}){
    return(
        <div className='space-y-8'>
            <div className='flex justify-between items-center'>
                <h1 className="font-semibold text-xl">{title}</h1>
                <div className='flex gap-x-4'>{actions}</div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )

}
