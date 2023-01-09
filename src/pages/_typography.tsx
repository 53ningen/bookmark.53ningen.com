import { Paper, Stack, Typography } from '@mui/material'

interface HomeProps {}

export default function Home({}: HomeProps) {
  return (
    <Paper>
      <Stack spacing={2} p={2}>
        <Typography variant="h1">H1 Hello, World!</Typography>
        <Typography variant="h2">H2 Hello, World!</Typography>
        <Typography variant="h3">H3 Hello, World!</Typography>
        <Typography variant="h4">H4 Hello, World!</Typography>
        <Typography variant="h5">H5 Hello, World!</Typography>
        <Typography variant="h6">H6 Hello, World!</Typography>
        <Typography variant="body1">body1 Hello, World!</Typography>
        <Typography variant="body2">body2 Hello, World!</Typography>
        <Typography variant="button">button Hello, World!</Typography>
        <Typography variant="caption">caption Hello, World!</Typography>
        <Typography variant="inherit">inherit Hello, World!</Typography>
        <Typography variant="overline">overline Hello, World!</Typography>
        <Typography variant="subtitle1">subtitle1 Hello, World!</Typography>
        <Typography variant="subtitle2">subtitle2 Hello, World!</Typography>
      </Stack>
    </Paper>
  )
}
