"use client"
import Link from 'next/link'
import React from 'react'

const Tabs = () => {
    const tabs = [
        {
            name: "En Populyar",
            url: 'popular'
        },
        {
            name: "En Son",
            url: 'latest'
        },
        {
            name: "Yaxinda Gelecekler",
            url: 'upcoming'
        },
    ]
  return (
    <div className='p-5 my-5 bg-gray-100 dark:bg-gray-800 flex items-center justify-center gap-7'>
        {
            tabs.map((tab,i) => {
                <Link className='cursor-pointer hover:opacity-75 transition-opacity' key={i} href={``}>{tab.name}</Link>
            })
        }
    </div>
  )
}

export default Tabs