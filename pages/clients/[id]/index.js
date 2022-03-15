import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();

  function loadProjectHandler() {
    router.push('clients/max.project');
  }

  return (
    <div>
      <h1>The Projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  );
}

export default ClientProjectsPage;
