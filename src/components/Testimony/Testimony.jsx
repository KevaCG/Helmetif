const posts = [
    {
        id: 1,
        title: 'Excelente calidad y comodidad',
        href: '#',
        description:
            'Compré un casco de Helmetif para mi viaje por carretera y estoy impresionado. La calidad y la comodidad son incomparables. ¡Definitivamente recomendaré esta marca a todos mis amigos motociclistas!',
        date: 'Mar 15, 2024',
        datetime: '2020-03-16',
        category: { title: 'Calidad y Comodidad', href: '#' },
        author: {
            name: 'Santiago García',
            role: 'Cliente',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    },
    {
        id: 2,
        title: 'Servicio al cliente excepcional',
        href: '#',
        description:
            'Experimenté un problema con la talla de mi casco y el equipo de atención al cliente de [Nombre de la Empresa] fue increíblemente servicial y rápido para resolverlo. ¡Gracias por un servicio al cliente excepcional!',
        date: 'Abr 2, 2024',
        datetime: '2020-03-16',
        category: { title: 'Servicio al Cliente', href: '#' },
        author: {
            name: 'Olivia Patel',
            role: 'Cliente',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    },
    {
        id: 3,
        title: 'Estilo y seguridad perfectamente combinados',
        href: '#',
        description:
            'Siempre he buscado un casco que ofrezca tanto estilo como seguridad. ¡Con [Nombre de la Empresa], finalmente lo encontré! Estoy enamorado del diseño de mi casco y me siento seguro en cada viaje.',
        date: 'Feb 20, 2024',
        datetime: '2020-03-16',
        category: { title: 'Estilo y Seguridad', href: '#' },
        author: {
            name: 'Javier López',
            role: 'Cliente',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    },
]

export default function Testimony() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Testimonios</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Ahora testimonios de unos cuantos de nuestros clientes ¿Que esperas para ser parte de esta comunidad?
                    </p>
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="flex items-center gap-x-4 text-xs">
                                <time dateTime={post.datetime} className="text-gray-500">
                                    {post.date}
                                </time>
                                <a
                                    href={post.category.href}
                                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                >
                                    {post.category.title}
                                </a>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <a href={post.href}>
                                        <span className="absolute inset-0" />
                                        {post.title}
                                    </a>
                                </h3>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <a href={post.author.href}>
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        </a>
                                    </p>
                                    <p className="text-gray-600">{post.author.role}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
