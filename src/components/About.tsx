export function About() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Sobre o Projeto</h1>
      <div className="space-y-4">
        <p>
          Este é um projeto de um buscador de feriados no Brasil. Ele permite que o usuário selecione um ano e um estado para listar todos os feriados correspondentes.
        </p>
        <h2 className="text-2xl font-bold mt-6">Tecnologias Utilizadas</h2>
        <ul className="list-disc list-inside">
          <li><strong>React</strong>: Biblioteca para construção da interface de usuário.</li>
          <li><strong>Vite</strong>: Ferramenta de build para desenvolvimento web moderno.</li>
          <li><strong>TypeScript</strong>: Superset de JavaScript que adiciona tipagem estática.</li>
          <li><strong>Tailwind CSS</strong>: Framework de CSS para estilização rápida e customizável.</li>
          <li><strong>Lucide Icons</strong>: Biblioteca de ícones SVG.</li>
        </ul>
        <h2 className="text-2xl font-bold mt-6">API</h2>
        <p>
          Os dados dos feriados são consumidos da API pública da <a href="https://www.invertexto.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Invertexto</a>.
        </p>
        <p>
          A URL base da API é: <code className="bg-gray-200 p-1 rounded">https://api.invertexto.com/v1/holidays/</code>
        </p>
        <h2 className="text-2xl font-bold mt-6">Desenvolvedor</h2>
        <p>
          Desenvolvido por: Pedro Sawczuk
        </p>
        <p>
          GitHub: <a href="https://github.com/PedroSawczuk/feriados-brasil" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Link do Repositório</a>
        </p>
      </div>
    </div>
  );
}
