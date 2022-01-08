import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function imageList (props) {
    
    const upcomingMoviesStyles = {
        display: 'flex',
        flexDirection: 'row',
        height: "250px",
        overflowY: "hidden",
        width: "auto",
        overflowX: "scroll",
    };

  return (
      <ImageList style={upcomingMoviesStyles} >
      {props.moviesData.map((item) => (
          <ImageListItem  key={item.id}>
          <img width="auto"
            src={`${item.poster_url}?w=248&fit=crop&auto=format`}
            srcSet={`${item.poster_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

