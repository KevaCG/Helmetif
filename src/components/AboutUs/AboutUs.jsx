import enanosAlbinos from '../../assets/video/enanosAlbinos.mp4'

const stats = [
    { name: '3', value: 'Fundadores' },
    { name: '50+', value: 'Cascos para elegir' },
    { name: '5 Estrellas', value: 'Calidad' },
    { name: 'Opciones', value: 'Inifitas' },
]

export default function AboutUs() {
    return (
        <div  className="mt-10 relative isolate overflow-hidden bg-stone-950 py-24 sm:py-32">
            <video muted autoPlay loop className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center">
                <source src={enanosAlbinos} type="video/mp4" />
            </video>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Sobre Nosotros</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                    tu destino para cascos de motocicleta excepcionales. Con una amplia gama de diseños innovadores y tecnología de vanguardia, garantizamos seguridad, estilo y comodidad en cada viaje. Únete a nosotros y protege tu pasión con confianza.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.name} className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
