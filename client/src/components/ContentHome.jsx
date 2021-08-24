import React from "react";

export default function ContentHome(props) {
    console.log(props.attraction);
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container  py-24 mx-auto flex flex-wrap">
                    <div class="flex w-full mb-20 flex-wrap">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
                        <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.
                        </p>
                    </div>
                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/2">
                            <div class="md:p-2 p-1 w-1/2 rounded-lg">
                                <img alt="gallery" class="w-full object-cover h-56 object-center block rounded-lg" src={props.attraction[0].image} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2 rounded-lg">
                                <img alt="gallery" class="w-full object-cover h-56 object-center block rounded-lg" src={props.attraction[1].image} />
                            </div>
                            <div class="md:p-2 p-1 w-full rounded-lg">
                                <img alt="gallery" class="w-full object-cover h-96 object-center block rounded-lg" src={props.attraction[2].image} />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2 ">
                            <div class="md:p-2 p-1 w-full rounded-lg">
                                <img alt="gallery" class="w-full object-cover h-96 object-center block rounded-lg" src={props.attraction[3].image} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2 rounded-lg">
                                <img alt="gallery" class="w-full object-cover h-56 object-center block rounded-lg" src={props.attraction[4].image} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2 rounded-lg">
                                <img alt="gallery" class="w-full object-cover h-56 object-center block rounded-lg" src={props.attraction[5].image} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
