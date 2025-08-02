import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(0);

    useEffect(() => {
        fetchProductData();
    }, [id]);

    const fetchProductData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            if (!response.ok) {
                throw new Error('Product not found');
            }
            const data = await response.json();
            setProduct(data);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError(err.message);
            setLoading(false);
        }
    };

    // Custom shimmer component
    const ProductDetailShimmer = () => (
        <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                    {/* Product Images Shimmer */}
                    <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                        <div className="mb-4">
                            <div className="w-full h-96 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                        </div>
                        
                        {/* Image Gallery Shimmer */}
                        <div className="grid grid-cols-4 gap-2">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="w-full h-20 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info Shimmer */}
                    <div className="mt-6 sm:mt-8 lg:mt-0">
                        {/* Category Badge Shimmer */}
                        <div className="mb-2">
                            <div className="w-20 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                        </div>
                        
                        {/* Title Shimmer */}
                        <div className="mb-2">
                            <div className="w-3/4 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                        </div>
                        
                        {/* Brand Shimmer */}
                        <div className="mb-4">
                            <div className="w-32 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                        </div>

                        {/* Price and Rating Shimmer */}
                        <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                            <div className="flex items-center gap-2">
                                <div className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                <div className="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                            </div>

                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                <div className="flex items-center gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <div key={star} className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                    ))}
                                </div>
                                <div className="w-12 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                <div className="w-20 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                            </div>
                        </div>

                        {/* Availability Status Shimmer */}
                        <div className="mt-4">
                            <div className="w-24 h-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
                        </div>

                        {/* Buttons Shimmer */}
                        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                            <div className="w-40 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"></div>
                            <div className="w-32 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse mt-4 sm:mt-0"></div>
                        </div>

                        <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                        {/* Description Shimmer */}
                        <div className="mb-6">
                            <div className="w-32 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
                            <div className="space-y-2">
                                <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                <div className="w-5/6 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                            </div>
                        </div>

                        {/* Product Details Grid Shimmer */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            {[1, 2, 3, 4].map((item) => (
                                <div key={item}>
                                    <div className="w-16 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-1"></div>
                                    <div className="w-24 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                </div>
                            ))}
                        </div>

                        {/* Shipping & Warranty Shimmer */}
                        <div className="space-y-4 mb-6">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="flex items-start gap-3">
                                    <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mt-0.5"></div>
                                    <div>
                                        <div className="w-20 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-1"></div>
                                        <div className="w-48 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tags Shimmer */}
                        <div className="mb-6">
                            <div className="w-16 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
                            <div className="flex flex-wrap gap-2">
                                {[1, 2].map((tag) => (
                                    <div key={tag} className="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Reviews Section Shimmer */}
                <div className="mt-12">
                    <div className="w-48 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-6"></div>
                    <div className="space-y-4">
                        {[1, 2, 3].map((review) => (
                            <div key={review} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <div key={star} className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                            ))}
                                        </div>
                                        <div className="w-32 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                    </div>
                                    <div className="w-24 h-3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                                </div>
                                <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );

    if (loading) {
        return <ProductDetailShimmer />;
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Error</h2>
                    <p className="text-gray-600 dark:text-gray-400">{error}</p>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product Not Found</h2>
                    <p className="text-gray-600 dark:text-gray-400">The product you're looking for doesn't exist.</p>
                </div>
            </div>
        );
    }

    // Generate star rating display
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <svg key={i} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
            );
        }

        if (hasHalfStar) {
            stars.push(
                <svg key="half" className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <defs>
                        <linearGradient id="halfStar">
                            <stop offset="50%" stopColor="currentColor" />
                            <stop offset="50%" stopColor="#e5e7eb" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#halfStar)" d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
            );
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                </svg>
            );
        }

        return stars;
    };

    // Format date
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <section className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
                <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                        {/* Product Images */}
                        <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                            <div className="mb-4">
                                <img 
                                    className="w-full rounded-lg h-96 object-cover" 
                                    src={product.images && product.images[selectedImage] ? product.images[selectedImage] : product.thumbnail} 
                                    alt={product.title} 
                                />
                            </div>
                            
                            {/* Image Gallery */}
                            {product.images && product.images.length > 1 && (
                                <div className="grid grid-cols-4 gap-2">
                                    {product.images.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            className={`border-2 rounded-lg overflow-hidden ${
                                                selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                                            }`}
                                        >
                                            <img 
                                                src={image} 
                                                alt={`${product.title} ${index + 1}`} 
                                                className="w-full h-20 object-cover" 
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Product Info */}
                        <div className="mt-6 sm:mt-8 lg:mt-0">
                            <div className="mb-2">
                                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                                    {product.category}
                                </span>
                            </div>
                            
                            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white mb-2">
                                {product.title}
                            </h1>
                            
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                                Brand: <span className="font-medium text-gray-900 dark:text-white">{product.brand}</span>
                            </p>

                            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                <div className="flex items-center gap-2">
                                    <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                                        ${product.price}
                                    </p>
                                    {product.discountPercentage > 0 && (
                                        <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                                            {product.discountPercentage}% OFF
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                    <div className="flex items-center gap-1">
                                        {renderStars(product.rating)}
                                    </div>
                                    <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                                        ({product.rating})
                                    </p>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        • {product.stock} in stock
                                    </span>
                                </div>
                            </div>

                            {/* Availability Status */}
                            <div className="mt-4">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    product.availabilityStatus === 'In Stock' 
                                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                                }`}>
                                    {product.availabilityStatus}
                                </span>
                            </div>

                            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                                <a href="#" title="" className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" role="button">
                                    <svg className="w-5 h-5 -ms-2 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                                    </svg>
                                    Add to favorites
                                </a>

                                <a href="#" title="" className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center" role="button">
                                    <svg className="w-5 h-5 -ms-2 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
                                    </svg>
                                    Add to cart
                                </a>
                            </div>

                            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                            {/* Description */}
                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Description</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    {product.description}
                                </p>
                            </div>

                            {/* Product Details Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">SKU</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{product.sku}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Weight</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{product.weight}g</p>
                                </div>
                                {product.dimensions && (
                                    <>
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">Dimensions</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                {product.dimensions.width} × {product.dimensions.height} × {product.dimensions.depth} cm
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-gray-900 dark:text-white">Minimum Order</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{product.minimumOrderQuantity} units</p>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Shipping & Warranty */}
                            <div className="space-y-4 mb-6">
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">Shipping</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{product.shippingInformation}</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">Warranty</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{product.warrantyInformation}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                                    </svg>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">Return Policy</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{product.returnPolicy}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Tags */}
                            {product.tags && product.tags.length > 0 && (
                                <div className="mb-6">
                                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Tags</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {product.tags.map((tag, index) => (
                                            <span key={index} className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Reviews Section */}
                    {product.reviews && product.reviews.length > 0 && (
                        <div className="mt-12">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Customer Reviews</h3>
                            <div className="space-y-4">
                                {product.reviews.map((review, index) => (
                                    <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="flex items-center">
                                                    {renderStars(review.rating)}
                                                </div>
                                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                                    {review.reviewerName}
                                                </span>
                                            </div>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                {formatDate(review.date)}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            {review.comment}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default ProductDetail;