import formatPrice from "@/lib/db/format";

interface PriceTagProsps {
    price: number,
    className?: string,
};

export default function PriceTag({price,className}:PriceTagProsps){
    return <span className={`${className}`}>
        {formatPrice(price)}
    </span>
}