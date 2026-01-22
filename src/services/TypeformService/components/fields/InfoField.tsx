import type { StepConfig } from '../../types';

interface InfoFieldProps {
  config: StepConfig;
  onSubmit: () => void;
}

export function InfoField({ config, onSubmit }: InfoFieldProps) {
  // Информационный экран не имеет поля ввода
  // Просто показываем контент и позволяем идти дальше
  return (
    <div className="w-full">
      {/* Дополнительный контент может быть в description */}
      {/* Основной текст уже показан в StepScreen через question/description */}
    </div>
  );
}
