import React from "react";
import Image from "next/image";

export default function Tiles() {
    return (
        <div className="grid grid-cols-4 gap-6 p-50">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image
                src="/images/drinks/bs-mt.webp"
                width={234}
                height={234}
                className="w-full"
                alt="Brown Sugar Milk Tea"/>
            <div className="px-3 pb-4 pt-4 bg-orange-100">
                <div className="font-black text-base mb-2 text-center uppercase">Brown Sugar Milk Tea</div>
                <p className="text-stone-500 text-base text-center font-light text-base p-2 w-50 h-30">
                    Black milk tea made with non-dairy creamer, sweetened and drizzled with caramelized brown sugar.
                </p>
                <p className="text-gray-700 text-base text-center pt-6">
                    $6.25
                </p>
            </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image
                src="/images/drinks/classic-mt.webp"
                width={234}
                height={234}
                className="w-full"
                alt="Classic Milk Tea"/>
            <div className="px-3 pb-4 pt-4 bg-orange-100">
                <div className="font-black text-base mb-2 text-center uppercase">Classic Milk Tea</div>
                <p className="text-stone-500 text-base text-center font-light text-base p-2 w-50 h-30">
                    Plain and simple black milk tea made with non-dairy creamer.
                </p>
                <p className="text-gray-700 text-base text-center pt-6">
                    $6.25
                </p>
            </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image
                src="/images/drinks/jasmine-mt.webp"
                width={234}
                height={234}
                className="w-full"
                alt="Jasmine Milk Tea"/>
            <div className="px-3 pb-4 pt-4 bg-orange-100">
                <div className="font-black text-base mb-2 text-center uppercase">Jasmine Milk Tea</div>
                <p className="text-stone-500 text-base text-center font-light text-base p-2 w-50 h-30">
                    Green tea brewed with a slightly floral aroma made with our non-dairy creamer house milk.
                </p>
                <p className="text-gray-700 text-base text-center pt-6">
                    $6.25
                </p>
            </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image
                src="/images/drinks/thai-kick.webp"
                width={234}
                height={234}
                className="w-full"
                alt="Thai Kick"/>
            <div className="px-3 pb-4 pt-4 bg-orange-100">
                <div className="font-black text-base mb-2 text-center uppercase">Thai Kick</div>
                <p className="text-stone-500 text-base text-center font-light text-base p-2 w-50 h-30">
                    Thai milk tea with a hint of cold brew coffee.
                </p>
                <p className="text-gray-700 text-base text-center pt-6">
                    $6.25
                </p>
            </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image
                src="/images/drinks/taro-mt.webp"
                width={234}
                height={234}
                className="w-full"
                alt="Taro Milk Tea"/>
            <div className="px-3 pb-4 pt-4 bg-orange-100">
                <div className="font-black text-base mb-2 text-center uppercase">Taro Milk Tea</div>
                <p className="text-stone-500 text-base text-center font-light text-base p-2 w-50 h-30">
                    Slightly floral and bitter green milk tea paired with taro.
                </p>
                <p className="text-gray-700 text-base text-center pt-6">
                    $6.25
                </p>
            </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image
                src="/images/drinks/wintermelon-mt.webp"
                width={234}
                height={234}
                className="w-full"
                alt="Wintermelon Milk Tea"/>
            <div className="px-3 pb-4 pt-4 bg-orange-100">
                <div className="font-black text-base mb-2 text-center uppercase">Wintermelon Milk Tea</div>
                <p className="text-stone-500 text-base text-center font-light text-base p-2 w-50 h-30">
                    Caramel-like flavor of wintermelon makes a sweet milk tea.
                </p>
                <p className="text-gray-700 text-base text-center pt-6">
                    $6.25
                </p>
            </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image
                src="/images/drinks/honeydew-mt.webp"
                width={234}
                height={234}
                className="w-full"
                alt="Honeydew Milk Tea"/>
            <div className="px-3 pb-4 pt-4 bg-orange-100">
                <div className="font-black text-base mb-2 text-center uppercase">Honeydew Milk Tea</div>
                <p className="text-stone-500 text-base text-center font-light text-base p-2 w-50 h-30">
                    Green milk tea with honeydew.
                </p>
                <p className="text-gray-700 text-base text-center pt-6">
                    $6.25
                </p>
            </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image
                src="/images/drinks/rose-mt.webp"
                width={234}
                height={234}
                className="w-full"
                alt="Rose Milk Tea"/>
            <div className="px-3 pb-4 pt-4 bg-orange-100">
                <div className="font-black text-base mb-2 text-center uppercase">Rose Milk Tea</div>
                <p className="text-stone-500 text-base text-center font-light text-base p-2 w-50 h-30">
                    Strong floral milk tea complimented with rose.
                </p>
                <p className="text-gray-700 text-base text-center pt-6">
                    $6.25
                </p>
            </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image
                src="/images/drinks/tea-float.webp"
                width={234}
                height={234}
                className="w-full"
                alt="Thai Float"/>
            <div className="px-3 pb-4 pt-4 bg-orange-100">
                <div className="font-black text-base mb-2 text-center uppercase">Thai Float</div>
                <p className="text-stone-500 text-base text-center font-light text-base p-2 w-50 h-30">
                    Ice cream mixed with strong tea makes an extra tasty milk tea.
                </p>
                <p className="text-gray-700 text-base text-center pt-6">
                    $6.25
                </p>
            </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image
                src="/images/drinks/thai-mt.webp"
                width={234}
                height={234}
                className="w-full"
                alt="Thai Milk Tea"/>
            <div className="px-3 pb-4 pt-4 bg-orange-100">
                <div className="font-black text-base mb-2 text-center uppercase">Thai Milk Tea</div>
                <p className="text-stone-500 text-base text-center font-light text-base p-2 w-50 h-30">
                    Our strongly-brewed Thai milk tea mixed with our non-dairy house milk is a classic favorite.
                </p>
                <p className="text-gray-700 text-base text-center pt-6">
                    $6.25
                </p>
            </div>
            </div>
        </div>
    )
}
