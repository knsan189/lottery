import {
  Container,
  Grid,
  Button,
  Paper,
  Stack,
  Box,
  Typography,
  Card,
  Chip,
  CardContent,
  CardHeader,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { LOTTERY_NUMBERS } from "./config/const";
import LotteryNumer from "./components/LotteryNumer";

function App() {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [results, setResults] = useState<number[][]>([]);

  const onClickNumber = (num: number) => {
    if (selectedNumbers.includes(num)) {
      setSelectedNumbers((prev) => prev.filter((n) => n !== num));
    } else {
      setSelectedNumbers((prev) => [...prev, num]);
    }
  };

  const getRandomNumbers = () => {
    const filterdNumbers = LOTTERY_NUMBERS.filter(
      (num) => !selectedNumbers.includes(num)
    ).sort(() => Math.random() - 0.5);
    const result = [];

    for (let i = 0; i < 5; i += 1) {
      result.push(filterdNumbers[i]);
    }
    return result;
  };

  const onSubmit = () => {
    const newResults: number[][] = [];
    for (let i = 0; i < 5; i += 1) {
      newResults.push(getRandomNumbers());
    }
    setResults(newResults);
  };

  return (
    <Container maxWidth="md" sx={{ py: 2 }}>
      <Stack spacing={2}>
        <Box>
          <Typography variant="h5" gutterBottom>
            번호 선택
          </Typography>
          <Paper>
            <Grid container>
              {LOTTERY_NUMBERS.map((number) => (
                <Grid item key={number} xs={2.4}>
                  <LotteryNumer
                    number={number}
                    active={selectedNumbers.includes(number)}
                    onClick={onClickNumber}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Button variant="outlined" onClick={onSubmit}>
            번호 추출하기
          </Button>
        </Box>
        <Box>
          <Typography variant="h5" gutterBottom>
            번호 추첨 결과
          </Typography>
          {results.map((result) => (
            <Card>
              <CardHeader title="결과지" />
              <Divider />
              <CardContent>
                {result.map((num) => (
                  <Chip label={num} color="primary" sx={{ mr: 1 }} />
                ))}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
