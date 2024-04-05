const posts = [
    {
        id: 1,
        title: '¿Que hacen?',
        href: '#',
        description:
            'Somos una empresa dedicada a la fabricación y venta de cascos de motocicleta. Nos esforzamos por proporcionar productos de alta calidad que garanticen la seguridad y el estilo de nuestros clientes en cada viaje.',
        date: 'Mar 16, 2024',
        datetime: '2020-03-16',
        category: { title: 'Dudas', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: '¿Que fiabilidad tienen sus productos?',
        href: '#',
        description:
            'Nuestros productos tienen una fiabilidad excepcional. Nos comprometemos a utilizar materiales de primera calidad y a cumplir o superar los estándares de seguridad internacionales en todos nuestros cascos de motocicleta. La seguridad y la confiabilidad son nuestras principales prioridades.',
        date: 'Abr 24, 2024',
        datetime: '2020-03-16',
        category: { title: 'Dudas', href: '#' },
        author: {
            name: 'Daniel Martínez',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    },
    {
        id: 3,
        title: '¿Qué medidas tomamos para garantizar la satisfacción del cliente?',
        href: '#',
        description:
            'Implementamos un estricto control de calidad, ofrecemos políticas de devolución flexibles y recopilamos comentarios regulares para garantizar la satisfacción del cliente en todo momento.',
        date: 'Jun 1, 2023',
        datetime: '2020-03-16',
        category: { title: 'Dudas', href: '#' },
        author: {
            name: 'Ana Rodríguez',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1558898479-33c0057a5d12?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    },
]

export default function Faqs() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Preguntas Frecuentes</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Gracias a estas preguntas podemos mejorar de manera constante ¿Que tienes para contarnos?
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
