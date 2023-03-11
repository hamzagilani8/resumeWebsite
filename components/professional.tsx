
const Professional = ({ data }: { data: any }) => {
    const { title, experiences } = data

    return (
        <div className="text-black border-l-4 border-yellow pl-10 pb-2 pr-10 m-10 ">
        <section>
            <h1 className='text-4xl'>{title}</h1>
            <div className='flex flex-col gap-6'>
                {experiences.map(({ role, description, current }: { role: string, description: string, current: boolean }) => (
                    <div key={role} className='flex flex-col rounded-lg'>
                        <span className={`h-2 ${current ? "bg-green" : "bg-grey"}`} />
                        <div className='bg-grey-light p-6 drop-shadow-md'>
                            <h3>{role}</h3>
                            <p className='mt-2'>{description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </div>
    )
}

export default Professional