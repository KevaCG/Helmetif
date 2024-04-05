import products from '../../assets/data/DATA.json'

export default function Products() {
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="mb-10 text-3xl font-bold tracking-tight text-gray-900 text-center">Nuestros Cascos</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.imgUrl}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.nombre}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.referencia}</p>
                                </div>
                                <p className="text-sm font-medium text-green-600">{product.precio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
