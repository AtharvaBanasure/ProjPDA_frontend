import React from 'react'
import { formatISO9075 } from "date-fns"
import { Link } from 'react-router-dom'

function PostComp({ _id, title, description, image, createdAt }) {
    return (
        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div
                class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">

                <Link to={`/post/${_id}`}>
                    <img src={`data:image/jpeg;base64,${image}`} alt={title} />
                </Link>
            </div>


            <div class="p-6">
                <Link to={`/post/${_id}`}>
                    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {title}
                    </h5>
                </Link>


                <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    {description}
                </p>
                <p class="pt-2 block font-sans underline text-sm antialiased font-light leading-relaxed text-inherit italic">
                    <time>{formatISO9075(new Date(createdAt))}</time>
                </p>
            </div>
            <div class="p-6 pt-0">
                <Link to={`/post/${_id}`}>
                    <button
                        class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button">
                        Read More
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default PostComp
