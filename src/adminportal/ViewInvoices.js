import React from "react";
import{Link} from 'react-router-dom'

import { AiFillFileAdd } from 'react-icons/ai';
import Image from '../assets/img/working-office.png';
import Image2 from '../assets/img/vector-1.jpg';
import Image3 from '../assets/img/vector-2.png';



function ViewInvoices (){


    return (





<div class="container mx-auto px-4 sm:px-12">



<div>
      <h2 class="text-2xl font-semibold leading-tight">Summary</h2>
    </div>
  
  
<div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-2">


        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full" src={Image2}></img>
                </a>

                

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline  text-black" href="#">
                            Incomes for the month
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        updated: 12/12/22
                    </p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline  text-black" href="#">
                        
                        <p class="ml-2 text-m text-green-600">
                            R 2500.00
                        </p>
                    </a>
                </footer>

            </article>
            

        </div>
      
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            
<article class="overflow-hidden rounded-lg shadow-lg">


<a href="#">
        <img alt="Placeholder" class="block h-auto w-full" src={Image}></img>
    </a>

    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 class="text-lg">
            <a class="no-underline  text-black" href="#">
                Weekly Acc Income
            </a>
        </h1>
        <p class="text-grey-darker text-sm">
            updated: 12/12/22
        </p>
    </header>

    <footer class="flex items-center  leading-none p-2 md:p-4">
        <a class="flex items-center no-underline  text-black" href="#">
            <p class="ml-2 text-m text-green-600">
                R 2500.00
            </p>
        </a>
    </footer>

</article>


</div>

<div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            
<article class="overflow-hidden rounded-lg shadow-lg">

    <a href="#">
        <img alt="Placeholder" class="block h-auto w-full" src={Image3}></img>
    </a>

    <header class="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 class="text-lg">
            <a class="no-underline  text-black" href="#">
                Accumulated Incomes
            </a>
        </h1>
        <p class="text-grey-darker text-sm">
            updated: 12/12/22
        </p>
    </header>

    <footer class="flex items-center justify-between leading-none p-2 md:p-4">
        <a class="flex items-center no-underline  text-black" href="#">
            <p class="ml-2 text-m text-green-600">
                R 2500.00
            </p>
        </a>
    </footer>

</article>


</div>
        
     
    </div>
    </div>




    
  <div class="py-8 ">
    <div className="flex items-center gap-6">
      <h2 class="text-2xl font-semibold leading-tight">Room Listings</h2>
      <div className='flex items-center'>
          <Link
            className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
            to='/listings'
          >
            View Uploaded Lisitings
          </Link>
        </div>
    </div>
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div
        class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
      >
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Client / Invoice
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Amount
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Issued / Due
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex">
                  <div class="flex-shrink-0 w-10 h-10">
                    <img
                      class="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                      Molly Sanders
                    </p>
                    <p class="text-gray-600 whitespace-no-wrap">000004</p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">$20,000</p>
                <p class="text-gray-600 whitespace-no-wrap">USD</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">Sept 28, 2019</p>
                <p class="text-gray-600 whitespace-no-wrap">Due in 3 days</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                  class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                >
                  <span
                    aria-hidden
                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  ></span>
                  <span class="relative">Paid</span>
                </span>
              </td>
              <td
                class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
              >
                <button
                  type="button"
                  class="inline-block text-gray-500 hover:text-gray-700"
                >
                  <svg
                    class="inline-block h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex">
                  <div class="flex-shrink-0 w-10 h-10">
                    <img
                      class="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                      Michael Roberts
                    </p>
                    <p class="text-gray-600 whitespace-no-wrap">000003</p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">$214,000</p>
                <p class="text-gray-600 whitespace-no-wrap">USD</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">Sept 25, 2019</p>
                <p class="text-gray-600 whitespace-no-wrap">Due in 6 days</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                  class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                >
                  <span
                    aria-hidden
                    class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                  ></span>
                  <span class="relative">Paid</span>
                </span>
              </td>
              <td
                class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
              >
                <button
                  type="button"
                  class="inline-block text-gray-500 hover:text-gray-700"
                >
                  <svg
                    class="inline-block h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex">
                  <div class="flex-shrink-0 w-10 h-10">
                    <img
                      class="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                      Devin Childs
                    </p>
                    <p class="text-gray-600 whitespace-no-wrap">000002</p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">$20,000</p>
                <p class="text-gray-600 whitespace-no-wrap">USD</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">Sept 14, 2019</p>
                <p class="text-gray-600 whitespace-no-wrap">Due in 2 weeks</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                  class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight"
                >
                  <span
                    aria-hidden
                    class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                  ></span>
                  <span class="relative">Pending</span>
                </span>
              </td>
              <td
                class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
              >
                <button
                  type="button"
                  class="inline-block text-gray-500 hover:text-gray-700"
                >
                  <svg
                    class="inline-block h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            <tr>
              <td class="px-5 py-5 bg-white text-sm">
                <div class="flex">
                  <div class="flex-shrink-0 w-10 h-10">
                    <img
                      class="w-full h-full rounded-full"
                      src="https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                      Frederick Nicholas
                    </p>
                    <p class="text-gray-600 whitespace-no-wrap">000001</p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">$12,000</p>
                <p class="text-gray-600 whitespace-no-wrap">USD</p>
              </td>
              <td class="px-5 py-5 bg-white text-sm">
                <p class="text-gray-900 whitespace-no-wrap">Sept 6, 2019</p>
                <p class="text-gray-600 whitespace-no-wrap">
                  Due 3 weeks ago
                </p>
              </td>
              <td class="px-5 py-5 bg-white text-sm">
                <span
                  class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
                >
                  <span
                    aria-hidden
                    class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                  ></span>
                  <span class="relative">Overdue</span>
                </span>
              </td>
              <td class="px-5 py-5 bg-white text-sm text-right">
                <button
                  type="button" 
                  class="inline-block text-gray-500 hover:text-gray-700"
                >
                  <svg
                    class="inline-block h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    <a href="/addlisting"  className="float flex justify-center items-center">
    <AiFillFileAdd className="flex justify-center" />
</a>
  </div>
</div>
     
    )
}

export default ViewInvoices;