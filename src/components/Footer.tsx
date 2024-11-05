import Link from 'next/link';

interface FooterProps {
    logoSrc?: string; // Optional custom logo source
    socialMediaLinks: {
      facebook?: string;
      twitter?: string;
      instagram?: string;
      // Add other social media links as needed
    };
    additionalLinks?: {
      link1?: {
        href: string;
        text: string;
      };
      link2?: {
        href: string;
        text: string;
      };
      // Add more links as needed
    };
    textColor?: string;
    backgroundColor?: string;
    fontFamily?: string;
    // Add other custom props as required
  }
  

  const Footer: React.FC<FooterProps> = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   
   gap-8">
            <div className="flex   
   flex-col">
              <h3 className="text-lg font-bold mb-4">Pages</h3>
              <Link href="/all-products" className="hover:underline">
                All Products
              </Link>
              <Link href="/studio" className="hover:underline">
                Studio
              </Link>
              <Link href="/clients" className="hover:underline">
                Clients
              </Link>
              <Link href="/pricing" className="hover:underline">
                Pricing
              </Link>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-4">Socials</h3>
              <a href="https://www.facebook.com/" className="hover:underline">
                Facebook
              </a>
              <a href="https://www.instagram.com/" className="hover:underline">
                Instagram
              </a>
              <a href="https://twitter.com/" className="hover:underline">
                Twitter
              </a>
              <a href="https://www.linkedin.com/" className="hover:underline">
                LinkedIn
              </a>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:underline">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:underline">
                Cookie Policy
              </Link>
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-bold mb-4">Register</h3>
              <Link href="/register" className="hover:underline">
                Sign Up
              </Link>
              <Link href="/login" className="hover:underline">
                Login
              </Link>
              <Link href="/forgot-password" className="hover:underline">
                Forgot Password
              </Link>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-sm">© Copyright DevStudios 2024. All rights reserved.</p>
            <h2 className="text-2xl font-bold mt-4">DevStudio</h2>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;