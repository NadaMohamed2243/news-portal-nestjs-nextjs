import Image from 'next/image';

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-12">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b pb-3">About Us</h1>
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="md:w-1/2 text-gray-700 text-lg space-y-4">
                        <p>
                            <span className="font-semibold">News App</span> is your trusted source for the latest news and updates from around the world.
                        </p>
                        <p>
                            Our team of dedicated journalists works around the clock to bring you accurate and timely information.
                        </p>
                        <p>
                            Founded in 2023, we have quickly become one of the most reliable news sources on the internet.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <Image
                            src="/bootique.png"
                            alt="News Team"
                            width={600}
                            height={400}
                            className="rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
