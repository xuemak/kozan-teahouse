import React from "react";

export default function BobaTile({ Drink Name, Image, Price, Description }) {
    return (
        <div className="bobatile">
            <Image
                src={Image}
                width={234}
                height={234}
                className="w-full"
                alt={Drink Name}
            />
            <div className="px-3 pb-4 pt-4 bg-orange-100">
                <div className="font-black text-base mb-2 text-center uppercase">{Drink Name}</div>
                <p className="text-stone-500 text-base text-center font-light text-base p-2 w-50 h-30">
                    {Description}
                </p>
                <p className="text-gray-700 text-base text-center pt-6">
                    {Price}
                </p>
            </div>
        </div>
    )
}
