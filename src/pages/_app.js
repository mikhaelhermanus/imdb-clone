import Header from "@/components/Header";
import "@/styles/globals.css";
import Providers  from "@/providers/Providers";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
export default function App({ Component, pageProps }) {
  return (
      <Providers>
        <Header />
        <Navbar/>
        <SearchBox/>
        <Component {...pageProps} />
      </Providers>
  );
}
