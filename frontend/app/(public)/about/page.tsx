export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-slate-800 mb-4">About This Project</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg text-slate-700 mb-4">
          The <strong>Taglish Ticket Router</strong> is an AI-powered system designed to help
          support teams categorize issues automatically.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">How it Works</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-600">
          <li>Users submit tickets in English or Tagalog (Taglish).</li>
          <li>Our AI (XLM-RoBERTa) analyzes the text.</li>
          <li>The system routes the ticket to IT, HR, or Accounting.</li>
        </ul>
      </div>
    </div>
  );
}