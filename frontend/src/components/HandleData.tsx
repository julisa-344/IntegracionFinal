import { SocialNetwork, UserHandle } from "../types"
import { motion } from 'framer-motion'

type HandleDataProps = {
    data: UserHandle
}
export default function HandleData({ data }: HandleDataProps) {

    const links: SocialNetwork[] = JSON.parse(data.links).filter((link: SocialNetwork) => link.enabled)

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-slate-800 dark:text-white"
        >
            <p className="text-5xl text-center font-black">{data.handle}</p>
            {data.image && <img src={data.image} className="max-w-[250px] mx-auto" />}

            <p className="text-lg text-center font-bold">{data.description}</p>

            <div className="text-center bg-slate-200/50 dark:bg-white/10 rounded-lg p-3 max-w-sm mx-auto">
                <p className="text-sm opacity-75">Visitas al perfil</p>
                <p className="text-3xl font-bold">{data.profileViews}</p>
            </div>

            <div className="mt-20 flex flex-col gap-6">
                {links.length ?  
                    links.map((link) => (
                            <motion.a
                                key={link.name}
                                className="bg-white dark:bg-slate-800 px-5 py-2 flex items-center gap-5 rounded-lg border border-slate-200 dark:border-none shadow-sm transition-colors cursor-pointer hover:border-cyan-500 hover:shadow-cyan-100 dark:hover:shadow-none"
                                href={link.url}
                                target="_blank"
                                rel="noreferrer noopener"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <img src={`/social/icon_${link.name}.svg`} alt="imagen red social" className="w-12" />
                                <p className="text-black dark:text-white capitalize font-bold text-lg">Visita mi: {link.name}</p>
                            </motion.a>
                    ))
                : <p className="text-center">No hay enlaces en este perfil</p>}
            </div>

        </motion.div>
    )
}
