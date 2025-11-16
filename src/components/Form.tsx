import { useState, useMemo } from 'react';
import { Feriado, type FeriadoProps } from './Feriado';

const states = [
  { acronym: 'AC', name: 'Acre' },
  { acronym: 'AL', name: 'Alagoas' },
  { acronym: 'AP', name: 'Amapá' },
  { acronym: 'AM', name: 'Amazonas' },
  { acronym: 'BA', name: 'Bahia' },
  { acronym: 'CE', name: 'Ceará' },
  { acronym: 'DF', name: 'Distrito Federal' },
  { acronym: 'ES', name: 'Espírito Santo' },
  { acronym: 'GO', name: 'Goiás' },
  { acronym: 'MA', name: 'Maranhão' },
  { acronym: 'MT', name: 'Mato Grosso' },
  { acronym: 'MS', name: 'Mato Grosso do Sul' },
  { acronym: 'MG', name: 'Minas Gerais' },
  { acronym: 'PA', name: 'Pará' },
  { acronym: 'PB', name: 'Paraíba' },
  { acronym: 'PR', name: 'Paraná' },
  { acronym: 'PE', name: 'Pernambuco' },
  { acronym: 'PI', name: 'Piauí' },
  { acronym: 'RJ', name: 'Rio de Janeiro' },
  { acronym: 'RN', name: 'Rio Grande do Norte' },
  { acronym: 'RS', name: 'Rio Grande do Sul' },
  { acronym: 'RO', name: 'Rondônia' },
  { acronym: 'RR', name: 'Roraima' },
  { acronym: 'SC', name: 'Santa Catarina' },
  { acronym: 'SP', name: 'São Paulo' },
  { acronym: 'SE', name: 'Sergipe' },
  { acronym: 'TO', name: 'Tocantins' },
];

export function Form() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [state, setState] = useState('SP');
  const [holidays, setHolidays] = useState<FeriadoProps[]>([]);
  const [levelFilter, setLevelFilter] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const token = import.meta.env.VITE_API_TOKEN;
    const url = `https://api.invertexto.com/v1/holidays/${year}?token=${token}&state=${state}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Erro ao buscar feriados');
      }
      const data = await response.json();
      setHolidays(data);
      setLevelFilter('');
    } catch (error) {
      console.error(error);
    }
  };

  const levels = useMemo(() => {
    const uniqueLevels = new Set(holidays.map(h => h.level));
    return Array.from(uniqueLevels);
  }, [holidays]);

  const filteredHolidays = useMemo(() => {
    if (!levelFilter) {
      return holidays;
    }
    return holidays.filter(h => h.level === levelFilter);
  }, [holidays, levelFilter]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-4">
        <div className="mb-4">
          <label htmlFor="year" className="block text-gray-700 text-sm font-bold mb-2">
            Ano
          </label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">
            Estado
          </label>
          <select
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            {states.map((state) => (
              <option key={state.acronym} value={state.acronym}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Buscar
        </button>
      </form>

      {holidays.length > 0 && (
        <div className="p-4">
          <div className="mb-4">
            <label htmlFor="levelFilter" className="block text-gray-700 text-sm font-bold mb-2">
              Filtrar por Nível
            </label>
            <select
              id="levelFilter"
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Todos</option>
              {levels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {filteredHolidays.map((holiday) => (
              <div key={holiday.date} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3">
                <Feriado {...holiday} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
