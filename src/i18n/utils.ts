import { labels, pageLabels, languages } from "./ui";

const defaultLang = "it";

type LangCode = keyof typeof languages;

type TranslationKey =
  | keyof (typeof labels)[typeof defaultLang]
  | keyof (typeof pageLabels)[typeof defaultLang];

export function useTranslations(lang: string | undefined) {
  // Determina la lingua effettiva da usare (quella passata o la default)
  const effectiveLang =
    lang && lang in languages ? (lang as LangCode) : defaultLang;

  // Restituisce la funzione 't' che ora cerca in entrambi gli oggetti
  return function t(key: TranslationKey): string {
    // 3. Logica di lookup modificata:
    //    Prova prima pageLabels, poi labels.
    //    Prima nella lingua corrente, poi nella lingua di default come fallback.

    let translation: string | undefined;

    // a. Cerca in pageLabels nella lingua corrente
    translation =
      pageLabels[effectiveLang]?.[key as keyof (typeof pageLabels)[LangCode]];
    if (translation !== undefined) {
      return translation;
    }

    // b. Cerca in labels nella lingua corrente
    translation =
      labels[effectiveLang]?.[key as keyof (typeof labels)[LangCode]];
    if (translation !== undefined) {
      return translation;
    }

    // c. Fallback: Cerca in pageLabels nella lingua di default (solo se diversa da quella corrente)
    if (effectiveLang !== defaultLang) {
      translation =
        pageLabels[defaultLang]?.[key as keyof (typeof pageLabels)[LangCode]];
      if (translation !== undefined) {
        return translation;
      }
    }

    // d. Fallback: Cerca in labels nella lingua di default
    //    (Questo copre sia il caso in cui la lingua corrente sia la default,
    //     sia il caso in cui non abbiamo trovato nulla nei fallback precedenti)
    translation = labels[defaultLang]?.[key as keyof (typeof labels)[LangCode]];
    if (translation !== undefined) {
      return translation;
    }

    // e. Se non trovato da nessuna parte, ritorna la chiave stessa e logga un warning
    console.warn(
      `Chiave di traduzione "${key}" non trovata per la lingua "${effectiveLang}" o default "${defaultLang}".`
    );
    return key;
  };
}
