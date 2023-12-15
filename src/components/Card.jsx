import './Card.css'

export default function Card({ title }) {
    return( 
        <>
        <div className="max-w-[720px] mx-[10px] md:mx-auto my-[15px] rounded-2xl bg-[#2c2c2c]">
            <div className="flex items-center py-[2px] px-[3px] bg-[#313131] rounded-t-2xl rounded-r-2xl">
                <div className="absolute flex ml-[2px] gap-[3px]">
                    <div className="rounded-full w-[12px] h-[12px] bg-red-600"></div>
                    <div className="rounded-full w-[12px] h-[12px] bg-yellow-400"></div>
                    <div className="rounded-full w-[12px] h-[12px] bg-green-700"></div>
                </div>
                <div className="flex-grow py-[2px] px-[2px] text-white">
                    <p>{title ? title : 'Who Am I' }</p>
                </div>
            </div>
            <div className="card-body">
                <code>
                    My name is Lintang Ksatria, currently I am study in Dian Nuswantoro University taking Informatics Engineering as major. I interested to programming and graphic design.
                </code>
            </div>
        </div>
        </>
    )
}