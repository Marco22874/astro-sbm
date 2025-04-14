import { getCollection, getEntry, type CollectionEntry } from "astro:content";
import type { GetStaticPathsResult, Page } from "astro";

// Definiamo l'interfaccia qui così è riutilizzabile
export interface ProcessedNews {
  id: string;
  slug: string;
  data: CollectionEntry<"news">["data"];
  excerpt: string | null | undefined;
}

/**
 * Recupera le entry delle news per una data lingua, le ordina e
 * prepara i percorsi statici per la paginazione.
 */
export async function getPaginatedNewsPaths(
  lang: string,
  pageSize: number,
  paginate: Function
): Promise<GetStaticPathsResult> {
  // 1. Recupera TUTTE le entry delle news
  const allNews = await getCollection("news");

  // 2. Filtra per lingua e ordina per data
  const languageNewsEntries = allNews
    .filter((entry) => entry.id.startsWith(lang + "/"))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  console.log(
    `[Helper getPaginatedNewsPaths - ${lang}] Trovate ${languageNewsEntries.length} news. Paginazione con ${pageSize} per pagina.`
  );

  // 3. Usa paginate
  return paginate(languageNewsEntries, {
    pageSize: pageSize,
    // props: { lang: lang } // Potremmo passare la lingua come prop se servisse nel componente
  });
}

/**
 * Carica le categorie per una lingua e processa le news
 * della pagina corrente (aggiungendo l'excerpt).
 */
export async function getPageData(
  page: Page<CollectionEntry<"news">>,
  lang: string
): Promise<{
  processedPageData: ProcessedNews[];
  categoryMap: Map<string, string>;
  fetchError: Error | null;
}> {
  let processedPageData: ProcessedNews[] = [];
  let categoryMap = new Map<string, string>();
  let fetchError: Error | null = null;

  try {
    // Carica le categorie per la lingua specificata
    console.log(
      `[Helper getPageData - ${lang}/${page.currentPage}] Tentativo caricamento categorie.`
    );
    const categoryDataEntry = await getEntry("categories", lang);
    if (categoryDataEntry && Array.isArray(categoryDataEntry.data)) {
      categoryDataEntry.data.forEach((category) => {
        if (category && category.slug && category.title) {
          categoryMap.set(category.slug, category.title);
        }
      });
      console.log(
        `[Helper getPageData - ${lang}/${page.currentPage}] Mappa categorie caricata con ${categoryMap.size} voci.`
      );
    } else {
      console.warn(
        `[Helper getPageData - ${lang}/${page.currentPage}] File categorie non trovato o non è un array.`
      );
    }

    // Processa SOLO le news della pagina CORRENTE (page.data)
    if (page.data.length > 0) {
      processedPageData = await Promise.all(
        page.data.map(async (newsEntry) => {
          const rendered = await newsEntry.render(); // Ottieni excerpt ecc.
          return {
            id: newsEntry.id,
            slug: newsEntry.slug,
            data: newsEntry.data,
            excerpt: rendered.remarkPluginFrontmatter?.excerpt,
          };
        })
      );
      console.log(
        `[Helper getPageData - ${lang}/${page.currentPage}] Processate ${processedPageData.length} news.`
      );
    }
  } catch (error) {
    console.error(
      `--- ERRORE DETTAGLIATO IN Helper getPageData (${lang}/${page.currentPage}) ---`
    );
    console.error(error);
    console.error("--- FINE ERRORE DETTAGLIATO ---");
    fetchError = error instanceof Error ? error : new Error(String(error));
    processedPageData = []; // Assicura array vuoto in caso di errore
  }

  return { processedPageData, categoryMap, fetchError };
}
