import React, { useState } from 'react';
import { Box, Button, Typography, FormControl } from '@mui/material';
import CustomInput from '../../../../components/Inputs/CustomInput';
import { Project } from '../../ProjectInterface';
import { useMutation, useQueryClient } from 'react-query';
import { AddReview as addReviewApi } from '../../../../api/services';
import { toast } from 'react-toastify';

interface AddReviewProps {
    projectData: Project;
}

const AddReview: React.FC<AddReviewProps> = ({ projectData }) => {
    const queryClient = useQueryClient();

    // Form state management
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rating: 0 as number | string,  // Allow string temporarily for input
        message: ''
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const numericValue = parseFloat(value);
        // Only update if the value is a valid number
        if (!isNaN(numericValue) && numericValue >= 0 && numericValue <= 5) {
            setFormData((prevData) => ({ ...prevData, rating: numericValue }));
        }
    };

    // useMutation hook for submitting the review
    const { mutate, isLoading } = useMutation(
        () => addReviewApi(projectData.projectId, formData),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('project');
                toast.success('Review submitted successfully!');
                setFormData({ name: '', email: '', rating: 0, message: '' });
            },
            onError: (error: any) => {
                console.error('Error submitting review:', error);
                toast.error('Error submitting review');
            },
        }
    );

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        mutate();
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f9f9f9',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                width: '100%',
                marginBottom: '20px',
                py: 2,
            }}
        >
            <Typography variant="h5" component="h2" gutterBottom>
                Leave A Review
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{ width: '90%' }}>
                {/* Name Field */}
                <CustomInput
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    fullWidth
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                />
                
                {/* Email Field */}
                <CustomInput
                    id="email"
                    name="email"
                    placeholder="Email"
                    fullWidth
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    sx={{ marginTop: 2 }}
                />

                {/* Rating Field - Custom Decimal Input */}
                <FormControl fullWidth sx={{ marginTop: 2 }}>
                    <CustomInput
                        id="rating"
                        name="rating"
                        type="number"
                        placeholder="Rating (0-5)"
                        inputProps={{ step: "0.1", min: "0", max: "5" }}
                        fullWidth
                        required
                        value={formData.rating}
                        onChange={handleRatingChange}
                    />
                </FormControl>

                {/* Review Field */}
                <CustomInput
                    id="message"
                    name="message"
                    placeholder="Write a review"
                    multiline
                    rows={4}
                    fullWidth
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    sx={{ marginTop: 2 }}
                />

                {/* Submit Button */}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={isLoading}
                    sx={{ marginTop: 2 }}
                >
                    {isLoading ? 'Submitting...' : 'Submit Review'}
                </Button>
            </Box>
        </Box>
    );
};

export default AddReview;
