import { notFound, redirect } from 'next/navigation';

//Using the dynamic = 'force-dynamic' or revalidate = 0 
// route segment config options: This will skip the Full
// Route Cache and the Data Cache. Meaning components 
// will be rendered and data fetched on every incoming 
// request to the server. The Router Cache will still 
// apply as it's a client-side cache.
export const dynamic = 'force-dynamic';

type Props = {
    params: Promise<{ slug: string }>;
};

async function getCategory(slug: string) {
    const res = await fetch(`http://localhost:3001/categories/${slug}`, {
        cache: 'no-store',
    });

    if (!res.ok) return null;
    return res.json();
}

export default async function CategorySlugPage({ params }: Props) {
    const { slug } = await params;

    // Redirect climate to weather
    if (slug === 'climate') redirect('/categories/weather');

    const data = await getCategory(slug);

    if (!data) return notFound();

    return (
        <main className="min-h-screen bg-gray-50 px-6 py-10">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
                    {slug.toUpperCase()} News
                </h1>
                <ul className="space-y-4">
                    {data.news?.map((item: string, i: number) => (
                        <li
                            key={i}
                            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition text-gray-900"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
