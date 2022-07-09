import axios from "axios";
import { useQuery } from "react-query";

interface ILanguage {
  name: string;
  url: string;
}
interface IEffectEntries {
  effect: string;
  language: ILanguage;
  short_effect: string;
}
interface IPokeAbility {
  effect_entries: Array<IEffectEntries>;
}

interface IUseGetAbility {
  data: IPokeAbility;
  loading: boolean;
  error: boolean;
}
export const useGetAbility = (url: string, name: string): IUseGetAbility => {
  const ability = useQuery(`pokeab-${name}`, async () => {
    return await axios.get(url);
  });
  return {
    data: ability.data?.data,
    loading: ability.isLoading,
    error: ability.isError,
  };
};
