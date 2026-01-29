import { ClientService } from "@/modules/clients/service";
import { addClientAction, deleteClientAction } from "@/modules/clients/actions";

export default async function ClientsPage() {
  const clients = await ClientService.getClients();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Clients Management</h2>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Add New Client</h3>
        <form action={addClientAction} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="name" placeholder="Client Name" className="w-full p-2 border rounded dark:bg-gray-700" required />
                <input name="logo" placeholder="Logo URL" className="w-full p-2 border rounded dark:bg-gray-700" />
                <input name="website" placeholder="Website URL" className="w-full p-2 border rounded dark:bg-gray-700" />
                <input name="position" placeholder="Contact Position" className="w-full p-2 border rounded dark:bg-gray-700" />
            </div>
            <textarea name="testimonial" placeholder="Testimonial / Review" className="w-full p-2 border rounded dark:bg-gray-700" rows={3} />
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add Client</button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {clients.map(client => (
          <div key={client.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow relative border border-gray-200 dark:border-gray-700">
             <form action={deleteClientAction} className="absolute top-2 right-2">
                <input type="hidden" name="id" value={client.id} />
                <button className="text-red-500 hover:text-red-700">X</button>
             </form>
             <div className="flex items-center gap-3 mb-3">
                {client.logo && <img src={client.logo} alt={client.name} className="w-10 h-10 rounded-full object-cover bg-gray-100" />}
                <div>
                    <h4 className="font-bold">{client.name}</h4>
                    {client.website && <a href={client.website} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-500 hover:underline">{client.website}</a>}
                </div>
             </div>
             {client.testimonial && (
                <blockquote className="text-sm text-gray-600 dark:text-gray-300 italic border-l-2 border-gray-300 pl-2">
                    &quot;{client.testimonial}&quot;
                </blockquote>
             )}
             {client.position && <p className="text-xs text-gray-500 mt-2 text-right">- {client.position}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
