import { Calendar, Tag, Flag } from "lucide-react";

export interface FeriadoProps {
  date: string;
  name: string;
  type: string;
  level: string;
}

export function Feriado({ date, name, type, level }: FeriadoProps) {
  const formatDate = (dateString: string) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  const capitalizeFirstLetter = (str: string) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const displayType = capitalizeFirstLetter(type);
  const displayLevel = capitalizeFirstLetter(level);

  const getTypeColor = (currentType: string) => {
    const colors: Record<string, string> = {
      Feriado: "from-blue-500 to-blue-600",
      Estadual: "from-purple-500 to-purple-600",
      Municipal: "from-pink-500 to-pink-600",
      Ponte: "from-amber-500 to-amber-600",
      Recesso: "from-emerald-500 to-emerald-600",
    };
    return colors[currentType] || "from-indigo-500 to-indigo-600";
  };

  const getLevelBadge = (currentLevel: string) => {
    const badges: Record<string, string> = {
      Nacional: "bg-red-100 text-red-700",
      Estadual: "bg-blue-100 text-blue-700",
      Municipal: "bg-green-100 text-green-700",
    };
    return badges[currentLevel] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="group relative mb-4 overflow-hidden rounded-2xl bg-linear-to-br from-white to-gray-50 p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200">
      {/* Efeito de fundo decorativo */}
      <div
        className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-linear-to-br ${getTypeColor(
          displayType
        )} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
      ></div>

      <div className="relative z-10">
        {/* Cabeçalho com título e badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3 flex-1">
            <div
              className={`p-2 rounded-lg bg-gradient-to-br ${getTypeColor(
                displayType
              )} text-white shadow-md`}
            >
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{name}</h3>
              <p className="text-xs text-gray-500 font-medium">{formatDate(date)}</p>
            </div>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelBadge(
              displayLevel
            )}`}
          >
            {displayLevel}
          </span>
        </div>

        {/* Informações */}
        <div className="space-y-3 border-t border-gray-100 pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-600">
              <Tag className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium">Tipo</span>
            </div>
            <span className="text-sm font-semibold text-gray-800">{displayType}</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-600">
              <Flag className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium">Abrangência</span>
            </div>
            <span className="text-sm font-semibold text-gray-800">{displayLevel}</span>
          </div>
        </div>
      </div>

      {/* Linha decorativa no rodapé */}
      <div
        className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${getTypeColor(
          displayType
        )} group-hover:w-full transition-all duration-500`}
      ></div>
    </div>
  );
}

