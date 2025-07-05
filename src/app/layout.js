import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/animate.css';
import '../assets/css/magnific-popup.css';
import Script from 'next/script';
// import '../assets/css/style.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          
          {children}
        </div>
      </body>
    </html>
  );
}