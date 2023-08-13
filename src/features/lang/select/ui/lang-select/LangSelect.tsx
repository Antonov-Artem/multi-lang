import {
  Portal,
  Select,
  SelectOption,
  SelectTrigger,
  SelectContent,
  SelectPositioner,
} from '@ark-ui/react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/model';
import { Lang, langs, select, selectLang } from 'entities/lang';

export const LangSelect = () => {
  const dispatch = useAppDispatch();
  const lang = useAppSelector(selectLang);
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState('English');

  const change = (e: { value: string; label: string } | null) => {
    setOption(e?.label as string);

    dispatch(select(e?.value as Lang));
  };

  const toggle = () => setOpen(!open);

  return (
    <Select
      selectedOption={{ value: lang, label: 'English' }}
      onOpen={toggle}
      onClose={toggle}
      onChange={change}
    >
      <SelectTrigger
        className="
          py-2
          px-3
          w-36 
          flex
          justify-between
          border
          rounded-md
          border-zinc-300
          focus:border-green-500
        "
      >
        <span>{option}</span>
        <span>{open ? '⮝' : '⮟'}</span>
      </SelectTrigger>
      <Portal>
        <SelectPositioner>
          <SelectContent
            className="
              py-2
              w-36
              border
              rounded-md
              border-zinc-300
            "
          >
            {langs.map(lang => (
              <SelectOption
                value={lang.abb}
                label={lang.title}
                className="
                  py-2
                  px-3
                  cursor-pointer 
                  bg-white 
                  hover:bg-zinc-100
                "
              >
                {lang.title}
              </SelectOption>
            ))}
          </SelectContent>
        </SelectPositioner>
      </Portal>
    </Select>
  );
};
