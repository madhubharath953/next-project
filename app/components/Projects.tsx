export default function Projects(){
    return(
        <>
        <section id="home"className="m-screen  items-center justify-center">
            <div className="text-center font-bold text-blue-400 text-5xl mt-10 pt-10">
                <h1>Projects</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 pt-10 px-10">
                <div className="max-w-sm bg-gray-900 text-white rounded-xl p-10 shadow-md  transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                    <div className="h-50 w-full bg-gradient-to-r from-blue-600 to-green-600"></div>
                    <div className="mt-5"><h3 className="text-xl font-semibold">E-commerce</h3></div>
                    <p className="mt-2 text-gray-400">
                        It is a E-commerce platform to buy all Electronics
                    </p>
                </div>
                <div className="max-w-sm bg-gray-900 text-white rounded-xl p-10 shadow-md  transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                    <div className="h-50 w-full bg-gradient-to-r from-blue-600 to-green-600"></div>
                    <div className="mt-5"><h3 className="text-xl font-semibold">Potfolio</h3></div>
                    <p className="mt-2 text-gray-400">
                        My potfolio web site to understandmy perfomance
                    </p>
                </div>
                <div className="max-w-sm bg-gray-900 text-white rounded-xl p-10 shadow-md  transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                    <div className="h-50 w-full bg-gradient-to-r from-blue-600 to-green-600"></div>
                    <div className="mt-5"><h3 className="text-xl font-semibold">Insta clone</h3></div>
                    <p className="mt-2 text-gray-400">
                        It is the clone of the real Instagram
                    </p>
                    <div className="flex mt-5 justify-between">
                        <span>React js</span>
                        <span>Javascript</span>
                        <span>Tailwind CSS</span>
                    </div>
                </div>
                <div className="max-w-sm bg-gray-900 text-white rounded-xl p-10 shadow-md  transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl">
                    <div className="h-50 w-full bg-gradient-to-r from-blue-600 to-green-600"></div>
                    <div className="mt-5"><h3 className="text-xl font-semibold">Chatbot</h3></div>
                    <p className="mt-2 text-gray-400">
                        Easy to chat with your AI assistent
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}