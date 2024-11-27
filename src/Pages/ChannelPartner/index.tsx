import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  DialogContent,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { MdArrowOutward } from 'react-icons/md';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import CustomInput from '../../components/Inputs/CustomInput';
import TopHeader from '../About/TopHeader';
import aboutbanner from '../../assets/images/AboutUss.png';
import { ChannelPartnerImages } from "../../assets"; 
import Slider from "react-slick";
import { AddchannelPartner } from '../../api/services';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { TextFieldProps } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import FileUploadContainer from '../../components/FileUploadContainer/FileUploadContainer';


// Yup validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(/^[A-Za-z\s]+$/, 'Name can only contain letters and spaces'),
  phoneNumber: Yup.string()
    .required('Phone Number is required')
    .matches(/^\d{10}$/, 'Phone Number must be exactly 10 digits'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  organization: Yup.string()
    .required('Organization is required')
    .matches(/^[A-Za-z0-9\s]+$/, 'Organization can contain only letters, numbers, and spaces'),
  address: Yup.string()
    .required('Address is required')
    .matches(/^[A-Za-z0-9\s,]+$/, 'Address can only contain letters, numbers, spaces, and commas'),
  dateOfBirth: Yup.string()
    .required('Date Of Birth is required'),
  aadharNumber: Yup.string()
    .required('Aadhar Number is required')
    .matches(/^\d{4} \d{4} \d{4}$/, 'Aadhar Number must be the format XXXX XXXX XXXX'),
  gstNumber: Yup.string()
    .required('GST Number is required')
    .matches(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}$/, 'Invalid GST Number format'),
  panNumber: Yup.string()
    .required('PAN Number is required')
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN Number format'),
  organizationType: Yup.string()
    .required('Organization Type is required'),
  image: Yup.string()
    .required('Image is required'),
  AadharCard: Yup.string()
    .required('Aadhar Card is required'),


});

interface FormData {
  name: string;
  phoneNumber: string;
  email: string;
  organization: string;
  address: string;
  dateOfBirth: string;
  aadharNumber: string;
  gstNumber: string;
  panNumber: string;
  organizationType: string;
  image: string ;
  AadharCard: string;
}


const ChannelPartner: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue, // Add setValue for form handling
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      phoneNumber: '',
      email: '',
      organization: '',
      address: '',
      dateOfBirth: dayjs().format('YYYY-MM-DD'),
      aadharNumber: '',
      gstNumber: '',
      panNumber: '',
      organizationType: '',
      image: '', 
      AadharCard : '',
    },
  });

  const [imageUploaded, setImageUploaded] = useState(false); // Track image upload status

  

  const mutation = useMutation({
    mutationFn: (newFormData: FormData) => AddchannelPartner(newFormData),
    onSuccess: () => {
      toast.success('Form submitted successfully!');
    },
    onError: (error: any) => {
      toast.error(`Error submitting form: ${error}`);
    },
  });

  const onSubmit = (data: FormData) => {
    mutation.mutate(data);
  };

  // Custom handler to format the Aadhar number
  const formatAadharNumber = (value: string = '') => {
    const digits = value.replace(/\D/g, '');
    const limitedDigits = digits.slice(0, 12);
    const formatted = limitedDigits.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
    return formatted;
  };
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box>
      <TopHeader value="Channel Partner Registration" backgroundImage={aboutbanner} />
      <Box sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 }, py: 4, bgcolor: 'transparent' }}>
        <Container>
          <Box mt={8} pb={8}>
            <Typography variant="h4" component="div" mt={3} sx={{ fontWeight: '800', fontSize: '10px' }}>
              CHANNEL PARTNER REGISTRATION
            </Typography>
            <Typography variant="caption" component="div" mt={1}>
              Please Enter Your Company Information below to Register It with Our Systems
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8} sx={{ textAlign: 'center', boxSizing: 'border-box' }}>
                <DialogContent>
                  <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    {/* Name Field */}
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                      <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                          <CustomInput
                            required
                            id="name-input"
                            placeholder="Name"
                            {...field}
                            error={!!errors.name}
                          />
                        )}
                      />
                      <Typography color="error">{errors.name?.message}</Typography>
                    </FormControl>

                    <Grid container spacing={2}>

                    <Grid item xs={12} md={6}>
                        {/* Email Field */}
                        <FormControl fullWidth sx={{ marginBottom: 2 }}>
                          <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                              <CustomInput
                                required
                                id="email-input"
                                placeholder="Email"
                                {...field}
                                error={!!errors.email}
                              />
                            )}
                          />
                          <Typography color="error">{errors.email?.message}</Typography>
                        </FormControl>
                      </Grid>


                      <Grid item xs={12} md={6}>
                        {/* Phone Number Field */}
                        <FormControl fullWidth sx={{ marginBottom: 2 }}>
                          <Controller
                            name="phoneNumber"
                            control={control}
                            render={({ field }) => (
                              <CustomInput
                                required
                                id="phone-input"
                                placeholder="Phone Number"
                                {...field}
                                error={!!errors.phoneNumber}
                              />
                            )}
                          />
                          <Typography color="error">{errors.phoneNumber?.message}</Typography>
                        </FormControl>
                      </Grid>

                     
                    </Grid>

                   

                    {/* Address Field */}
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                      <Controller
                        name="address"
                        control={control}
                        render={({ field }) => (
                          <CustomInput
                            required
                            id="address-input"
                            placeholder="Address"
                            multiline
                            rows={3}
                            {...field}
                            error={!!errors.address}
                          />
                        )}
                      />
                      <Typography color="error">{errors.address?.message}</Typography>
                    </FormControl>





                      {/* Date of Birth Field */}
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                      <Controller
                        name="dateOfBirth"
                        control={control}
                        defaultValue={dayjs().format('YYYY-MM-DD')}
                        render={({ field }) => (
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              label="Date of Birth"
                              value={field.value ? dayjs(field.value) : null}
                              onChange={(newValue: Dayjs | null) => {
                                field.onChange(newValue ? newValue.format('YYYY-MM-DD') : '');
                              }}
                              slotProps={{
                                textField: {
                                  error: !!errors.dateOfBirth,
                                  helperText: errors.dateOfBirth?.message,
                                }
                              }}
                            />

                          </LocalizationProvider>
                  )}
                />
                      <Typography color="error">{errors.dateOfBirth?.message}</Typography>
                    </FormControl>

                    <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        {/* Aadhar Number Field */}
                        <FormControl fullWidth sx={{ marginBottom: 2 }}>
                          <Controller
                            name="aadharNumber"
                            control={control}
                            render={({ field }) => (
                              <CustomInput
                                required
                                id="aadhar-input"
                                placeholder="Aadhar Number"
                                value={formatAadharNumber(field.value)}
                                onChange={(e) => {
                                  const formattedValue = formatAadharNumber(e.target.value);
                                  field.onChange(formattedValue);
                                }}
                                error={!!errors.aadharNumber}
                              />
                            )}
                          />
                          <Typography color="error">{errors.aadharNumber?.message}</Typography>
                        </FormControl>
                      </Grid>


                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth sx={{ marginBottom: 2 }}>
                          <Controller
                            name="panNumber"
                            control={control}
                            render={({ field }) => (
                              <CustomInput
                                required
                                id="pan-input"
                                placeholder="PAN Number"
                                {...field}
                                error={!!errors.panNumber}
                              />
                            )}
                          />
                          <Typography color="error">{errors.panNumber?.message}</Typography>
                        </FormControl>
                     
                  </Grid>
                  </Grid>


                    
                  <Grid container spacing={2}>

                      <Grid item xs={12} md={6}>


                      <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <Typography variant="body2" sx={{ fontWeight: '550', fontSize: '10px' , textAlign: 'left', color: '#24272C90' }}>
                          Passport Size Photo
                        </Typography>
                      <FileUploadContainer
                          onFileSelect={(url) => {
                            setValue('image', url || ''); 
                            setImageUploaded(!!url); 
                          }}
                          foldername="channelpartners"
                          existingImage={''}
                          onDelete={() => {
                            setValue('image', ''); 
                            setImageUploaded(false); 
                          }}
                        />
                      </FormControl>
                      </Grid>


                      <Grid item xs={12} md={6}>

                      <FormControl fullWidth sx={{ marginBottom: 2 }}>
                      <Typography variant="body2" sx={{ fontWeight: '550', fontSize: '10px' , textAlign: 'left', color: '#24272C90' }}>
                          Aadhar Card
                        </Typography>
                      <FileUploadContainer
                          onFileSelect={(url) => {
                            setValue('AadharCard', url || ''); 
                            setImageUploaded(!!url); 
                          }}
                          foldername="channelpartners"
                          existingImage={''}
                          onDelete={() => {
                            setValue('AadharCard', ''); 
                            setImageUploaded(false); 
                          }}
                        />
                      </FormControl>
                      </Grid>

                      </Grid>

                      <Grid container spacing={2}>


                      <Grid item xs={12} md={6}>
                      <FormControl fullWidth sx={{ marginBottom: 2 }}>
                      <Controller
                        name="organization"
                        control={control}
                        render={({ field }) => (
                          <CustomInput
                            required
                            id="organization-input"
                            placeholder="Organization Name"
                            {...field}
                            error={!!errors.organization}
                          />
                        )}
                      />
                      <Typography color="error">{errors.organization?.message}</Typography>
                    </FormControl>
                      </Grid>


                      <Grid item xs={12} md={6}>
                        {/* GST Number Field */}
                        <FormControl fullWidth sx={{ marginBottom: 2 }}>
                          <Controller
                            name="gstNumber"
                            control={control}
                            render={({ field }) => (
                              <CustomInput
                                required
                                id="gst-input"
                                placeholder="GST Number"
                                {...field}
                                error={!!errors.gstNumber}
                              />
                            )}
                          />
                          <Typography color="error">{errors.gstNumber?.message}</Typography>
                        </FormControl>
                      </Grid>
                    </Grid>


                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginRight: 2 }}>
                        <Typography variant="body2" sx={{ textAlign: 'left', fontWeight: '550',ml:1  }}>Organization Type</Typography>
                      </Box>

                    <FormControl component="fieldset" fullWidth sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                      
                      <Controller
                        name="organizationType"
                        control={control}
                        render={({ field }) => (
                          <RadioGroup
                            row
                            aria-labelledby="organization-type-label"
                            {...field}
                            onChange={(e) => field.onChange(e.target.value)}
                            sx={{ display: 'flex', alignItems: 'center' }}
                          >
                            <Radio value="individual" />
                            <Typography variant="body2" sx={{ marginRight: 2 }}>Individual</Typography>

                            <Radio value="proprietorship" />
                            <Typography variant="body2" sx={{ marginRight: 2 }}>Proprietorship</Typography>

                            <Radio value="limited company" />
                            <Typography variant="body2" sx={{ marginRight: 2 }}>Limited Company</Typography>

                            <Radio value="partnership" />
                            <Typography variant="body2">Partnership</Typography>
                          </RadioGroup>
                        )}
                      />
                      {errors.organizationType && (
                        <FormHelperText error sx={{ marginLeft: 2 }}>
                          {errors.organizationType.message}
                        </FormHelperText>
                      )}
                    </FormControl>




                    {/* <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      endIcon={mutation.isLoading ? <CircularProgress size={20} color="inherit" /> : <MdArrowOutward />}
                      disabled={mutation.isLoading}
                      sx={{ mt: 4, position: 'relative' }}
                    >
                      {mutation.isLoading ? 'Submitting...' : 'Submit'}
                    </Button> */}


                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      endIcon={<MdArrowOutward />}
                      disabled={mutation.isLoading}
                      sx={{ mt: 4 }}
                    >
                      {mutation.isLoading ? 'Submitting...' : 'Submit'}
                    </Button>
                  </Box>
                </DialogContent>
              </Grid>
              {/* Slider Section */}
              <Grid item xs={12} md={4} mt={6}>
                <Slider {...settings}>
                  {Object.values(ChannelPartnerImages).map((logo: string, index: number) => (
                    <Box key={index} style={{}}>
                      <img src={logo} alt={`Logo ${index + 1}`} style={{ maxWidth: '100%', height: 'auto', borderRadius: '20px 0 20px 20px',
                      clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 0 100%)'}} />
                    </Box>
                  ))}
                </Slider>
            </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ChannelPartner;
