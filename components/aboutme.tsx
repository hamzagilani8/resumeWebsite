

const Aboutme = ({ data }: { data: any }) => {
    const { title, body } = data
    return (
            <div className="text-black border-l-4 border-yellow pl-10 pb-2 pr-10 m-10 ">
                <h1 className='text-4xl'>{title}</h1>
                <h2 className='flex justify-around text-xl'>{body}</h2>
            </div>
            
    )
}

export default Aboutme