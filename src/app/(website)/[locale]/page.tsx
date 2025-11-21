import { Locale } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type PageProps = Promise<{
  locale: string;
}>

export default async function Page({ params }: { params: PageProps }) {
  const { locale } = await params;
  if (!locale) {
    throw new Error("Locale not found")
  }

  // Enable static rendering
  setRequestLocale(locale as Locale);

  const t = await getTranslations("thirukkural")

  return (
    <p className="max-w-[590px]">
      {t("name")} - {t("title")}
    </p>
  );
}