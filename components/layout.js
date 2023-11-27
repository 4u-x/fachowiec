// export default function RootLayout(props) {
//     const { children } = props;
//     return (
//       <html lang="en">
//         <body>{children}</body>
//       </html>
//     )
//   }
  
//   // app/page.js - no directives needed
//   import Box from '@mui/material/Box';
//   import Card from '@mui/material/Card';
//   import Container from '@mui/material/Container';
//   import Typography from '@mui/material/Typography';
  
//   export default function Home() {
//     return (
//       <main>
//         <Container>
//           <Box>
//             <Card>
//               <Typography variant="h2">Hello World ~</Typography>
//             </Card>
//           </Box>
//         </Container>
//       </main>
//     );
//   }
//   export default function RootLayout(props) {
//     const { children } = props;
//     return (
//       <html lang="en">
//         <body>
//           <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
//         </body>
//       </html>
//     );
//   }