// TestimonialCard.js
import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  Grid,
  Box,
  IconButton,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const testimonials = [
  {
    id: 1,
    logo: 'https://via.placeholder.com/150', // replace with the logo URL
    brand: 'Brand 1',
    content:
      'A reliable agency—it’s a bridge between brands and authentic content.',
    date: 'August 14, 2023',
    rating: 4.5,
  },
  {
    id: 2,
    logo: 'https://via.placeholder.com/150', // replace with the logo URL
    brand: 'Brand 2',
    content:
      'We absolutely love their work! The design is unique and the marketing feels so comfortable.',
    date: 'August 14, 2023',
    rating: 4.5,
  },
  {
    id: 3,
    logo: 'https://via.placeholder.com/150', // replace with the logo URL
    brand: 'Brand 2',
    content:
      'We absolutely love their work! The design is unique and the marketing feels so comfortable.',
    date: 'August 14, 2023',
    rating: 4.5,
  },
  {
    id: 1,
    logo: 'https://via.placeholder.com/150', // replace with the logo URL
    brand: 'Brand 1',
    content:
      'A reliable agency—it’s a bridge between brands and authentic content.',
    date: 'August 14, 2023',
    rating: 4.5,
  },
  {
    id: 2,
    logo: 'https://via.placeholder.com/150', // replace with the logo URL
    brand: 'Brand 2',
    content:
      'We absolutely love their work! The design is unique and the marketing feels so comfortable.',
    date: 'August 14, 2023',
    rating: 4.5,
  },
  {
    id: 3,
    logo: 'https://via.placeholder.com/150', // replace with the logo URL
    brand: 'Brand 2',
    content:
      'We absolutely love their work! The design is unique and the marketing feels so comfortable.',
    date: 'August 14, 2023',
    rating: 4.5,
  },
  // Add more testimonials as needed
];

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <StarIcon key={i} color="#FFC633" />
        ))}
        {halfStar && <StarHalfIcon color="#FFC633" />}
      </>
    );
  };

  return (
    <Card sx={{ m: 2 }}>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>            
           <Box display="flex" alignItems="center" m={2} sx={{color: '#FFC633'}}>          
            {renderStars(testimonial.rating)}
           </Box>
           <Box>
           <IconButton>
           <MoreHorizIcon />
           </IconButton>
           </Box>
        </Box>
      <CardHeader
        avatar={<Avatar src={testimonial.logo} alt={testimonial.brand} />}
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreHorizIcon />
        //   </IconButton>
        // }
        title={testimonial.brand}
      />
      <CardContent>
        
        <Typography variant="body2" color="textSecondary" textAlign={'justify'} >
          {testimonial.content}
        </Typography>
        <Typography variant="caption" display="block" mt={2} textAlign={'justify'}>
          Posted on {testimonial.date}
        </Typography>
      </CardContent>
    </Card>
  );
};

const TestimonialGrid = () => {
  return (
    <>
    <h3>Testimonals</h3>
    <Grid container spacing={0} sx={{ p: 2 }}>
      {testimonials.map((testimonial) => (
        <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
          <TestimonialCard testimonial={testimonial} />
        </Grid>
      ))}
    </Grid>

    </>
  );
};

export default TestimonialGrid;
