import Flag from './Flag';

interface HeaderProps {
  navigateTo: (page: string) => void;
}

export function Header({ navigateTo }: HeaderProps) {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl gap-2 font-bold flex items-center">
        Feriados BR
        <Flag />
      </h1>
      <nav>
        <button onClick={() => navigateTo('home')} className="text-lg mx-2 hover:text-gray-400">Início</button>
        <button onClick={() => navigateTo('about')} className="text-lg mx-2 hover:text-gray-400">Sobre</button>
      </nav>
    </header>
  );
};
