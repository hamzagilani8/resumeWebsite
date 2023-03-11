

const Education = ({ data }: { data: any }) => {
    const { title, study } = data
    
    return (
        <div className="text-black border-l-4 border-yellow pl-10 pb-2 pr-10 m-10 ">
            <h1 className='text-4xl'>{title}</h1>
            <ul className={`flex flex-wrap justify-around content-center py-4 gap-5`}>
                {study.map(({
                    educationLevel,
                    institute,
                    degree,
                    duration,
                    grades,
                    latest
                }: {
                    educationLevel: string,
                    institute: string,
                    degree: string,
                    duration: string,
                    grades: string
                    latest:boolean
                }) => (
                    <div className={`${latest ? "border-l-green" : "border-l-grey"} border-l-4 p-4`}>
                        <h2 className="text-base text-black-light">{educationLevel}</h2>
                        <h1 className={`${latest ? "text-green" : "text-yellow-dark"} text-2xl  font-extrabold`}>{degree}</h1>
                        <h3 className="text-lg text-black-light">{grades}</h3>
                        <h1 className="text-xl ">{institute}</h1>
                        <p className="text-sm">{duration}</p>
                        </div>
                ))}
            </ul>

        </div>

    )
}

export default Education