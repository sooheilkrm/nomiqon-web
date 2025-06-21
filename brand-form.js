
export default function BrandForm() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Create Your Brand</h1>
      <form className="mt-4">
        <input className="border p-2 w-full mb-4" placeholder="Enter your brand name" />
        <button className="bg-teal-600 text-white px-4 py-2 rounded">Generate</button>
      </form>
    </div>
  );
}
