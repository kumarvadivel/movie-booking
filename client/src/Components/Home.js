import React from 'react';

const Home = ()=>(
    <div className='container fluid'>
        <div className='col'>
            <h2>Welcome to Bookmymovies</h2>
            <p>book my movies is a online movie booking prototype which has the feture of booking movie</p>
        </div>
        <div className='col'>
            <h2>Tech stack</h2>
            <ul>
                <li>Mango db for database</li>
                <li>Express for restful Routes</li>
                <li>React and context api for front end and state management</li>
                <li>Node js for backend </li>
            </ul>
        </div>
    </div>
)

export default Home;