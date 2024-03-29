import React from 'react';
import { useParams } from 'react-router-dom';
import { usePodcastDetail } from '../../context/podcastDetail';

const EpisodeDetail = () => {
  const { episodeId } = useParams();
  const { podcastEpisodes } = usePodcastDetail();

  let episodeDetail;

  podcastEpisodes?.forEach(element => {
    if(String(element.trackId) === String(episodeId)) {
      episodeDetail = element;
    }
  });

  const getDescription = (text) => ({ __html: text });
  
  return (
    <div className='episode-details__info'>
      <h2 className='episode-detail__title'>
        {episodeDetail?.trackName}
      </h2>
      <div 
        className='episode-detail__description' 
        dangerouslySetInnerHTML={getDescription(episodeDetail?.description)}
      />
      <audio 
        className='episode-detail__player'
        controls 
        preload="metadata" 
        title={episodeDetail?.trackName} 
        src={episodeDetail?.episodeUrl} 
      />
    </div>
  );
};

export default EpisodeDetail;
