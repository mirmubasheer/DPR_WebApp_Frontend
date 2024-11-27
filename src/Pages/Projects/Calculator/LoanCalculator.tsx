import React from 'react';
import {
  Box,
  Typography,
  Divider,
  Grid,
  Container,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Slider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import { SelectChangeEvent } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getProject } from '../../../api/services';
import { useQuery } from 'react-query';
import { Project } from '../ProjectInterface';

const LOAN_MIN = 100000; 
const LOAN_MAX = 500; // 5 Crore
const TENURE_MIN = 2;
const TENURE_MAX = 10;
const INTEREST_MIN = 7; // Minimum interest rate
const INTEREST_MAX = 15; // Maximum interest rate

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const LoanCalculator = () => {
    const { id } = useParams<{ id: string }>();
    const projectId = id ?? '';

    const {
        data: projectsData,
        isLoading: isProjectLoading,
        error: projectError,
    } = useQuery(["project", projectId], () => getProject(projectId), {
        enabled: !!projectId, 
    });

    const projectData:Project = projectsData?.data;
    const price = projectData?.sftPrice * projectData?.maxSize;



  const [loanVal, setLoanVal] = React.useState<number>(LOAN_MIN);
  const [tenureVal, setTenureVal] = React.useState<number>(TENURE_MIN);
  const [interestRate, setInterestRate] = React.useState<number>(INTEREST_MIN);
  const [selectedBank, setSelectedBank] = React.useState<string>('');

  
  const formatNumberIndian = (num: number) => {
    return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(num);
};

  const handleLoanChange = (_: Event, newValue: number | number[]) => {
    setLoanVal(newValue as number);
  };

  const handleTenureChange = (_: Event, newValue: number | number[]) => {
    setTenureVal(newValue as number);
  };

  const handleInterestChange = (_: Event, newValue: number | number[]) => {
    setInterestRate(newValue as number);
  };

  const handleBankChange = (event: SelectChangeEvent<string>) => {
    setSelectedBank(event.target.value as string);
  };

  const calculateEMI = () => {
    const principal = price; // Convert to actual amount
    const monthlyInterestRate = interestRate / (12 * 100);
    const tenureMonths = tenureVal * 12;

    const emi =
      (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureMonths)) /
      (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);

    return emi.toFixed(2);
  };

  const calculateTotalInterest = () => {
    const principal = price; 
    const compoundInterest = principal * Math.pow((1 + interestRate / 100), tenureVal) - principal;
    return compoundInterest.toFixed(2);
  };

  const getMonthlyBreakdown = () => {
    const principal = price; 
    const monthlyInterestRate = interestRate / (12 * 100);
    const tenureMonths = tenureVal * 12;
    const emi = parseFloat(calculateEMI());

    let remainingBalance = principal;
    let breakdown = [];

    for (let month = 1; month <= tenureMonths; month++) {
      const interestForMonth = remainingBalance * monthlyInterestRate;
      const principalForMonth = emi - interestForMonth;
      remainingBalance -= principalForMonth;

      breakdown.push({
        month,
        emi: emi.toFixed(2),
        interest: interestForMonth.toFixed(2),
        principal: principalForMonth.toFixed(2),
        balance: remainingBalance.toFixed(2),
      });
    }

    return breakdown;
  };

  const totalInterest = calculateTotalInterest();
  const processingFees = price * 0.01;

  const pieData = [
    { name: 'Principal', value: price, color: 'blue' },
    { name: 'Total Interest', value: parseFloat(totalInterest), color: 'orange' },
    { name: 'Processing Fees', value: processingFees, color: 'gray' },
  ];

  const monthlyBreakdown = getMonthlyBreakdown();

  return (
    <Box mt={5} mb={5}>
      <Container>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
            <Grid item xs={12}>
              <Item>
                <Grid container alignItems="center">
                  <Grid item xs={12} md={5} px={3}>
                    <Typography variant="h6">Home Loan EMI Calculator</Typography>
                    <Divider sx={{ my: 1.3 }} />

                    {/* Bank Selection */}
                    <Typography variant="body2" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                      Select Bank
                    </Typography>
                    <Select
                      value={selectedBank}
                      onChange={handleBankChange}
                      displayEmpty
                      sx={{
                        width: '100%',
                        height: "40px",
                        border: "1px solid #1212121A",
                        opacity: 1,
                        boxShadow: "0px 6px 14px #36408D08",
                        fontSize: "10px",
                        color: "#1D1D1D",
                        textAlign: 'left',
                        mb:2,
                      }}
                    >
                      <MenuItem value="" disabled>Select a bank</MenuItem>
                      <MenuItem value="PNB Housing Finance Limited">PNB Housing Finance Limited</MenuItem>
                      <MenuItem value="HDFC Bank">HDFC Bank</MenuItem>
                      <MenuItem value="ICICI Bank">ICICI Bank</MenuItem>
                    </Select>

                    {/* Loan Amount Slider */}
                    <Typography variant="body2" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                      Loan Amount (₹) {price}
                    </Typography>
                    <Slider
                      value={loanVal}
                      valueLabelDisplay="auto"
                      min={LOAN_MIN}
                      max={price}
                      onChange={handleLoanChange}
                      valueLabelFormat={(value) => `₹${formatNumberIndian(value * 1).toLocaleString()}`}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                      <Typography variant="body2" onClick={() => setLoanVal(LOAN_MIN)} sx={{ cursor: 'pointer' }}>
                        1L
                      </Typography>
                      <Typography variant="body2" onClick={() => setLoanVal(LOAN_MAX)} sx={{ cursor: 'pointer' }}>
                        ₹{price}
                      </Typography>
                    </Box>
                    <Typography variant="caption">
                      Selected Loan Amount: <strong>₹{(loanVal * 100000).toLocaleString()}</strong>
                    </Typography>

                    <Divider sx={{ my: 1.3 }} />
                    <Typography variant="caption" sx={{ fontSize: '10px', mt: 1 }}>
                      Selected Loan Amount: <strong>₹{loanVal.toLocaleString()}</strong>
                    </Typography>

                    {/* Tenure Slider */}
                    <Typography variant="body2" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                      Tenure (Years)
                    </Typography>
                    <Slider
                      value={tenureVal}
                      min={TENURE_MIN}
                      max={TENURE_MAX}
                      onChange={handleTenureChange}
                      valueLabelDisplay="auto"
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                      <Typography variant="body2" onClick={() => setTenureVal(TENURE_MIN)} sx={{ cursor: 'pointer' }}>
                        {TENURE_MIN} Years
                      </Typography>
                      <Typography variant="body2" onClick={() => setTenureVal(TENURE_MAX)} sx={{ cursor: 'pointer' }}>
                        {TENURE_MAX} Years
                      </Typography>
                    </Box>
                    <Typography variant="caption" sx={{ fontSize: '10px', mt: 1 }}>
                      Selected Tenure: <strong>{tenureVal} Years</strong>
                    </Typography>

                    {/* Interest Rate Slider */}
                    <Typography variant="body2" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                      Interest Rate (%)
                    </Typography>
                    <Slider
                      value={interestRate}
                      min={INTEREST_MIN}
                      max={INTEREST_MAX}
                      onChange={handleInterestChange}
                      valueLabelDisplay="auto"
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                      <Typography variant="body2" onClick={() => setInterestRate(INTEREST_MIN)} sx={{ cursor: 'pointer' }}>
                        {INTEREST_MIN}%
                      </Typography>
                      <Typography variant="body2" onClick={() => setInterestRate(INTEREST_MAX)} sx={{ cursor: 'pointer' }}>
                        {INTEREST_MAX}%
                      </Typography>
                    </Box>
                    <Typography variant="caption" sx={{ fontSize: '10px', mt: 1 }}>
                      Selected Interest Rate: <strong>{interestRate}%</strong>
                    </Typography>
                  </Grid>

                  {/* Loan Summary and Pie Chart */}
                  <Grid item xs={12} md={7} px={3}>
                    {/* Pie Chart */}
                    <Box mt={3} sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      flexDirection: 'column'
                    }}>
                      <Typography variant="h6">Loan Summary</Typography>
                      <PieChart width={200} height={200}>
                        <Pie
                          data={pieData}
                          innerRadius={40}
                          outerRadius={80}
                          fill="#8884d8"
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36} />
                      </PieChart>
                      <Typography variant="caption" sx={{ fontSize: '10px', mt: 4 }}>
                        Total Interest Payable: <strong>₹{totalInterest}</strong>
                      </Typography>
                      <Typography variant="caption" sx={{ fontSize: '10px', mt: 1 }}>
                        Processing Fees: <strong>₹{processingFees}</strong>
                      </Typography>
                      <Typography variant="caption" sx={{ fontSize: '10px', mt: 1 }}>
                        EMI: <strong>₹{calculateEMI()}</strong>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
          </Grid>
        </Box>

        {/* Monthly Breakdown Table */}
        <TableContainer component={Paper} sx={{ mt: 5 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: '600', color: '#333', fontSize: '12px', textAlign: 'center' }}>Month</TableCell>
                <TableCell sx={{ fontWeight: '600', color: '#333', fontSize: '12px', textAlign: 'center' }}>EMI</TableCell>
                <TableCell sx={{ fontWeight: '600', color: '#333', fontSize: '12px', textAlign: 'center' }}>Interest</TableCell>
                <TableCell sx={{ fontWeight: '600', color: '#333', fontSize: '12px', textAlign: 'center' }}>Principal</TableCell>
                <TableCell sx={{ fontWeight: '600', color: '#333', fontSize: '12px', textAlign: 'center' }}>Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {monthlyBreakdown.map((row) => (
                <TableRow key={row.month}>
                  <TableCell sx={{ fontWeight: '600', color: '#333', fontSize: '12px', textAlign: 'center' }}>{row.month}</TableCell>
                  <TableCell sx={{ fontSize: '12px', textAlign: 'center' }}>{row.emi}</TableCell>
                  <TableCell sx={{ fontSize: '12px', textAlign: 'center' }}>{row.interest}</TableCell>
                  <TableCell sx={{ fontSize: '12px', textAlign: 'center' }}>{row.principal}</TableCell>
                  <TableCell sx={{ fontSize: '12px', textAlign: 'center' }}>{row.balance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default LoanCalculator;
