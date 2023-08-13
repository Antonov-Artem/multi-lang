import { selectLang } from 'entities/lang';
import { useAppSelector } from 'shared/model';
import { LangSelect } from 'features/lang/select';
import { i18n } from '../i18n';

export const HomePage = () => {
  const lang = useAppSelector(selectLang);

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-5xl font-medium">{i18n[lang].greeting}, User!</h1>
      <LangSelect />
    </div>
  );
};
