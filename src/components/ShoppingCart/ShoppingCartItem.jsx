export default function ShoppingCartItem(props) {
    const {
        coverImage,
        position,
        row,
        price
    } = props;

    return (
        <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center">
              <img src={coverImage} className="w-16 h-16 p-2 shrink-0 bg-gray-100" />
              <div className="ml-4">
                <p className="text-sm text-black">Sedadlo: {position}</p>
                <p className="text-gray-400 text-xs mt-1">Rad: {row}</p>
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold text-black mr-5">{price} €</span>
            </div>
        </div>
    );
} 