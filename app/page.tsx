import ModelView from "@/components/ModelView";

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl font-bold">Design Review</h2>
        <p className="text-gray-600"></p>
      </header>

      <ModelView modelSrc="/tree-design.glb" />

      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-xl">
          <h3 className="font-bold mb-2">Instructions for Review:</h3>
          <ul className="list-disc ml-5 text-sm space-y-2">
            <li>Left Click to rotate</li>
            <li>Scroll to zoom</li>
            <li>On mobile, tap AR to see it on your desk</li>
          </ul>
        </div>
        
        <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="font-bold mb-2 text-blue-800">Feedback:</h3>
          <p className="text-sm text-blue-700">
            Rotate the model to the area you want changed, take a screenshot, and send it to me with your notes!
          </p>
        </div>
      </section>
    </main>
  );
}