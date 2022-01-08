import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function ReleasedList (props) {
    
    const releasedMoviesStyles = {
        height: "350px",
        width: "auto",
        
    };

  return (
      <ImageList style={releasedMoviesStyles} cols="4" gap={32}>
      {props.moviesData.map((item) => (
          <ImageListItem  key={item.id}> 
          <img width="auto"
            src={`${item.poster_url}?w=248&fit=crop&auto=format`}
            srcSet={`${item.poster_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
                  title={ item.title }
                  subtitle={item.release_date}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}