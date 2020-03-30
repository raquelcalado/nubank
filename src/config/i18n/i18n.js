import I18n from 'react-native-i18n';
import ptBr from './locales/ptBr';
import en from './locales/en';

I18n.defaultLocale = 'ptBr';

I18n.fallbacks = true;

I18n.translations = {
  ptBr,
  en,
};

export default I18n;
