import { notFound } from "next/navigation";
import {getDictionary, hasLocale} from "@/app/lib/getDictionary";

export default async function Home({params}: PageProps<'/[lang]'>) {
    const { lang }= await params;

    if (!hasLocale(lang)) {
        return notFound()
    }

    const dict = await getDictionary(lang);

    return (
        <header>{dict.home.title}</header>
    );
}
