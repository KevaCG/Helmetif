const callouts = [
    {
        name: 'Integrales',
        description: 'Ideal para cualquier tipo de motocicleta, buscados para competición y seguridad',
        imageSrc: 'https://inducascos.vtexassets.com/arquivos/ids/1489727-800-auto?v=638460279583300000&width=800&height=auto&aspect=true',
        imageAlt: 'Integrales',
        href: '#',
    },
    {
        name: 'Abatibles',
        description: 'Ideales para todos los usos, pensados para una mayor comodidad',
        imageSrc: 'https://inducascos.vtexassets.com/arquivos/ids/1397274-800-auto?v=638295393688500000&width=800&height=auto&aspect=true',
        imageAlt: 'Abatibles.jpg',
        href: '#',
    },
    {
        name: 'Abiertos',
        description: 'Para manejo urbano',
        imageSrc: 'https://inducascos.vtexassets.com/arquivos/ids/1499482-800-auto?v=638477596953430000&width=800&height=auto&aspect=true',
        imageAlt: 'Abiertos',
        href: '#',
    },
    {
        name: 'Multiproposito',
        description: 'Pensados para todo tipo de situacion',
        imageSrc: 'https://inducascos.vtexassets.com/arquivos/ids/1473814-800-auto?v=638421547393830000&width=800&height=auto&aspect=true',
        imageAlt: 'Multiproposito',
        href: '#',
    },
    {
        name: 'Cross',
        description: 'Pensados para la aventura Off-Road',
        imageSrc: 'https://inducascos.vtexassets.com/arquivos/ids/1415538-800-auto?v=638303067386200000&width=800&height=auto&aspect=true',
        imageAlt: 'Cross',
        href: '#',
    },
    {
        name: 'Modulares',
        description: 'Pensados para manejar con estilo',
        imageSrc: 'https://inducascos.vtexassets.com/arquivos/ids/1294143-800-auto?v=638242783901370000&width=800&height=auto&aspect=true',
        imageAlt: 'Modulares',
        href: '#',
    },
]

export default function Categories() {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900">Categorias</h2>

                    <div className="mt-3 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative mb-10">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-700">
                                    <a href={callout.href}>
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </a>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
