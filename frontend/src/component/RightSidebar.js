import React from 'react'
import trendings from '../constant'

function RightSidebar() {
    return (
        <div className='col-md-3 bg-primary-subtle'>
            <section className='hidden rightsidebar lg:block bg-dark_soul h-screen w-[360px] border-x-2 border-slate-900'>
                <div className='py-8'>
                    <ul className='bg-[#16181c] py-4 rounded-md'>
                        <li className='px-md-4 mb-4'>
                            <h3 className='text-pure_soul font-bold text-md'>What's happening</h3>
                        </li>
                        {trendings.map((trend, idx) => (
                            <li
                                key={idx}
                                className='flex items-center justify-between py-2 px-md-4 bg-transparent hover:bg-neutral-950/50'
                            >
                                <div>
                                    <h5 className='text-slate-400 text-xs'>{trend.category}</h5>
                                    <div>
                                        <span>
                                            {trend.image && (
                                                <img
                                                    src={trend.image}
                                                    className='object-cover rounded-md'
                                                />
                                            )}
                                        </span>
                                        <span className='text-bold text-slate-100 text-sm leading-[1.2]'>
                                            {trend.hashtag}
                                        </span>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default RightSidebar