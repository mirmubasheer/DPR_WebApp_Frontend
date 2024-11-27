import React from 'react';
import { Box, Typography, Grid, Avatar, Divider, Button, Rating } from '@mui/material';
import { formatDistanceToNow, format } from 'date-fns';
import { Project } from '../../ProjectInterface';
import { user_icon } from '../../../../assets';

interface Review {
    name: string;
    createdAt: string;
    rating: number;
    message: string;
}

interface ReviewsProps {
    projectData: Project;
}

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const differenceInDays = (new Date().getTime() - date.getTime()) / (1000 * 3600 * 24);
    return differenceInDays > 10 ? format(date, 'yyyy-MM-dd') : formatDistanceToNow(date, { addSuffix: true });
};

const Reviews: React.FC<ReviewsProps> = ({ projectData }) => {
    const reviews = projectData?.reviews || [];

    return (
        <Box 
            sx={{ 
                padding: '20px', 
                backgroundColor: '#f9f9f9', 
                borderRadius: '8px', 
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)', 
                marginBottom: '20px'
            }}
        >
            {/* Header */}
            <Grid container alignItems="center" justifyContent="space-between" sx={{ marginBottom: 2 }}>
                <Grid item>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
                        Project Reviews
                    </Typography>
                </Grid>
                <Grid item>
                    <Button variant="outlined" size="small" sx={{ textTransform: 'none' }}>
                        Sort by
                    </Button>
                </Grid>
            </Grid>
            <Divider sx={{ marginBottom: 3 }} />

            {/* Reviews List */}
            {reviews.map((review, index) => (
                <Box
                    key={index}
                    sx={{
                        marginBottom: 3,
                        padding: 2,
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    }}
                >
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} sm={2} md={1}>
                            <Avatar 
                                alt={review.name} 
                                src={user_icon} 
                                sx={{ width: 50, height: 50, backgroundColor: '#1976d2', color: '#fff' }}
                            >
                                {review.name.split(' ').map((name) => name[0]).join('')}
                            </Avatar>
                        </Grid>
                        <Grid item xs={12} sm={8} md={9}>
                            <Typography variant="body1" sx={{ fontWeight: 600, color: '#333' }}>
                                {review.name}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                                {formatDate(review.createdAt)}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} textAlign="right">
                            <Typography variant="body2" color="primary" sx={{ fontWeight: 600 }}>
                                {review.rating.toFixed(1)}
                            </Typography>
                            <Rating 
                                value={review.rating} 
                                precision={0.1} 
                                readOnly 
                                size="small" 
                                sx={{ color: '#ffb400' }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2" sx={{ marginTop: 1, color: '#555' }}>
                                {review.message}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            ))}
        </Box>
    );
};

export default Reviews;
