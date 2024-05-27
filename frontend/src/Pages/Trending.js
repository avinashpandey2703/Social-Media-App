import React from 'react'
import Sidebar from '../component/Sidebar'
import trendings from '../constant'

function Trending() {
    return (
        <div className="container mt-2">
            <div className="row ms-md-2 ps-md-5 " >
                <Sidebar />
                <div className="col-md-9 bg-body-secondary" id='section1'>
                    <div className='d-flex justify-content-between mt-2'>
                        <h3 className='fw-bold ms-md-5 ps-md-3'>Twitters for You </h3>
                        <button className='btn btn-dark tweetbtn w-25 fw-bold fs-5' style={{ marginRight: "3rem" }} data-bs-toggle="modal" data-bs-target="#twitterModel">Tweet</button>
                    </div>
                    <div className="card w-100 mt-2 ">
                        <div className='bg-primary-subtle'>
                            <section className='hidden rightsidebar lg:block bg-dark_soul h-screen w-[360px] border-x-2 border-slate-900'>
                                <div className='py-8'>
                                    <ul className='list-group list-group-flush bg-[#16181c] py-4 rounded-md'>
                                        <li className='list-group-item px-md-4 mb-4'>
                                            <h3 className='text-pure_soul font-bold text-md'>What's happening</h3>
                                        </li>
                                        {trendings.map((trend, idx) => (
                                            <li
                                                key={idx}
                                                className='list-group-item flex items-center justify-between py-2 px-md-4 bg-transparent hover:bg-neutral-950/50'
                                            >
                                                <h5 className='text-slate-400 text-xs'>{trend.category}</h5>
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
                                                <hr />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending