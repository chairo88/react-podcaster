import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import './styles/app.scss';

import Home from './routes/home';
import Podcast from './routes/podcast';
import Episode from './routes/episode';
import { PodcastsProvider } from './context/podcasts';
import { AppContextProvider } from './context/app';

function App() {  
  return (
    <AppContextProvider>
      <PodcastsProvider>
        <BrowserRouter>
          <div className='podcaster__container'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="podcast" element={<Podcast />}>
                <Route path=":podcastId" element={<Podcast />} />
              </Route>
              <Route path="podcast/:podcastId/episode" element={<Episode />}>
                <Route path=":episodeId" element={<Episode />} />
              </Route>
              <Route path="*" element={<Home />}/>
            </Routes>
          </div>
        </BrowserRouter>
      </PodcastsProvider>
    </AppContextProvider>
  );
}

export default App;
