export const dynamic = 'force-static'; // For build-time generation

async function getCategories() {
  const res = await fetch('http://localhost:3001/categories');
  return res.json();
}

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 border-b pb-3">
          Categories
        </h1>
        <ul className="grid sm:grid-cols-2 gap-4">
          {categories.map((cat: string) => (
            <li key={cat}>
              <a
                href={`/categories/${cat}`}
                className="block bg-white p-5 rounded-lg shadow hover:shadow-md hover:bg-gray-100 transition text-lg font-medium text-gray-700 capitalize"
              >
                {cat.replace(/-/g, ' ')}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
