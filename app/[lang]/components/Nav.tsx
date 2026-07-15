import Link from 'next/link';
import {getDictionary, hasLocale} from "@/app/lib/getDictionary";
import {notFound} from "next/navigation";

export default function Nav({params}: PageProps<'/[lang]'>){

    const { lang }= await params;

    if (!hasLocale(lang)) {
        return notFound()
    }

    const dict = await getDictionary(lang);

    if (lang ==="es"){
        <nav>
            <ul>
                <li>
                    <Link href="/">Página Principal</Link>
                    <Link href="/nosotros">Sobre Nosotros</Link>
                    <Link href="/mission">Nuestra Misión</Link>
                    <Link href="/colaboraciones">Colaboraciones</Link>
                    <Link href="/equipo">El Equipo</Link>
                    <Link href="/galeria">Galería</Link>
                    <Link href="/contactos">Contactanos</Link>
                </li>
            </ul>
        </nav>
    }else{
        return (
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/mission">Mission</Link>
                        <Link href="/collabs">Collaborations</Link>
                        <Link href="/team">Team</Link>
                        <Link href="/gallery">Gallery</Link>
                        <Link href="/contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        )
    }

}